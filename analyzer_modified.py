import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
from datetime import datetime, timedelta
import os
import time
from polygon import RESTClient
import pytz
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry
# import MetaTrader5 as mt5
from mplfinance.original_flavor import candlestick_ohlc
from mpl_toolkits.axes_grid1 import make_axes_locatable
import re
import json

# Polygon API key
API_KEY = os.environ.get("POLYGON_API_KEY", "f8Oowzm4TdXsQjxOOlH7C1_2xB1dxNSB")

# Initialize Polygon RESTClient
client = RESTClient(api_key=API_KEY)

# Retry strategy to handle 429 errors
retry_strategy = Retry(
    total=2,
    backoff_factor=2,
    status_forcelist=[429, 500, 502, 503, 504],
    allowed_methods=["GET"]
)
adapter = HTTPAdapter(max_retries=retry_strategy)
http = requests.Session()
http.mount("https://", adapter)

# # Initialize MT5 connection
# if not mt5.initialize():
#     print("MT5 initialization failed")
#     mt5.shutdown()

def estimate_typical_spread(symbol):
    major_fx = {
        "EURUSD.sd": 0.00010, "USDJPY.sd": 0.00010, "GBPUSD.sd": 0.00015,
        "USDCHF.sd": 0.00015, "AUDUSD.sd": 0.00015, "USDCAD.sd": 0.00015
    }
    minor_fx = {
        "EURGBP.sd": 0.00020, "EURJPY.sd": 0.00020, "GBPJPY.sd": 0.00025,
        "EURCHF.sd": 0.00025, "AUDJPY.sd": 0.00020, "NZDUSD.sd": 0.00020
    }

    if symbol in major_fx:
        return major_fx[symbol]
    elif symbol in minor_fx:
        return minor_fx[symbol]
    else:
        return 0.00030  # Default to 3 pips

def get_current_spread(symbol):
    # As MT5 is not available, we will always use the estimated typical spread.
    return estimate_typical_spread(symbol)

def fetch_data(symbol, start_time, end_time):
    if symbol == "USOILRoll":
        # Convert to UTC for MT5
        start_time_utc = start_time.astimezone(pytz.UTC)

        end_time_utc = end_time.astimezone(pytz.UTC)

        rates = mt5.copy_rates_range(symbol, mt5.TIMEFRAME_M1, start_time_utc, end_time_utc)
        df = pd.DataFrame(rates)
        df['time'] = pd.to_datetime(df['time'], unit='s', utc=True)

        # Add volume column if it doesn't exist
        if 'volume' not in df.columns:
            df['volume'] = 0

        df = calculate_atr(df)
        return df
    else:
        # Fetch data from Polygon for other symbols
        api_symbol = symbol
        aggs = []
        retry_attempts = 0
        current_date = start_time.astimezone(pytz.UTC).date()
        end_date = end_time.astimezone(pytz.UTC).date()

        while current_date <= end_date and retry_attempts < 10:
            try:
                for a in client.list_aggs(ticker=api_symbol, multiplier=1, timespan="minute",
                                          from_=current_date.strftime('%Y-%m-%d'),
                                          to=(current_date + timedelta(days=1)).strftime('%Y-%m-%d'),
                                          limit=50000):
                    aggs.append(a)

                current_date += timedelta(days=1)
                retry_attempts = 0
            except Exception as e:
                print(f"Error fetching data for {api_symbol} on {current_date}: {e}")
                if '429' in str(e):
                    retry_attempts += 1
                    sleep_time = 2 ** retry_attempts
                    print(f"Retrying in {sleep_time} seconds...")
                    time.sleep(sleep_time)
                else:
                    break

        if not aggs:
            print(f"No OHLC data available for {symbol}")
            return None

        df = pd.DataFrame([{
            'time': pd.to_datetime(agg.timestamp, unit='ms', utc=True),
            'open': agg.open,
            'high': agg.high,
            'low': agg.low,
            'close': agg.close,
            'volume': getattr(agg, 'volume', 0)  # Use 0 if volume doesn't exist
        } for agg in aggs])

        df = df[(df['time'] >= start_time.astimezone(pytz.UTC)) &
                (df['time'] <= end_time.astimezone(pytz.UTC))]
        df.sort_values('time', inplace=True)
        df = calculate_atr(df)

        return df

def calculate_atr(df, period=14):
    df['tr1'] = df['high'] - df['low']
    df['tr2'] = (df['high'] - df['close'].shift()).abs()
    df['tr3'] = (df['low'] - df['close'].shift()).abs()
    df['tr'] = df[['tr1', 'tr2', 'tr3']].max(axis=1)
    df['atr'] = df['tr'].rolling(window=period).mean()
    return df

def parse_excel_input(excel_input):
    """
    Parses the quasi-CSV input data. It's more like a report format than a CSV.
    This function is designed to be robust against empty lines and formatting variations.
    """
    lines = excel_input.strip().split('\n')
    events = []
    event_details = {}  # Using a dict to store details per event name

    current_event_name = None

    for line in lines:
        if not line.strip():
            continue

        # The file is comma-separated
        parts = line.split(',')

        if line.startswith('Event,'):
            if len(parts) > 1:
                current_event_name = parts[1].strip()
                if current_event_name not in event_details:
                    events.append({'name': current_event_name})
                    event_details[current_event_name] = {
                        'name': current_event_name,
                        'symbols': {},
                        'time_gmt': None,
                        'history': []
                    }
        elif current_event_name: # Only process if we are under an event
            if line.startswith('Actual:'):
                if len(parts) > 1:
                    event_details[current_event_name]['symbols']['polygon'] = parts[-1].strip()
            elif line.startswith('Forecast:'):
                if len(parts) > 1:
                    event_details[current_event_name]['symbols']['mt5'] = parts[-1].strip()
            elif line.startswith('Time (GMT):'):
                if len(parts) > 1:
                    event_details[current_event_name]['time_gmt'] = parts[1].strip()
            elif re.match(r'\d{2}-\w{3}-\d{2}', line):
                if len(parts) >= 5:
                    date_str = parts[0].strip()
                    actual = parts[1].strip().replace('%', '') or "NA"
                    forecast = parts[2].strip().replace('%', '') or "NA"
                    previous = parts[3].strip().replace('%', '') or "NA"
                    time_str = parts[4].strip()

                    event_details[current_event_name]['history'].append({
                        'date': date_str,
                        'actual': actual,
                        'forecast': forecast,
                        'previous': previous,
                        'time': time_str
                    })

    # Now, we need to transform this into the format the rest of the script expects.
    date_time_inputs = {}
    event_data_list = {}
    event_symbols = {}

    for event_name, details in event_details.items():
        event_symbols[event_name] = details.get('symbols', {})
        for record in details.get('history', []):
            try:
                date = datetime.strptime(record['date'], '%d-%b-%y').strftime('%Y-%m-%d')
                if date not in event_data_list:
                    event_data_list[date] = []

                event_data_list[date].append({
                    "name": event_name,
                    "actual": record['actual'],
                    "forecast": record['forecast'],
                    "previous": record['previous'],
                    "time": record['time']
                })

                if date not in date_time_inputs:
                     date_time_inputs[date] = {
                        "date": date,
                        "event": details.get('time_gmt', '12:00') + "3:00", # Fallback time
                    }
            except (ValueError, KeyError):
                print(f"Warning: Could not parse record for event {event_name} on date {record.get('date', 'N/A')}. Skipping.")
                continue

    return date_time_inputs, event_data_list, events, event_symbols

# This list will hold all the data to be outputted as JSON
output_data = []

def plot_ohlc(df, symbol, event_name, event_time, event_data, atr_multiple, spread, atr_period=14,
              is_last_chart=False, event_summary=None, start_time=None, end_time=None):
    fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(14.5, 9),
                                   gridspec_kw={'height_ratios': [4, 1]}, sharex=True)

    df['time_num'] = mdates.date2num(df['time'])
    ohlc = df[['time_num', 'open', 'high', 'low', 'close']].values

    plt.style.use('ggplot')

    candlestick_ohlc(ax1, ohlc, width=0.0004, colorup='green', colordown='red')

    ax1.xaxis.set_major_formatter(mdates.DateFormatter('%H:%M'))
    plt.setp(ax1.get_xticklabels(), rotation=45, ha='right')

    closest_index = (df['time'] - event_time).abs().idxmin()
    closest_time = df.loc[closest_index, 'time']
    event_price = df.loc[closest_index, 'open']

    ax1.plot(closest_time, event_price, 'X', color='red', markersize=10, label='Event Time')

    atr_value = df.loc[closest_index, 'atr']
    volatility_unit = atr_value * atr_multiple + spread

    for i in range(1, 6):
        upper_range = event_price + i * volatility_unit
        lower_range = event_price - i * volatility_unit
        ax1.axhline(upper_range, color='blue', linestyle='--', label=f'+{i} Volatility Unit' if i == 1 else "")
        ax1.axhline(lower_range, color='orange', linestyle='--', label=f'-{i} Volatility Unit' if i == 1 else "")

    post_event_df = df[df['time'] >= event_time]
    max_price = post_event_df['high'].max()
    min_price = post_event_df['low'].min()
    max_movement = max_price - event_price
    min_movement = event_price - min_price

    if not post_event_df[post_event_df['high'] == max_price].empty:
        max_time = post_event_df.loc[post_event_df['high'] == max_price, 'time'].iloc[0]
        ax1.plot(max_time, max_price, 'gx', markersize=10, label='Max Peak')

    if not post_event_df[post_event_df['low'] == min_price].empty:
        min_time = post_event_df.loc[post_event_df['low'] == min_price, 'time'].iloc[0]
        ax1.plot(min_time, min_price, 'rx', markersize=10, label='Min Peak')

    pre_atr_df = df[df['time'] < event_time].iloc[-(atr_period*2):-atr_period]
    pre_atr_volatility = pre_atr_df['high'].max() - pre_atr_df['low'].min()

    # Only plot volume if it's not all zeros
    if df['volume'].any():
        volume_color = 'blue'
        volume_alpha = 0.3
        ax2.bar(df['time'], df['volume'], width=0.0004, color=volume_color, alpha=volume_alpha)
        ax2.set_ylabel('Volume')
    else:
        ax2.set_visible(False)
        plt.subplots_adjust(bottom=0.2)  # Adjust bottom margin when volume is hidden

    info_text = (
        f'ATR: {atr_value:.4f}\n'
        f'Spread: {spread:.5f}\n'
        f'Pre-ATR Volatility: {pre_atr_volatility:.4f}\n'
        f'\n'
        f'Volatility Unit (ATR*{atr_multiple}+spread): {volatility_unit:.4f}\n'
        f'Max Movement: {max_movement/volatility_unit:.2f}x\n'
        f'Min Movement: {min_movement/volatility_unit:.2f}x'
    )

    if is_last_chart and event_summary and event_summary['Avg Volatility Unit'] > 0:
        info_text += (
            f'\n\nEvent Summary:\n'
            f'Avg Volatility Unit: {event_summary["Avg Volatility Unit"]:.4f}\n'
            f'Avg Max Movement: {event_summary["Avg Max Movement"]:.2f}x\n'
            f'Avg Min Movement: {event_summary["Avg Min Movement"]:.2f}x\n'
            f'Avg Pre-ATR Volatility: {event_summary["Avg Pre-ATR Volatility"]:.4f}'
        )

    ax1.text(1.01, 0.5, info_text, transform=ax1.transAxes, ha='left', va='center', fontsize=9)

    if start_time and end_time:
        ax1.set_xlim(mdates.date2num(start_time), mdates.date2num(end_time))

    divider = make_axes_locatable(ax2)
    ax_event = divider.append_axes("bottom", size="15%", pad=0.1, sharex=ax1)
    ax_event.axis('off')

    plt.subplots_adjust(bottom=0.45)

    for i, event in enumerate(event_data):
        event_name = event['name']
        actual = event['actual']
        forecast = event['forecast']
        previous = event['previous']

        if forecast == "NA":
            event_color = 'black'
        else:
            try:
                if float(actual) > float(forecast):
                    event_color = 'green'
                elif float(actual) < float(forecast):
                    event_color = 'red'
                else:
                    event_color = 'blue'
            except ValueError:
                event_color = 'black'

        event_time_num = mdates.date2num(event_time)
        event_text_line = f"{event_name} | Actual: {actual} | Forecast: {forecast} | Previous: {previous}"
        y_offset = -0.2 - i * 0.1
        ax_event.text(event_time_num, y_offset, event_text_line, color=event_color,
                      ha='center', va='top', fontsize=9, rotation=0, transform=ax_event.transData, fontweight='bold')

    ax1.set_title(f'{symbol} Price Action - {event_time.strftime("%Y-%m-%d %H:%M")} GMT', fontweight='bold')
    ax1.set_ylabel('Price')
    ax1.grid(True)
    ax1.legend(loc='upper left', bbox_to_anchor=(1, 1))

    plt.tight_layout()
    plt.subplots_adjust(hspace=0)

    # Sanitize event_name for filename
    safe_event_name = re.sub(r'[^a-zA-Z0-9_]', '_', event_name)
    safe_symbol = re.sub(r'[^a-zA-Z0-9_]', '_', symbol)

    image_filename = f"images/{safe_event_name}_{safe_symbol}_{event_time.strftime('%Y%m%d_%H%M%S')}.png"

    # Ensure the 'images' directory exists
    os.makedirs(os.path.dirname(image_filename), exist_ok=True)

    plt.savefig(image_filename)
    plt.close(fig)

    return image_filename, volatility_unit, max_movement, min_movement, pre_atr_volatility

def process_event(event, date_time_inputs, event_data_list, event_symbols, atr_multiple, atr_period):
    event_summary = {
        'volatility_units': [],
        'max_movements': [],
        'min_movements': [],
        'pre_atr_volatilities': []
    }

    event_dates = [
        date for date in sorted(date_time_inputs.keys(), key=lambda x: datetime.strptime(x, '%Y-%m-%d'))
        if any(e['name'] == event['name'] for e in event_data_list[date])
    ]

    processed_event_data = {
        "event_name": event['name'],
        "assets": []
    }

    for idx, date_str in enumerate(event_dates):
        print(f"Processing date: {date_str} for event: {event['name']}")

        event_data = next((e for e in event_data_list[date_str] if e['name'] == event['name']), None)
        if not event_data:
            continue

        # Determine symbol and timezone
        if event['name'] == "Crude Oil Inventories":
            mt5_symbol = event_symbols[event['name']]['mt5']
            polygon_symbol = "USOILRoll"
            event_tz = pytz.timezone('Etc/GMT-3')
        else:
            polygon_symbol = event_symbols[event['name']]['polygon']
            mt5_symbol = event_symbols[event['name']]['mt5']
            event_tz = pytz.timezone('Etc/GMT')

        try:
            event_time_str = event_data["time"]
            event_date = datetime.strptime(date_str, '%Y-%m-%d').date()
            event_time_obj = datetime.strptime(event_time_str, '%H:%M').time()
            event_time = event_tz.localize(datetime.combine(event_date, event_time_obj))
        except (ValueError, KeyError) as e:
            print(f"Skipping event due to invalid time format: {event_data.get('time', 'N/A')} for event {event['name']} on {date_str}. Error: {e}")
            continue

        start_time = event_time - timedelta(hours=2)
        end_time = event_time + timedelta(hours=2)

        current_spread = get_current_spread(mt5_symbol)
        if current_spread is None:
            current_spread = estimate_typical_spread(mt5_symbol)

        # Fetch data
        if event['name'] == "Crude Oil Inventories":
            df = fetch_data(mt5_symbol, start_time, end_time)
        else:
            df = fetch_data(polygon_symbol, start_time, end_time)

        if df is not None and not df.empty:
            is_last_chart = (idx == len(event_dates) - 1)
            event_summary_for_plot = {
                "Avg Volatility Unit": sum(event_summary['volatility_units']) / len(event_summary['volatility_units']) if event_summary['volatility_units'] else 0,
                "Avg Max Movement": sum(event_summary['max_movements']) / len(event_summary['max_movements']) if event_summary['max_movements'] else 0,
                "Avg Min Movement": sum(event_summary['min_movements']) / len(event_summary['min_movements']) if event_summary['min_movements'] else 0,
                "Avg Pre-ATR Volatility": sum(event_summary['pre_atr_volatilities']) / len(event_summary['pre_atr_volatilities']) if event_summary['pre_atr_volatilities'] else 0
            } if is_last_chart else None

            event_time_utc = event_time.astimezone(pytz.UTC)

            image_filename, volatility_unit, max_movement, min_movement, pre_atr_volatility = plot_ohlc(
                df, polygon_symbol, event['name'], event_time_utc, [event_data],
                atr_multiple, current_spread, atr_period,
                is_last_chart=is_last_chart,
                event_summary=event_summary_for_plot,
                start_time=start_time.astimezone(pytz.UTC),
                end_time=end_time.astimezone(pytz.UTC)
            )

            event_summary['volatility_units'].append(volatility_unit)
            event_summary['max_movements'].append(max_movement / volatility_unit if volatility_unit else 0)
            event_summary['min_movements'].append(min_movement / volatility_unit if volatility_unit else 0)
            event_summary['pre_atr_volatilities'].append(pre_atr_volatility)

            asset_data = {
                "asset_name": polygon_symbol,
                "charts": [image_filename],
                "event_details": event_data
            }

            # Check if this asset is already in the list
            existing_asset = next((item for item in processed_event_data["assets"] if item["asset_name"] == polygon_symbol), None)
            if existing_asset:
                existing_asset['charts'].append(image_filename)
            else:
                processed_event_data["assets"].append(asset_data)

        time.sleep(1) # Reduced sleep time

    # After processing all dates for an event, add it to the main output list
    if processed_event_data["assets"]:
        output_data.append(processed_event_data)

def main():
    # User inputs
    atr_multiple = 1.5
    atr_period = 14
    input_file = 'reference/analyzer-input.csv'

    try:
        with open(input_file, 'r') as f:
            excel_input = f.read()
    except FileNotFoundError:
        print(f"Error: Input file not found at {input_file}")
        exit(1)

    # Parse the Excel input
    try:
        date_time_inputs, event_data_list, events, event_symbols = parse_excel_input(excel_input)
    except Exception as e:
        print(f"Error parsing input file: {e}")
        exit(1)

    # Process events
    for event in events:
        process_event(event, date_time_inputs, event_data_list, event_symbols, atr_multiple, atr_period)

    # Write output to JSON file
    with open('events.json', 'w') as f:
        json.dump(output_data, f, indent=4)

    print("Processing complete. Output written to events.json")

    # # Shutdown MT5
    # mt5.shutdown()

if __name__ == "__main__":
    main()
