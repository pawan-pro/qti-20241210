import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const blogDir = path.join(process.cwd(), 'public/blogs');
    const fileNames = fs.readdirSync(blogDir);

    // Read the blog files and sort by file modification time
    const posts = fileNames
      .map((fileName) => {
        const filePath = path.join(blogDir, fileName);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const stats = fs.statSync(filePath);
        return { fileName, content: fileContents, date: stats.mtime };
      })
      .sort((a, b) => b.date.getTime() - a.date.getTime()); // Sort descending by modified date

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ error: 'Failed to load blog posts' }, { status: 500 });
  }
}