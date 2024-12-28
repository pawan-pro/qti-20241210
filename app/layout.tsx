import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="firm-name">Quantwater Tech Investments</div>
          <nav className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/research">Research</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/blog2">Blog2</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}