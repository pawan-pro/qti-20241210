import csv
import datetime
import uuid

def parse_date(date_str):
    # Format: 24-Nov-25
    return datetime.datetime.strptime(date_str, '%d-%b-%y').date()

def parse_time(time_str):
    # Format: 12:30
    return datetime.datetime.strptime(time_str, '%H:%M').time()

def to_utc_str(dt_local):
    # IST is UTC+5:30
    # Subtract 5 hours 30 minutes
    dt_utc = dt_local - datetime.timedelta(hours=5, minutes=30)
    return dt_utc.strftime('%Y%m%dT%H%M%SZ')

def escape_text(text):
    if not text:
        return ""
    return text.replace('\\', '\\\\').replace(';', '\\;').replace(',', '\\,').replace('\n', '\\n')

def create_ics(csv_path, output_path):
    events = []
    
    with open(csv_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            date_str = row.get('Date', '').strip()
            time_str = row.get('Time (IST)', '').strip()
            currency = row.get('Cur.', '').strip()
            event_name = row.get('Event', '').strip()
            forecast = row.get('Forecast', '').strip()
            previous = row.get('Previous', '').strip()
            notes = row.get('Notes', '').strip()
            
            if not date_str or not event_name:
                continue
                
            try:
                event_date = parse_date(date_str)
            except ValueError:
                print(f"Skipping invalid date: {date_str}")
                continue

            summary = f"{currency} - {event_name}" if currency else event_name
            description = f"Forecast: {forecast}\\nPrevious: {previous}\\nNotes: {escape_text(notes)}"
            
            uid = str(uuid.uuid4())
            dtstamp = datetime.datetime.utcnow().strftime('%Y%m%dT%H%M%SZ')
            
            if "All Day" in time_str or not time_str:
                # All day event
                dtstart = event_date.strftime('%Y%m%d')
                # For all day, DTEND is usually the next day
                dtend = (event_date + datetime.timedelta(days=1)).strftime('%Y%m%d')
                
                event_block = [
                    "BEGIN:VEVENT",
                    f"UID:{uid}",
                    f"DTSTAMP:{dtstamp}",
                    f"DTSTART;VALUE=DATE:{dtstart}",
                    f"DTEND;VALUE=DATE:{dtend}",
                    f"SUMMARY:{summary}",
                    f"DESCRIPTION:{description}",
                    "END:VEVENT"
                ]
            else:
                try:
                    event_time = parse_time(time_str)
                    dt_local = datetime.datetime.combine(event_date, event_time)
                    
                    # Start time in UTC
                    start_utc = to_utc_str(dt_local)
                    
                    # End time (5 minutes later)
                    dt_end_local = dt_local + datetime.timedelta(minutes=5)
                    end_utc = to_utc_str(dt_end_local)
                    
                    event_block = [
                        "BEGIN:VEVENT",
                        f"UID:{uid}",
                        f"DTSTAMP:{dtstamp}",
                        f"DTSTART:{start_utc}",
                        f"DTEND:{end_utc}",
                        f"SUMMARY:{summary}",
                        f"DESCRIPTION:{description}",
                        "END:VEVENT"
                    ]
                except ValueError:
                    print(f"Skipping invalid time: {time_str}")
                    continue
            
            events.append("\n".join(event_block))

    ics_content = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Economic Calendar//Generator//EN",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH"
    ]
    
    ics_content.extend(events)
    ics_content.append("END:VCALENDAR")
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write("\n".join(ics_content))
    
    print(f"Successfully created {output_path} with {len(events)} events.")

if __name__ == "__main__":
    csv_file = "Economic Calendar-next-week-CLI.csv"
    ics_file = "Economic_Calendar.ics"
    create_ics(csv_file, ics_file)
