import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import styles from './page.module.css';

async function fetchBlogPosts() {
  const blogDir = path.join(process.cwd(), 'public/blogs');
  const fileNames = fs.readdirSync(blogDir);

  // Filter out non-HTML files (like .DS_Store)
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.html')) // Only process HTML files
    .map((fileName) => {
      const filePath = path.join(blogDir, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      return { fileName, content: fileContents };
    });

  // Sort posts by filename (assuming filenames are in 'YYYYMMDD.html' format)
  posts.sort((a, b) => {
    return b.fileName.localeCompare(a.fileName); // Sort in descending order (latest first)
  });

  return posts;
}

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Blog</h1>
        <p className={styles.subtitle}>Stay updated with our latest insights</p>
      </header>

      <section className={styles.blogList}>
        {posts.map((post: { fileName: string; content: string }) => (
          <div key={post.fileName} className={styles.blogCard}>
            <div
              className={styles.blogContent}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <Link href={`/blog/${post.fileName.replace('.html', '')}`} className={styles.readMore}>
              Read More
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}