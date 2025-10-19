import React from 'react';
import { Calculator} from 'lucide-react';
import Link from 'next/link';
import logo from "@/common/assets/img/white-logo.png";
import Image from 'next/image';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.companyInfo}>
            <div className={styles.logoContainer}>
              <Image src={logo} alt="AccureCFO" style={{width: '204px', height:"unset"}} />
            </div>
            <p className={styles.description}>
              Professional bookkeeping services that help businesses grow through 
              better financial management and strategic insights.
            </p>
          </div>

          <div>
            <h3 className={styles.sectionTitle}>Services</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><a href="#" className={styles.link}>Monthly Bookkeeping</a></li>
              <li className={styles.linkItem}><a href="#" className={styles.link}>Tax Preparation</a></li>
              <li className={styles.linkItem}><a href="#" className={styles.link}>Financial Analysis</a></li>
              <li className={styles.linkItem}><a href="#" className={styles.link}>Payroll Services</a></li>
              <li className={styles.linkItem}><a href="#" className={styles.link}>CFO Advisory</a></li>
            </ul>
          </div>

          <div>
            <h3 className={styles.sectionTitle}>Company</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><a href="#about" className={styles.link}>About Us</a></li>
              <li className={styles.linkItem}><a href="#" className={styles.link}>Careers</a></li>
              <li className={styles.linkItem}><a href="#" className={styles.link}>Blog</a></li>
              <li className={styles.linkItem}><a href="#" className={styles.link}>Case Studies</a></li>
              <li className={styles.linkItem}><a href="#contact" className={styles.link}>Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className={styles.sectionTitle}>Support</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><a href="#" className={styles.link}>Help Center</a></li>
              <li className={styles.linkItem}><a href="#" className={styles.link}>Documentation</a></li>
              <li className={styles.linkItem}><a href="#" className={styles.link}>API Reference</a></li>
              <li className={styles.linkItem}><a href="#" className={styles.link}>System Status</a></li>
              <li className={styles.linkItem}><a href="#" className={styles.link}>Security</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © 2025 AccureCFO. All rights reserved.
            </p>
            <div className={styles.bottomLinks}>
              <Link href="/privacy-policy" className={styles.bottomLink}>Privacy Policy & terms and conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}