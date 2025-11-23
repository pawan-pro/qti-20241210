import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
//import { title } from 'process';

const projects = [
  {
    id: 'blog20251124',
    title: 'Key Economic Events: Week Of 24th November 2025',
    image: '/blogs/blog-cover/20251124.png',
    link: '/blogs/20251124.html',
    //description: 'Exploring the impact of geopolitical events on global markets.',
  },
  {
    id: 'blog20251117',
    title: 'Key Economic Events: Week Of 17th November 2025',
    image: '/blogs/blog-cover/20251117.png',
    link: '/blogs/20251117.html',
    //description: 'Exploring the impact of geopolitical events on global markets.',
  },
  {
    id: 'blog20251109',
    title: 'Key Economic Events: Week Of 10th November 2025',
    image: '/blogs/blog-cover/20251109.png',
    link: '/blogs/20251109.html',
    //description: 'Exploring the impact of geopolitical events on global markets.',
  },
  {
    id: 'blog20251103',
    title: 'Key Economic Events: Week Of 3rd November 2025',
    image: '/blogs/blog-cover/20251103.png',
    link: '/blogs/20251103.html',
    //description: 'Exploring the impact of geopolitical events on global markets.',
  },
  {
    id: 'blog20251027',
    title: 'Key Economic Events: Week Of 27th October 2025',
    image: '/blogs/blog-cover/20251027.png',
    link: '/blogs/20251027.html',
    //description: 'Exploring the impact of geopolitical events on global markets.',
  },
  {
    id: 'blog20251020',
    title: 'Key Economic Events: Week Of 20th October 2025',
    image: '/blogs/blog-cover/20251020.png',
    link: '/blogs/20251020.html',
    //description: 'Exploring the impact of geopolitical events on global markets.',
  },
  {
    id: 'blog20251012',
    title: 'Key Economic Events: Week Of 13th October 2025',
    image: '/blogs/blog-cover/20251012.png',
    link: '/blogs/20251012.html',
    //description: 'Exploring the impact of geopolitical events on global markets.',
  },
  {
    id: 'blog20251005',
    title: 'Key Economic Events: Week Of 5th October 2025',
    image: '/blogs/blog-cover/20251005.png',
    link: '/blogs/20251005.html',
    //description: 'Exploring the impact of geopolitical events on global markets.',
  },
  {
    id: 'blog20250929',
    title: 'Key Economic Events: Week Of 29th September 2025',
    image: '/blogs/blog-cover/20250929.png',
    link: '/blogs/20250929.html',
    //description: 'Exploring the impact of geopolitical events on global markets.',
  },
  {
    id: 'blog20250922',
    title: 'Key Economic Events: Week Of 22nd September 2025',
    image: '/blogs/blog-cover/20250922.png',
    link: '/blogs/20250922.html',
    //description: 'Exploring the impact of geopolitical events on global markets.',
  },
  {
    id: 'blog20250915',
    title: 'Key Economic Events: Week Of 15th September 2025',
    image: '/blogs/blog-cover/20250915.png',
    link: '/blogs/20250915.html',
    //description: 'Exploring the impact of geopolitical events on global markets.',
  },
  {
    id: 'blog20250908',
    title: 'Key Economic Events: Week Of 8th September 2025',
    image: '/blogs/blog-cover/20250908.png',
    link: '/blogs/20250908.html',
    //description: 'Exploring the impact of geopolitical events on global markets.',
  },
  {
    id: 'blog20250901',
    title: 'Key Economic Events: Week Of 31st August 2025',
    image: '/blogs/blog-cover/20250901.png',
    link: '/blogs/20250901.html',
    //description: 'Exploring the impact of geopolitical events on global markets.',
  },
  {
    id: 'blog20250825',
    title: 'Key Economic Events: Week Of 25th August 2025',
    image: '/blogs/blog-cover/20250825.png',
    link: '/blogs/20250825.html',
    //description: 'Exploring the impact of geopolitical events on global markets.',
  },
  {
    id: 'blog20250818',
    title: 'Key Economic Events: Week Of 18th August 2025',
    image: '/blogs/blog-cover/20250818.png',
    link: '/blogs/20250818.html',
    //description: 'Exploring the impact of geopolitical events on global markets.',
  },
  {
    id: 'blog20250811',
    title: 'Key Economic Events: Week Of 11th August 2025',
    image: '/blogs/blog-cover/20250811.png',
    link: '/blogs/20250811.html',
    //description: 'Exploring the impact of geopolitical events on global markets.',
  },
  {
    id: 'blog20250804',
    title: 'Key Economic Events: Week Of 4th August 2025',
    image: '/blogs/blog-cover/20250804.png',
    link: '/blogs/20250804.html',
    //description: 'Exploring the impact of geopolitical events on global markets.',
  },
  {
    id: 'blog20250728',
    title: 'Key Economic Events: Week Of 28th July 2025',
    image: '/blogs/blog-cover/20250728.png',
    link: '/blogs/20250728.html',
    //description: 'Exploring the impact of geopolitical events on global markets.',
  },
  {
    id: 'blog20250721',
    title: 'Key Economic Events: Week Of 21st July 2025',
    image: '/blogs/blog-cover/20250721.png',
    link: '/blogs/20250721.html',
    //description: 'Exploring the impact of geopolitical events on global markets.',
  },
  {
    id: 'blog20250714',
    title: 'Key Economic Events: Week Of 14th July 2025',
    image: '/blogs/blog-cover/20250714.png',
    link: '/blogs/20250714.html',
    //description: 'Analyzing the impact of central bank decisions on equity and bond markets.',
  },
  {
    id: 'blog20250707',
    title: 'Key Economic Events: Week Of 7th July 2025',
    image: '/blogs/blog-cover/20250707.png',
    link: '/blogs/20250707.html',

  },
  {
    id: 'blog20250630',
    title: 'Key Economic Events: Week Of 30th June 2025',
    image: '/blogs/blog-cover/20250630.png',
    link: '/blogs/20250630.html',
    //description: 'Analyzing the economic shifts heading into Q3 2025.',
  },
  {
    id: 'blog20250623',
    title: 'Key Economic Events: Week Of 23rd June 2025',
    image: '/blogs/blog-cover/20250623.png',
    link: '/blogs/20250623.html',
    //description: 'Exploring the impact of geopolitical events on global markets.',
  },
  {
    id: 'blog20250616',
    title: 'Key Economic Events: Week Of 16th June 2025',
    image: '/blogs/blog-cover/20250616.png',
    link: '/blogs/20250616.html',
    //description: 'Analyzing the impact of central bank decisions on equity and bond markets.',
  },
  {
    id: 'blog20250609',
    title: 'Key Economic Events: Week Of 9th June 2025',
    image: '/blogs/blog-cover/20250609.png',
    link: '/blogs/20250609.html',
    //description: 'Exploring the impact of geopolitical events on global markets.',
  },
  {
    id: 'blog20250602',
    title: 'Key Economic Events: Week Of 2nd June 2025',
    image: '/blogs/blog-cover/20250602.png',
    link: '/blogs/20250602.html',
    //description: 'Analyzing the impact of central bank decisions on equity and bond markets.',
  },
  {
    id: 'blog20250526',
    title: 'Key Economic Events: Week Of 26th May 2025',
    image: '/blogs/blog-cover/20250526.png',
    link: '/blogs/20250526.html',
    //description: 'Analyzing the impact of central bank decisions on equity and bond markets.',
  },
  {
    id: 'blog20250519',
    title: 'Key Economic Events: Week Of 19th May 2025',
    image: '/blogs/blog-cover/20250519.png',
    link: '/blogs/20250519.html',
    //description: 'Analyzing the impact of central bank decisions on equity and bond markets.',
  },
  {
    id: 'blog20250510',
    title: 'Key Economic Events: Week Of 12th May 2025',
    image: '/blogs/blog-cover/20250512.png',
    link: '/blogs/20250510.html',
    //description: 'Analyzing the impact of central bank decisions on equity and bond markets.',
  },
  {
    id: 'blog20250505',
    title: 'Key Economic Events: Week Of 05th May 2025',
    image: '/blogs/blog-cover/20250505.png',
    link: '/blogs/20250505.html',
    //description: 'Analyzing the impact of central bank decisions on equity and bond markets.',
  },
  {
    id: 'blog20250427',
    title: 'Key Economic Events: Week Of 27th Apr 2025',
    image: '/blogs/blog-cover/20250427.png',
    link: '/blogs/20250427.html',
    //description: 'Analyzing the impact of central bank decisions on equity and bond markets.',
  },
  {
    id: 'blog20250420',
    title: 'Key Economic Events: Week Of 20th Apr 2025',
    image: '/blogs/blog-cover/20250420.png',
    link: '/blogs/20250420.html',
    //description: 'Analyzing the impact of central bank decisions on equity and bond markets.',
  },
  {
    id: 'blog20250413',
    title: 'Key Economic Events: Week Of 13th Apr 2025',
    image: '/blogs/blog-cover/20250413.png',
    link: '/blogs/20250413.html',
    //description: 'Analyzing the impact of central bank decisions on equity and bond markets.',
  },
  {
    id: 'blog20250406',
    title: 'Key Economic Events: Week Of 07th Apr 2025',
    image: '/blogs/blog-cover/20250406.png',
    link: '/blogs/20250406.html',
    //description: 'Analyzing the impact of central bank decisions on equity and bond markets.',
  },
  {
    id: 'blog20250330',
    title: 'Key Economic Events: Week Of 31st Mar 2025',
    image: '/blogs/blog-cover/20250330.png',
    link: '/blogs/20250330.html',
    //description: 'Analyzing the impact of central bank decisions on equity and bond markets.',
  },
  {
    id: 'blog20250324',
    title: 'Key Economic Events: Week Of 24th Mar 2025',
    image: '/blogs/blog-cover/20250324.png',
    link: '/blogs/20250324.html',
    //description: 'Analyzing the impact of central bank decisions on equity and bond markets.',
  },
  {
    id: 'blog20250317',
    title: 'Key Economic Events: Week Of 17th Mar 2025',
    image: '/blogs/blog-cover/20250317.png',
    link: '/blogs/20250317.html',
    //description: 'Analyzing the impact of central bank decisions on equity and bond markets.',
  },
  {
    id: 'blog20250310',
    title: 'Week Of 10th Mar 2025',
    image: '/blogs/blog-cover/20250310.png',
    link: '/blogs/20250310.html',
    description: 'Key Economic Events',
  },
  {
    id: 'blog20250303',
    title: 'Key Economic Events: Week Of 03rd Mar 2025',
    image: '/blogs/blog-cover/20250303.png',
    link: '/blogs/20250303.html',
    //description: 'Exploring how geopolitical tensions influenced commodity prices.',
  },
  {
    id: 'blog20250224',
    title: 'Key Economic Events: Week Of 24th Feb 2025',
    image: '/blogs/blog-cover/20250224.png',
    link: '/blogs/20250224.html',
    //description: 'Assessing the effects of inflation data on currency valuations.',
  },
  {
    id: 'blog20250217',
    title: 'Key Economic Events: Week Of 17th Feb 2025',
    image: '/blogs/blog-cover/20250217.png',
    link: '/blogs/20250217.html',
    //description: 'Evaluating the market reaction to corporate earnings reports.',
  },
  {
    id: 'blog20250209',
    title: 'Key Economic Events: Week Of 09th Feb 2025',
    image: '/blogs/blog-cover/20250209.png',
    link: '/blogs/20250209.html',
    //description: 'Understanding the implications of labor market data on interest rates.',
  },
  {
    id: 'blog20250202',
    title: 'Key Economic Events: Week Of 02nd Feb 2025',
    image: '/blogs/blog-cover/20250202.png',
    link: '/blogs/20250202.html',
    //description: 'Examining the correlation between oil price fluctuations and energy stocks.',
  },
  {
    id: 'blog20250126',
    title: 'Key Economic Events: Week Of 26th Jan 2025',
    image: '/blogs/blog-cover/20250126.png',
    link: '/blogs/20250126.html',
    //description: 'Investigating the impact of trade balance data on forex markets.',
  },
  {
    id: 'blog20250120',
    title: 'Key Economic Events: Week Of 20th Jan 2025',
    image: '/blogs/blog-cover/20250120.png',
    link: '/blogs/20250120.html',
    //description: 'Analyzing the market response to retail sales figures.',
  },
  {
    id: 'blog20250112',
    title: 'Key Economic Events: Week Of 12th Jan 2025',
    image: '/blogs/blog-cover/20250112.png',
    link: '/blogs/20250112.html',
    //description: 'Assessing the influence of housing market trends on REITs.',
  },
  {
    id: 'blog20250106',
    title: 'Key Economic Events: Week Of 05th Jan 2025',
    image: '/blogs/blog-cover/20250106.png',
    link: '/blogs/20250106.html',
    //description: 'Evaluating the effects of manufacturing data on industrial stocks.',
  },
  {
    id: 'blog0',
    title: 'Key Economic Events: Week Of 29th Dec 2024',
    image: '/blogs/blog-cover/20241229.png',
    link: '/blogs/20241229.html',
    //description: 'Understanding the year-end market trends and portfolio adjustments.',
  },
  {
    id: 'blog1',
    title: 'Key Economic Events: Week Of 22nd Dec 2024',
    image: '/blogs/blog-cover/20241222.png',
    link: '/blogs/20241222.html',
    //description: 'Analyzing holiday season retail performance and consumer sentiment.',
  },
  {
    id: 'blog2',
    title: 'Key Events: For The Week Of 15th Dec 2024',
    image: '/blogs/blog-cover/20241215.png',
    link: '/blogs/20241215.html',
    //description: 'Exploring the impact of central bank meetings on global markets.',
  },
  {
    id: 'blog3',
    title: 'Key Economic Events: Week Of 8th December 2024',
    image: '/blogs/blog-cover/20241208.png',
    link: '/blogs/20241209.html',
    //description: 'Assessing the effects of OPEC decisions on energy markets.',
  },
  {
    id: 'blog4',
    title: 'Key Economic Events: Week Of 30th November 2024',
    image: '/blogs/blog-cover/20241130.png',
    link: '/blogs/20241202.html',
    //description: 'Evaluating the market impact of global economic indicators.',
  },

  {
    id: 'blog5',
    title: 'Key Economic Events: Week Of 12th November 2024',
    image: '/blogs/blog-cover/20241112.png',
    link: '/blogs/20241111.html',
    //description: 'Analyzing the influence of election results on market volatility.',
  },
  {
    id: 'blog6',
    title: 'Key Economic Events: Week Of 4th November 2024',
    image: '/blogs/blog-cover/20241104.png',
    link: '/blogs/20241104.html',
    //description: 'Understanding the effects of interest rate changes on bond yields.',
  },
  {
    id: 'blog7',
    title: 'Key Economic Events: Week Of 27th October 2024',
    image: '/blogs/blog-cover/20241027.png',
    link: '/blogs/20241028.html',
    //description: 'Exploring the correlation between tech earnings and NASDAQ performance.',
  },
  {
    id: 'blog8',
    title: 'Key Economic Events: Week Of 23rd October 2024',
    image: '/blogs/blog-cover/20241023.png',
    link: '/blogs/20241021.html',
    //description: 'Assessing the impact of currency fluctuations on multinational corporations.',
  },
  {
    id: 'blog9',
    title: 'Key Economic Events: Week Of 14th October 2024',
    image: '/blogs/blog-cover/20241014.png',
    link: '/blogs/20241014.html',
    //description: 'Evaluating the market response to global trade agreements.',
  },
  {
    id: 'blog10',
    title: 'Key Economic Events: Week Of 9th October 2024',
    image: '/blogs/blog-cover/20241009.png',
    link: '/blogs/20241007.html',
    //description: 'Analyzing the effects of consumer confidence indices on equity markets.',
  },
];

export default function ResourcesPage() {
  return (
    <main className={styles.mainContainer}>
      <header className={styles.headerSection}>
        <h1 className={styles.title}>Insights & Research</h1>
        <h2 className={styles.subtitle}>Stay updated with our latest insights and market analysis</h2>
      </header>

      <section className={styles.servicesGrid}>
        {projects.map((project) => (
          <Link
            href={project.link}
            key={project.id}
            className={styles.serviceCard}
            target={project.link.startsWith('http') ? '_blank' : '_self'}
          >
            <div className={styles.imageContainer}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority={project.id === 'dxy-forecast'}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDescription}>{project.description}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}