// components/Header.tsx
import React from 'react';
import styles from './Header.module.css'; // Optional, if you want custom styles

const Header: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => {
  return (
    <header className={styles.headerSection}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
    </header>
  );
};

export default Header;