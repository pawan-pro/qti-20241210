// pages/api/blogs.js
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  try {
    const blogDir = path.join(process.cwd(), 'public', 'blogs');
    console.log('Blog directory:', blogDir); // Debug: log the directory path

    // Check if the directory exists
    if (!fs.existsSync(blogDir)) {
      console.error('Blog directory does not exist');
      return res.status(500).json({ error: 'Blog directory does not exist' });
    }

    const fileNames = fs.readdirSync(blogDir);
    console.log('Files found:', fileNames); // Debug: log the file names

    // Read the contents of each file
    const posts = fileNames.map((fileName) => {
      const filePath = path.join(blogDir, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      return { fileName, content: fileContents };
    });

    console.log('Posts:', posts); // Debug: log the posts

    return res.status(200).json(posts); // Return the posts
  } catch (error) {
    console.error('Error fetching blog posts:', error); // Log the error
    return res.status(500).json({ error: 'Failed to load blog posts' });
  }
}