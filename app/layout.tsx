// app/layout.tsx

import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border transition-all duration-300">
          <div className="container mx-auto flex justify-between items-center h-16 px-4 md:px-6 lg:px-8">
            <div className="firm-name text-xl font-semibold tracking-tight">Quantwater Tech Investments</div>
            <nav className="nav-links hidden md:flex space-x-6 text-sm font-medium">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <Link href="/about" className="hover:text-accent transition-colors">About</Link>
              <Link href="/solutions" className="hover:text-accent transition-colors">Solutions</Link>
              <Link href="/research" className="hover:text-accent transition-colors">Research</Link>
              <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
              <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="min-h-screen container mx-auto px-4 md:px-6 lg:px-8 py-10">{children}</main>

        <footer className="border-t border-border py-6 text-center text-sm text-muted">
          © {new Date().getFullYear()} Quantwater Tech Investments. All rights reserved.
        </footer>
      </body>
    </html>
  );
}