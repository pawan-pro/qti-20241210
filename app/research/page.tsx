// app/resources/page.js (or wherever your Resources page component is)
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css'; // Assuming you have styles for this page

const projects = [
  {
    id: 'dxy-forecast',
    title: 'Project: Forex - $ DXY Index - 10 Year Forecast',
    image: '/r114.jpg', // Keep existing image path
    link: '/resources/DXY-10-Year-Outlook.pdf', // Keep existing link
  },
  {
    id: 'GCC REIT Market Overview',
    title: 'GCC REIT Market Overview',
    image: '/r211.jpg', // Keep existing image path
    link: '/resources/GCC REIT Market Overview.pdf', // Keep existing link
  },
  {
    id: 'historical-calendar',
    title: 'Historical Economic Calendar',
    image: '/r31.jpg', // Keep existing image path
    link: '/resources/HEC.xlsx', // Keep existing link
  },
  // --- NEW ENTRY ADDED BELOW ---
  {
    id: 'indian-market-overview',
    title: 'Indian Market Overview - 2025 & Beyond',
    image: '/indian-market-overview.png', // ** USE YOUR THUMBNAIL IMAGE PATH **
    link: '/indian-market-overview', // Link to the new Next.js page route
  },
  // --- END OF NEW ENTRY ---
];

export default function ResourcesPage() {
  return (
    <main className={styles.mainContainer}>
      <header className={styles.headerSection}>
        <h1 className={styles.title}>Our Research & Projects</h1>
        {/* Keep subtitle if needed */}
        <h2 className={styles.subtitle}>Download or Explore Our Work</h2>
      </header>

      <section className={styles.servicesGrid}>
        {projects.map((project) => (
          <Link
            href={project.link}
            key={project.id}
            className={styles.serviceCard}
            // Target _blank only if it's an external link or a direct file download you want in a new tab
            target={project.link.startsWith('http') || project.link.endsWith('.pdf') || project.link.endsWith('.xlsx') ? '_blank' : '_self'}
            // Optionally add rel="noopener noreferrer" for _blank targets
            rel={project.link.startsWith('http') || project.link.endsWith('.pdf') || project.link.endsWith('.xlsx') ? 'noopener noreferrer' : undefined}
          >
            <div className={styles.imageContainer}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                // Adjust priority logic if needed, maybe based on index?
                priority={project.id === 'dxy-forecast' || project.id === 'indian-market-overview'}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}