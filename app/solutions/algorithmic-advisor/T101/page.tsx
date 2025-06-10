// app/trading-101/page.js
import Image from 'next/image';
import styles from './page.module.css';

export default function Trading101Guide() {
  return (
    <>
      <main className={styles.articleContainer}>
        <header className={styles.articleHeader}>
          <h1>Trading 101: Complete Beginner's Guide</h1>
          <p className={styles.publishDate}>Last Updated: June 2025</p>
          <p className={styles.intro}>
            This comprehensive guide covers everything you need to know to start trading financial markets. From basic concepts to advanced strategies, we'll walk you through the essential knowledge, tools, and techniques to begin your trading journey with confidence.
          </p>
        </header>

        <section className={styles.section}>
          <h2>Table of Contents</h2>
          <ol className={styles.list}>
            <li><a href="#what-is-trading">What is Trading?</a></li>
            <li><a href="#types-of-trading">Types of Trading</a></li>
            <li><a href="#essential-concepts">Essential Trading Concepts</a></li>
            <li><a href="#getting-started">Getting Started: Step-by-Step</a></li>
            <li><a href="#risk-management">Risk Management</a></li>
            <li><a href="#technical-analysis">Technical Analysis Basics</a></li>
            <li><a href="#economic-data">Economic Data & Market Impact</a></li>
            <li><a href="#trading-platforms">Best Trading Platforms for Beginners</a></li>
            <li><a href="#learning-resources">Learning Resources</a></li>
            <li><a href="#common-mistakes">Common Beginner Mistakes</a></li>
          </ol>
        </section>

        <section id="what-is-trading" className={styles.section}>
          <h2>What is Trading?</h2>
          <p>
            Trading involves buying and selling financial instruments (stocks, forex, commodities, etc.) to profit from price movements. Unlike investing, which focuses on long-term growth, trading typically involves shorter time frames and more frequent transactions.
          </p>
          
          <h3>Key Differences: Trading vs Investing</h3>
          <ul className={styles.list}>
            <li><strong>Trading:</strong> Short-term, frequent transactions, focuses on price movements</li>
            <li><strong>Investing:</strong> Long-term, buy-and-hold strategy, focuses on company fundamentals</li>
          </ul>
        </section>

        <section id="types-of-trading" className={styles.section}>
          <h2>Types of Trading</h2>
          
          <h3>1. Day Trading</h3>
          <ul className={styles.list}>
            <li><strong>Definition:</strong> Buying and selling securities within the same trading day</li>
            <li><strong>Time Frame:</strong> Minutes to hours</li>
            <li><strong>Pros:</strong> No overnight risk, quick profits possible</li>
            <li><strong>Cons:</strong> High stress, requires significant time commitment, higher transaction costs</li>
          </ul>
          
          <h3>2. Swing Trading</h3>
          <ul className={styles.list}>
            <li><strong>Definition:</strong> Holding positions for several days to weeks</li>
            <li><strong>Time Frame:</strong> 2-10 days typically</li>
            <li><strong>Pros:</strong> Less time-intensive than day trading, captures larger price movements</li>
            <li><strong>Cons:</strong> Overnight and weekend risk</li>
          </ul>
          
          <h3>3. Position Trading</h3>
          <ul className={styles.list}>
            <li><strong>Definition:</strong> Long-term trading approach, holding for weeks to months</li>
            <li><strong>Time Frame:</strong> Weeks to months</li>
            <li><strong>Pros:</strong> Less stressful, fewer transaction costs</li>
            <li><strong>Cons:</strong> Requires more capital, slower profit realization</li>
          </ul>
          
          <h3>4. Scalping</h3>
          <ul className={styles.list}>
            <li><strong>Definition:</strong> Very short-term trading, holding positions for minutes or seconds</li>
            <li><strong>Time Frame:</strong> Seconds to minutes</li>
            <li><strong>Pros:</strong> Multiple profit opportunities daily</li>
            <li><strong>Cons:</strong> Extremely high stress, requires advanced skills</li>
          </ul>
        </section>

        <section id="essential-concepts" className={styles.section}>
          <h2>Essential Trading Concepts</h2>
          
          <h3>Financial Instruments</h3>
          <ul className={styles.list}>
            <li><strong>Stocks:</strong> Shares of company ownership</li>
            <li><strong>Forex:</strong> Currency pairs (USD/EUR, GBP/JPY, etc.)</li>
            <li><strong>Commodities:</strong> Raw materials (gold, oil, wheat)</li>
            <li><strong>Options:</strong> Derivatives giving right to buy/sell at specific price</li>
            <li><strong>Futures:</strong> Contracts to buy/sell at future date</li>
          </ul>
          
          <h3>Key Terms</h3>
          <ul className={styles.list}>
            <li><strong>Bid:</strong> Highest price buyer is willing to pay</li>
            <li><strong>Ask:</strong> Lowest price seller is willing to accept</li>
            <li><strong>Spread:</strong> Difference between bid and ask prices</li>
            <li><strong>Volume:</strong> Number of shares/contracts traded</li>
            <li><strong>Volatility:</strong> Degree of price fluctuation</li>
            <li><strong>Leverage:</strong> Using borrowed money to increase position size</li>
            <li><strong>Margin:</strong> Collateral required for leveraged trading</li>
          </ul>
          
          <h3>Order Types</h3>
          <ul className={styles.list}>
            <li><strong>Market Order:</strong> Buy/sell immediately at current market price</li>
            <li><strong>Limit Order:</strong> Buy/sell only at specific price or better</li>
            <li><strong>Stop Loss:</strong> Automatic sell order to limit losses</li>
            <li><strong>Take Profit:</strong> Automatic sell order to secure gains</li>
          </ul>
        </section>

        <section id="getting-started" className={styles.section}>
          <h2>Getting Started: Step-by-Step</h2>
          
          <h3>Step 1: Education First</h3>
          <p>Before risking real money, invest time in learning:</p>
          <ul className={styles.list}>
            <li>Read trading books and articles</li>
            <li>Take online courses</li>
            <li>Watch educational videos</li>
            <li>Practice with demo accounts</li>
          </ul>
          
          <h3>Step 2: Choose Your Market</h3>
          <ul className={styles.list}>
            <li><strong>Stocks:</strong> Good for beginners, well-regulated</li>
            <li><strong>Forex:</strong> 24/5 market, high liquidity</li>
            <li><strong>Cryptocurrencies:</strong> High volatility, emerging market</li>
            <li><strong>Commodities:</strong> Inflation hedges, seasonal patterns</li>
          </ul>
          
          <h3>Step 3: Select a Trading Platform</h3>
          <p>Consider these factors:</p>
          <ul className={styles.list}>
            <li><strong>Fees and Commissions:</strong> Look for competitive pricing</li>
            <li><strong>User Interface:</strong> Should be intuitive and easy to navigate</li>
            <li><strong>Research Tools:</strong> Charts, news, analysis tools</li>
            <li><strong>Customer Support:</strong> Available when you need help</li>
            <li><strong>Security:</strong> Proper regulation and fund protection</li>
          </ul>
          
          <h3>Step 4: Create a Trading Plan</h3>
          <p>Your plan should include:</p>
          <ul className={styles.list}>
            <li><strong>Goals:</strong> What you want to achieve</li>
            <li><strong>Strategy:</strong> How you'll identify trades</li>
            <li><strong>Risk Management:</strong> How much you're willing to lose</li>
            <li><strong>Time Commitment:</strong> How much time you can dedicate</li>
            <li><strong>Capital:</strong> How much money you can afford to lose</li>
          </ul>
          
          <h3>Step 5: Start Small</h3>
          <ul className={styles.list}>
            <li>Begin with a demo account</li>
            <li>Start with small position sizes</li>
            <li>Focus on learning, not earning initially</li>
            <li>Keep detailed records of all trades</li>
          </ul>
        </section>

        <section id="risk-management" className={styles.section}>
          <h2>Risk Management</h2>
          <p>
            Risk management is the most critical aspect of successful trading. Even the best traders lose money on individual trades, but they manage risk to stay profitable overall.
          </p>
          
          <h3>The 5% Rule</h3>
          <ul className={styles.list}>
            <li>Never risk more than 5% of your trading capital on a single trade</li>
            <li>For a $10,000 account, maximum risk per trade = $500</li>
            <li>This protects you from catastrophic losses</li>
          </ul>
          
          <h3>Risk-Reward Ratio</h3>
          <ul className={styles.list}>
            <li>Aim for at least 1:2 risk-reward ratio</li>
            <li>If you risk $100, target $200+ profit</li>
            <li>Higher ratios (1:3, 1:4) are even better</li>
            <li>This allows you to be profitable even with 50% win rate</li>
          </ul>
          
          <h3>Position Sizing Formula</h3>
          <p>Position Size = (Account Size × Risk %) ÷ (Entry Price - Stop Loss Price)</p>
          
          <h3>Stop Loss Strategies</h3>
          <ul className={styles.list}>
            <li><strong>Percentage-based:</strong> Set stop loss at 2-3% below entry</li>
            <li><strong>Technical levels:</strong> Use support/resistance levels</li>
            <li><strong>ATR-based:</strong> Use Average True Range for volatility-adjusted stops</li>
          </ul>
        </section>

        <section id="technical-analysis" className={styles.section}>
          <h2>Technical Analysis Basics</h2>
          <p>
            Technical analysis involves studying price charts and patterns to predict future price movements.
          </p>
          
          <h3>Essential Chart Types</h3>
          <ol className={styles.list}>
            <li><strong>Line Charts:</strong> Simple price trend over time</li>
            <li><strong>Bar Charts:</strong> Shows open, high, low, close (OHLC)</li>
            <li><strong>Candlestick Charts:</strong> Visual representation of OHLC data</li>
          </ol>
          
          <h3>Key Technical Indicators</h3>
          <h4>Moving Averages</h4>
          <ul className={styles.list}>
            <li><strong>Simple Moving Average (SMA):</strong> Average price over specific periods</li>
            <li><strong>Exponential Moving Average (EMA):</strong> Gives more weight to recent prices</li>
            <li><strong>Usage:</strong> Trend identification, support/resistance levels</li>
          </ul>
          
          <h4>Relative Strength Index (RSI)</h4>
          <ul className={styles.list}>
            <li><strong>Range:</strong> 0-100</li>
            <li><strong>Overbought:</strong> Above 70 (potential sell signal)</li>
            <li><strong>Oversold:</strong> Below 30 (potential buy signal)</li>
          </ul>
          
          <h4>Moving Average Convergence Divergence (MACD)</h4>
          <ul className={styles.list}>
            <li><strong>Components:</strong> MACD line, signal line, histogram</li>
            <li><strong>Signals:</strong> Line crossovers, divergences</li>
          </ul>
          
          <h4>Average True Range (ATR)</h4>
          <p>ATR measures market volatility and is crucial for position sizing:</p>
          <p><strong>Calculation:</strong></p>
          <ol className={styles.list}>
            <li><strong>True Range (TR)</strong> = max of: 
              <ul>
                <li>High - Low</li>
                <li>|High - Previous Close|</li>
                <li>|Low - Previous Close|</li>
              </ul>
            </li>
            <li><strong>ATR</strong> = Simple Moving Average of TR over N periods (typically 14)</li>
          </ol>
          <p><strong>Usage:</strong></p>
          <ul className={styles.list}>
            <li>Higher ATR = Higher volatility</li>
            <li>Lower ATR = Lower volatility</li>
            <li>Used for setting stop losses and position sizing</li>
          </ul>
          
          <h3>Support and Resistance</h3>
          <ul className={styles.list}>
            <li><strong>Support:</strong> Price level where buying interest emerges</li>
            <li><strong>Resistance:</strong> Price level where selling pressure increases</li>
            <li><strong>Key principle:</strong> Previous resistance becomes new support (and vice versa)</li>
          </ul>
        </section>

        <section id="economic-data" className={styles.section}>
          <h2>Economic Data & Market Impact</h2>
          <p>
            Economic releases significantly impact financial markets. Understanding these can improve your trading decisions.
          </p>
          
          <h3>Major Economic Indicators</h3>
          <h4>US Economic Data</h4>
          <ul className={styles.list}>
            <li><strong>Non-Farm Payrolls (NFP):</strong> Monthly employment data</li>
            <li><strong>Consumer Price Index (CPI):</strong> Inflation measurement</li>
            <li><strong>Gross Domestic Product (GDP):</strong> Economic growth indicator</li>
            <li><strong>Federal Reserve Interest Rate Decisions:</strong> Monetary policy changes</li>
            <li><strong>Initial Jobless Claims:</strong> Weekly unemployment indicator</li>
          </ul>
          
          <h3>Key Release Times (EST)</h3>
          <ul className={styles.list}>
            <li><strong>CPI Data:</strong> Usually 8:30 AM, second Wednesday of month</li>
            <li><strong>NFP:</strong> First Friday of month, 8:30 AM</li>
            <li><strong>GDP:</strong> Quarterly, various times</li>
            <li><strong>Fed Meetings:</strong> 8 times per year, 2:00 PM announcements</li>
          </ul>
          
          <h3>Trading Economic News</h3>
          <ol className={styles.list}>
            <li><strong>Before Release:</strong> Check economic calendar for upcoming events</li>
            <li><strong>High Impact Events:</strong> Focus on events marked as high importance</li>
            <li><strong>Volatility Expectations:</strong> Expect increased volatility around releases</li>
            <li><strong>Risk Management:</strong> Reduce position sizes or stay out during major announcements</li>
          </ol>
          
          <h3>Volatility Units</h3>
          <p>A standardized way to measure price movements:</p>
          <ul className={styles.list}>
            <li><strong>Formula:</strong> (ATR × multiplier) + Spread (multiplier typically 1.5)</li>
            <li><strong>Purpose:</strong> Compare movements across different market conditions</li>
            <li><strong>Application:</strong> Set consistent stop losses and profit targets</li>
          </ul>
        </section>

        <section id="trading-platforms" className={styles.section}>
          <h2>Best Trading Platforms for Beginners (2025)</h2>
          <p>
            Based on current market analysis, here are the top-rated platforms:
          </p>
          
          <h3>For Stock Trading</h3>
          <ol className={styles.list}>
            <li><strong>Charles Schwab</strong>
              <ul>
                <li>$0 commissions on stocks and ETFs</li>
                <li>Excellent educational resources</li>
                <li>User-friendly platform</li>
                <li>Strong customer service</li>
              </ul>
            </li>
            <li><strong>Fidelity</strong>
              <ul>
                <li>Commission-free stock and ETF trades</li>
                <li>Comprehensive research tools</li>
                <li>Good for beginners</li>
                <li>Extensive educational content</li>
              </ul>
            </li>
            <li><strong>Webull</strong>
              <ul>
                <li>Commission-free trading</li>
                <li>Advanced charting tools</li>
                <li>Good mobile app</li>
                <li>Extended hours trading</li>
              </ul>
            </li>
          </ol>
          
          <h3>For Day Trading</h3>
          <ol className={styles.list}>
            <li><strong>Interactive Brokers</strong>
              <ul>
                <li>Low costs for active traders</li>
                <li>Advanced trading tools</li>
                <li>Global market access</li>
                <li>Professional-grade platform</li>
              </ul>
            </li>
            <li><strong>TD Ameritrade (now part of Schwab)</strong>
              <ul>
                <li>Thinkorswim platform</li>
                <li>Excellent educational resources</li>
                <li>Paper trading available</li>
                <li>Strong research tools</li>
              </ul>
            </li>
          </ol>
          
          <h3>For Forex Trading</h3>
          <ol className={styles.list}>
            <li><strong>IG Group</strong>
              <ul>
                <li>Well-regulated broker</li>
                <li>Competitive spreads</li>
                <li>Educational resources</li>
                <li>Multiple platform options</li>
              </ul>
            </li>
            <li><strong>OANDA</strong>
              <ul>
                <li>No minimum deposit</li>
                <li>Good for beginners</li>
                <li>Transparent pricing</li>
                <li>Educational content</li>
              </ul>
            </li>
          </ol>
          
          <h3>Mobile-First Platforms</h3>
          <ol className={styles.list}>
            <li><strong>Robinhood</strong>
              <ul>
                <li>Commission-free trading</li>
                <li>User-friendly mobile app</li>
                <li>Good for casual traders</li>
                <li>Fractional shares available</li>
              </ul>
            </li>
            <li><strong>Moomoo</strong>
              <ul>
                <li>Advanced mobile features</li>
                <li>Real-time market data</li>
                <li>Social trading features</li>
                <li>No commission fees</li>
              </ul>
            </li>
          </ol>
        </section>

        <section id="learning-resources" className={styles.section}>
          <h2>Learning Resources</h2>
          
          <h3>Books (Essential Reading)</h3>
          <ol className={styles.list}>
            <li><strong>"Market Wizards" by Jack Schwager:</strong> Interviews with successful traders</li>
            <li><strong>"Trading in the Zone" by Mark Douglas:</strong> Trading psychology</li>
            <li><strong>"Technical Analysis of the Financial Markets" by John J. Murphy:</strong> Comprehensive TA guide</li>
            <li><strong>"Reminiscences of a Stock Operator" by Edwin Lefèvre:</strong> Classic trading psychology</li>
            <li><strong>"The Intelligent Investor" by Benjamin Graham:</strong> Investment fundamentals</li>
          </ol>
          
          <h3>Online Resources</h3>
          <ol className={styles.list}>
            <li><strong>Investopedia:</strong> Comprehensive financial education</li>
            <li><strong>TradingView:</strong> Advanced charting and social trading</li>
            <li><strong>Yahoo Finance:</strong> Market news and data</li>
            <li><strong>MarketWatch:</strong> Financial news and analysis</li>
            <li><strong>Wall Street Journal:</strong> Premium financial journalism</li>
          </ol>
          
          <h3>Educational Platforms</h3>
          <ol className={styles.list}>
            <li><strong>IG Academy:</strong> Free comprehensive trading courses</li>
            <li><strong>Fidelity Learning Center:</strong> Educational articles and videos</li>
            <li><strong>Charles Schwab Education:</strong> Trading and investing courses</li>
            <li><strong>YouTube Channels:</strong> Chart Guys, Warrior Trading (research thoroughly)</li>
            <li><strong>Coursera/Udemy:</strong> Structured online courses</li>
          </ol>
          
          <h3>News Sources</h3>
          <ul className={styles.list}>
            <li><strong>Bloomberg:</strong> Professional financial news</li>
            <li><strong>Reuters:</strong> Global financial news</li>
            <li><strong>CNBC:</strong> Market updates and analysis</li>
            <li><strong>Financial Times:</strong> Global financial journalism</li>
            <li><strong>Economic calendars:</strong> ForexFactory, Investing.com</li>
          </ul>
          
          <h3>Demo Accounts</h3>
          <p>Practice with virtual money before risking real capital:</p>
          <ul className={styles.list}>
            <li>Most brokers offer free demo accounts</li>
            <li>Practice for at least 3-6 months</li>
            <li>Test different strategies</li>
            <li>Learn platform functionality</li>
          </ul>
        </section>

        <section id="common-mistakes" className={styles.section}>
          <h2>Common Beginner Mistakes</h2>
          
          <ol className={styles.list}>
            <li><strong>Lack of Risk Management</strong>
              <ul>
                <li><strong>Mistake:</strong> Risking too much per trade</li>
                <li><strong>Solution:</strong> Never risk more than 1-2% per trade initially</li>
              </ul>
            </li>
            <li><strong>Overtrading</strong>
              <ul>
                <li><strong>Mistake:</strong> Making too many trades to "make up" for losses</li>
                <li><strong>Solution:</strong> Stick to your trading plan, quality over quantity</li>
              </ul>
            </li>
            <li><strong>No Trading Plan</strong>
              <ul>
                <li><strong>Mistake:</strong> Trading based on emotions or tips</li>
                <li><strong>Solution:</strong> Develop and stick to a written trading plan</li>
              </ul>
            </li>
            <li><strong>Chasing Losses</strong>
              <ul>
                <li><strong>Mistake:</strong> Increasing position size after losses</li>
                <li><strong>Solution:</strong> Maintain consistent position sizing regardless of previous results</li>
              </ul>
            </li>
            <li><strong>Ignoring Economic Events</strong>
              <ul>
                <li><strong>Mistake:</strong> Trading during high-impact news without preparation</li>
                <li><strong>Solution:</strong> Check economic calendar daily, avoid trading major news initially</li>
              </ul>
            </li>
            <li><strong>Unrealistic Expectations</strong>
              <ul>
                <li><strong>Mistake:</strong> Expecting to get rich quickly</li>
                <li><strong>Solution:</strong> Focus on consistent, small gains and learning</li>
              </ul>
            </li>
            <li><strong>Poor Record Keeping</strong>
              <ul>
                <li><strong>Mistake:</strong> Not tracking trades and performance</li>
                <li><strong>Solution:</strong> Keep detailed trading journal with entry/exit reasons</li>
              </ul>
            </li>
            <li><strong>Lack of Patience</strong>
              <ul>
                <li><strong>Mistake:</strong> Entering trades without proper setups</li>
                <li><strong>Solution:</strong> Wait for high-probability setups that match your strategy</li>
              </ul>
            </li>
          </ol>
          
          <h3>Getting Started Checklist</h3>
          <h4>Before You Start Trading:</h4>
          <ul className={styles.list}>
            <li>[ ] Complete at least 40 hours of trading education</li>
            <li>[ ] Read 2-3 trading books</li>
            <li>[ ] Choose your trading style and time frame</li>
            <li>[ ] Select appropriate markets to trade</li>
            <li>[ ] Create a detailed trading plan</li>
            <li>[ ] Set up demo account and practice for 3+ months</li>
            <li>[ ] Choose and test your trading platform</li>
            <li>[ ] Establish risk management rules</li>
          </ul>
          
          <h4>Your First Month:</h4>
          <ul className={styles.list}>
            <li>[ ] Start with very small position sizes</li>
            <li>[ ] Focus on learning, not earning</li>
            <li>[ ] Keep detailed trading journal</li>
            <li>[ ] Review trades weekly</li>
            <li>[ ] Stick to your trading plan</li>
            <li>[ ] Continue education</li>
            <li>[ ] Join trading communities for support</li>
            <li>[ ] Monitor performance metrics</li>
          </ul>
          
          <h4>Risk Management Reminder:</h4>
          <ul className={styles.list}>
            <li>Maximum risk per trade: 1-2% of account</li>
            <li>Maximum daily loss: 5% of account</li>
            <li>Win rate target: 50%+</li>
            <li>Risk-reward ratio: Minimum 1:2</li>
            <li>Stop trading if you hit daily loss limit</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Final Words</h2>
          <p>
            Trading is a skill that takes time to develop. Most successful traders spend years learning and perfecting their craft. Focus on:
          </p>
          <ol className={styles.list}>
            <li><strong>Education:</strong> Never stop learning</li>
            <li><strong>Risk Management:</strong> Protect your capital above all</li>
            <li><strong>Patience:</strong> Wait for high-probability setups</li>
            <li><strong>Discipline:</strong> Stick to your plan</li>
            <li><strong>Persistence:</strong> Learn from mistakes and keep improving</li>
          </ol>
          <p>
            Remember: It's better to make small, consistent profits than to swing for home runs and lose everything. Start small, stay disciplined, and gradually build your skills and confidence.
          </p>
        </section>

        <footer className={styles.articleFooter}>
          <p>
            <strong>Disclaimer:</strong> Trading involves substantial risk and is not suitable for all investors. Never trade money you cannot afford to lose. This guide is for educational purposes only and should not be considered personalized investment advice.
          </p>
        </footer>
      </main>
    </>
  );
}