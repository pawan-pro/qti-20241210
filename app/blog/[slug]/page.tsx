import fs from 'fs/promises';
import path from 'path';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import styles from './slug.module.css';

// Updated type to use a Promise for params
type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

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

// Metadata generation
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  // Await params here
  const { slug } = await params;
  
  return {
    title: `Blog Post - ${slug}`,
    description: `Detailed content for blog post ${slug}`
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    // Await params here
    const { slug } = await params;
    
    const blogsDirectory = path.join(process.cwd(), 'public', 'blogs');
    const filePath = path.join(blogsDirectory, `${slug}.html`);
    
    // Validate slug and file path
    if (!slug || slug.includes('..')) {
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
      <div className={styles.blogPost}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return notFound();
  }
}