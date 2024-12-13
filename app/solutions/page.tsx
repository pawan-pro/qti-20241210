import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

const services = [
  {
    id: 'quantitative-advisory',
    title: 'Quantitative Investment Advisory',
    //description: 'Access expert advice on quantitative investments.',
    image: '/S153.jpg',
    link: '/solutions/quantitative-advisory',
  },
  {
    id: 'global-portfolio',
    title: 'Global Multi-Asset Portfolio',
    //description: 'Diversify your investments across global markets.',
    image: '/s211.jpg',
    link: '/solutions/global-portfolio',
  },
  {
    id: 'algorithmic-advisor',
    title: 'Algorithmic Investment Expert Advisor',
    //description: 'Leverage AI-powered algorithms for your investments.',
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
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}