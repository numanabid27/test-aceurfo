import React from "react";
import styles from './privacy-policy.module.css';

export default function PrivacyPolicy() {
  return (
    <section className={styles.privacySection}>
      <div>
        <h1 className={styles.sectionTitle}>Terms and Conditions </h1>
        <p className={styles.sectionText}>
          At <span className={styles.brandName}>AccureCFO</span>,  resolves your queries efficiently with clear definitions to avoid ambiguity. While curating the best financial strategies, we ensure the proper safety and privacy of our clients' data. The timesheets, material handling, deliverables, and IP are entirely confidential. Moreover, any dispute between third parties is governed by the applicable law and jurisdiction. 
        </p>
      </div>

      <div className={styles.sectionWrapper}>
        <h2 className={styles.sectionTitle}>Privacy Policy </h2>
        <p className={styles.sectionText}>
          We begin the process by collecting your information, including business details, to design a finance strategy. Afterwards, our experts prepare financial reports to boost clarity in your business's accounts.         
        </p>
        <p className={styles.sectionText}>
          We prioritize our clients' decisions and disclose required information to third parties only if they consent. All data comply with legal obligations and conditions. While this process is ongoing, you have the right to restrict any service or request an audit.          </p>
      </div>

     
    </section>
  );
}
