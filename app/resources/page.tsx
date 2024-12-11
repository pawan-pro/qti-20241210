import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css'; // Assuming you're using the same styles file

const projects = [
  {
    id: 'dxy-forecast',
    title: 'Project: DXY $ - 10 Year Forecast',
    //description: 'Download the 10-year outlook for DXY.',
    image: '/r1.jpg',
    link: '/downloads/DXY-10-Year-Outlook.pdf', // Link to a downloadable file
  },
  {
    id: 'historical-calendar',
    title: 'Historical Economic Calendar',
    //description: 'Access the historical economic calendar data.',
    image: '/r2.jpg',
    link: '/downloads/HEC.xlsx', // Link to another downloadable file
  },
  {
    id: 'expert-advisor-1',
    title: 'Expert Advisor 1',
    //description: 'Download Expert Advisor 1 from Google Drive.',
    image: '/r3.jpg',
    link: 'https://drive.google.com/file/d/xyz123/view?usp=sharing', // Google Drive link
  },
  {
    id: 'expert-advisor-2',
    title: 'Expert Advisor 2',
    //description: 'Download Expert Advisor 2 from Google Drive.',
    image: '/r4.jpg',
    link: 'https://drive.google.com/file/d/abc456/view?usp=sharing', // Another Google Drive link
  },
];

export default function ResourcesPage() {
  return (
    <main className={styles.mainContainer}>
      <header className={styles.headerSection}>
        <h1 className={styles.title}>Our Projects</h1>
        <h2 className={styles.subtitle}>Download and Explore Our Work</h2>
      </header>

      <section className={styles.servicesGrid}>
        {projects.map((project) => (
          <Link href={project.link} key={project.id} className={styles.serviceCard}>
            <div className={styles.imageContainer}>
              <Image
                src={project.image}
                alt={project.title}
                fill
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