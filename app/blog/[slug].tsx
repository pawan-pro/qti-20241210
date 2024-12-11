import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import styles from './slug.module.css';

export default async function BlogPostPage({
  params
}: {
  params: { slug: string }
}) {
  try {
    const blogsDirectory = path.join(process.cwd(), 'public', 'blogs');
    const filePath = path.join(blogsDirectory, `${params.slug}.html`);

    // Validate slug and file path
    if (!params.slug || params.slug.includes('..')) {
      return notFound();
    }

    let content = '';
    try {
      content = await fs.readFile(filePath, 'utf8');
    } catch (readError) {
      console.error('File read error:', readError);
      return notFound();
    }

    // Fallback for empty content
    if (!content) {
      return <div>No content found</div>;
    }

    return (
      <main className={styles.main}>
        <article 
          className={styles.article}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </main>
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return notFound();
  }
}

export async function generateStaticParams() {
  try {
    const blogsDirectory = path.join(process.cwd(), 'public', 'blogs');
    const files = await fs.readdir(blogsDirectory);
    
    return files
      .filter(file => file.endsWith('.html') && file !== '.DS_Store')
      .map(file => ({ 
        slug: file.replace('.html', '') 
      }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}