import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

const projects = [
  {
    id: 'dxy-forecast',
    title: 'Project: Forex - $ DXY Index - 10 Year Forecast',
    image: '/r114.jpg',
    link: '/resources/DXY-10-Year-Outlook.pdf', // Downloadable file
  },
  {
    id: 'GCC REIT Market Overview',
    title: 'GCC REIT Market Overview',
    image: '/r211.jpg',
    link: '/resources/GCC REIT Market Overview.pdf', // Downloadable file
  },
  {
    id: 'historical-calendar',
    title: 'Historical Economic Calendar',
    image: '/r21.jpg',
    link: '/resources/HEC.xlsx', // Downloadable file
  },
];

export default function ResourcesPage() {
  return (
    <main className={styles.mainContainer}>
      <header className={styles.headerSection}>
        <h1 className={styles.title}>Our Research & Projects</h1>
        <h2 className={styles.subtitle}>Download and Explore Our Work</h2>
      </header>

      <section className={styles.servicesGrid}>
        {projects.map((project) => (
          <Link
            href={project.link}
            key={project.id}
            className={styles.serviceCard}
            target={project.link.startsWith('http') ? '_blank' : '_self'} // Open external links in a new tab
          >
            <div className={styles.imageContainer}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority={project.id === 'dxy-forecast'} // Priority loading for the first card
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