// app/solutions/algorithmic-advisor/page.js
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import styles from './page.module.css';

export default function AlgorithmicAdvisorPage() {
  const eaGitHubLink = "https://github.com/pawan-pro/quantwater-tech-investments/blob/main/RiskEventTrader";
  const eaRawDownloadLink = "https://raw.githubusercontent.com/pawan-pro/quantwater-tech-investments/main/RiskEventTrader";
  const suggestedFileName = "RiskEventTrader.mq5";
  const eaInputsImageSrc = "/EA-RET.png";

return (
    <main className={styles.mainContainer}>
      <header className={styles.pageHeader}>
        <h1>Algorithmic Investment Expert Advisors</h1>
        <p className={styles.intro}>
          Leverage the power of automated trading with our featured Expert Advisors (EAs) for the MetaTrader 5 platform.
          EAs can help automate your trading strategies, execute trades based on predefined rules, and manage risk.
        </p>
      </header>

      <section className={styles.eaSection}>
        <h2>Featured Expert Advisor: RiskEventTrader</h2>
        <div className={styles.eaDetails}>
          <p>
            <strong>RiskEventTrader</strong> is an Expert Advisor designed to potentially capitalize on market movements around significant economic data releases or news events.
            It allows for evaluating the significance of economic indicators based on their market impact and automates trade execution based on predefined parameters.
            It has been developed by <a href="https://github.com/pawan-pro" target="_blank" rel="noopener noreferrer">pawan-pro</a> / <a href="https://github.com/quantwater-tech-investments" target="_blank" rel="noopener noreferrer">quantwater-tech-investments</a>.
          </p>
          <p>
            <strong>Access the Expert Advisor:</strong>
          </p>
          <div className={styles.buttonGroup}>
            <a
              href={eaGitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaLink}
            >
              View RiskEventTrader on GitHub
            </a>
            <a
              href={eaRawDownloadLink}
              download={suggestedFileName}
              className={`${styles.ctaLink} ${styles.downloadButton}`}
              title={`Download ${suggestedFileName}`}
            >
              Download EA File ({suggestedFileName})
            </a>
          </div>
          <p className={styles.note}>
            <strong>Important:</strong> The download link provides the source file. Please ensure you save it as <strong><code>{suggestedFileName}</code></strong>.
            This <code>.mq5</code> file is the source code. You will need to compile it in MetaEditor (part of MT5) to get the <code>.ex5</code> (executable) file required by MetaTrader 5.
          </p>
        </div>
      </section>

      {/* NEW SECTION: Using the RiskEventTrader EA */}
      <section className={styles.usageSection}>
        <h2>Using the RiskEventTrader EA: Key Concepts & Application</h2>
        <p>
          The RiskEventTrader EA is designed to implement trading strategies based on the analysis of economic data releases and their historical impact on asset volatility. Here’s how it aligns with key analytical concepts:
        </p>

        <h3>1. Volatility Analysis & Parameter Input</h3>
        <ul className={styles.list}>
          <li>The EA utilizes an understanding of how different economic releases affect market volatility. This involves analyzing historical data to identify patterns in market reactions (Max Movement, Min Movement in Volatility Units as per your PDF).</li>
          <li>
            <strong>Input Parameters:</strong> The EA takes specified parameters as input. These parameters are derived from your analysis of economic events and their typical impact. For example, based on historical data for an event like Non-Farm Payroll (NFP):
            <ul>
              <li>If NFP typically results in a minimum movement of 0.5x Volatility Units and a maximum of 3x Volatility Units, you might configure the EA with a stop-loss multiplier of 1 (representing 1x Volatility Unit) and a take-profit multiplier of 3 (representing 3x Volatility Units).</li>
            </ul>
          </li>
          <li>The EA uses concepts like Average True Range (ATR) to help define these Volatility Units, standardizing price movements. The Volatility Unit itself is often calculated as <code>(ATR * multiple) + Spread</code>, where the multiple is typically around 1.5.</li>
        </ul>

        {/* --- ADD IMAGE HERE --- */}
        <div className={styles.imageContainer}>
          <Image
            src={eaInputsImageSrc}
            alt="Example of RiskEventTrader EA Input Parameters in MT5"
            width={700} // Specify a base width (Next.js will handle responsiveness)
            height={450} // Specify a base height (maintain aspect ratio)
            layout="responsive" // Makes the image scale with the container
            className={styles.eaInputsImage} // Optional: for additional styling
          />
          <p className={styles.imageCaption}>
            <b>Example configuration of input parameters for the RiskEventTrader EA in MetaTrader 5.</b>
          </p>
        </div>
        {/* --- END OF IMAGE --- */}

        <h3>2. Risk Management</h3>
        <ul className={styles.list}>
          <li><strong>Risk per Trade:</strong> Adhering to standard trading guidelines, the risk amount per trade should generally not exceed a small percentage (e.g., 1-5%) of your trading balance. The EA may have an input for this (e.g., "RiskPercentage"), or this should be manually considered when setting position sizes if the EA calculates lot size based on fixed stop-loss pips.</li>
          <li><strong>Risk-Reward Ratio:</strong> The EA facilitates strategies aiming for a favorable risk-reward ratio (e.g., 1:3, 1:4, up to 1:6 or more). This, combined with an understanding of the win ratio from historical data or backtesting, helps determine appropriate risk levels, take-profit points, and position sizes.
            <ul>
                <li><strong>Example from Blog:</strong> For a $100,000 trading account, risking 5% per trade (via trading volume/position sizing currently) translates to a $5,000 stop-loss. With a 1:3 risk-reward, the take-profit would be $15,000. These risk parameters guide the EA's settings.</li>
            </ul>
          </li>
          <li>The guiding principle is that a win ratio of at least 50% combined with a risk-reward ratio of over 2x can lead to positive expected cash flow, helping to minimize drawdowns and preserve capital.</li>
        </ul>

        <h3>3. Trade Automation on MT5</h3>
        <ul className={styles.list}>
          <li>Once configured with your analytical parameters (derived from studying economic data releases like those in your PDF), the RiskEventTrader EA automates the trade execution process on the MetaTrader 5 platform.</li>
          <li>An MT5 account is required, which can be obtained through a brokerage/securities dealer firm or by using a proprietary (prop) trading account.</li>
        </ul>
        <p className={styles.note}>
          Refer to the <a href="https://quantwater.tech/blog" target="_blank" rel="noopener noreferrer">blog and annexure in any blog pdf</a> for more information on using the RiskEventTrader EA effectively.
        </p>
      </section>

      <section className={styles.platformSection}>
        <h2>MetaTrader 5 Platform</h2>
        <p>
          The RiskEventTrader EA is designed for the MetaTrader 5 (MT5) platform, a popular and powerful trading platform used by millions of traders worldwide.
        </p>
        <p>
          If you don't have MT5 installed, you can download it from the official website:
        </p>
        <a
          href="https://www.metatrader5.com/en/download"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaLink}
        >
          Download MetaTrader 5
        </a>
      </section>

      <section className={styles.installationSection}>
        <h2>How to Install & Initialize an Expert Advisor in MT5</h2>
        <p>Follow these steps to install and run an EA like RiskEventTrader in your MT5 terminal:</p>
        <ol className={styles.stepsList}>
          <li>
            <strong>Download the EA File:</strong>
             Download the <code>{suggestedFileName}</code> file using the button above. Ensure it is saved with the <code>.mq5</code> extension.
          </li>
          <li>
            <strong>Open MetaTrader 5 Data Folder:</strong>
              In MT5, go to <code>File &gt; Open Data Folder</code>. This will open a new window with the MT5 installation files.
          </li>
          <li>
            <strong>Navigate to the Experts Folder:</strong>
              Inside the Data Folder, navigate to <code>MQL5 &gt; Experts</code>.
          </li>
          <li>
            <strong>Copy the EA File:</strong>
              Copy the downloaded <code>{suggestedFileName}</code> file into this <code>MQL5/Experts</code> folder.
          </li>
          <li>
            <strong>Compile the EA:</strong>
            <ul>
              <li>In the MT5 Navigator window (View &gt; Navigator, or Ctrl+N), find "Expert Advisors". If <code>{suggestedFileName}</code> is not visible, right-click on "Expert Advisors" and select "Refresh".</li>
              <li>Find the <code>{suggestedFileName}</code> file in the list.</li>
              <li>Right-click on it and select "Modify". This will open the MetaEditor with the EA's source code.</li>
              <li>In MetaEditor, click the "Compile" button (or press F7). Check the "Errors" tab at the bottom of MetaEditor for any compilation issues. If successful, an <code>RiskEventTrader.ex5</code> file will be created in the same <code>MQL5/Experts</code> folder.</li>
            </ul>
          </li>
          <li>
            <strong>Refresh or Restart MT5 (if needed):</strong>
             Sometimes, you might need to refresh the Expert Advisors list in the Navigator again or restart MT5 for the compiled <code>.ex5</code> file to appear correctly.
          </li>
          <li>
            <strong>Attach EA to a Chart:</strong>
             Drag the compiled EA (<code>RiskEventTrader.ex5</code>) from the Navigator window onto the chart of the financial instrument you want it to trade. Alternatively, right-click the EA and select "Attach to a chart".
          </li>
          <li>
            <strong>Configure EA Settings:</strong>
             A properties window will pop up.
            <ul>
              <li>In the "Common" tab, ensure "Allow Algo Trading" is checked. You might also see options like "Allow DLL imports" if the EA requires them (check EA documentation).</li>
              <li>In the "Inputs" tab, adjust any parameters specific to the EA as needed. These are the parameters derived from your volatility analysis (e.g., stop-loss multiplier, take-profit multiplier based on Volatility Units, position sizing rules). Review the EA's documentation or comments in the code for guidance on these parameters.</li>
            </ul>
            Click "OK".
          </li>
          <li>
            <strong>Enable Algo Trading:</strong>
             Ensure the main "Algo Trading" button in the MT5 toolbar is enabled (it should be green with a play icon).
          </li>
          <li>
            <strong>Check the Journal/Experts Tab:</strong>
             Monitor the "Experts" and "Journal" tabs at the bottom of the Terminal window (View &gt; Toolbox, or Ctrl+T) for any messages, initialization status, or errors from the EA. A smiley face (or a specific icon for the EA) on the top right of the chart indicates the EA is active. A sad face or crossed-out icon means it's not active.
          </li>
        </ol>
      </section>

      <section className={styles.disclaimerSection}>
        <h2>Important Disclaimer</h2>
        <p>
          Trading financial markets with Expert Advisors, including the RiskEventTrader, involves significant risk and may not be suitable for all investors. Past performance of any trading system or methodology, including historical data analysis presented in our research or PDFs, is not indicative of future results. You could lose a substantial amount of money, potentially exceeding your initial investment.
        </p>
        <p>
          <br ></br>The analysis of economic data and its historical impact (as shown in our PDF reports) provides insights but does not guarantee future market reactions. Market conditions can change, and unforeseen factors can influence outcomes. Always test EAs and strategies thoroughly on a demo account before using them with real funds. We recommend seeking advice from an independent financial advisor if you have any doubts. We are not responsible for any losses incurred from the use of this or any other Expert Advisor or trading strategy.
        </p>
      </section>

      <footer className={styles.pageFooter}>
        <p>
          <Link href="/services">← Back to Services</Link>
        </p>
      </footer>
    </main>
  );
}