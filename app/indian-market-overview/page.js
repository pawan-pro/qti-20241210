// app/indian-market-overview/page.js
import Image from 'next/image';
import styles from './page.module.css';

export default function IndianMarketOverviewPage() {
  return (
    <><main className={styles.articleContainer}>
      <header className={styles.articleHeader}>
        <h1>Indian Market Overview - 2025 & Beyond</h1>
        <p className={styles.publishDate}>Analysis as of: 28th March 2025</p>
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
          India&apos;s GDP growth is projected to remain robust, estimated between <span className={styles.bold}>6-7%</span>for 2025. This resilience
          is fueled by strong domestic demand, accelerating digital transformation, and supportive government
          initiatives like <span className={styles.bold}>&apos;Atmanirbhar Bharat</span>&apos; (Self-reliant India) and &apos;<span className={styles.bold}>Make in India</span>&apos;.
        </p>
        <div className={styles.chartContainer}>
          <Image
            src="/Resources/indian-market-overview/real-gdp-growth.png"
            alt="India Real GDP Growth Chart (Annual % change)"
            width={800}
            height={450}
            className={styles.chartImage} />
          <p className={styles.chartCaption}>
            Real GDP growth (Annual % change). Source: IMF, RBI, World Bank<br /> <br />
            As per World Bank&apos;s Long-Term Growth Modeling (LTGM), India&apos;s long-term GDP growth rate is projected to stabilize around <span className={styles.bold}>6.5% by 2035</span>, before gradually slowing to <span className={styles.bold}>5.5% by 2050</span>, reflecting economic maturation and demographic shifts.
          </p>
        </div>
        <div className={styles.chartContainer}>
          <Image
            src="/Resources/indian-market-overview/gdp-contribution.png"
            alt="GDP Contribution (2023-2024 %)"
            width={800}
            height={450}
            className={styles.chartImage} />
          <p className={styles.chartCaption}>
            GDP Contribution (2023-2024 %). Source: MoSPI.
          </p>
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
          Managing inflation remains a key focus for the Reserve Bank of India (RBI). While headline inflation
          has shown signs of moderation, core inflation requires monitoring.
        </p>
        <div className={styles.chartGrid}>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/inflation-trends1.png"
              alt="India Inflation Trends (CPI & WPI)"
              width={600}
              height={350}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>
              CPI and WPI Inflation Trends. Source: MoSPI, PIB<br /> <br />
              The Reserve Bank of India (RBI) has projected the Consumer Price Index (CPI) inflation to average <span className={styles.bold}>4.8%</span> for the fiscal year 2024-25 (FY25) and to moderate to <span className={styles.bold}>4.2%</span> for FY26.
            </p>
          </div>
        </div>
        <div className={styles.chartGrid}>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/inflation-trends2.png"
              alt="India Inflation Trends (CPI & WPI)"
              width={600}
              height={350}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>
              CPI and WPI Inflation Trends. Source: MOSPI, PIB<br />
            </p>
          </div>
        </div>
        <p>
          The RBI recently cut the repo rate
          to 6.25% (as of Feb 2025 in the report) to stimulate growth, maintaining a &apos;neutral&apos; stance aimed at aligning inflation
          with its target while supporting economic activity. Further rate adjustments are anticipated depending on
          inflation trends and global conditions.
        </p>
        <div className={styles.chartContainer}>
          <Image
            src="/Resources/indian-market-overview/rbi-repo-rate.png"
            alt="RBI Repo Rate Chart"
            width={600}
            height={350}
            className={styles.chartImage} />
          <p className={styles.chartCaption}>RBI Policy Repo Rate. Source: RBI </p>
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
          src="/Resources/indian-market-overview/fiscal-deficit.png"
          alt="India Fiscal Deficit as % of GDP"
          width={500}
          height={250}
          className={styles.chartImage} />
        <p className={styles.chartCaption}>Fiscal Deficit Trajectory. Source: Government Data </p>
      </div>
    </section><section className={styles.section}>
        <h2>Capital Markets: Performance & Volatility - INR</h2>
        <p>
          Indian equity markets have delivered strong returns over the medium to long term, albeit with periods of volatility.
          In INR terms, major indices like the Nifty 50 and BSE Sensex have shown significant growth, with Midcap and Smallcap indices
          often outperforming during bull runs but also exhibiting higher volatility.
        </p>
        <div className={styles.chartGrid}>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-inr-1.png"
              alt="Capital Market Performance INR - Indices (10 Year)"
              width={1000}
              height={500}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Capital Market Performance INR - Indices (10 Year) </p>
          </div>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-inr-2.png"
              alt="Capital Market Performance INR - Indices (6 Year)"
              width={1000}
              height={500}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Capital Market Performance INR - Indices (6 Year) </p>

          </div>

          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-inr-4.png"
              alt="Historical Returns – 10 Years"
              width={1000}
              height={500}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Historical Returns – 10 Years </p>

          </div>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-inr-5.png"
              alt="Historical Returns – 6 Years"
              width={1000}
              height={500}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Historical Returns – 6 Years </p>

          </div>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-inr-3.png"
              alt="Density Plot Nifty 50 (10 Years, daily returns)"
              width={1000}
              height={500}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Density Plot Nifty 50 (10 Years, daily returns)</p>

          </div>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-inr-6.png"
              alt="Density Plot Nifty 50 (10 Years, monthly returns)"
              width={1000}
              height={500}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Density Plot Nifty 50 (10 Years, monthly returns)</p>
          </div>
        </div>
        <p>
          Sector performance varies, with IT, Banking,
          and Infrastructure showing distinct trends. When viewed in USD terms, returns are moderated by currency fluctuations,
          highlighting the importance of the INR/USD exchange rate for foreign investors.
        </p>
        <div className={styles.chartGrid}>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-inr-7.png"
              alt="Sectoral Performance (10 Years) (1st Jan 2015 = 100) "
              width={1000}
              height={500}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Sectoral Performance (10 Years) (1st Jan 2015 = 100) </p>

          </div>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-inr-8.png"
              alt="Sectoral Performance (6 Years) (1st Jan 2019 = 100)"
              width={600}
              height={350}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Sectoral Performance (6 Years) (1st Jan 2019 = 100)</p>

          </div>

          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-inr-10.png"
              alt="Historical Returns – 10 Years"
              width={600}
              height={350}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Historical Returns – 10 Years</p>

          </div>

          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-inr-9.png"
              alt="Density Plot Nifty IT (10 Years, monthly returns)"
              width={600}
              height={350}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Density Plot Nifty IT (10 Years, monthly returns)</p>

          </div>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-inr-11.png"
              alt="Historical Returns – 6 Years"
              width={600}
              height={350}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Historical Returns – 6 Years</p>

          </div>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-inr-12.png"
              alt="Density Plot Nifty Infra (10 Years, monthly returns)"
              width={600}
              height={350}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Density Plot Nifty Infra (10 Years, monthly returns)</p>
          </div>
        </div>
        <p>
          Volatility remains a factor, influenced by domestic policy, global events, and fund flows. Understanding historical return patterns
          and volatility characteristics is crucial for asset allocation.
        </p>
        <div className={styles.chartGrid}>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-inr-13.png"
              alt="Annualized Volatility - Indices"
              width={600}
              height={350}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Annualized Volatility - Indices</p>
          </div>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-inr-14.png"
              alt="Annualized Volatility - Sectors"
              width={600}
              height={350}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Annualized Volatility - Sectors</p>
          </div>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-inr-15.png"
              alt="Rolling Volatility (1 month) - Indices"
              width={600}
              height={350}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Rolling Volatility (1 month) - Indices</p>
          </div>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-inr-16.png"
              alt="Rolling Volatility (1 month) - Sectors"
              width={600}
              height={350}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Rolling Volatility (1 month) - Sectors</p>
          </div>
        </div>
      </section><section className={styles.section}>
        <h2>Capital Markets: Performance & Volatility - USD</h2>
        <p>
          Indian equity market returns adjusted after taking into consideration currency returns impact, from the perspective of an investor whose base currency is USD or a USD-pegged currency.
        </p>
        <div className={styles.chartGrid}>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-usd-1.png"
              alt="Capital Market Performance USD - Indices (10 Year)"
              width={600}
              height={350}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Capital Market Performance USD - Indices (10 Year)</p>
          </div>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-USD-2.png"
              alt="Capital Market Performance USD - Indices (6 Year)"
              width={600}
              height={350}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Capital Market Performance USD - Indices (6 Year)</p>
          </div>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-USD-3.png"
              alt="Density Plot Nifty 50 (10 Years, daily returns)"
              width={600}
              height={350}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Density Plot Nifty 50 (10 Years, daily returns)</p>
          </div>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-USD-4.png"
              alt="Historical Returns – 10 Years"
              width={600}
              height={350}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Historical Returns – 10 Years</p>
          </div>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-usd-5.png"
              alt="Historical Returns – 6 Years"
              width={600}
              height={350}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Historical Returns – 6 Years</p>
          </div>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-usd-6.png"
              alt="Density Plot Nifty 50 (10 Years, monthly returns)"
              width={600}
              height={350}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Density Plot Nifty 50 (10 Years, monthly returns)</p>
          </div>
        </div>
        <p>
          Sectoral returns adjusted after taking into consideration currency returns impact, from the perspective of an investor whose base currency is USD or a USD-pegged currency.
        </p>
        <div className={styles.chartGrid}>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-usd-7.png"
              alt="Sectoral Performance (10 Years) (1st Jan 2015 = 100) "
              width={600}
              height={350}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Sectoral Performance (10 Years) (1st Jan 2015 = 100)</p>
          </div>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-usd-8.png"
              alt="Sectoral Performance (6 Years) (1st Jan 2019 = 100)"
              width={600}
              height={350}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Sectoral Performance (6 Years) (1st Jan 2019 = 100)</p>
          </div>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-usd-9.png"
              alt="Density Plot Nifty IT (10 Years, monthly returns)"
              width={600}
              height={350}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Density Plot Nifty IT (10 Years, monthly returns)</p>
          </div>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-usd-10.png"
              alt="Historical Returns – 10 Years"
              width={600}
              height={350}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Historical Returns – 10 Years</p>
          </div>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-usd-11.png"
              alt="Historical Returns – 6 Years"
              width={600}
              height={350}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Historical Returns – 6 Years</p>
          </div>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-usd-12.png"
              alt="Density Plot Nifty Infra (10 Years, monthly returns)"
              width={600}
              height={350}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Density Plot Nifty Infra (10 Years, monthly returns)</p>
          </div>
        </div>
        <p>
          Volatility adjusted after taking into consideration currency volatility impact, from the perspective of an investor whose base currency is USD or a USD-pegged currency.
        </p>
        <div className={styles.chartGrid}>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-usd-13.png"
              alt="Annualized Volatility - Indices & Sectors"
              width={600}
              height={350}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Annualized Volatility - Indices & Sectors</p>
          </div>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-usd-14.png"
              alt="Rolling Volatility (1 month) - Indices "
              width={600}
              height={350}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Rolling Volatility (1 month) - Indices</p>
          </div>
          <div className={styles.chartContainer}>
            <Image
              src="/Resources/indian-market-overview/cmp-inr-15.png"
              alt="Rolling Volatility (1 month) - Sectors"
              width={600}
              height={350}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Rolling Volatility (1 month) - Sectors</p>
          </div>
        </div>
      </section><section className={styles.section}>
        <h2>Fixed Income Landscape - Government Bonds</h2>
        <p>
          The Indian fixed income market offers opportunities across government securities (G-Secs) and corporate bonds.
          The G-Sec yield curve is currently upward sloping, reflecting growth expectations. The spread between G-Secs and US Treasuries
          remains significant.
        </p>
        <div className={styles.chartContainer}>
          <Image
            src="/Resources/indian-market-overview/FIM-1.png"
            alt="10Y & 5Y G-Sec Yield"
            width={700}
            height={400}
            className={styles.chartImage} />
          <p className={styles.chartCaption}>G-Sec Yield Curve Dynamics. Source: Quantwater Analysis </p>
        </div>
        <div className={styles.chartContainer}>
          <Image
            src="/Resources/indian-market-overview/FIM-2.png"
            alt="10Y & 5Y G-Sec Yield"
            width={700}
            height={400}
            className={styles.chartImage} />
          <p className={styles.chartCaption}>G-Sec Yield Curve Dynamics. Source: Quantwater Analysis </p>
        </div>
        <div className={styles.chartContainer}>
          <Image
            src="/Resources/indian-market-overview/FIM-3.png"
            alt="Yield Curve Trend"
            width={700}
            height={400}
            className={styles.chartImage} />
          <p className={styles.chartCaption}>Normal positive slope maintained across all periods, suggesting economic growth expectations</p>
        </div>
        <div className={styles.chartContainer}>
          <Image
            src="/Resources/indian-market-overview/FIM-4.png"
            alt="India-US10Y Yield Spread"
            width={700}
            height={400}
            className={styles.chartImage} />
          <p className={styles.chartCaption}>Average India-US 10 Y yield spread is 4.5% over the last 10 years </p>
        </div>
        <div className={styles.chartContainer}>
          <Image
            src="/Resources/indian-market-overview/FIM-5.png"
            alt="10Y G-Sec - Repo Rate Spread"
            width={700}
            height={400}
            className={styles.chartImage} />
          <p className={styles.chartCaption}>Average 10Y G-Sec - repo rate spread is ~1.0% over the last 10 years </p>
        </div>
        <h2>Fixed Income Landscape - Corporate Bonds</h2>
        <p>
          Corporate bond spreads vary based on credit ratings, with upgrades generally outpacing downgrades,
          indicating healthy corporate balance sheets.
        </p>
        <div className={styles.chartContainer}>
          <Image
            src="/Resources/indian-market-overview/FIM-6.png"
            alt="Spread Over 5Y G-Sec yields (bps)"
            width={700}
            height={400}
            className={styles.chartImage} />
          <p className={styles.chartCaption}>Credit spreads represent the additional yield investors demand for holding corporate bonds over government securities (G-Secs), compensating for credit risk and issuer uncertainty.</p>
        </div>
        <h2>Fixed Income Landscape - FDs & Debt Mutual Funds</h2>
        <p>
          For retail investors, Fixed Deposits and Debt Mutual Funds (including Gilt, Corporate Bond,
          and Short Duration funds) are common avenues, with real returns being a key consideration in the inflationary environment.
        </p>
        <div className={styles.chartContainer}>
          <Image
            src="/Resources/indian-market-overview/FIM-7.png"
            alt="FD Interest Rates"
            width={700}
            height={400}
            className={styles.chartImage} />
          <p className={styles.chartCaption}>FD Interest Rates</p>
        </div>
        <div className={styles.chartContainer}>
          <Image
            src="/Resources/indian-market-overview/FIM-8.png"
            alt="Debt MF Returns"
            width={700}
            height={400}
            className={styles.chartImage} />
          <p className={styles.chartCaption}>Debt MF Returns</p>
        </div>
        <div className={styles.chartContainer}>
          <Image
            src="/Resources/indian-market-overview/FIM-9.png"
            alt="Debt MF Returns"
            width={700}
            height={400}
            className={styles.chartImage} />
          <p className={styles.chartCaption}>Debt MF Returns</p>
        </div>
        <div className={styles.chartContainer}>
          <Image
            src="/Resources/indian-market-overview/FIM-10.png"
            alt="CPI Inflation vs Returns (Real return view)"
            width={700}
            height={400}
            className={styles.chartImage} />
          <p className={styles.chartCaption}>CPI Inflation vs Returns (Real return view)</p>
        </div>
        <div className={styles.chartContainer}>
          <Image
            src="/Resources/indian-market-overview/FIM-7.png"
            alt="FD Interest Rates"
            width={700}
            height={400}
            className={styles.chartImage} />
          <p className={styles.chartCaption}>FD Interest Rates</p>
        </div>
      </section><section className={styles.section}>
        <h2>Foreign Investment & Currency</h2>
        <p>
          India remains an attractive destination for Foreign Direct Investment (FDI), particularly in Services, Computer Hardware/Software,
          and Manufacturing. While influenced by global uncertainties, FDI flows have been relatively stable. Foreign Institutional Investor (FII)
          flows into equity markets are more volatile, often reacting to global risk sentiment and interest rate cycles (like US Fed actions).
          The INR/USD exchange rate has shown a gradual depreciation trend over the long term, influenced by factors like oil prices,
          capital flows, and India&apos;s trade balance.
        </p>
        <div className={styles.chartGrid}>
          <div className={styles.chartContainer}>
            <Image
              src="/images/indian-market/FICM-1.png"
              alt="FDI Flows – Sector wise equity inflow from Apr 2000 to Dec 2024"
              width={600}
              height={400}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>Total Inflow: USD 720B. Source: DPIIT </p>
          </div>

          <div className={styles.chartContainer}>
            <Image
              src="/images/indian-market/FICM-2.png"
              alt="FII Flows - AUC"
              width={600}
              height={400}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>FII Flows - AUC</p>
          </div>
          <div className={styles.chartContainer}>
            <Image
              src="/images/indian-market/FICM-3.png"
              alt="INR/USD Exchange Rate"
              width={600}
              height={400}
              className={styles.chartImage} />
            <p className={styles.chartCaption}>CAGR 3% over last 10 years</p>
          </div>
        </div>
      </section><section className={styles.section}>
        <h2>Emerging Sectors & Opportunities</h2>
        <p>
          Beyond traditional sectors, several emerging areas offer high growth potential, driven by technological advancements and policy support:
        </p>
        <ul className={styles.list}>
          <li><strong>Artificial Intelligence (AI):</strong> Rapidly growing market ($17B projected by 2027), supported by government missions and research centers.</li>
          <li><strong>Electric Vehicles (EV) & Renewable Energy:</strong> Strong CAGR in EVs, significant renewable capacity addition (especially solar), backed by policies like FAME II and PLI schemes.</li>
          <li><strong>Digital Payments & FinTech:</strong> Explosive growth in UPI transactions, burgeoning FinTech ecosystem valued potentially over $150B by 2025.</li>
          <li><strong>Advanced Manufacturing:</strong> Boosted by PLI schemes in electronics, semiconductors, pharma, and textiles, positioning India as a &ldquo;China+1&rdquo; hub.</li>
          <li><strong>Digital Public Infrastructure:</strong> Platforms like UPI, Aadhaar, and ONDC enabling large-scale innovation.</li>
        </ul>
        <p>
          Investment opportunities exist across public and private equity, government and corporate bonds, and specialized funds focusing on these themes.
        </p>
      </section><section className={styles.section}>
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
      </section><footer className={styles.articleFooter}>
        <p>
          Disclaimer: This overview is for informational purposes only and does not constitute investment advice.
          Market conditions and projections are subject to change. Data derived from publicly available sources and internal analysis as of March 28, 2025.
        </p>
      </footer></>
    </main>
  );
}