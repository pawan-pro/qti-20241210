import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

const services = [
  {
    id: 'quantitative-advisory',
    title: 'Quantitative Investment Advisory',
    description: 'Access expert advice on quantitative investments.',
    image: '/22.jpg',
    link: '/services/quantitative-advisory',
  },
  {
    id: 'global-portfolio',
    title: 'Global Multi-Asset Portfolio',
    description: 'Diversify your investments across global markets.',
    image: '/s2.jpg',
    link: '/services/global-portfolio',
  },
  {
    id: 'algorithmic-advisor',
    title: 'Algorithmic Investment Expert Advisor',
    description: 'Leverage AI-powered algorithms for your investments.',
    image: '/s3.jpg',
    link: '/services/algorithmic-advisor',
  },
];

export default function ServicesPage() {
  return (
    <main className={styles.mainContainer}>
      <header className={styles.headerSection}>
        <h1 className={styles.title}>Services</h1>
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