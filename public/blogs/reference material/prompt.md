hello. please refer to

"previous blog-1": @public/blogs/20260413.html ,
"previous blog-2": @public/blogs/20260406.html and
and create
"next blog": 20260420.html. (for the week of 20260420) (blog pdf /Users/pawan/qti/public/blogs/blog-pdf/20260420.pdf
blog image: /Users/pawan/qti/public/blogs/blog-cover/20260420.png )



Please keep the format same. please update the content, referencing

"@/Users/pawan/Documents/GitHub/qti/public/blogs/reference material/Economic Calendar-next-week-CLI.csv"

events and notes. please keep the last event as the next Fed interest rate decision, taking the last event from

"previous blog-1" as an example.

the relevant data is in

"@/Users/pawan/Documents/GitHub/qti/public/blogs/reference material/Economic Calendar-next-week-CLI.csv"

PLease integerate the notes from

@public/blogs/reference\ material/note.txt

into the notes of the economic calendar, as applicable, if not empty.

Please refer to Bloomberg Economic Calendar as link button wherever there is not forecast available for an econmic event (not holiday), as done in the previous html code

"previous blog-1"

for example. Please update the @app/blog/page.tsx as applicable

IMPORTANT: After creating the blog HTML file, you MUST also:
1. Add the blog PDF and cover image to git: `git add public/blogs/blog-pdf/[DATE].pdf public/blogs/blog-cover/[DATE].png`
2. Commit these files with an appropriate message
3. Push to the remote repository
This is critical - these binary files are NOT automatically tracked by git and must be explicitly added every week.

ASSET MAPPING RULES FOR "Learn More" LINKS:
Use high beta FX pairs relevant to the event currency:
- USD events: USDJPY & EURUSD
- China (CNY) events: USDCNY & USDCNH
- Euro (EUR) events: EURJPY & EURUSD
- UK (GBP) events: GBPJPY & GBPUSD
- Japan (JPY) events: USDJPY & EURJPY
- New Zealand (NZD) events: NZDUSD & NZDJPY
- Australia (AUD) events: AUDUSD & AUDJPY
- Switzerland (CHF) events: USDCHF & CHFJPY
- Canada (CAD) events: USDCAD & CADJPY
- Holiday events: Keep Wikipedia Legacy link
- India (INR) events: USDINR & EURINR (if applicable)
- South Africa (ZAR) events: USDZAR & ZARJPY (if applicable)
- General rule: Use the currency pair against USD and JPY for maximum liquidity relevance