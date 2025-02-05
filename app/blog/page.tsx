import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

const projects = [
  {
    id: 'blog20250202',  
    title: 'Key Economic Events: Week Of 02nd Feb 2025',
    image: '/blogs/blog-cover/20250202.png',
    link: '/blogs/20250202.html', // blog html file
  }, 
  {
    id: 'blog20240126',  
    title: 'Key Economic Events: Week Of 26th Jan 2025',
    image: '/blogs/blog-cover/20250126.png',
    link: '/blogs/20250126.html', // blog html file
  }, 
  {
    id: 'blog20250120',  
    title: 'Key Economic Events: Week Of 20th Jan 2025',
    image: '/blogs/blog-cover/20250120.png',
    link: '/blogs/20250120.html', // blog html file
  },
  {
    id: 'blog20250112',
    title: 'Key Economic Events: Week Of 12th Jan 2025',
    image: '/blogs/blog-cover/20250112.png',
    link: '/blogs/20250112.html', // blog html file
  },
  {
    id: 'blog20250106',
    title: 'Key Economic Events: Week Of 05th Jan 2025',
    image: '/blogs/blog-cover/20250106.png',
    link: '/blogs/20250106.html', // blog html file
  },
  {
    id: 'blog0',
    title: 'Key Economic Events: Week Of 29th Dec 2024',
    image: '/blogs/blog-cover/20241229.png',
    link: '/blogs/20241229.html', // blog html file
  },
  {
    id: 'blog1',
    title: 'Key Economic Events: Week Of 22nd Dec 2024',
    image: '/blogs/blog-cover/20241222.png',
    link: '/blogs/20241222.html', // blog html file
  },
  {
    id: 'blog2',
    title: 'Key Events: For The Week Of 15th Dec 2024',
    image: '/blogs/blog-cover/20241215.png',
    link: '/blogs/20241215.html', // blog html file
  },
  {
    id: 'blog3',
    title: 'Key Economic Events: Week Of 8th December 2024',
    image: '/blogs/blog-cover/20241208.png',
    link: '/blogs/20241209.html', // blog html file
  },
  {
    id: 'blog4',
    title: 'Key Economic Events: Week Of 30th November 2024',
    image: '/blogs/blog-cover/20241130.png',
    link: '/blogs/20241202.html', // blog html file
  },
  {
    id: 'blog5',
    title: 'Key Economic Events: Week Of 12th November 2024',
    image: '/blogs/blog-cover/20241112.png',
    link: '/blogs/20241111.html', // blog html file
  },
  {
    id: 'blog6',
    title: 'Key Economic Events: Week Of 4th November 2024',
    image: '/blogs/blog-cover/20241104.png',
    link: '/blogs/20241104.html', // blog html file
  },
  {
    id: 'blog7',
    title: 'Key Economic Events: Week Of 27th October 2024',
    image: '/blogs/blog-cover/20241027.png',
    link: '/blogs/20241028.html', // blog html file
  },
  {
    id: 'blog8',
    title: 'Key Economic Events: Week Of 23rd October 2024',
    image: '/blogs/blog-cover/20241023.png',
    link: '/blogs/20241021.html', // blog html file
  },
  {
    id: 'blog9',
    title: 'Key Economic Events: Week Of 14th October 2024',
    image: '/blogs/blog-cover/20241014.png',
    link: '/blogs/20241014.html', // blog html file
  },
  {
    id: 'blog10',
    title: 'Key Economic Events: Week Of 9th October 2024',
    image: '/blogs/blog-cover/20241009.png',
    link: '/blogs/20241007.html', // blog html file
  },
];

export default function ResourcesPage() {
  return (
    <main className={styles.mainContainer}>
      <header className={styles.headerSection}>
        <h1 className={styles.title}>Blog</h1>
        <h2 className={styles.subtitle}>Stay updated with our latest insights</h2>
      </header>

      <section className={styles.servicesGrid}>
        {projects.map((project) => (
          <Link
            href={project.link}
            key={project.id}
            className={styles.serviceCard}
            target={project.link.startsWith('http') ? '_blank' : '_self'} // Open external links in a new tab
          >
            <div className={styles.imageContainer}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority={project.id === 'dxy-forecast'} // Priority loading for the first card
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

// git commands
// git add .                                                                                                          
// git commit -m "20250120 update - 20240118 blog added"
// git push origin main