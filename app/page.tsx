'use client'; // This marks the component as client-side

import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.heroSection}>
      <Image
        src="/11.jpg" // Path to your image in the public folder
        alt="Quantwater Tech Investments Background"
        fill
        priority
        className={styles.heroImage}
      />
      <div className={styles.heroOverlay}>
        <h1 className={styles.heroTitle}>Quantwater Tech Investments</h1>
        <p className={styles.heroSubtitle}>
          Pioneering the Future of Investment Management through Advanced Technology
        </p>
      </div>
    </main>
  );
}