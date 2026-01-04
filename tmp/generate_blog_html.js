
const eventsData = {
  "December 22, 2025": {
    "anchor": "day-22dec",
    "day_name": "Mon",
    "events": [
      {
        "Date": "22-Dec-25",
        "Day": "Mon",
        "Time (IST)": "12:30",
        "Cur.": "GBP",
        "Imp.": "3",
        "Event": "GDP (QoQ) (Q3)",
        "Actual": "",
        "Forecast": "",
        "Previous": "0.10%",
        "Notes": "Gross Domestic Product (GDP) measures the quaterly change in the inflation-adjusted value of all goods and services produced by the economy; it is the broadest measure of economic activity and the primary indicator of the economy's health. A higher than expected reading should be taken as positive/bullish for the GBP, while a lower than expected reading should be taken as negative/bearish for the GBP."
      },
      {
        "Date": "22-Dec-25",
        "Day": "Mon",
        "Time (IST)": "12:30",
        "Cur.": "GBP",
        "Imp.": "3",
        "Event": "GDP (YoY) (Q3)",
        "Actual": "",
        "Forecast": "",
        "Previous": "1.30%",
        "Notes": "Gross Domestic Product (GDP) measures the annualized change in the inflation-adjusted value of all goods and services produced by the economy; it is the broadest measure of economic activity and the primary indicator of the economy's health. A higher than expected reading should be taken as positive/bullish for the GBP, while a lower than expected reading should be taken as negative/bearish for the GBP."
      }
    ]
  },
  "December 23, 2025": {
    "anchor": "day-23dec",
    "day_name": "Tue",
    "events": [
      {
        "Date": "23-Dec-25",
        "Day": "Tue",
        "Time (IST)": "19:00",
        "Cur.": "USD",
        "Imp.": "3",
        "Event": "Durable Goods Orders (MoM) (Oct)",
        "Actual": "",
        "Forecast": "",
        "Previous": "3.00%",
        "Notes": "Durable Goods Orders measures the change in the total value of new orders for long lasting manufactured goods, including transportation items. A higher than expected reading should be taken as positive/bullish for the USD, while a lower than expected reading should be taken as negative/bearish for the USD."
      },
      {
        "Date": "23-Dec-25",
        "Day": "Tue",
        "Time (IST)": "19:00",
        "Cur.": "USD",
        "Imp.": "3",
        "Event": "GDP (QoQ) (Q3)",
        "Actual": "",
        "Forecast": "",
        "Previous": "3.80%",
        "Notes": "Gross Domestic Product (GDP) measures the annualized change in the inflation-adjusted value of all goods and services produced by the economy. It is the broadest measure of economic activity and the primary indicator of the economy's health. Usual Effect: Actual > Forecast = Good for currency. Frequency: Released monthly. There are 3 versions of GDP released a month apart - Advance, second release and Final. Both the advance the second release are tagged as preliminary in the economic calendar."
      },
      {
        "Date": "23-Dec-25",
        "Day": "Tue",
        "Time (IST)": "20:30",
        "Cur.": "USD",
        "Imp.": "3",
        "Event": "CB Consumer Confidence (Dec)",
        "Actual": "",
        "Forecast": "",
        "Previous": "88.7",
        "Notes": "Conference Board (CB) Consumer Confidence measures the level of consumer confidence in economic activity. It is a leading indicator as it can predict consumer spending, which plays a major role in overall economic activity. Higher readings point to higher consumer optimism. A higher than expected reading should be taken as positive/bullish for the USD, while a lower than expected reading should be taken as negative/bearish for the USD."
      }
    ]
  },
  "December 24, 2025": {
    "anchor": "day-24dec",
    "day_name": "Wed",
    "events": [
      {
        "Date": "24-Dec-25",
        "Day": "Wed",
        "Time (IST)": "19:00",
        "Cur.": "USD",
        "Imp.": "3",
        "Event": "Durable Goods Orders (MoM) (Oct)",
        "Actual": "",
        "Forecast": "",
        "Previous": "0.50%",
        "Notes": "Durable Goods Orders measures the change in the total value of new orders for long lasting manufactured goods, including transportation items. A higher than expected reading should be taken as positive/bullish for the USD, while a lower than expected reading should be taken as negative/bearish for the USD."
      }
    ]
  },
  "January 28, 2026": {
    "anchor": "day-jan28",
    "day_name": "Wed",
    "events": [
      {
        "Date": "28-Jan-26",
        "Day": "Wed",
        "Time (IST)": "23:30",
        "Cur.": "USD",
        "Imp.": "3",
        "Event": "Fed Interest Rate Decision",
        "Actual": "",
        "Forecast": "3.56%",
        "Previous": "3.63%",
        "Notes": "Federal Open Market Committee (FOMC) members vote on where to set the target interest rate. Traders watch interest rate changes closely as relative short term interest rates are a primary factor in currency valuation. A reading that is stronger than forecast is generally supportive (bullish) for the USD, while a weaker than forecast reading is generally negative (bearish) for the USD."
      }
    ]
  }
};

function generateTimelineHtml(eventsData) {
    let timelineHtml = '';
    for (const dateKey in eventsData) {
        const dayData = eventsData[dateKey];
        const eventCount = dayData.events.length;
        const dateParts = dateKey.split(' ');
        const displayDate = `${dateParts[1]} ${dateParts[0].substring(0, 3)}`; // e.g., 22 Dec
        timelineHtml += `
            <div class="timeline-item">
                <a href="#${dayData.anchor}">
                    <div class="timeline-info">
                        <span class="timeline-date">${displayDate}</span>
                        <span class="timeline-events">${eventCount} Events</span>
                    </div>
                </a>
            </div>`;
    }
    return timelineHtml;
}

function generateEventCardsHtml(eventsData) {
    let eventCardsHtml = '';
    for (const dateKey in eventsData) {
        const dayData = eventsData[dateKey];
        eventCardsHtml += `
            <section class="event-day-group" id="${dayData.anchor}">
                <h2 class="timeline-date">${dateKey}</h2>`;
        for (const event of dayData.events) {
            const forecastHtml = event.Forecast ? `<span class="event-value">${event.Forecast}</span>` : `<span class="event-value forecast"><a href="https://www.bloomberg.com/markets/economic-calendar" target="_blank" rel="noopener noreferrer">Link</a></span>`;
            const learnMoreHtml = event.Event === "Fed Interest Rate Decision" ? 
                `<span class="event-value historical-impact"><a href="https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html" target="_blank" rel="noopener noreferrer">CME FedWatch Tool</a></span>` : 
                `<span class="event-value historical-impact"><a href="/blogs/blog-pdf/20251221.pdf" target="_blank" rel="noopener noreferrer">${event['Cur.']}JPY</a> <a href="/blogs/blog-pdf/20251221.pdf" target="_blank" rel="noopener noreferrer">${event['Cur.']}USD</a></span>`;

            eventCardsHtml += `
                <article class="event-card">
                    <h3 class="event-title">${event.Event}</h3>
                    <div class="event-details">
                        <span class="event-label">Date:</span>
                        <span class="event-value">${event.Date}, ${event.Day}, ${event['Time (IST)']}</span>
                        <span class="event-label">Currency:</span>
                        <span class="event-value">${event['Cur.']}</span>
                        <span class="event-label">Importance:</span>
                        <span class="event-value">${event.Imp}</span>
                        <span class="event-label">Forecast:</span>
                        ${forecastHtml}
                        <span class="event-label">Previous:</span>
                        <span class="event-value">${event.Previous}</span>
                        <span class="event-label">Notes:</span>
                        <span class="event-notes-value">${event.Notes}</span>
                        <span class="event-label">Learn More:</span>
                        ${learnMoreHtml}
                    </div>
                </article>`;
        }
        eventCardsHtml += `
            </section>`;
    }
    return eventCardsHtml;
}

const timelineHtml = generateTimelineHtml(eventsData);
const eventCardsHtml = generateEventCardsHtml(eventsData);

const whatToExpect = `
    <strong>What to Expect in Markets This Week:</strong> This week, the market's attention will be on key economic indicators from the UK and the US. The UK will release its quarterly and yearly GDP figures, providing crucial insights into economic growth. In the US, focus will be on Durable Goods Orders, quarterly GDP, and CB Consumer Confidence, which will shed light on manufacturing activity, overall economic health, and consumer sentiment. The next Fed Interest Rate Decision is scheduled on January 28th, 2026.
`;

const newBlogContent = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Economic Calendar: Week of December 22nd, 2025</title>
    <link rel="stylesheet" href="/global.css">
    <style>
        /* Header styles */
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
            background-color: #000;
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .firm-name {
            font-size: 1.5rem;
            font-weight: bold;
            color: #fff;
            text-decoration: none;
        }

        .nav-links {
            display: flex;
            gap: 1.5rem;
        }

        .nav-links a {
            text-decoration: none;
            font-size: 1rem;
            font-weight: 500;
            color: #fff;
            transition: color 0.3s;
        }

        .nav-links a:hover {
            color: #007acc;
        }

        /* Blog styles */
        @font-face {
            font-family: 'Century Gothic';
            src: url('/fonts/CenturyGothic.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Century Gothic', Arial, sans-serif !important;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            background-color: #000000;
            color: #313131;
            margin: 0;
            line-height: 1.6;
        }

        .blog-container {
            padding: 33px;
        }

        .blog-title {
            font-size: 1.25rem;
            font-weight: bold;
            color: #e9e9e9ac;
            margin-bottom: 10px;
        }

        .blog-subtitle {
            font-size: 1rem;
            color: #bbb;
            margin-bottom: 30px;
        }

        /* Timeline Styles */
        .blog-timeline {
            position: fixed;
            /* Adjusted left position for alignment */
            left: 33px;
            top: 100px;
            padding: 15px;
            background: rgba(42, 42, 42, 0.8);
            border-radius: 8px;
            backdrop-filter: blur(5px);
            box-shadow: 0 4px 6px rgba(3, 3, 3, 0.1);
            width: 160px;
            font-size: 0.7rem;
            max-height: calc(100vh - 120px);
            overflow-y: auto;
            z-index: 900;
        }

        .timeline-item {
            position: relative;
            margin: 15px 0;
            padding: 0;
            cursor: pointer;
            transition: all 0.3s ease;
            border-radius: 6px;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .timeline-item a {
            text-decoration: none;
            color: inherit;
            display: block;
            width: 100%;
            padding: 12px 15px;
            font-size: 0.7rem;
        }

        /* Updated active state to use grey shades and slight shift */
        .timeline-item.active {
            /* Ensure background and border are grey for the active state */
            background: linear-gradient(135deg, rgba(176, 176, 176, 0.15) 0%, rgba(100, 100, 100, 0.05) 100%);
            border: 1px solid rgba(161, 161, 161, 0.3);
            transform: translateX(10px);
            /* Shift to the right */
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

        }

        /* Updated active date color to a lighter grey */
        .timeline-item.active .timeline-date {
            color: #6495ED;
        }

        .timeline-item:hover {
            transform: translateX(5px);
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .timeline-info {
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-left: 0px;
            font-size: 0.7rem;
            text-align: center;
        }

        .timeline-date {
            color: #e9e9e9ac;
            font-weight: 600;
            font-size: 0.8rem;
            text-align: center;
            padding-bottom: 3px;
            transition: color 0.3s ease;
        }

        .timeline-events {
            font-size: 0.7rem;
            color: #888;
            margin-top: 2px;
            text-align: center;
        }

        /* Blog Content Styles */
        .blog-content {
            /* Adjusted margin-left to account for the wider timeline */
            margin-left: 210px;
            max-width: 1200px;
            padding-right: 33px;
            color: #ccc;
        }

        .event-day-group {
            margin-bottom: 40px;
            padding-top: 10px;
            /* Provides space above the H2 title within the section */
        }

        .event-day-group:last-child {
            margin-bottom: 0;
        }

        /* Updated day group header color to a consistent grey */
        .event-day-group h2.timeline-date {
            font-size: 1.5rem;
            color: #cacacada;
            margin-bottom: 20px;
            padding-bottom: 5px;
            border-bottom: 1px solid #444;
            text-align: left;
        }

        .event-card {
            background-color: #2a2a2a;
            border: 1px solid #444;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .event-title {
            font-size: 1.2rem;
            font-weight: bold;
            color: #6495ED;
            margin-bottom: 15px;
        }

        .event-details {
            display: grid;
            grid-template-columns: 110px 1fr;
            gap: 10px 15px;
            margin-bottom: 15px;
        }

        .event-label {
            font-weight: bold;
            color: #ccc;
            font-size: 0.9rem;
            text-align: right;
            padding-right: 5px;

        }

        .event-value {
            color: #bbb;
            font-size: 0.9rem;
            word-break: break-word;
        }

        .event-notes-value {
            text-align: justify;
            color: #bbb;
            font-size: 0.9rem;
        }

        .historical-impact a {
            color: #e0e0e0;
            text-decoration: none;
            background-color: #357ae8;
            padding: 3px 6px;
            border-radius: 4px;
            transition: background-color 0.3s, color 0.3s;
            margin-right: 5px;
            font-size: 0.85rem;
            display: inline-block;
            margin-bottom: 3px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .forecast a {
            color: #e0e0e0;
            text-decoration: none;
            background-color: #357ae8;
            padding: 3px 6px;
            border-radius: 4px;
            transition: background-color 0.3s, color 0.3s;
            margin-right: 5px;
            font-size: 0.85rem;
            display: inline-block;
            margin-bottom: 3px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .forecast a:hover {
            background-color: #2a65c8;
            color: #fff;
        }

        .historical-impact a:hover {
            background-color: #2a65c8;
            color: #fff;
        }

        .source-card {
            background-color: #222;
            padding: 15px;
            margin-top: 25px;
            border-radius: 10px;
            text-align: left;
            font-size: 0.9rem;
            color: #e9e9e9ac;
            border: 1px solid #444;
        }

        .source-card a {
            color: #6495ED;
            text-decoration: none;
            font-weight: bold;
        }

        .source-card a:hover {
            text-decoration: underline;
        }

        .source-card .historical-impact span {
            color: rgb(168, 168, 168);
        }

        .past-blogs {
            margin-top: 40px;
        }

        .past-blogs h3 {
            font-size: 1.2rem;
            color: #cacacada;
            margin-bottom: 15px;
        }

        .past-blogs ul {
            list-style-type: none;
            padding: 0;
        }

        .past-blogs li {
            margin-bottom: 10px;
        }

        .past-blogs a {
            color: #6495ED;
            text-decoration: none;
            font-size: 1rem;
        }

        .past-blogs a:hover {
            text-decoration: underline;
        }

        .source-footer {
            background-color: #161616;
            border: 1px solid #444;
            border-radius: 8px;
            padding: 15px;
            /* Adjusted margin-left to account for the wider timeline */
            margin: 20px 0 20px 210px;
            width: calc(100% - 243px);
            /* Adjusted width */
            max-width: 1200px;
            color: #bbb;
            font-size: 0.8rem;
        }

        .source-footer a {
            color: #4a90e2;
            text-decoration: none;
            transition: color 0.3s;
        }

        .source-footer a:hover {
            color: #357ae8;
        }

        @media (max-width: 768px) {
            .blog-timeline {
                display: none;
            }

            .blog-content {
                margin-left: 0;
                padding-left: 20px;
                padding-right: 20px;
            }

            .event-details {
                grid-template-columns: 90px 1fr;
            }

            .event-label {
                text-align: left;
                padding-right: 0;
            }

            .source-footer {
                margin-left: 0;
                width: calc(100% - 40px);
                margin-left: 20px;
                margin-right: 20px;
            }

            .header {
                padding: 1rem;
            }

            .firm-name {
                font-size: 1.2rem;
            }

            .nav-links {
                gap: 0.8rem;
            }

            .nav-links a {
                font-size: 0.9rem;
            }
        }

        @media (max-width: 480px) {
            .nav-links {
                display: none;
            }

            .event-details {
                grid-template-columns: 1fr;
                gap: 5px 0;
            }

            .event-label {
                text-align: left;
                margin-bottom: 2px;
                font-size: 0.85rem;
            }

            .event-value {
                font-size: 0.85rem;
            }

            .event-title {
                font-size: 1.1rem;
            }
        }
    </style>
</head>

<body>
    <header class="header">
        <a href="/" class="firm-name">Quantwater Tech Investments</a>
        <nav class="nav-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/solutions">Solutions</a>
            <a href="/research">Research</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
        </nav>
    </header>

    <div class="blog-container">
        <aside class="blog-timeline">
            ${timelineHtml}
        </aside>

        <main class="blog-content">
            <div class="blog-title">Key Economic Events: Week Of 22nd December 2025</div>
            <div class="blog-subtitle">Release Date: 22nd December 2025</div>

            <div class="source-card" style="margin-bottom: 20px; background-color: #2a2a2a;">
                ${whatToExpect}
            </div>

            ${eventCardsHtml}

            <section class="past-blogs">
                <h3>Past Economic Calendars</h3>
                <ul>
                    <li><a href="20251215.html">Week of December 15th, 2025</a></li>
                    <li><a href="20251208.html">Week of December 8th, 2025</a></li>
                    <li><a href="20251201.html">Week of December 1st, 2025</a></li>
                    <li><a href="20251124.html">Week of November 24th, 2025</a></li>
                    <li><a href="20251117.html">Week of November 17th, 2025</a></li>
                </ul>
            </section>

            <!-- Source Card -->
            <div class="source-card">
                Source: Investing.com, Firm Research. Notes as of 22nd December 2025, 8 PM.<br>
                For historical data and resources, please visit:
                <span class="historical-impact">
                    <a href="https://quantwatertech.netlify.app/research" target="_blank" rel="noopener noreferrer"><span style="color: rgb(255, 254, 255);">quantwater.tech/resources</span></a>
                </span>
            </div>
        </main>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const header = document.querySelector('.header');
            const timelineLinks = document.querySelectorAll('.blog-timeline .timeline-item a');
            const sections = Array.from(document.querySelectorAll('.event-day-group'));
            const timelineItems = document.querySelectorAll('.blog-timeline .timeline-item');

            timelineLinks.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    const targetSection = document.getElementById(targetId);

                    if (targetSection) {
                        const headerHeight = header.offsetHeight;
                        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            window.addEventListener('scroll', function () {
                let current = '';
                const headerHeight = header.offsetHeight;

                sections.forEach(section => {
                    const sectionTop = section.offsetTop - headerHeight - 100;
                    if (pageYOffset >= sectionTop) {
                        current = section.getAttribute('id');
                    }
                });

                timelineItems.forEach(item => {
                    item.classList.remove('active');
                    const link = item.querySelector('a');
                    if (link.getAttribute('href').substring(1) === current) {
                        item.classList.add('active');
                    }
                });
            });
        });
    </script>
</body>

</html>`;

console.log(newBlogContent);
