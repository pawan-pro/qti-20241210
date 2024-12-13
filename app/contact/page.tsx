// app/contact/page.tsx
import styles from './page.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>We would like to hear from you</h1>
      <p className={styles.email}>
        Reach us at{' '}
        <a href="mailto:info@quantwater.tech" className={styles.emailLink}>
          info@quantwater.tech
        </a>
      </p>
    </div>
  );
}