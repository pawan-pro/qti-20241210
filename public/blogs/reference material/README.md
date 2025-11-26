# Calendar Management Scripts

## Quick Commands

### 1. Sync Your Calendar Planner
Run this command to sync your Excel planner with Google Calendar:
```bash
cd "public/blogs/reference material" && ./venv/bin/python3 calendar_sync.py
```

### 2. Create Events from Economic Calendar CSV
Run this command to create 5-minute events from the CSV file:
```bash
cd "public/blogs/reference material" && ./venv/bin/python3 generate_calendar_events.py
```

## Files

- **My_Calendar_Planner.xlsx** - Your editable calendar planner
- **calendar_sync.py** - Master sync script
- **generate_calendar_events.py** - CSV to calendar events script
- **Economic Calendar-next-week-CLI.csv** - Economic events data

## Workflow

1. Edit `My_Calendar_Planner.xlsx` in Excel
2. Close the Excel file
3. Run the sync command above
4. Your changes will be pushed to Google Calendar and the Excel will be refreshed

## Tips

- Always close the Excel file before running the sync
- The planner shows 3 months: previous month, current month, and next month
- Add new events by typing in empty cells
- Edit events by changing the text
- Delete events by clearing the cell
