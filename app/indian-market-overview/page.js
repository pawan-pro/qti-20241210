// app/indian-market-overview/page.js
import Image from 'next/image';
import styles from './page.module.css';
// Link import remains removed

export default function IndianMarketOverviewPage() {
  return (
    <main className={styles.articleContainer}>
      <header className={styles.articleHeader}>
        <h1>Indian Market Overview - 2025 & Beyond</h1>
        <p className={styles.publishDate}>Analysis as of: 28th March 2025</p>
        {/* Line 14 Correction */}
        <p className={styles.intro}>
          India continues its trajectory as one of the world's fastest-growing major economies,
          presenting significant opportunities alongside evolving challenges. This overview delves
          into the macroeconomic landscape, market performance, key sectors, and potential risks
          shaping the Indian market outlook for 2025 and the years ahead.
        </p>
      </header>

      <section className={styles.section}>
        <h2>Economic Powerhouse: Growth & Drivers</h2>
         {/* Line 25 & 27 Corrections */}
        <p>
          India's GDP growth is projected to remain robust, estimated between 6-7% for 2025. This resilience
          is fueled by strong domestic demand, accelerating digital transformation, and supportive government
          initiatives like 'Atmanirbhar Bharat' (Self-reliant India) and 'Make in India'.
        </p>
        <div className={styles.chartContainer}>
          <Image
            src="/images/indian-market/real-gdp-growth-chart.png" // ** DOUBLE CHECK PATH **
            alt="India Real GDP Growth Chart (Annual % change)"
            width={800}
            height={450}
            className={styles.chartImage}
          />
          <p className={styles.chartCaption}>
            Historical and Projected Real GDP Growth. Source: IMF, RBI, World Bank (Illustrative)
          </p>
        </div>
        <p>
          The services sector remains the largest contributor to GDP, particularly Financial Services,
          Real Estate, and Professional Services. Manufacturing and Construction also play vital roles,
          bolstered by infrastructure spending.
        </p>
        {/* Optional: Add GDP Contribution Chart */}
        {/* ... */}
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
         {/* Line 65 Correction */}
        <p>
          Managing inflation remains a key focus for the Reserve Bank of India (RBI). While headline inflation
          has shown signs of moderation, core inflation requires monitoring. The RBI recently cut the repo rate
          to 6.25% (as of Feb 2025 in the report) to stimulate growth, maintaining a 'neutral' stance aimed at aligning inflation
          with its target while supporting economic activity. Further rate adjustments are anticipated depending on
          inflation trends and global conditions.
        </p>
        <div className={styles.chartGrid}>
           {/* First Image Container & Image */}
           <div className={styles.chartContainer}>
             <Image
               src="/images/indian-market/inflation-trends-chart.png" // ** DOUBLE CHECK PATH **
               alt="India Inflation Trends (CPI & WPI)"
               width={600}
               height={350}
               className={styles.chartImage}
             />
             <p className={styles.chartCaption}>CPI and WPI Inflation Trends. Source: Quantwater Analysis (Illustrative)</p>
           </div>
           {/* Second Image Container & Image */}
           <div className={styles.chartContainer}>
             <Image
               src="/images/indian-market/rbi-repo-rate-chart.png" // ** DOUBLE CHECK PATH **
               alt="RBI Repo Rate Chart"
               width={600}
               height={350}
               className={styles.chartImage}
             />
             <p className={styles.chartCaption}>RBI Policy Repo Rate. Source: RBI (Illustrative)</p>
           </div>
         </div>
        <p>
          On the fiscal front, the government is committed to consolidation, aiming to reduce the fiscal deficit
          progressively. The FY 2025-26 budget projects a deficit of 4.4% of GDP, down from 4.8% in the previous year.
          Significant capital expenditure is earmarked for infrastructure development, financed partly through
          market borrowings. Reducing the debt-to-GDP ratio remains a long-term strategic goal.
        </p>
         <div className={styles.chartContainer}>
          <Image
            src="/images/indian-market/fiscal-deficit-chart.png" // ** DOUBLE CHECK PATH **
            alt="India Fiscal Deficit as % of GDP"
            width={700}
            height={400}
            className={styles.chartImage}
          />
          <p className={styles.chartCaption}>Fiscal Deficit Trajectory. Source: Government Data (Illustrative)</p>
        </div>
      </section>

       <section className={styles.section}>
        <h2>Capital Markets: Performance & Volatility</h2>
        <p>
          Indian equity markets have delivered strong returns over the medium to long term, albeit with periods of volatility.
          In INR terms, major indices like the Nifty 50 and BSE Sensex have shown significant growth, with Midcap and Smallcap indices
          often outperforming during bull runs but also exhibiting higher volatility. Sector performance varies, with IT, Banking,
          and Infrastructure showing distinct trends. When viewed in USD terms, returns are moderated by currency fluctuations,
          highlighting the importance of the INR/USD exchange rate for foreign investors.
        </p>
         <div className={styles.chartGrid}>
           <div className={styles.chartContainer}>
             <Image
               src="/images/indian-market/cmp-inr-1.png" // ** DOUBLE CHECK PATH **
               alt="Capital Market Performance INR - Indices (10 Year)"
               width={600}
               height={350}
               className={styles.chartImage}
             />
           </div>
           <div className={styles.chartContainer}>
             <Image
               src="/images/indian-market/cmp-inr-2.png" // ** DOUBLE CHECK PATH **
               alt="Capital Market Performance INR - Indices (6 Year)"
               width={600}
               height={350}
               className={styles.chartImage}
             />
           </div>
         </div>
         <p>
           Volatility remains a factor, influenced by domestic policy, global events, and fund flows. Understanding historical return patterns
           and volatility characteristics is crucial for asset allocation.
         </p>
      </section>

      <section className={styles.section}>
         <h2>Fixed Income Landscape</h2>
         <p>
           The Indian fixed income market offers opportunities across government securities (G-Secs) and corporate bonds.
           The G-Sec yield curve is currently upward sloping, reflecting growth expectations. The spread between G-Secs and US Treasuries
           remains significant. Corporate bond spreads vary based on credit ratings, with upgrades generally outpacing downgrades,
           indicating healthy corporate balance sheets. For retail investors, Fixed Deposits and Debt Mutual Funds (including Gilt, Corporate Bond,
           and Short Duration funds) are common avenues, with real returns being a key consideration in the inflationary environment.
         </p>
         <div className={styles.chartContainer}>
          <Image
            src="/images/indian-market/yield-curve-trend.png" // ** DOUBLE CHECK PATH **
            alt="India G-Sec Yield Curve Trend"
            width={700}
            height={400}
            className={styles.chartImage}
          />
           <p className={styles.chartCaption}>G-Sec Yield Curve Dynamics. Source: Quantwater Analysis (Illustrative)</p>
        </div>
      </section>

       <section className={styles.section}>
         <h2>Foreign Investment & Currency</h2>
         {/* Line 179 Correction */}
         <p>
           India remains an attractive destination for Foreign Direct Investment (FDI), particularly in Services, Computer Hardware/Software,
           and Manufacturing. While influenced by global uncertainties, FDI flows have been relatively stable. Foreign Institutional Investor (FII)
           flows into equity markets are more volatile, often reacting to global risk sentiment and interest rate cycles (like US Fed actions).
           The INR/USD exchange rate has shown a gradual depreciation trend over the long term, influenced by factors like oil prices,
           capital flows, and India's trade balance.
         </p>
         <div className={styles.chartGrid}>
           <div className={styles.chartContainer}>
            <Image
              src="/images/indian-market/fdi-sector-inflow-chart.png" // ** DOUBLE CHECK PATH **
              alt="FDI Sector-wise Equity Inflow Chart"
              width={600}
              height={400}
              className={styles.chartImage}
            />
             <p className={styles.chartCaption}>Sectoral FDI Inflows (Apr 2000 - Dec 2024). Source: DPIIT (Illustrative)</p>
          </div>
           <div className={styles.chartContainer}>
            <Image
              src="/images/indian-market/inr-usd-exchange-rate-chart.png" // ** DOUBLE CHECK PATH **
              alt="INR/USD Exchange Rate Trend"
              width={600}
              height={400}
              className={styles.chartImage}
            />
            <p className={styles.chartCaption}>INR/USD Exchange Rate (10 Years). Source: Quantwater Analysis (Illustrative)</p>
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
           {/* Line 215 Correction */}
          <li><strong>Advanced Manufacturing:</strong> Boosted by PLI schemes in electronics, semiconductors, pharma, and textiles, positioning India as a "China+1" hub.</li>
          <li><strong>Digital Public Infrastructure:</strong> Platforms like UPI, Aadhaar, and ONDC enabling large-scale innovation.</li>
        </ul>
        <p>
          Investment opportunities exist across public and private equity, government and corporate bonds, and specialized funds focusing on these themes.
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
          <li><strong>Regulatory Landscape:</strong> Evolving regulations in tech (data privacy, AI ethics, antitrust) and crypto require careful navigation.</li>
        </ul>
      </section>

      <footer className={styles.articleFooter}>
        <p>
          Disclaimer: This overview is for informational purposes only and does not constitute investment advice.
          Market conditions and projections are subject to change. Data derived from publicly available sources and internal analysis as of March 28, 2025.
        </p>
      </footer>
    </main>
  );
}