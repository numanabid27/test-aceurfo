"use client";
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import logo from "@/common/assets/img/logo.png"
import Image from 'next/image';
import styles from './header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [hash, setHash] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const updateHash = () => setHash(window.location.hash || '');
    updateHash();
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (href) => {
    // anchor/hash links
    if (!href) return false;
    if (href.startsWith('#')) {
      return hash === href;
    }

    // root
    if (href === '/') return pathname === '/';

    // match exact or nested routes (e.g. /blogs and /blogs/[slug])
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src={logo} width={180} height={180} alt="AccureCFO - Professional Bookkeeping Services" />
            </Link>
          </div>

          <nav className={styles.nav}>
            <Link href="/" className={`${styles.navLink} ${isActive('/') ? styles.navLinkActive : ''}`}>
              Home
            </Link>
            <Link href="/about" className={`${styles.navLink} ${isActive('/about') ? styles.navLinkActive : ''}`}>
              About
            </Link>
            <Link href="/blogs" className={`${styles.navLink} ${isActive('/blogs') ? styles.navLinkActive : ''}`}>
              Blogs
            </Link>
            <Link href="/pricing" className={`${styles.navLink} ${isActive('/pricing') ? styles.navLinkActive : ''}`}>
              Pricing
            </Link>
            <Link href="/contact" className={`${styles.navLink} ${isActive('/contact') ? styles.navLinkActive : ''}`}>
              Contact
            </Link>
          </nav>

          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.getStartedBtn}>
              Get Started
            </Link>
          </div>

          <button
            className={styles.mobileMenuBtn}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X style={{height: '1.5rem', width: '1.5rem', color: '#374151'}} />
            ) : (
              <Menu style={{height: '1.5rem', width: '1.5rem', color: '#374151'}} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className={styles.mobileNav}>
            <nav className={styles.mobileNavContent}>
              <Link href="/" className={`${styles.navLink} ${isActive('/') ? styles.navLinkActive : ''}`}>
                Home
              </Link>
              <Link href="/about" className={`${styles.navLink} ${isActive('/about') ? styles.navLinkActive : ''}`}>
                About
              </Link>
              <Link href="/blogs" className={`${styles.navLink} ${isActive('/blogs') ? styles.navLinkActive : ''}`}>
                Blogs
              </Link>
              <Link href="#pricing" className={`${styles.navLink} ${isActive('#pricing') ? styles.navLinkActive : ''}`}>
                Pricing
              </Link>
              <Link href="/contact" className={`${styles.navLink} ${isActive('/contact') ? styles.navLinkActive : ''}`}>
                Contact
              </Link>
              <div className={styles.mobileNavButtons}>
                <button className={styles.getStartedBtn}>
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}