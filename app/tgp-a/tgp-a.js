// app/tgp-a/page.js
import Image from 'next/image';
import styles from './page.module.css'; // Ensure you have a corresponding CSS module

export default function GraduationPortfolio() {
  return (
    <>
      {/* Assuming a Layout component might wrap this */}
      <main className={styles.articleContainer}>
        <header className={styles.articleHeader}>
          <h1>The Graduation Portfolio: Investing for Arnav&apos;s Future Education</h1>
          <p className={styles.publishDate}>Plan Prepared: 28th March 2025, by Quantwater Tech Investments</p>
          <p className={styles.intro}>
            This plan outlines a long-term investment strategy designed specifically to build a corpus for
            <span className={styles.bold}> Arnav&apos;s future higher education goals</span>. It considers potential
            educational pathways, associated costs, and proposes a tailored investment portfolio to help achieve
            these aspirations over the coming years.
          </p>
        </header>

        <section className={styles.section}>
          <h2>The Goal: Funding Arnav&apos;s Higher Education</h2>
          <p>
            The primary objective is to accumulate sufficient funds to cover the costs of Arnav&apos;s undergraduate education,
            potentially in fields like Computer Science or Aeronautical Engineering. We&apos;ve considered pathways involving
            top Indian institutions (like IITs, IIITs, BITS) and potential opportunities abroad (MIT, CMU, Stanford, etc.).
          </p>
          <div className={styles.chartGrid}>
            <div className={styles.chartContainer}>
              <Image
                src="/Resources/graduation-portfolio/roadmap-cs.png" // Placeholder path
                alt="Roadmap for Arnav - Computer Science Pathway"
                width={800}
                height={450}
                className={styles.chartImage}
                priority // If this is the main visual focus
              />
              <p className={styles.chartCaption}>
                <strong>Potential Pathway: Computer Science.</strong> Includes foundation years, launchpad (Grades 11-12), and future options.
              </p>
            </div>
            <div className={styles.chartContainer}>
              <Image
                src="/Resources/graduation-portfolio/roadmap-aero.png" // Placeholder path
                alt="Roadmap for Arnav - Aeronautical Engineering Pathway"
                width={800}
                height={450}
                className={styles.chartImage} />
              <p className={styles.chartCaption}><strong>Potential Pathway: Aeronautical Engineering.</strong> Similar structured planning across phases.</p>
            </div>
          </div>
          <h3>Understanding the Financial Need</h3>
          <p>
            Higher education, especially at premier institutions, involves significant costs. Based on current fee structures (e.g., IIT Delhi 2024 fees) and projecting potential inflation over the next 6+ years, the estimated cost for an 8-semester program could range significantly:
          </p>
           <div className={styles.chartGrid}>
             <div className={styles.chartContainer} style={{ gridColumn: '1 / -1', maxWidth: '800px', margin: '0 auto' }}> {/* Centering the single chart */}
                <Image
                    src="/Resources/graduation-portfolio/financing-overview.png" // Placeholder path
                    alt="Overall Financing Overview - 8 Semester Programme at IITs"
                    width={800}
                    height={450} // Adjust height based on aspect ratio
                    className={styles.chartImage} />
                <p className={styles.chartCaption}>
                    <strong>IIT Financing Example (2024 Fees):</strong> Current net cost ~₹5.4 Lakhs.
                    <br />With moderate inflation (5-6% CAGR), this could rise to <span className={styles.bold}>₹7.2L - ₹7.6L</span>.
                    <br />With higher cost expansion (11-12% CAGR), it could reach <span className={styles.boldRed}>₹10L - ₹10.6L+</span>.
                    <br />This highlights the importance of planning and investing early.
                </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>The Investment Environment: Why India?</h2>
          <p>
            The investment strategy leverages India&apos;s position as one of the world&apos;s fastest-growing economies (projected GDP growth <span className={styles.bold}>6-7%</span> for 2025). Key drivers include strong domestic demand, digital transformation, and supportive government policies (&apos;Make in India&apos;). While global factors and market volatility exist, the long-term outlook provides a favourable backdrop for equity investments aimed at wealth creation. Emerging sectors like AI, Renewables, FinTech, and Advanced Manufacturing offer significant future potential.
          </p>
          {/* Optional: Include 1-2 high-level charts like GDP Growth or Sector Contribution if desired, but keep focus on Arnav */}
        </section>

        <section className={styles.section}>
          <h2>The Proposed &apos;Graduation Portfolio&apos;</h2>
          <p>
            To meet the educational funding goal, we propose a diversified portfolio accessed via a Systematic Investment Plan (SIP).
          </p>
          <h3>Portfolio Allocation (Starting April 2025)</h3>
          <ul className={styles.list}>
            <li>Nippon India Large Cap Fund: <span className={styles.bold}>25%</span></li>
            <li>Kotak Emerging Equity Fund (Mid Cap): <span className={styles.bold}>25%</span></li>
            <li>SBI Technology Opportunities Fund: <span className={styles.bold}>25%</span> (Growth Focus)</li>
            <li>Invesco European Equity Fund: <span className={styles.bold}>5%</span> (International Diversification)</li>
            <li>HDFC Short Term Debt Fund: <span className={styles.bold}>20%</span> (Stability & Lower Risk)</li>
          </ul>
           <p>
             <strong>Proposed Monthly SIP: ₹10,000</strong>
           </p>
           <p>
             Based on historical data and fund characteristics, this portfolio has an estimated:
             <br />- Expected Annual Return: <span className={styles.bold}>~15.49% p.a.</span>
             <br />- Sortino Ratio (Risk-Adjusted Return): <span className={styles.bold}>0.5140</span>
             <br />- Diversification Score: <span className={styles.bold}>0.7700</span> (indicating good balance)
           </p>
           <p>
             <span className={styles.italic}>Note: Past performance and expected returns are not guarantees of future results. Returns are subject to market risks.</span>
           </p>

          <h3>Projected Growth & Asset Mix</h3>
           <div className={styles.chartGrid}>
            <div className={styles.chartContainer}>
              <Image
                src="/Resources/graduation-portfolio/portfolio-sip-simulation.png" // Placeholder path
                alt="SIP Simulation @ INR 10,000 per month for 6 years"
                width={800}
                height={450}
                className={styles.chartImage}
              />
              <p className={styles.chartCaption}>
                <strong>SIP Simulation (6 Years @ 15.49% p.a.):</strong> Shows projected portfolio growth (pre-tax) against total investment. The dotted lines indicate potential ranges needed based on the inflation-adjusted cost scenarios for education.
              </p>
            </div>
            <div className={styles.chartContainer}>
              <Image
                src="/Resources/graduation-portfolio/portfolio-asset-class.png" // Placeholder path
                alt="Portfolio Asset Class Exposure"
                width={800}
                height={450} // Adjust height
                className={styles.chartImage} />
              <p className={styles.chartCaption}><strong>Portfolio Asset Class Exposure:</strong> Diversified across Indian Large Cap, Mid Cap, Technology Sector, European Equities, and Indian Debt.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Investment Strategy Explained</h2>
          <ul className={styles.list}>
            <li><strong>Equity-Heavy Allocation (80%):</strong> Aims for higher long-term growth potential, suitable for a long investment horizon like Arnav&apos;s education planning. Aligns with the portfolio&apos;s expected return target.</li>
            <li><strong>Debt/Short-Term Exposure (20%):</strong> Provides stability and reduces overall portfolio volatility, acting as a cushion during market downturns (via HDFC Short Term Debt).</li>
            <li><strong>Growth Investing Focus:</strong> Prioritizes sectors and companies with strong growth potential, reflected in the allocation to Technology (SBI Tech) and Mid Caps (Kotak Emerging Equity).</li>
            <li><strong>Diversification:</strong>
                <ul>
                    <li>Across Market Caps: Large Cap, Mid Cap.</li>
                    <li>Across Sectors: Includes a specific allocation to the high-growth Technology sector.</li>
                    <li>Geographic: Includes a 5% allocation to European equities for international exposure.</li>
                    <li>Asset Class: Mixes Equity and Debt.</li>
                </ul>
            </li>
            <li><strong>Systematic Investment Plan (SIP) Approach:</strong>
                <ul>
                    <li>Disciplined Investing: Ensures regular monthly investments (₹10,000).</li>
                    <li>Rupee Cost Averaging: Buys more units when prices are low and fewer when high, potentially reducing average cost over time.</li>
                    <li>Reduces Market Timing Risk: Avoids the need to predict market highs and lows.</li>
                </ul>
            </li>
             <li><strong>Use of Mutual Funds/ETFs:</strong> Provides professional management and instant diversification compared to buying individual stocks.</li>
             <li><strong>Periodic Review & Rebalancing:</strong> The plan suggests maintaining the 80:20 equity-debt ratio with periodic reviews to manage risk and stay aligned with the goal.</li>
          </ul>
        </section>

         <section className={styles.section}>
          <h2>Understanding Market Performance Context</h2>
          <p>
            While future performance cannot be guaranteed, looking at historical trends helps understand the potential and risks involved. Indian equity markets (like Nifty 50, Sensex) have historically provided strong long-term returns in INR, though with volatility. Fixed income markets offer stability, and the yield curve provides insights into economic expectations.
          </p>
          {/* Include 1-2 key historical charts */}
          <div className={styles.chartGrid}>
            <div className={styles.chartContainer}>
              <Image
                src="/Resources/graduation-portfolio/cmp-inr-1.png" // From Deck Page 8
                alt="Capital Market Performance INR - Major Indices (10 Year)"
                width={800}
                height={450}
                className={styles.chartImage}
              />
              <p className={styles.chartCaption}>
                <strong>Historical Index Performance (10 Years, INR):</strong> Illustrates long-term growth trends (e.g., Nifty 50 CAGR ~11%). Source: Quantwater Analysis.
              </p>
            </div>
             <div className={styles.chartContainer}>
              <Image
                src="/Resources/graduation-portfolio/FIM-3.png" // From Deck Page 16
                alt="Fixed Income Yield Curve Trend"
                width={800}
                height={450}
                className={styles.chartImage}
              />
              <p className={styles.chartCaption}>
                <strong>Fixed Income Yield Curve:</strong> Shows interest rates across different maturities, indicating market expectations. Source: Quantwater Analysis.
              </p>
            </div>
          </div>
           <p>
             <span className={styles.italic}>These charts show past trends and are for context only. They do not predict future outcomes.</span>
           </p>
        </section>

        <section className={styles.section}>
          <h2>Risks & Considerations</h2>
          <p>
            All investments carry risk. It&apos;s important to be aware of potential challenges:
          </p>
          <ul className={styles.list}>
            <li><strong>Market Volatility:</strong> Equity markets can experience significant short-term fluctuations. The long-term horizon and SIP approach help mitigate this.</li>
            <li><strong>Economic Factors:</strong> Global slowdowns, geopolitical events, or high inflation could impact returns.</li>
            <li><strong>Interest Rate Changes:</strong> Affect both equity and debt investments.</li>
            <li><strong>Regulatory Changes:</strong> Changes in regulations can impact specific sectors or markets.</li>
            <li><strong>Fund Performance Risk:</strong> Individual fund performance may vary from benchmarks or expectations.</li>
          </ul>
           <p>
             The diversified nature of the portfolio and the long-term strategy are designed to navigate these risks over time. Regular reviews will be essential.
           </p>
        </section>

        <section className={styles.section}>
            <h2>Conclusion: A Long-Term Plan for Arnav</h2>
            <p>
                &apos;The Graduation Portfolio&apos; provides a structured and disciplined approach to investing for Arnav&apos;s higher education. By starting early with a consistent SIP (<span className={styles.bold}>₹10,000 per month</span>) into a diversified portfolio (<span className={styles.bold}>80% Equity, 20% Debt</span>), the aim is to harness the long-term growth potential of the Indian market and build a substantial corpus to meet future educational expenses.
            </p>
            <p>
                The strategy balances growth potential (through equity, particularly large-cap, mid-cap, and tech) with stability (through short-term debt). International diversification adds another layer.
            </p>
            <p>
                Success requires a <span className={styles.bold}>long-term commitment and discipline</span> in maintaining the SIP. While market fluctuations are inevitable, staying invested and periodically reviewing the portfolio&apos;s alignment with the goal will be key to navigating the journey towards funding Arnav&apos;s educational dreams.
            </p>
        </section>


        <footer className={styles.articleFooter}>
          <p>
            Disclaimer: This document is for informational purposes only, based on the specific goal discussed for Arnav. It does not constitute universal investment advice. All investments involve risk, including the possible loss of principal. Past performance is not indicative of future results. Projections are estimates based on available data and assumptions as of March 28, 2025, and are subject to change.
          </p>
           <p>
            <br />Full Presentation Deck: <a href="https://quantwater.tech/GraduationPortfolio_Arnav.pdf" target="_blank" rel="noopener noreferrer" className={styles.linkText}>The Graduation Portfolio - Deck</a> {/* Assumed filename */}
          </p>
        </footer>
      </main>
    </>
  );
}