"use client";
import { useState } from 'react';
import Banner from '@/common/components/banner/banner';
import { Phone, Mail, MapPin, Clock  } from 'lucide-react';
import styles from './contact.module.css';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

export default function ContactComponent() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // Email regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all fields correctly.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const serviceID = "service_1jl8lce";
      const templateID = "template_i7v2j55";
      const publicKey = "nnryAaeofzHiKdDWa";

      const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        message: formData.message,
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      setSubmitStatus({ 
        type: 'success', 
        message: 'Thank you! Your message has been sent successfully. We will get back to you soon.' 
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
      setErrors({});
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error sending your message. Please try again later or contact us directly.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                    <form className={styles.form} onSubmit={handleSubmit} noValidate>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                        <label className={styles.label}>
                            First Name <span className={styles.required}>*</span>
                        </label>
                        <input
                            name="firstName"
                            id="firstName"
                            type="text"
                            className={`${styles.input} ${errors.firstName ? styles.inputError : ''}`}
                            placeholder="Enter First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                        {errors.firstName && (
                          <span className={styles.errorMessage}>{errors.firstName}</span>
                        )}
                        </div>
                        <div className={styles.formGroup}>
                        <label className={styles.label}>
                            Last Name <span className={styles.required}>*</span>
                        </label>
                        <input
                            name="lastName"
                            id="lastName"
                            type="text"
                            className={`${styles.input} ${errors.lastName ? styles.inputError : ''}`}
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                        {errors.lastName && (
                          <span className={styles.errorMessage}>{errors.lastName}</span>
                        )}
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>
                        Email Address <span className={styles.required}>*</span>
                        </label>
                        <input
                        name="email"
                        id="email"
                        type="email"
                        className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        />
                        {errors.email && (
                          <span className={styles.errorMessage}>{errors.email}</span>
                        )}
                    </div>
                  
                    <div className={styles.formGroup}>
                        <label className={styles.label}>
                            Message <span className={styles.required}>*</span>
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows={6}
                            className={`${styles.textarea} ${errors.message ? styles.textareaError : ''}`}
                            placeholder="Tell us about your bookkeeping needs..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        {errors.message && (
                          <span className={styles.errorMessage}>{errors.message}</span>
                        )}
                    </div>

                    {submitStatus.message && (
                      <div className={`${styles.statusMessage} ${
                        submitStatus.type === 'success' ? styles.successMessage : styles.errorMessageBox
                      }`}>
                        {submitStatus.message}
                      </div>
                    )}

                    <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
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
                            <Link href="tel:+16149607335">+1 (614) 960-7335</Link>
                            <p className={styles.small}>Mon-Fri 9am-6pm EST</p>
                        </div>
                        </div>
                        <div className={styles.infoItem}>
                        <div className={styles.iconContainer}>
                            <Mail style={{height: '1.5rem', width: '1.5rem', color: '#00A63E'}} />
                        </div>
                        <div className={styles.infoContent}>
                            <h4>Email</h4>
                            <Link href="mailto:info@accurecfo.com">info@accurecfo.com</Link>
                            <p className={styles.small}>We'll respond within 24 hours</p>
                        </div>
                        </div>
                        <div className={styles.infoItem}>
                        <div className={styles.iconContainer}>
                            <MapPin style={{height: '1.5rem', width: '1.5rem', color: '#00A63E'}} />
                        </div>
                        <div className={styles.infoContent}>
                            <h4>Office</h4>
                            <p>123 Business Ave Suite 100 New York, NY 10001</p>
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
                   
                    <Link
                        href="https://calendly.com/arif-sheikh1125/30min"
                        target="_blank"
                        className={styles.ctaBtn}
                    >
                        Schedule Free Consultation
                    </Link>
                    </div>
                </div>
                </div>
            </div>
        </section>
  )
}
