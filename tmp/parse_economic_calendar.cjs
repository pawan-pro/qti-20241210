
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync'); // Use sync version

function parseCsv() {
    const csvFilePath = path.join(__dirname, 'economic_calendar.csv');
    const csvContent = fs.readFileSync(csvFilePath, 'utf8');

    const records = parse(csvContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
    });

    const events = [];
    const noteTxtContent = ''; // As previously determined, note.txt is empty

    for (const record of records) {
        // Skip source line
        if (record.Date && record.Date.startsWith('Source')) {
            continue;
        }

        // Clean up Forecast and Notes fields
        if (record.Forecast === '[]') {
            record.Forecast = '';
        }
        if (record.Notes === '[]') {
            record.Notes = '';
        }

        // Integrate notes from note_txt_content if applicable
        if (noteTxtContent && record.Notes) {
            record.Notes = `${record.Notes.trim()} ${noteTxtContent.trim()}`.trim();
        }

        events.push(record);
    }

    const eventsByDate = {};
    for (const event of events) {
        const dateParts = event.Date.split('-');
        // Convert YY to YYYY if it's 2-digit
        const year = `20${dateParts[2]}`;
        const dateObj = new Date(`${dateParts[1]} ${dateParts[0]}, ${year}`);

        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        const formattedDateKey = dateObj.toLocaleDateString('en-US', options);
        
        // Ensure the month abbreviation is consistent (e.g., Dec not december)
        const anchorDateKey = dateObj.toLocaleDateString('en-US', { day: '2-digit', month: 'short' }).replace(' ', '').toLowerCase();
        const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' });

        if (!eventsByDate[formattedDateKey]) {
            eventsByDate[formattedDateKey] = {
                anchor: `day-${anchorDateKey}`,
                day_name: dayName,
                events: []
            };
        }
        eventsByDate[formattedDateKey].events.push(event);
    }

    // For consistent order, sort dates
    const sortedDates = Object.keys(eventsByDate).sort((a, b) => new Date(a) - new Date(b));
    const sortedEventsByDate = {};
    for (const date of sortedDates) {
        sortedEventsByDate[date] = eventsByDate[date];
    }

    console.log(JSON.stringify(sortedEventsByDate, null, 2));
}

parseCsv();
