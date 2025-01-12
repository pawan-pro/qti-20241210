import styles from './not-found.module.css'; // Updated import path
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>404 - Page Not Found</h1>
      <div className={styles.image}>
        <Image
          src="/404/business-cat-giving-presentation.jpg" // Ensure this path is correct
          alt="404 Error"
          width={400}
          height={300}
        />
      </div>
      <p className={styles.message}>
        Oh no! It looks like the page you&apos;re looking for has gone on a coffee break with Business Cat.<br></br><br></br> 
        While he&apos;s busy presenting the figures, we&apos;re working to find where this page has scampered off to. <br></br><br></br>
        Please try another link or return to our homepage.
      </p>
      <Link href="/" className={styles.link}>
        Go back to Home
      </Link>
    </div>
  );
}