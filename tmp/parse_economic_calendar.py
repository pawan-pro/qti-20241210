
import csv
import json
from datetime import datetime

with open('tmp/economic_calendar.csv', 'r') as f:
    csv_content = f.read()

# Assuming note_txt_content is empty as per previous observation
note_txt_content = ''

events = []
lines = csv_content.strip().split('\n')
reader = csv.reader(lines)
header = [h.strip() for h in next(reader)]

for i, row in enumerate(reader):
    if not row or row[0].strip().startswith('Source'):
        continue

    # Ensure row has enough columns, fill with empty strings if not
    row = [r.strip() for r in row] + [''] * (len(header) - len(row))

    event = dict(zip(header, row))

    # Clean up Forecast and Notes
    if event['Forecast'] == '[]':
        event['Forecast'] = ''
    if event['Notes'] == '[]':
        event['Notes'] = ''

    # Integrate notes from note_txt_content if applicable
    if note_txt_content and 'Notes' in event:
        event['Notes'] = f"{event['Notes'].strip()} {note_txt_content.strip()}".strip()

    events.append(event)

# Group events by date
events_by_date = {}
for event in events:
    date_obj = datetime.strptime(event['Date'], '%d-%b-%y')
    formatted_date_key = date_obj.strftime('%d %B %Y')
    anchor_date_key = date_obj.strftime('%d%b').lower()
    day_name = date_obj.strftime('%a') # Get abbreviated day name (Mon, Tue, etc.)

    if formatted_date_key not in events_by_date:
        events_by_date[formatted_date_key] = {
            'anchor': f'day-{anchor_date_key}',
            'day_name': day_name,
            'events': []
        }
    events_by_date[formatted_date_key]['events'].append(event)

# For consistent order, sort dates
sorted_dates = sorted(events_by_date.keys(), key=lambda x: datetime.strptime(x, '%d %B %Y'))
sorted_events_by_date = {date: events_by_date[date] for date in sorted_dates}

print(json.dumps(sorted_events_by_date, indent=2))
