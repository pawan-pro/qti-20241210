import Image from 'next/image';
import styles from './page.module.css';

export default function ProjectOdysseyPage() {
  return (
    <main className={styles.main}>
      <div className={styles.imageContainer}>
        <Image
          src="/project-odyssey/cover.jpeg"
          alt="Project Odyssey Cover"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    </main>
  );
}
