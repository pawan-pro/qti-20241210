// app/indian-market-overview/page.js
import Image from 'next/image';
import styles from './page.module.css'; // Ensure this path is correct

export default function IndiaontheRise() {
  return (
    <>
      {/* Assuming a Layout component might wrap this, providing the dark header/footer frame */}
      <main className={styles.articleContainer}>
        <header className={styles.articleHeader}>
          <h1>India on the Rise: Market Outlook & Investment Trends</h1>
          <p className={styles.publishDate}>Analysis as of: 28th March 2025, Pawan</p>
          <p className={styles.intro}>
            India continues its trajectory as <span className={styles.bold}>one of the world&apos;s fastest-growing major economies</span>,
            presenting significant opportunities alongside evolving challenges. This overview delves
            into the macroeconomic landscape, market performance, key sectors, and potential risks
            shaping the Indian market outlook for 2025 and the years ahead.
          </p>
        </header>

        <section className={styles.section}>
          <h2>Economic Powerhouse: Growth & Drivers</h2>
          <p>
            India&apos;s GDP growth is projected to remain robust, estimated between <span className={styles.bold}>6-7%</span> for 2025. This resilience
            is fueled by <span className={styles.bold}>strong domestic demand, accelerating digital transformation, and supportive government
            initiatives</span> like <span className={styles.bold}>&apos;Atmanirbhar Bharat&apos;</span> (Self-reliant India) and <span className={styles.bold}>&apos;Make in India&apos;</span>.
          </p>
          {/* Chart Grid Example (Repeat for other charts) */}
          <div className={styles.chartGrid}>
            <div className={styles.chartContainer}>
              <Image
                src="/Resources/indian-market-overview/real-gdp-growth.png"
                alt="India Real GDP Growth Chart (Annual % change)"
                width={800}
                height={450}
                className={styles.chartImage}
                priority // Add priority for LCP image if applicable
              />
              <p className={styles.chartCaption}>
                <strong>Real GDP growth (Annual % change).</strong> Source: IMF, RBI, World Bank<br /><br />
                As per World Bank&apos;s Long-Term Growth Modeling (LTGM), India&apos;;s long-term GDP growth rate is projected to stabilize around <span className={styles.bold}>6.5% by 2035</span>, before gradually slowing to <span className={styles.bold}>5.5% by 2050</span>, reflecting economic maturation and demographic shifts.
              </p>
            </div>
            <div className={styles.chartContainer}>
              <Image
                src="/Resources/indian-market-overview/gdp-contribution.png"
                alt="GDP Contribution (2023-2024 %)"
                width={800}
                height={450}
                className={styles.chartImage} />
              <p className={styles.chartCaption}><strong>GDP Contribution (2023-2024 %).</strong> Source: MoSPI.</p>
            </div>
          </div>
          <p>
            The services sector remains the largest contributor to GDP, particularly Financial Services,
            Real Estate, and Professional Services. Manufacturing and Construction also play vital roles,
            bolstered by infrastructure spending.
          </p>
          <p>Key sectors driving this economic momentum include:</p>
          <ul className={styles.list}>
            <li>IT & Software Services</li>
            <li>Manufacturing (especially electronics, pharma, automotive)</li>
            <li>Renewable Energy</li>
            <li>Infrastructure Development</li>
            <li>Digital Payments & FinTech</li>
            <li>Pharmaceuticals</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Macroeconomic Stability: Inflation, Fiscal Policy & Rates</h2>
          <p>
            <strong>Inflation Trends: </strong>Managing inflation remains a key focus for the Reserve Bank of India (RBI). While headline inflation
            has shown signs of moderation, core inflation requires monitoring.
          </p>
          <div className={styles.chartGrid}>
             <div className={styles.chartContainer}>
                <Image
                src="/Resources/indian-market-overview/macro-1.png"
                alt="India Inflation Trends (CPI & WPI)"
                width={1000}
                height={500}
                className={styles.chartImage} />
                <p className={styles.chartCaption}><strong>CPI and WPI Inflation Trends.</strong> Source: MoSPI, PIB<br /> <br />
                The Reserve Bank of India (RBI) has projected the Consumer Price Index (CPI) inflation to average <span className={styles.bold}>4.8%</span> for the fiscal year 2024-25 (FY25) and to moderate to <span className={styles.bold}>4.2%</span> for FY26.</p>
            </div>
            <div className={styles.chartContainer}>
                <Image
                src="/Resources/indian-market-overview/macro-2.png"
                alt="India Inflation Trends (Core vs Headline)" // Assuming different content
                width={1000}
                height={500}
                className={styles.chartImage} />
                <p className={styles.chartCaption}><strong>Core vs Headline Inflation Trends.</strong> Source: MoSPI, PIB</p> {/* Adjusted caption */}
            </div>
          </div>

          <p><strong>Interest Rates & RBI Policy Stance: </strong></p>
          <ul className={styles.list}>
            <li>
                <strong>Recent Rate Cut:</strong><br />
                On February 7, 2025, the Reserve Bank of India (RBI) reduced the repo rate by 25 basis points, bringing it down from 6.50% to 6.25%, aiming to stimulate economic growth amid easing inflation.
            </li>
            <li>
                <strong>Neutral Policy Stance:</strong><br />
                Despite the rate cut, the RBI maintained a <span className={styles.bold}>&apos;;neutral&apos;;</span> policy stance, focusing on achieving a durable alignment of inflation with the target while supporting growth.
            </li>
            <li>
                <strong>Anticipated Future Rate Cuts:</strong><br />
                Market analysts project further rate cuts in 2025, with expectations of an additional <span className={styles.bold}>50 basis points reduction by August</span>, as the RBI seeks to balance growth and inflation dynamics.
            </li>
            <li>
                <strong>Mid to Long-Term Projections (2027-2031):</strong><br />
                Specific forecasts for the RBI&apos;;s policy rates beyond 2026 are limited. However, the central bank&apos;;s actions will likely be influenced by factors such as <span className={styles.bold}>domestic inflation trends, economic growth rates, and global financial conditions.</span>
            </li>
          </ul>

          <div className={styles.chartGrid}>
            <div className={styles.chartContainer}>
                <Image
                src="/Resources/indian-market-overview/macro-3.png"
                alt="RBI Repo Rate Chart"
                width={500}
                height={250}
                className={styles.chartImage} />
                <p className={styles.chartCaption}><strong>RBI Policy Repo Rate.</strong> Source: RBI</p>
            </div>
             <div className={styles.chartContainer}> {/* Added for layout balance */}
                {/* Placeholder or another relevant small chart */}
            </div>
          </div>

          <p><strong>Fiscal Deficit & Government Spending: </strong></p>
          <ul className={styles.list}>
            <li>
                <strong>Fiscal Deficit Reduction:</strong><br />
                The government aims to decrease the fiscal deficit from <span className={styles.bold}>4.8% of GDP in FY 2024-25 to 4.4% in FY 2025-26</span>, demonstrating a commitment to fiscal consolidation.
            </li>
            <li>
                <strong>Debt-to-GDP Ratio Goal:</strong><br />
                A strategic objective has been set to reduce the central government&apos;;s debt-to-GDP ratio from <span className={styles.bold}>57.1% in FY 2024-25 to 50% by March 2031</span>, promoting long-term fiscal sustainability.
            </li>
          </ul>

          <div className={styles.chartGrid}>
            <div className={styles.chartContainer}>
            <Image
                src="/Resources/indian-market-overview/macro-4.png"
                alt="India Fiscal Deficit as % of GDP"
                width={500}
                height={250}
                className={styles.chartImage} />
            <p className={styles.chartCaption}><strong>Fiscal Deficit Trajectory (% of GDP).</strong> Source: India Budget</p> {/* Shortened Source */}
            </div>
             <div className={styles.chartContainer}> {/* Added for layout balance */}
                {/* Placeholder or another relevant small chart */}
            </div>
          </div>
        </section>

        <section className={styles.section}>
            <h2>Capital Markets: Performance & Volatility - INR Terms</h2>
            <p>
            Indian equity markets have delivered strong returns over the medium to long term, albeit with periods of volatility.
            In INR terms, major indices like the Nifty 50 and BSE Sensex have shown significant growth, with Midcap and Smallcap indices
            often outperforming during bull runs but also exhibiting higher volatility.
            </p>
            {/* INR Charts Grid */}
            <div className={styles.chartGrid}>
                <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-inr-1.png" alt="Capital Market Performance INR - Indices (10 Year)" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Capital Market Performance INR - Indices (Last 10 Years).</strong> Source: Quantwater Analysis</p>
                </div>
                <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-inr-2.png" alt="Capital Market Performance INR - Indices (6 Year)" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Capital Market Performance INR - Indices (Last 6 Years).</strong> Source: Quantwater Analysis</p>
                </div>
                {/* Add other INR chart containers here following the pattern */}
                 <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-inr-3.png" alt="Density Plot Nifty 50 (10 Years, daily returns)" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Density Plot Nifty 50 (10 Years, daily returns).</strong> Source: Quantwater Analysis</p>
                </div>
                <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-inr-6.png" alt="Density Plot Nifty 50 (10 Years, monthly returns)" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Density Plot Nifty 50 (10 Years, monthly returns).</strong> Source: Quantwater Analysis</p>
                </div>
                 <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-inr-4.png" alt="Historical Returns – 10 Years" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Historical Returns: 10 Years (INR).</strong> Source: Quantwater Analysis</p>
                </div>
                <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-inr-5.png" alt="Historical Returns – 6 Years" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Historical Returns: 6 Years (INR).</strong> Source: Quantwater Analysis</p>
                </div>
            </div>

            <h3>Sector Performance - INR Terms</h3>
            <p>
            Sector performance varies, with IT, Banking, and Infrastructure showing distinct trends.
            </p>
             {/* INR Sector Charts Grid */}
            <div className={styles.chartGrid}>
                 <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-inr-7.png" alt="Sectoral Performance (10 Years) (1st Jan 2015 = 100)" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Sectoral Performance (10 Years) (1st Jan 2015 = 100, INR).</strong> Source: Quantwater Analysis</p>
                </div>
                <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-inr-8.png" alt="Sectoral Performance (6 Years) (1st Jan 2019 = 100)" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Sectoral Performance (6 Years) (1st Jan 2019 = 100, INR).</strong> Source: Quantwater Analysis</p>
                </div>
                 {/* Add other INR Sector chart containers here */}
                 <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-inr-9.png" alt="Density Plot Nifty IT (10 Years, monthly returns)" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Density Plot Nifty IT (10 Years, monthly returns, INR).</strong> Source: Quantwater Analysis</p>
                </div>
                 <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-inr-12.png" alt="Density Plot Nifty Infra (10 Years, monthly returns)" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Density Plot Nifty Infra (10 Years, monthly returns, INR).</strong> Source: Quantwater Analysis</p>
                </div>
                <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-inr-10.png" alt="Sector Historical Returns – 10 Years" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Sector Historical Returns – 10 Years (INR).</strong> Source: Quantwater Analysis</p>
                </div>
                <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-inr-11.png" alt="Sector Historical Returns – 6 Years" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Sector Historical Returns – 6 Years (INR).</strong> Source: Quantwater Analysis</p>
                </div>
            </div>

            <h3>Volatility - INR Terms</h3>
            <p>
            Volatility remains a factor, influenced by domestic policy, global events, and fund flows. Understanding historical return patterns
            and volatility characteristics is crucial for asset allocation.
            </p>
             {/* INR Volatility Charts Grid */}
            <div className={styles.chartGrid}>
                 <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-inr-13.png" alt="Annualized Volatility - Indices" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Annualized Volatility - Indices (INR).</strong> Source: Quantwater Analysis</p>
                </div>
                <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-inr-14.png" alt="Annualized Volatility - Sectors" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Annualized Volatility - Sectors (INR).</strong> Source: Quantwater Analysis</p>
                </div>
                <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-inr-15.png" alt="Rolling Volatility (1 month) - Indices" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Rolling Volatility (1 month) - Indices (INR).</strong> Source: Quantwater Analysis</p>
                </div>
                <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-inr-16.png" alt="Rolling Volatility (1 month) - Sectors" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Rolling Volatility (1 month) - Sectors (INR).</strong> Source: Quantwater Analysis</p>
                </div>
            </div>
        </section>

        <section className={styles.section}>
            <h2>Capital Markets: Performance & Volatility - USD Terms</h2>
            <p>
            Indian equity market returns adjusted after taking into consideration currency returns impact, from the perspective of an investor whose base currency is USD or a USD-pegged currency.
            </p>
             {/* USD Charts Grid */}
            <div className={styles.chartGrid}>
                <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-usd-1.png" alt="Capital Market Performance USD - Indices (10 Year)" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Capital Market Performance USD - Indices (10 Year).</strong> Source: Quantwater Analysis</p>
                </div>
                <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-USD-2.png" alt="Capital Market Performance USD - Indices (6 Year)" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Capital Market Performance USD - Indices (6 Year).</strong> Source: Quantwater Analysis</p>
                </div>
                {/* Add other USD chart containers here */}
                 <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-USD-3.png" alt="Density Plot Nifty 50 (10 Years, daily returns, USD)" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Density Plot Nifty 50 (10 Years, daily returns, USD).</strong> Source: Quantwater Analysis</p>
                </div>
                 <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-usd-6.png" alt="Density Plot Nifty 50 (10 Years, monthly returns, USD)" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Density Plot Nifty 50 (10 Years, monthly returns, USD).</strong> Source: Quantwater Analysis</p>
                </div>
                 <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-USD-4.png" alt="Historical Returns – 10 Years (USD)" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Historical Returns – 10 Years (USD).</strong> Source: Quantwater Analysis</p>
                </div>
                <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-usd-5.png" alt="Historical Returns – 6 Years (USD)" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Historical Returns – 6 Years (USD).</strong> Source: Quantwater Analysis</p>
                </div>
            </div>

            <h3>Sector Performance - USD Terms</h3>
            <p>
            Sectoral returns adjusted after taking into consideration currency returns impact, from the perspective of an investor whose base currency is USD or a USD-pegged currency.
            </p>
            {/* USD Sector Charts Grid */}
            <div className={styles.chartGrid}>
                 <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-usd-7.png" alt="Sectoral Performance (10 Years) (1st Jan 2015 = 100, USD)" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Sectoral Performance (10 Years) (1st Jan 2015 = 100, USD).</strong> Source: Quantwater Analysis</p>
                </div>
                <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-usd-8.png" alt="Sectoral Performance (6 Years) (1st Jan 2019 = 100, USD)" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Sectoral Performance (6 Years) (1st Jan 2019 = 100, USD).</strong> Source: Quantwater Analysis</p>
                </div>
                 {/* Add other USD Sector chart containers here */}
                 <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-usd-9.png" alt="Density Plot Nifty IT (10 Years, monthly returns, USD)" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Density Plot Nifty IT (10 Years, monthly returns, USD).</strong> Source: Quantwater Analysis</p>
                </div>
                 <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-usd-12.png" alt="Density Plot Nifty Infra (10 Years, monthly returns, USD)" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Density Plot Nifty Infra (10 Years, monthly returns, USD).</strong> Source: Quantwater Analysis</p>
                </div>
                 <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-usd-10.png" alt="Sector Historical Returns – 10 Years (USD)" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Sector Historical Returns – 10 Years (USD).</strong> Source: Quantwater Analysis</p>
                </div>
                <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-usd-11.png" alt="Sector Historical Returns – 6 Years (USD)" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Sector Historical Returns – 6 Years (USD).</strong> Source: Quantwater Analysis</p>
                </div>
            </div>

            <h3>Volatility - USD Terms</h3>
            <p>
            Volatility adjusted after taking into consideration currency volatility impact, from the perspective of an investor whose base currency is USD or a USD-pegged currency.
            </p>
            {/* USD Volatility Charts Grid */}
            <div className={styles.chartGrid}>
                 <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-usd-13.png" alt="Annualized Volatility - Indices & Sectors (USD)" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Annualized Volatility - Indices & Sectors (USD).</strong> Source: Quantwater Analysis</p>
                </div>
                <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-usd-14.png" alt="Rolling Volatility (1 month) - Indices (USD)" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Rolling Volatility (1 month) - Indices (USD).</strong> Source: Quantwater Analysis</p>
                </div>
                 {/* Note: Original code reused cmp-inr-15. Assuming it should be cmp-usd-15 */}
                 <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-usd-15.png" /* Corrected path */ alt="Rolling Volatility (1 month) - Sectors (USD)" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Rolling Volatility (1 month) - Sectors (USD).</strong> Source: Quantwater Analysis</p>
                </div>
            </div>
        </section>

        <section className={styles.section}>
            <h2>Fixed Income Landscape - Government Bonds</h2>
            <p>
                The Indian fixed income market offers opportunities across government securities (G-Secs) and corporate bonds.
                The G-Sec yield curve is currently upward sloping, reflecting growth expectations. The spread between G-Secs and US Treasuries
                remains significant.
            </p>
            <div className={styles.chartGrid}>
                <div className={styles.chartContainer}>
                <Image
                    src="/Resources/indian-market-overview/FIM-1.png"
                    alt="10Y G-Sec Yield %"
                    width={700}
                    height={400}
                    className={styles.chartImage} />
                <p className={styles.chartCaption}><strong>10Y G-Sec Yield %.</strong> Source: Quantwater Analysis</p>
                </div>
                <div className={styles.chartContainer}>
                <Image
                    src="/Resources/indian-market-overview/FIM-2.png"
                    alt="5Y G-Sec Yield %"
                    width={700}
                    height={400}
                    className={styles.chartImage} />
                <p className={styles.chartCaption}><strong>5Y G-Sec Yield %.</strong> Source: Quantwater Analysis</p>
                </div>
                <div className={styles.chartContainer}>
                <Image
                    src="/Resources/indian-market-overview/FIM-3.png"
                    alt="Yield Curve Trend"
                    width={700}
                    height={400}
                    className={styles.chartImage} />
                <p className={styles.chartCaption}><strong>Yield Curve:</strong> Normal positive slope maintained, suggesting growth expectations. Source: Quantwater Analysis</p>
                </div>
            </div>

            <p><strong>OMO – Impact of RBI bond purchases:</strong></p>
            <ul className={styles.list}>
            <li>RBI conducts Open Market Operations (OMOs) by purchasing/selling government securities in the secondary market to regulate money supply and manage long-term interest rates.</li>
            <li>In April 2025, RBI announced plans to purchase ₹80,000 crore of G-Secs across four ₹20,000 crore tranches (April 3, 8, 22, 29) to enhance market liquidity.</li>
            <li>First auction saw strongest demand for mid-to-long dated securities with 8.24% GS 2033 receiving highest allocation (₹7,660 crore).</li>
            <li>These operations support the current positive yield curve slope and demonstrate <span className={styles.bold}>RBI&apos;;s proactive approach to maintaining orderly market conditions</span> amid changing interest rate environment.</li>
            </ul>

            <div className={styles.chartGrid}>
                <div className={styles.chartContainer}>
                <Image
                    src="/Resources/indian-market-overview/FIM-4.png"
                    alt="India-US 10Y Yield Spread"
                    width={700}
                    height={400}
                    className={styles.chartImage} />
                <p className={styles.chartCaption}><strong>India-US 10Y Yield Spread:</strong> Average spread is 4.5% over last 10 years. Source: Quantwater Analysis</p>
                </div>
                <div className={styles.chartContainer}>
                <Image
                    src="/Resources/indian-market-overview/FIM-5.png"
                    alt="10Y G-Sec - Repo Rate Spread"
                    width={700}
                    height={400}
                    className={styles.chartImage} />
                <p className={styles.chartCaption}><strong>10Y G-Sec - Repo Rate Spread:</strong> Average spread is ~1.0% over last 10 years. Source: Quantwater Analysis</p>
                </div>
            </div>

            <h2>Fixed Income Landscape - Corporate Bonds</h2>
            <p>
                Corporate bond spreads vary based on credit ratings, with upgrades generally outpacing downgrades,
                indicating healthy corporate balance sheets.
            </p>
            <div className={styles.chartGrid}>
                 {/* Single chart, maybe adjust grid columns for this row if needed or center it */}
                 <div className={styles.chartContainer} style={{ gridColumn: '1 / -1', maxWidth: '500px', margin: '0 auto' }}> {/* Example centering */}
                    <Image
                        src="/Resources/indian-market-overview/FIM-6.png"
                        alt="Spread Over 5Y G-Sec yields (bps)"
                        width={350} /* Original width seemed small, adjust if needed */
                        height={150} /* Adjust height based on aspect ratio */
                        className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Spread Over 5Y G-Sec yields (bps).</strong> Credit spreads compensate for credit risk. Source: Quantwater Analysis</p>
                </div>
            </div>

            <h2>Fixed Income Landscape - FDs & Debt Mutual Funds</h2>
            <p>
                For retail investors, Fixed Deposits and Debt Mutual Funds (including Gilt, Corporate Bond,
                and Short Duration funds) are common avenues, with real returns being a key consideration in the inflationary environment.
            </p>
            <div className={styles.chartGrid}>
                <div className={styles.chartContainer}>
                <Image
                    src="/Resources/indian-market-overview/FIM-7.png"
                    alt="FD Interest Rates"
                    width={700}
                    height={400}
                    className={styles.chartImage} />
                <p className={styles.chartCaption}><strong>FD Interest Rates.</strong> Source: Quantwater Analysis</p>
                </div>
                <div className={styles.chartContainer}>
                <Image
                    src="/Resources/indian-market-overview/FIM-8.png"
                    alt="Debt MF Returns (Category 1)"
                    width={700}
                    height={400}
                    className={styles.chartImage} />
                <p className={styles.chartCaption}><strong>Debt MF Returns (e.g., Gilt Funds).</strong> Source: Quantwater Analysis</p>
                </div>
                <div className={styles.chartContainer}>
                <Image
                    src="/Resources/indian-market-overview/FIM-9.png"
                    alt="Debt MF Returns (Category 2)"
                    width={700}
                    height={400}
                    className={styles.chartImage} />
                <p className={styles.chartCaption}><strong>Debt MF Returns (e.g., Short Duration).</strong> Source: Quantwater Analysis</p>
                </div>
                 <div className={styles.chartContainer}>
                <Image
                    src="/Resources/indian-market-overview/FIM-10.png"
                    alt="CPI Inflation vs Returns (Real return view)"
                    width={700}
                    height={400}
                    className={styles.chartImage} />
                <p className={styles.chartCaption}><strong>CPI Inflation vs Returns (Real Return View).</strong> Source: Quantwater Analysis</p>
                </div>
            </div>
        </section>

        <section className={styles.section}>
          <h2>Foreign Investment & Currency</h2>
          <p>
            India remains an attractive destination for Foreign Direct Investment (FDI), particularly in Services, Computer Hardware/Software,
            and Manufacturing. While influenced by global uncertainties, FDI flows have been relatively stable. Foreign Institutional Investor (FII)
            flows into equity markets are more volatile, often reacting to global risk sentiment and interest rate cycles (like US Fed actions).
            The INR/USD exchange rate has shown a gradual depreciation trend over the long term, influenced by factors like oil prices,
            capital flows, and India&apos;;s trade balance.
          </p>
          <div className={styles.chartGrid}>
            <div className={styles.chartContainer}>
              <Image
                src="/Resources/indian-market-overview/FICM-1.png"
                alt="FDI Flows – Sector wise equity inflow from Apr 2000 to Dec 2024"
                width={600}
                height={400}
                className={styles.chartImage} />
              <p className={styles.chartCaption}><strong>FDI Sectoral Inflow (Apr 2000 - Dec 2024).</strong> Total: USD 720B. Source: DPIIT</p>
            </div>
            <div className={styles.chartContainer}>
              <Image
                src="/Resources/indian-market-overview/FICM-2.png"
                alt="FII Flows - Assets Under Custody (AUC)"
                width={600}
                height={400}
                className={styles.chartImage} />
              <p className={styles.chartCaption}><strong>FII Flows - AUC.</strong> Source: Quantwater Analysis</p>
            </div>
            <div className={styles.chartContainer}>
              <Image
                src="/Resources/indian-market-overview/FICM-3.png"
                alt="INR/USD Exchange Rate"
                width={600}
                height={400}
                className={styles.chartImage} />
              <p className={styles.chartCaption}><strong>INR/USD Exchange Rate.</strong> CAGR 3% over last 10 years. Source: Quantwater Analysis</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Emerging Sectors & Opportunities</h2>
          <p>
            Beyond traditional sectors, several emerging areas offer high growth potential, driven by technological advancements and policy support:
          </p>
          <ul className={styles.list}>
            <li><strong>Artificial Intelligence (AI):</strong> Rapidly growing market ($17B projected by 2027), supported by government missions and research centers.</li>
            <li><strong>Electric Vehicles (EV) & Renewable Energy:</strong> Strong CAGR in EVs, significant renewable capacity addition (especially solar), backed by policies like FAME II and PLI schemes.</li>
            <li><strong>Digital Payments & FinTech:</strong> Explosive growth in UPI transactions, burgeoning FinTech ecosystem valued potentially over $150B by 2025.</li>
            <li><strong>Advanced Manufacturing:</strong> Boosted by PLI schemes in electronics, semiconductors, pharma, and textiles, positioning India as a “China+1” hub.</li>
            <li><strong>Digital Public Infrastructure:</strong> Platforms like UPI, Aadhaar, and ONDC enabling large-scale innovation.</li>
          </ul>
          <p>
            India is at the cusp of a <span className={styles.bold}>tech-industrial transformation</span>, with policy push, global realignment, and digital infrastructure as key tailwinds. These sectors will likely dominate <span className={styles.bold}>investment narratives</span> over the medium term.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Risks & Challenges</h2>
          <p>
            While the outlook is positive, investors should be mindful of potential headwinds:
          </p>
          <ul className={styles.list}>
            <li><strong>Global Slowdown:</strong> Economic weakness in the US/EU could impact exports and investment.</li>
            <li><strong>Geopolitical Tensions:</strong> Conflicts and trade disputes can disrupt supply chains and fuel commodity price volatility (especially oil).</li>
            <li><strong>Sticky Inflation:</strong> Persistent core inflation could prompt further RBI tightening, impacting demand.</li>
            <li><strong>Global Rate Hikes:</strong> Actions by major central banks (Fed, ECB) can trigger capital outflows.</li>
            <li><strong>Strengthening Tech & Crypto Regulations:</strong> <span className={styles.bold}>Global momentum around tech regulation is intensifying</span>, particularly in <span className={styles.boldRed}>data privacy</span> — a necessary shift in response to increasing misuse regarding exploitation of personal information. Regulatory scrutiny is also rising in areas like antitrust and AI ethics.</li>
          </ul>
        </section>

        <footer className={styles.articleFooter}>
          <p>
            Disclaimer: This overview is for informational purposes only and does not constitute investment advice.
            Market conditions and projections are subject to change. Data derived from publicly available sources and internal analysis as of March 28, 2025.
          </p>
          <p>
            <br />Spreadsheet with raw data: <a href="https://quantwater.tech/databook.xlsx" target="_blank" rel="noopener noreferrer" className={styles.linkText}>Databook</a>
            <br />Deck: <a href="https://quantwater.tech/IndiaontheRise.pdf" target="_blank" rel="noopener noreferrer" className={styles.linkText}>India on the Rise - Deck</a>
          </p>
        </footer>
      </main>
    </>
  );
}