// app/tgp-a/page.js // Or potentially rename this file/folder to something like app/tgp-aa/page.js if you want a separate URL
import Image from 'next/image';
// Ensure this path is correct relative to this file OR you have a page.module.css in this folder
import styles from './page.module.css'; // Assuming CSS is shared or copied/adapted for Aaryan

// Consider renaming the function if you create a separate file/route like /tgp-aa
export default function GraduationPortfolioTGP_Aaryan() {
  return (
    <>
      {/* Assuming a Layout component might wrap this */}
      <main className={styles.articleContainer}>
        <header className={styles.articleHeader}>
          {/* --- UPDATED FOR AARYAN --- */}
          <h1>The Graduation Portfolio: Investing for Aaryan&apos;s Future Education</h1>
          <p className={styles.publishDate}>Plan Prepared: 28th March 2025 [Suggestive Plan], by Quantwater Tech Investments</p>
          <p className={styles.intro}>
            This plan outlines a long-term investment strategy designed specifically to build a corpus for
            {/* --- UPDATED FOR AARYAN --- */}
            <span className={styles.bold}> Aaryan&apos;s future higher education goals</span>. It considers potential
            costs associated with premier Indian institutions and proposes a tailored investment portfolio to help achieve
            these aspirations over the coming years.
          </p>
        </header>

        <section className={styles.section}>
          {/* --- UPDATED FOR AARYAN --- */}
          <h2>The Goal: Funding Aaryan&apos;s Higher Education</h2>
          <p>
            The primary objective is to accumulate sufficient funds to cover the potential costs of Aaryan&apos;s undergraduate education.
            While specific aspirations and fields of study may evolve as Aaryan progresses, this plan focuses on building a financial foundation
            strong enough to potentially support studies at top Indian institutions like the <span className={styles.bold}>IITs, IIITs, or BITS</span>.
            Further analysis for specific pathways (including opportunities abroad) can be conducted as Aaryan&apos;s interests become clearer.
          </p>

          {/* --- ADDED SUGGESTIVE PATHWAYS TEXT & IMAGES --- */}
          <h3>Illustrative Pathways (Example: IITs)</h3>
          <p>
            As examples of potential fields Aaryan might consider within the IIT system, pathways like <span className={styles.bold}>Computer Science</span> or <span className={styles.bold}>Aeronautical Engineering</span> often involve structured academic progression. Planning early allows for flexibility regardless of the final chosen specialization. We use the general cost structure of IIT programs as a basis for financial planning in this proposal. Below are visual representations of how such pathways might be structured:
          </p>

          {/* --- Image 1: Roadmap CS Example (Applying Financing Overview Style) --- */}
          <div className={styles.chartGrid}>
             <div className={styles.chartContainer} style={{ gridColumn: '1 / -1', maxWidth: '800px', margin: '0 auto' }}>
              <Image
                src="/Resources/tgp-an/roadmap-cs.png" // Ensure path is correct
                alt="Illustrative Roadmap - Computer Science Pathway Example" // Updated Alt Text
                width={1200}
                height={500}
                className={styles.chartImage}
                // priority // Optional: Set priority if desired
              />
              <p className={styles.chartCaption}>
                {/* Updated Caption */}
                <strong>Example Pathway: Computer Science.</strong> Illustrates typical phases: foundation years, launchpad (Grades 11-12), and potential future options within an IIT context.
              </p>
            </div>
          </div>

          {/* --- Image 2: Roadmap Aero Example (Applying Financing Overview Style) --- */}
           <div className={styles.chartGrid}>
             <div className={styles.chartContainer} style={{ gridColumn: '1 / -1', maxWidth: '800px', margin: '0 auto' }}>
              <Image
                src="/Resources/tgp-an/roadmap-aero.png" // Ensure path is correct
                alt="Illustrative Roadmap - Aeronautical Engineering Pathway Example" // Updated Alt Text
                width={1200}
                height={500}
                className={styles.chartImage} />
              <p className={styles.chartCaption}>
                {/* Updated Caption */}
                <strong>Example Pathway: Aeronautical Engineering.</strong> Shows similar structured planning across phases, representative of technical fields at IITs.
              </p>
            </div>
          </div>


          <h3>Understanding the Financial Need (Example: IITs)</h3>
          <p>
             Higher education, especially at premier institutions like the IITs, involves significant costs. As a representative example, based on current fee structures (e.g., IIT Delhi 2024 fees) and projecting potential inflation over the next <span className={styles.bold}>6+ years</span> (aligning with Aaryan&apos;s current stage), the estimated cost for an 8-semester program could range significantly:
          </p>

           {/* --- Kept Financing Overview Image as the example --- */}
           <div className={styles.chartGrid}>
             <div className={styles.chartContainer} style={{ gridColumn: '1 / -1', maxWidth: '800px', margin: '0 auto' }}>
                <Image
                    src="/Resources/tgp-av/financing-overview.png"
                    alt="Overall Financing Overview - Example: 8 Semester Programme at IITs"
                    width={1200}
                    height={500}
                    className={styles.chartImage} />
                <p className={styles.chartCaption}>
                    <strong>IIT Financing Example (Based on 2024 Fees):</strong> Current net cost ~₹5.4 Lakhs.
                    <br />With moderate inflation (5-6% CAGR), this could rise to <span className={styles.bold}>₹7.2L - ₹7.6L</span> by the time Aaryan potentially enrolls.
                    <br />With higher cost expansion (11-12% CAGR), it could reach <span className={styles.bold}>₹10L - ₹10.6L+</span>.
                    <br />This highlights the importance of planning and investing early, regardless of the specific institution.
                </p>
            </div>
          </div>
        </section>

        {/* ... [Rest of the code remains the same] ... */}

        <section className={styles.section}>
          <h2>The Investment Environment: Why India?</h2>
          <p>
            The investment strategy leverages India&apos;s position as one of the world&apos;s fastest-growing economies (projected GDP growth <span className={styles.bold}>6-7%</span> for 2025). Key drivers include strong domestic demand, digital transformation, and supportive government policies (&apos;Make in India&apos;). While global factors and market volatility exist, the long-term outlook provides a favourable backdrop for equity investments aimed at wealth creation. Emerging sectors like AI, Renewables, FinTech, and Advanced Manufacturing offer significant future potential.
          </p>
        </section>

        <section className={styles.section}>
          <h2>The Proposed &apos;Graduation Portfolio&apos; for Aaryan</h2>
          <p>
            To build a corpus towards the potential educational funding goal, we propose starting with a diversified portfolio accessed via a Systematic Investment Plan (SIP). This serves as a solid foundation that can be reviewed and adjusted over time.
          </p>
          <h3>Proposed Portfolio Allocation (Starting April 2025) <span className={styles.italic}>(Click Fund Name to Invest via Paytm Money)</span></h3>
          <ul className={styles.list}>
            <li><a href="https://www.paytmmoney.com/mutual-funds/scheme/nippon-india-large-cap-fund-direct-growth/inf204k01xi3" target="_blank" rel="noopener noreferrer" className={styles.fundLink}>Nippon India Large Cap Fund</a>: <span className={styles.bold}>25%</span></li>
            <li><a href="https://www.paytmmoney.com/mutual-funds/scheme/kotak-emerging-equity-scheme-direct-growth/inf174k01lt0" target="_blank" rel="noopener noreferrer" className={styles.fundLink}>Kotak Emerging Equity Fund (Mid Cap)</a>: <span className={styles.bold}>25%</span></li>
            <li><a href="https://www.paytmmoney.com/mutual-funds/scheme/sbi-technology-opportunities-fund-direct-growth/inf200k01rv6" target="_blank" rel="noopener noreferrer" className={styles.fundLink}>SBI Technology Opportunities Fund</a>: <span className={styles.bold}>25%</span> (Growth Focus)</li>
            <li><a href="https://www.paytmmoney.com/mutual-funds/scheme/invesco-india-feeder-invesco-pan-european-equity-fund-direct-growth/inf205k01a24" target="_blank" rel="noopener noreferrer" className={styles.fundLink}>Invesco European Equity Fund</a>: <span className={styles.bold}>5%</span> (International Diversification)</li>
            <li><a href="https://www.paytmmoney.com/mutual-funds/scheme/hdfc-short-term-debt-fund-direct-plan-growth/inf179k01ym7" target="_blank" rel="noopener noreferrer" className={styles.fundLink}>HDFC Short Term Debt Fund</a>: <span className={styles.bold}>20%</span> (Stability & Lower Risk)</li>
          </ul>
           <p>
             <strong>Proposed Monthly SIP: ₹10,000 (Total)</strong>
           </p>
           <p>
             Based on historical data and fund characteristics, this proposed portfolio has an estimated:
             <br />- Expected Annual Return: <span className={styles.bold}>~15.49% p.a.</span>
             <br />- Sortino Ratio (Risk-Adjusted Return): <span className={styles.bold}>0.5140</span>
             <br />- Diversification Score: <span className={styles.bold}>0.7700</span> (indicating good balance)
           </p>
           <p>
             <span className={styles.italic}>Note: Past performance and expected returns are not guarantees of future results. Returns are subject to market risks. This is a sample allocation. Investment links provided for convenience via Paytm Money; users should verify details before investing.</span>
           </p>

          <h3>Projected Growth & Asset Mix</h3>
            <p>
                Starting a <span className={styles.bold}>₹10,000 monthly SIP</span> now, directed towards this proposed allocation, aims to build a significant corpus over the next 6+ years. The simulation below illustrates the potential growth based on the estimated return.
            </p>
           {/* --- SIP Simulation Image (Relevant) --- */}
           <div className={styles.chartGrid}>
              <div className={styles.chartContainer} style={{ gridColumn: '1 / -1', maxWidth: '1000px', margin: '0 auto' }}>
                <Image
                  src="/Resources/tgp-av/portfolio-sip-simulation.png"
                  alt="SIP Simulation @ INR 10,000 per month for 6 years"
                  width={1200}
                  height={500}
                  className={styles.chartImage}
                />
                <p className={styles.chartCaption}>
                  <strong>SIP Simulation (6 Years @ 15.49% p.a.):</strong> Shows projected portfolio growth (pre-tax) against total investment. The dotted lines indicate potential ranges needed based on the inflation-adjusted cost scenarios for IIT-level education shown earlier. This simulation suggests the proposed SIP could generate a corpus within the target range needed.
                </p>
              </div>
           </div>

           {/* --- Asset Class Image (Relevant) --- */}
           <div className={styles.chartGrid}>
              <div className={styles.chartContainer} style={{ gridColumn: '1 / -1', maxWidth: '800px', margin: '0 auto' }}>
                <Image
                  src="/Resources/tgp-av/portfolio-asset-class.png"
                  alt="Proposed Portfolio Asset Class Exposure"
                  width={1200}
                  height={500}
                  className={styles.chartImage} />
                <p className={styles.chartCaption}><strong>Proposed Portfolio Asset Class Exposure:</strong> Diversified across Indian Large Cap, Mid Cap, Technology Sector, European Equities, and Indian Debt.</p>
              </div>
            </div>
        </section>

        <section className={styles.section}>
          <h2>Investment Strategy Explained</h2>
          <ul className={styles.list}>
            <li><strong>Equity-Heavy Allocation (80%):</strong> Aims for higher long-term growth potential, suitable for a long investment horizon like Aaryan&apos;s education planning. Aligns with the portfolio&apos;s expected return target.</li>
            <li><strong>Debt/Short-Term Exposure (20%):</strong> Provides stability and reduces overall portfolio volatility, acting as a cushion during market downturns.</li>
            <li><strong>Growth Investing Focus:</strong> Prioritizes sectors and companies with strong growth potential.</li>
            <li><strong>Diversification:</strong> Across Market Caps, Sectors, Geography, and Asset Class.</li>
            <li><strong>Systematic Investment Plan (SIP) Approach:</strong> Ensures discipline, benefits from Rupee Cost Averaging, and reduces market timing risk.</li>
             <li><strong>Use of Mutual Funds/ETFs:</strong> Provides professional management and instant diversification.</li>
             <li><strong>Periodic Review & Rebalancing:</strong> Essential to maintain the desired allocation and adjust the strategy based on Aaryan&apos;s evolving goals and market conditions.</li>
          </ul>
        </section>

         <section className={styles.section}>
          <h2>Understanding Market Performance Context</h2>
          <p>
            While future performance cannot be guaranteed, looking at historical trends helps understand the potential and risks involved. Indian equity markets (like Nifty 50, Sensex) have historically provided strong long-term returns in INR, though with volatility. Fixed income markets offer stability, and the yield curve provides insights into economic expectations.
          </p>
          {/* Market Context Images */}
          <div className={styles.chartGrid}>
            <div className={styles.chartContainer}>
              <Image
                src="/Resources/tgp-av/cmp-inr-1.png"
                alt="Capital Market Performance INR - Major Indices (10 Year)"
                width={1200}
                height={500}
                className={styles.chartImage}
              />
              <p className={styles.chartCaption}>
                <strong>Historical Index Performance (10 Years, INR):</strong> Illustrates long-term growth trends. Source: Quantwater Analysis.
              </p>
            </div>
             <div className={styles.chartContainer}>
              <Image
                src="/Resources/tgp-av/FIM-3.png"
                alt="Fixed Income Yield Curve Trend"
                width={1200}
                height={500}
                className={styles.chartImage}
              />
              <p className={styles.chartCaption}>
                <strong>Fixed Income Yield Curve:</strong> Shows interest rates across different maturities. Source: Quantwater Analysis.
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
            <li><strong>Market Volatility:</strong> Equity markets can experience significant short-term fluctuations.</li>
            <li><strong>Economic Factors:</strong> Global/domestic events or inflation could impact returns.</li>
            <li><strong>Interest Rate Changes:</strong> Affect both equity and debt investments.</li>
            <li><strong>Regulatory Changes:</strong> Can impact specific sectors or markets.</li>
            <li><strong>Fund Performance Risk:</strong> Individual fund performance may vary.</li>
             <li><strong>Goal Specificity Risk:</strong> Since Aaryan&apos;s specific goals are not yet defined, the target corpus based on IITs is an estimate. Actual costs may differ based on the chosen path.</li>
             <li><strong>Third-Party Links:</strong> Investment links provided go to external platforms (Paytm Money). Quantwater Tech Investments is not responsible for the content or services on these external sites.</li>
          </ul>
           <p>
             The diversified nature of the portfolio and the long-term strategy are designed to navigate these risks. Regular reviews and potential adjustments based on Aaryan&apos;s future choices will be essential.
           </p>
        </section>

        <section className={styles.section}>
            <h2>Conclusion: A Foundational Plan for Aaryan</h2>
            <p>
                This &apos;Graduation Portfolio&apos; proposal provides a structured and disciplined approach to begin investing for Aaryan&apos;s future higher education. By starting early with a consistent SIP (<span className={styles.bold}>₹10,000 per month</span>) into a diversified portfolio (<span className={styles.bold}>80% Equity, 20% Debt</span>), the aim is to harness the long-term growth potential of the Indian market and build a substantial corpus.
            </p>
             <p>
                The analysis suggests this approach has the potential to generate funds sufficient to cover projected costs at premier institutions like the IITs, based on current estimates and reasonable inflation assumptions.
            </p>
            <p>
                The proposed strategy balances growth potential with stability. Success requires a <span className={styles.bold}>long-term commitment and discipline</span> in maintaining the SIP. While market fluctuations are inevitable, staying invested and periodically reviewing the portfolio&apos;s alignment with Aaryan&apos;s evolving goals will be key to navigating the journey towards funding his future educational aspirations.
            </p>
        </section>


        <footer className={styles.articleFooter}>
          <p>
            Disclaimer: This document is a suggestive financial plan prepared for informational purposes, based on potential higher education goals (using IITs as an example) discussed for Aaryan. It does not constitute universal investment advice. All investments involve risk, including the possible loss of principal. Past performance is not indicative of future results. Projections are estimates based on available data and assumptions as of March 28, 2025, and are subject to change based on market conditions and specific future educational choices. Quantwater Tech Investments is not affiliated with Paytm Money and provides these links for convenience only; we do not endorse or guarantee services on third-party platforms.
          </p>
           <p>
            <br />Reference Presentation Deck: <a href="https://quantwater.tech/thegraduationportfolio-long-terminvestingforaaryanseducation.pdf" target="_blank" rel="noopener noreferrer" className={styles.linkText}>The Graduation Portfolio - Deck [Reference]</a>
          </p>
        </footer>
      </main>
    </>
  );
}