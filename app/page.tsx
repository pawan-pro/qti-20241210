import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.heroSection}>
      <Image
        src="/11.jpg"
        alt="Quantwater Tech Investments Background"
        fill
        priority
        className="object-cover"
        style={{
          zIndex: -1,
          objectFit: 'cover', // Ensures the image scales proportionally
          objectPosition: 'center', // Center the image
          opacity: 0.7, // Soften the overlay
        }}
      />
      <div className={styles.heroOverlay}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Quantwater Tech Investments</h1>
          <p className={styles.heroSubtitle}>
            Pioneering the Future of Investment Management through Advanced Technology
          </p>
        </div>
      </div>
    </main>
  );
}