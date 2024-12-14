import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

const services = [
  {
    id: 'quantitative-advisory',
    title: 'Quantitative Investment Advisory',
    image: '/s153.jpg',
    link: '/solutions/quantitative-advisory',
  },
  {
    id: 'global-portfolio',
    title: 'Global Multi-Asset Portfolio',
    image: '/s211.jpg',
    link: '/solutions/global-portfolio',
  },
  {
    id: 'algorithmic-advisor',
    title: 'Algorithmic Investment Expert Advisor',
    image: '/s341.jpg',
    link: '/solutions/algorithmic-advisor',
  },
];

export default function ServicesPage() {
  return (
    <main className={styles.mainContainer}>
      <header className={styles.headerSection}>
        <h1 className={styles.title}>Solutions</h1>
        <h2 className={styles.subtitle}>Innovative Investment Solutions</h2>
      </header>

      <section className={styles.servicesGrid}>
        {services.map((service) => (
          <Link href={service.link} key={service.id} className={styles.serviceCard}>
            <div className={styles.imageContainer}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority={service.id === 'quantitative-advisory'} // Priority for the first service
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}