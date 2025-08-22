### Weekly Blog Update Instructions

1.  **Create New Blog HTML File:**
    *   Refer to the previous week's blog HTML file in `public/blogs/` (e.g., `20250804.html`) as a template.
    *   Create the new file with the correct date (e.g., `20250811.html`).
    *   Use `@public/blogs/excel/Economic Calendar-Next Week-CLI.csv` for the list of economic events.
    *   Use `@public/blogs/Notes/Notes.txt` for any specific notes on events.

2.  **Populate Event Details in the HTML:**
    *   **Style & Format:** Maintain the exact style and format of the most recent blog posts.
    *   **Notes for Holidays:** For holidays or events marked as "Legacy Reference," if notes are not in `Notes.txt`, generate a brief, informative note by searching official or Wikipedia pages.
    *   **Forecasts:** Every event card must have a "Forecast" field.
        *   If a forecast value is available in the CSV, use it.
        *   If the forecast value is empty, provide a link to the Bloomberg Economic Calendar: `https://www.bloomberg.com/markets/economic-calendar`.
    *   **"Learn More" Links:**
        *   Check the "Notes" column in the CSV for asset pairs (e.g., `USDJPY | EURUSD`).
        *   If asset pairs are present, create a separate button for each asset (e.g., one button for "USDJPY", one for "EURUSD").
        *   Each of these asset buttons should link to the corresponding new PDF file (e.g., `/blogs/blog-pdf/20250811.pdf`).
        *   If the CSV specifies "Legacy Reference", create a single button with that text, linking to an appropriate external page.
    *   **FOMC Meeting:** Ensure the last event listed is the next FOMC meeting, using the specific forecast and previous values from the CSV file.

3.  **Update Blog Index Page:**
    *   Modify the `app/blog/page.tsx` file.
    *   Add a new entry to the top of the `projects` array for the newly created blog post.
    *   Ensure the `id`, `title`, `image` path, and `link` path are correct for the new entry.

4.  **PDF Upload (Manual Task):**
    *   The CLI cannot upload files to Google Drive. This must be done manually. Please upload the relevant PDF to the `@public/blogs/blog-pdf/` folder.
