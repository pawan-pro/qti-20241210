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
            India is surging ahead as <span className={styles.bold}>one of the world's most dynamic and fastest-growing major economies</span>,
            brimming with exciting opportunities! While, like any rapidly evolving market, it navigates certain common growth-related considerations,
            the overall trajectory is undeniably upward. This overview explores the vibrant macroeconomic landscape, stellar market performance,
            key high-growth sectors, and the typical external factors to consider, all shaping India's brilliant market outlook for 2025 and beyond.
          </p>
        </header>

        <section className={styles.section}>
          <h2>Economic Powerhouse: Growth & Drivers</h2>
          <p>
            India's economic engine is firing on all cylinders, with GDP growth projected to maintain an impressive <span className={styles.bold}>6-7%</span> for 2025! This remarkable resilience
            is powered by <span className={styles.bold}>vibrant domestic demand, a rapidly accelerating digital revolution, and proactive government
            initiatives</span> like <span className={styles.bold}>'Atmanirbhar Bharat'</span> (Self-reliant India) and <span className={styles.bold}>'Make in India'</span>.
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
                As per World Bank's Long-Term Growth Modeling (LTGM), India's long-term GDP growth rate is projected to stabilize around an encouraging <span className={styles.bold}>6.5% by 2035</span>, before gradually maturing to <span className={styles.bold}>5.5% by 2050</span>, reflecting economic development and demographic evolution.
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
            The dynamic services sector continues to lead the charge in GDP contribution, particularly Financial Services,
            Real Estate, and Professional Services. Meanwhile, Manufacturing and Construction are making powerful strides,
            significantly boosted by strategic infrastructure investments.
          </p>
          <p>Key sectors spearheading this incredible economic momentum include:</p>
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
            <strong>Inflation Trends: </strong>The Reserve Bank of India (RBI) is skillfully navigating the inflationary landscape, with both headline
            and core inflation showing encouraging signs of moderation. This proactive management is laying a strong foundation for sustained growth.
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
                The Reserve Bank of India (RBI) has projected the Consumer Price Index (CPI) inflation to average a manageable <span className={styles.bold}>4.8%</span> for the fiscal year 2024-25 (FY25) and to moderate further to an optimal <span className={styles.bold}>4.2%</span> for FY26.</p>
            </div>
            <div className={styles.chartContainer}>
                <Image
                src="/Resources/indian-market-overview/macro-2.png"
                alt="India Inflation Trends (Core vs Headline)"
                width={1000}
                height={500}
                className={styles.chartImage} />
                <p className={styles.chartCaption}><strong>Core vs Headline Inflation Trends.</strong> Source: MoSPI, PIB</p>
            </div>
          </div>

          <p><strong>Interest Rates & RBI Policy Stance: </strong></p>
          <ul className={styles.list}>
            <li>
                <strong>Recent Rate Cut:</strong><br />
                On February 7, 2025, the Reserve Bank of India (RBI) reduced the repo rate by 25 basis points, bringing it down from 6.50% to 6.25%, aiming to further energize economic growth as inflation eases.
            </li>
            <li>
                <strong>Neutral Policy Stance:</strong><br />
                Despite the rate cut, the RBI maintained a <span className={styles.bold}>'neutral'</span> policy stance, prudently balancing its focus on ensuring inflation remains comfortably aligned with targets while championing robust growth.
            </li>
            <li>
                <strong>Anticipated Future Rate Cuts:</strong><br />
                Market analysts project further rate cuts in 2025, with expectations of an additional <span className={styles.bold}>50 basis points reduction by August</span>, as the RBI continues to fine-tune its strategy to optimally balance vibrant growth with stable inflation.
            </li>
            <li>
                <strong>Mid to Long-Term Projections (2027-2031):</strong><br />
                While specific forecasts for the RBI's policy rates beyond 2026 are data-dependent, the central bank's actions will undoubtedly be guided by positive factors such as <span className={styles.bold}>domestic inflation trends, economic growth rates, and global financial conditions, ensuring stability and progress.</span>
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
                The government aims to decrease the fiscal deficit from <span className={styles.bold}>4.8% of GDP in FY 2024-25 to an even healthier 4.4% in FY 2025-26</span>, showcasing a strong commitment to prudent fiscal management and long-term stability.
            </li>
            <li>
                <strong>Debt-to-GDP Ratio Goal:</strong><br />
                A strategic objective has been set to reduce the central government's debt-to-GDP ratio from <span className={styles.bold}>57.1% in FY 2024-25 to a more sustainable 50% by March 2031</span>, paving the way for enhanced long-term fiscal health and resilience.
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
            <p className={styles.chartCaption}><strong>Fiscal Deficit Trajectory (% of GDP).</strong> Source: India Budget</p>
            </div>
             <div className={styles.chartContainer}> {/* Added for layout balance */}
                {/* Placeholder or another relevant small chart */}
            </div>
          </div>
        </section>

        <section className={styles.section}>
            <h2>Capital Markets: Performance & Volatility - INR Terms</h2>
            <p>
            Indian equity markets have showcased impressive strength, delivering robust returns over the medium to long term.
            While, characteristic of such dynamic growth markets, periods of volatility are natural, the underlying trend has been decidedly positive.
            In INR terms, major indices like the Nifty 50 and BSE Sensex have shown significant growth. Excitingly, Midcap and Smallcap indices
            have often led the charge during bull runs, offering significant upside, a common trait accompanied by higher dynamism in these segments.
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
            Sector performance is vibrant and varied, with IT, Banking, and Infrastructure showcasing distinct and promising trends.
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
            Volatility, a natural companion to high-growth markets, is primarily influenced by global currents, fund flows, and policy shifts.
            A clear understanding of these dynamic patterns and historical return characteristics is key to strategic asset allocation, allowing investors to harness the market's energy.
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
            For international investors, India's equity markets present a compelling picture even when viewed in USD terms,
            showcasing the fundamental strength of the growth story beyond currency fluctuations.
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
            Sectoral performance in USD terms further underscores the diverse opportunities available,
            highlighting robust growth across various segments for global investors.
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
            When viewed in USD, market volatility reflects both domestic dynamism and the typical interplay of exchange rates common in global investments,
            offering a comprehensive picture for international participants.
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
                 <div className={styles.chartContainer}>
                    <Image src="/Resources/indian-market-overview/cmp-usd-15.png" alt="Rolling Volatility (1 month) - Sectors (USD)" width={1000} height={500} className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Rolling Volatility (1 month) - Sectors (USD).</strong> Source: Quantwater Analysis</p>
                </div>
            </div>
        </section>

        <section className={styles.section}>
            <h2>Fixed Income Landscape - Government Bonds</h2>
            <p>
                The Indian fixed income market presents attractive opportunities, particularly in government securities (G-Secs) and corporate bonds.
                The G-Sec yield curve, currently upward sloping, positively signals strong growth expectations. Moreover, the significant spread between G-Secs and US Treasuries
                offers compelling relative value.
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
                <p className={styles.chartCaption}><strong>Yield Curve:</strong> Normal positive slope maintained, suggesting exciting growth expectations. Source: Quantwater Analysis</p>
                </div>
            </div>

            <p><strong>OMO – Impact of RBI bond purchases:</strong></p>
            <ul className={styles.list}>
            <li>RBI conducts Open Market Operations (OMOs) by purchasing/selling government securities in the secondary market to skillfully regulate money supply and manage long-term interest rates.</li>
            <li>In April 2025, RBI announced plans to purchase ₹80,000 crore of G-Secs across four ₹20,000 crore tranches (April 3, 8, 22, 29) to enhance market liquidity, showcasing its proactive stance.</li>
            <li>The first auction saw strong demand for mid-to-long dated securities, with the 8.24% GS 2033 receiving the highest allocation (₹7,660 crore), indicating market confidence.</li>
            <li>These operations effectively support the positive yield curve slope and brilliantly demonstrate <span className={styles.bold}>RBI's proactive and adept management in maintaining orderly market conditions</span>, even as the global interest rate environment evolves.</li>
            </ul>

            <div className={styles.chartGrid}>
                <div className={styles.chartContainer}>
                <Image
                    src="/Resources/indian-market-overview/FIM-4.png"
                    alt="India-US 10Y Yield Spread"
                    width={700}
                    height={400}
                    className={styles.chartImage} />
                <p className={styles.chartCaption}><strong>India-US 10Y Yield Spread:</strong> Average spread is an attractive 4.5% over last 10 years. Source: Quantwater Analysis</p>
                </div>
                <div className={styles.chartContainer}>
                <Image
                    src="/Resources/indian-market-overview/FIM-5.png"
                    alt="10Y G-Sec - Repo Rate Spread"
                    width={700}
                    height={400}
                    className={styles.chartImage} />
                <p className={styles.chartCaption}><strong>10Y G-Sec - Repo Rate Spread:</strong> Average spread is a healthy ~1.0% over last 10 years. Source: Quantwater Analysis</p>
                </div>
            </div>

            <h2>Fixed Income Landscape - Corporate Bonds</h2>
            <p>
                The corporate bond market is also thriving, with credit spreads reflecting a healthy landscape
                where upgrades are generally outpacing downgrades – a clear indicator of robust corporate financial health.
            </p>
            <div className={styles.chartGrid}>
                 <div className={styles.chartContainer} style={{ gridColumn: '1 / -1', maxWidth: '500px', margin: '0 auto' }}>
                    <Image
                        src="/Resources/indian-market-overview/FIM-6.png"
                        alt="Spread Over 5Y G-Sec yields (bps)"
                        width={350}
                        height={150}
                        className={styles.chartImage} />
                    <p className={styles.chartCaption}><strong>Spread Over 5Y G-Sec yields (bps).</strong> Credit spreads offer attractive compensation for credit risk. Source: Quantwater Analysis</p>
                </div>
            </div>

            <h2>Fixed Income Landscape - FDs & Debt Mutual Funds</h2>
            <p>
                For retail investors, Fixed Deposits and Debt Mutual Funds (including Gilt, Corporate Bond,
                and Short Duration funds) offer accessible and popular avenues for investment. In the current environment, focusing on real returns provides a smart strategy to grow wealth.
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
            India continues to shine as a magnet for Foreign Direct Investment (FDI), particularly in Services, Computer Hardware/Software,
            and Manufacturing. Demonstrating remarkable resilience, FDI flows have remained impressively stable, even amidst the backdrop of global uncertainties.
            Foreign Institutional Investor (FII) flows into equity markets, while naturally more dynamic and responsive to global sentiment and interest rate shifts (such as US Fed actions),
            reflect India's integral role in the global financial ecosystem. This responsiveness is typical for sought-after emerging markets.
            The INR/USD exchange rate has experienced a gradual, managed depreciation over the long term, a common characteristic for rapidly growing economies balancing global trade,
            capital flows, and commodity prices (like oil). This managed movement often supports export competitiveness.
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
            The excitement truly builds when we look beyond traditional sectors! India is a hotbed for emerging industries
            bursting with high-growth potential, supercharged by cutting-edge technological advancements and visionary policy support:
          </p>
          <ul className={styles.list}>
            <li><strong>Artificial Intelligence (AI):</strong> A rapidly growing market (an astounding $17B projected by 2027), strongly supported by government missions and world-class research centers.</li>
            <li><strong>Electric Vehicles (EV) & Renewable Energy:</strong> Phenomenal CAGR in EVs, significant renewable capacity addition (especially solar), backed by forward-thinking policies like FAME II and PLI schemes.</li>
            <li><strong>Digital Payments & FinTech:</strong> Explosive growth in UPI transactions, with a burgeoning FinTech ecosystem valued potentially over an incredible $150B by 2025.</li>
            <li><strong>Advanced Manufacturing:</strong> Boosted by transformative PLI schemes in electronics, semiconductors, pharma, and textiles, positioning India as a key “China+1” global manufacturing hub.</li>
            <li><strong>Digital Public Infrastructure:</strong> Groundbreaking platforms like UPI, Aadhaar, and ONDC enabling large-scale innovation and citizen empowerment.</li>
          </ul>
          <p>
            India stands at the thrilling cusp of a <span className={styles.bold}>monumental tech-industrial transformation</span>, propelled by a strong policy push, favorable global realignments, and world-class digital infrastructure as key tailwinds. These vibrant sectors are set to <span className={styles.bold}>dominate investment conversations and drive exceptional growth</span> in the coming years.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Risks & Considerations: Navigating the Path Forward</h2>
          <p>
            While the Indian growth story is incredibly compelling, like all dynamic emerging economies, it's prudent to be aware of certain external factors and common growth-related considerations that could influence the journey:
          </p>
          <ul className={styles.list}>
            <li><strong>External Economic Climate:</strong> Like many globally integrated economies, shifts in major economic blocs like the US/EU could influence export and investment trajectories. This is a common consideration for nations participating actively in global trade.</li>
            <li><strong>Global Geopolitical Landscape:</strong> International events and trade dynamics, which are outside any single nation's control, can introduce volatility, particularly in commodity markets (like oil). Navigating these global currents is a shared experience for emerging markets.</li>
            <li><strong>Inflation Management Dynamics:</strong> Managing inflation is an ongoing focus for most high-growth economies globally. Should inflationary pressures, often influenced by international factors, persist more than anticipated, the RBI, like other central banks, is well-equipped to adjust its stance. India's proactive approach to balancing growth with price stability is a key strength.</li>
            <li><strong>International Monetary Policy Shifts:</strong> Decisions by major global central banks (e.g., Fed, ECB) naturally influence international capital flows. This is a standard feature of interconnected financial markets and a common factor for emerging economies attracting global investment, reflecting their integration into the world economy.</li>
            <li><strong>Evolving Global Regulatory Standards:</strong> Across the world, there's a healthy and necessary evolution in tech and crypto regulations, with global momentum around tech regulation intensifying, particularly in <span className={styles.boldRed}>disinformation and data privacy</span> — a necessary shift in response to increasing misuse regarding exploitation of personal information and abuse, responsible AI, market integrity and ethics. India is proactively aligning with these <span className={styles.bold}>global best practices to foster sustainable innovation and build a trusted digital ecosystem</span> – a positive step that enhances long-term growth prospects in these cutting-edge sectors.</li>
          </ul>
        </section>

        <section className={styles.section}>
            <h2>Conclusion: Embracing the India Opportunity with Confidence</h2>
            <p>
                India shines as an <span className={styles.bold}>exceptionally compelling long-term investment destination</span>, powered by robust macroeconomic fundamentals, advantageous demographics, continuous structural reforms, and a vibrant, rapidly expanding digital economy. Its remarkable resilience, especially in the face of global uncertainties, powerfully underscores the strength of its domestic market and the astuteness of its policy framework.
            </p>
            <p>
                A universe of exciting opportunities awaits across diverse sectors, particularly those benefiting from the digital transformation, infrastructure development, green energy transition, and advanced manufacturing push. India's capital markets offer the prospect of attractive returns in both INR and USD terms, and like all thriving markets, exhibit a natural dynamism influenced by both domestic energy and global trends. The fixed income market provides excellent diversification avenues, with careful attention to inflation and credit spreads offering rewarding prospects.
            </p>
            <p>
                To fully harness this potential, investors will benefit from acknowledging the external factors and common emerging market characteristics discussed. Navigating the global economic climate, geopolitical shifts, and the evolving regulatory scene (a global phenomenon) with a <span className={styles.bold}>well-informed and selective strategy will be key</span>.
            </p>
            <p>
                Overall, the <span className={styles.bold}>powerful structural drivers fueling India's ascent are firmly in place, painting a bright future</span>. For investors with a strategic long-term vision and a sound approach to navigating dynamic markets, India stands out as a <span className={styles.bold}>premier opportunity within global market portfolios</span>. Embracing its vibrant energy and navigating its journey with insight will be key to unlocking extraordinary potential.
            </p>
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