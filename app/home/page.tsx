import Image from 'next/image';
import styles from './page.module.css'; // Import styles from the CSS module

export default function Home() {
  return (
    <main className={styles.heroSection}>
      <Image
        src="/11.jpg"  // Image path, make sure the image is placed in the public folder
        alt="Quantwater Tech Investments Background"
        fill
        priority
        className="object-cover"
        style={{
          zIndex: -1,
          opacity: 0.6, // Soft overlay effect
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