// app/layout.js
import './globals.css';
import Link from 'next/link';

// Remove if Inter is not used anywhere else
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Remove className={inter.className} if Inter is not used */}
      <body>
        <header className="header">
        <div className="firm-name">Quantwater Tech Investments</div>
          <nav className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/research">Research</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
 