import Banner from '@/common/components/banner/banner';
import { Phone, Mail, MapPin, Clock  } from 'lucide-react';
import styles from './contact.module.css';

export default function ContactComponent() {
  return (
        <section className={styles.contactSection}>
            <Banner title="Contact Us" desc="From today, ensure well-informed decisions that bring change to the life of your business. AccureCFO helps you unlock finance mastery with enhanced efficiency! " />
            <div className={styles.container}>
                <div className={styles.sectionTitle}>
                <h2 className={styles.mainTitle}>
                    Ready to Step Up for Success? 
                </h2>
                <p className={styles.description}>
                    Experience financial transparency to maximize your business's profit. Our professionals are ready to uplift accounting standards
                </p>
                </div>

                <div className={styles.contentGrid}>
                <div className={styles.formCard}>
                    <h3 className={styles.formTitle}>Send us a message</h3>
                    <form className={styles.form}>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                        <label className={styles.label}>
                            First Name
                        </label>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="John"
                        />
                        </div>
                        <div className={styles.formGroup}>
                        <label className={styles.label}>
                            Last Name
                        </label>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="Doe"
                        />
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>
                        Email Address
                        </label>
                        <input
                        type="email"
                        className={styles.input}
                        placeholder="john@example.com"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>
                        Company
                        </label>
                        <input
                        type="text"
                        className={styles.input}
                        placeholder="Your Company"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>
                        Message
                        </label>
                        <textarea
                        rows={4}
                        className={styles.textarea}
                        placeholder="Tell us about your bookkeeping needs..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className={styles.submitBtn}
                    >
                        Send Message
                    </button>
                    </form>
                </div>

                <div className={styles.contactInfo}>
                    <div className={styles.infoCard}>
                    <h3 className={styles.infoTitle}>Get in touch</h3>
                    <div className={styles.infoList}>
                        <div className={styles.infoItem}>
                        <div className={styles.iconContainer}>
                            <Phone style={{height: '1.5rem', width: '1.5rem', color: '#00A63E'}} />
                        </div>
                        <div className={styles.infoContent}>
                            <h4>Phone</h4>
                            <p>+1 (555) 123-4567</p>
                            <p className={styles.small}>Mon-Fri 9am-6pm EST</p>
                        </div>
                        </div>
                        <div className={styles.infoItem}>
                        <div className={styles.iconContainer}>
                            <Mail style={{height: '1.5rem', width: '1.5rem', color: '#00A63E'}} />
                        </div>
                        <div className={styles.infoContent}>
                            <h4>Email</h4>
                            <p>hello@bookkeeperPro.com</p>
                            <p className={styles.small}>We'll respond within 24 hours</p>
                        </div>
                        </div>
                        <div className={styles.infoItem}>
                        <div className={styles.iconContainer}>
                            <MapPin style={{height: '1.5rem', width: '1.5rem', color: '#00A63E'}} />
                        </div>
                        <div className={styles.infoContent}>
                            <h4>Office</h4>
                            <p>123 Business Ave<br />Suite 100<br />New York, NY 10001</p>
                        </div>
                        </div>
                        <div className={styles.infoItem}>
                        <div className={styles.iconContainer}>
                            <Clock style={{height: '1.5rem', width: '1.5rem', color: '#00A63E'}} />
                        </div>
                        <div className={styles.infoContent}>
                            <h4>Business Hours</h4>
                            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p>Saturday: 10:00 AM - 2:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className={styles.ctaCard}>
                    <h3 className={styles.ctaTitle}>Ready to streamline your books?</h3>
                    <p className={styles.ctaDescription}>
                        Schedule a free consultation and see how we can help your business grow.
                    </p>
                    <button className={styles.ctaBtn}>
                        Schedule Free Consultation
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </section>
  )
}
