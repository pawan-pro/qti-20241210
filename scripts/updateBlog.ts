import fs from 'fs';
import path from 'path';

// Utility: Get next Monday
function getNextMonday(): Date {
  const today = new Date();
  const nextMonday = new Date(today);
  nextMonday.setDate(today.getDate() + ((8 - today.getDay()) % 7));
  return nextMonday;
}

function formatDate(date: Date): string {
  return date.toISOString().split('T')[0].replace(/-/g, ''); // YYYYMMDD
}

function formatReadableDate(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    weekday: 'short',
  });
}

// MAIN
const blogDate = getNextMonday();
const blogId = formatDate(blogDate);       // e.g. 20250707
const blogTitle = `Key Economic Events: Week Of ${blogDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}`;

// 1. Copy blog template
const srcHtml = path.join('public', 'blogs', 'template.html');
const destHtml = path.join('public', 'blogs', `${blogId}.html`);

fs.copyFileSync(srcHtml, destHtml);
console.log(`✅ Created HTML: ${destHtml}`);

// 2. Update app/blog/page.tsx
const pagePath = path.join('app', 'blog', 'page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');

// Insert new blog card at the top of the `projects` array
const insertAt = content.indexOf('const projects = [') + 'const projects = ['.length;
const blogCard = `
  {
    id: 'blog${blogId}',
    title: '${blogTitle}',
    image: '/blogs/blog-cover/${blogId}.png',
    link: '/blogs/${blogId}.html',
    //description: 'Market preview for the week.'
  },`;

const newContent = content.slice(0, insertAt) + blogCard + content.slice(insertAt);
fs.writeFileSync(pagePath, newContent, 'utf8');
console.log(`✅ Updated: app/blog/page.tsx`);

console.log(`🎉 All done! Now run this in Gemini CLI:\n`);
console.log(`gcli> Add all files`);
console.log(`gcli> Commit with message "${new Date().toISOString().split('T')[0]}: added blog ${blogId}"`);
console.log(`gcli> Push to main`);