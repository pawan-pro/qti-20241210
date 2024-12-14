import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.contentSection}>
        <div className={styles.textContent}>
          <h6 className={styles.title}>Quantwater Tech Investments</h6>
          <h6 className={styles.subtitle}>
            Leveraging AI and machine learning for exceptional returns
          </h6>
          <p className={styles.description}>
            Quantwater Tech Investments is a quantitative investment firm. We harness cutting-edge AI and machine
            learning techniques to deliver exceptional risk-adjusted returns in global markets. Our strategies are
            driven by innovation, research, and a commitment to excellence in technology-driven investment.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Get In Touch
          </Link>
        </div>
      </div>
      <div className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <Image
            src="/about.jpg" // Ensure the image is in the public folder
            alt="About Quantwater"
            fill
            priority
            style={{ objectFit: 'cover' }} // Ensures it covers the div area
          />
        </div>
      </div>
    </main>
  );
}