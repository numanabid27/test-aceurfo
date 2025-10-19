"use client"
import { ArrowRight, CheckCircle, Check, Star , Award } from 'lucide-react';
import { FAQS, PLANS, SERVICES, STATS, STEPS, TEAM } from './home.constant';
import Faqs from './faqs.component';
import Link from 'next/link';
import Image from 'next/image';
import styles from './home.module.css';

export default function HomePage() {

  return (
    <>
        <section className={styles.bannerSection}>
            <div className={styles.container}>
                <div className={styles.heroGrid}>
                <div>
                    <h1 className={styles.heroTitle}>
                        BUILD PROFESSIONAL FINANCIAL RECORD 
                    </h1>
                    <p className={styles.heroDescription}>
                        Maintain financial records and handle bookkeeping professionally is not complicated with AccureCFO. We manage business finances that welcomes success. 
                    </p>
                    
                    <div className={styles.benefitsList}>
                    {[
                        'Simple and accurate management ',
                        'Skilled and passionate experts ',
                        'Financial Reporting ',
                        'Budgeting and Forecasting '
                    ].map((benefit, index) => (
                        <div key={index} className={styles.benefitItem}>
                        <CheckCircle style={{height: '1.25rem', width: '1.25rem', color: '#10b981', marginRight: '0.75rem'}} />
                        <span className={styles.benefitText}>{benefit}</span>
                        </div>
                    ))}
                    </div>

                    <div className={styles.ctaButtons}>
                    <button className={styles.primaryBtn}>
                        Start Free Trial
                        <ArrowRight style={{marginLeft: '0.5rem', height: '1.25rem', width: '1.25rem'}} />
                    </button>
                    <button className={styles.secondaryBtn}>
                        Schedule Demo
                    </button>
                    </div>

                    
                </div>

                <div className={styles.dashboardPreview}>
                    <div className={styles.dashboardCard}>
                    <div className={styles.overviewSection}>
                        <div className={styles.overviewHeader}>
                        <h3 className={styles.overviewTitle}>Financial Overview</h3>
                        <span className={styles.overviewDate}>This Month</span>
                        </div>
                        <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <p className={styles.statLabel}>Revenue</p>
                            <p className={`${styles.statValue} ${styles.greenText}`}>$45,230</p>
                            <p className={`${styles.statChange} ${styles.greenText}`}>+12.5%</p>
                        </div>
                        <div className={styles.statCard}>
                            <p className={styles.statLabel}>Expenses</p>
                            <p className={`${styles.statValue} ${styles.redText}`}>$18,940</p>
                            <p className={`${styles.statChange} ${styles.redText}`}>+3.2%</p>
                        </div>
                        </div>
                    </div>
                    <div className={styles.transactionsList}>
                        {[
                        { name: 'Client Payment', amount: '+$2,500', color: 'greenText' },
                        { name: 'Office Rent', amount: '-$1,200', color: 'redText' },
                        { name: 'Software License', amount: '-$299', color: 'redText' },
                        ].map((transaction, index) => (
                        <div key={index} className={styles.transactionItem}>
                            <span className={styles.transactionName}>{transaction.name}</span>
                            <span className={`${styles.transactionAmount} ${styles[transaction.color]}`}>{transaction.amount}</span>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <section id="services" className={styles.servicesSection}>
        <div className={styles.container}>
            <div className={styles.sectionTitle}>
                <h2 className={styles.mainTitle}>
                    Top Business Financial Services 
                </h2>
            </div>

            <div className={styles.servicesGrid}>
                {SERVICES?.map((service, index) => {
                    return (
                        <div key={index} className={styles.serviceCard}>
                            <div className={styles.serviceIcon}>
                                <Image src={service.icon} alt={service.title} style={{width: '4rem', height: '4rem'}} />
                            </div>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                            <p className={styles.serviceDescription}>{service.description}</p>
                            
                            <Link href={`offer-detail/${service.slug}`} className={styles.learnMoreBtn}>
                                Learn More →
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
        </section>

        <section className={styles.whyChooseSection}>
            <h2 className={styles.whyChooseTitle}>Why Choose Us?</h2>
            <div className={styles.stepsGrid}>
                {STEPS.map((step, index) => (
                    <div
                    key={index}
                    className={`${styles.stepCard} ${
                        [
                        styles.green700,
                        styles.green600,
                        styles.green500,
                        styles.green400,
                        styles.green300,
                        ][index]
                    }`}
                    >
                    <h2 className={styles.stepNumber}>{step.number}</h2>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                    
                    </div>
                ))}
            </div>
        </section>    

        <section id="pricing" className={styles.pricingSection}>
            <div className={styles.container}>
                <div className={styles.sectionTitle}>
                <h2 className={styles.mainTitle}>
                    Simple, Transparent Pricing
                </h2>
                <p className={styles.aboutText}>
                    Choose the plan that fits your business needs. All plans include our core bookkeeping 
                    services with no hidden fees or long-term contracts.
                </p>
                </div>

                <div className={styles.pricingGrid}>
                {PLANS?.map((plan, index) => (
                    <div key={index} className={`${styles.pricingCard} ${
                    plan.popular ? styles.popularCard : ''
                    }`}>
                    {plan.popular && (
                        <div className={styles.popularBadge}>
                        <div className={styles.popularBadgeContent}>
                            <Star style={{width: '1rem', height: '1rem', marginRight: '0.25rem'}} />
                            Most Popular
                        </div>
                        </div>
                    )}
                    
                    <div className={styles.planHeader}>
                        <h3 className={styles.planName}>{plan.name}</h3>
                        <p className={styles.planDescription}>{plan.description}</p>
                        <div className={styles.priceContainer}>
                        <span className={styles.price}>{plan.price}</span>
                        <span className={styles.period}>{plan.period}</span>
                        </div>
                    </div>

                    <ul className={styles.featuresList}>
                        {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className={styles.featureItem}>
                            <Check style={{height: '1.25rem', width: '1.25rem', color: '#10b981', marginRight: '0.75rem', flexShrink: 0}} />
                            <span className={styles.featureText}>{feature}</span>
                        </li>
                        ))}
                    </ul>

                    <button className={`${styles.planButton} ${
                        plan.popular 
                        ? styles.primaryPlanBtn
                        : styles.secondaryPlanBtn
                    }`}>
                        Get Started
                    </button>
                    </div>
                ))}
                </div>

                <div className={styles.pricingFooter}>
                <p className={styles.pricingFooterText}>Need a custom solution?</p>
                <button className={styles.enterpriseBtn}>
                    Contact us for enterprise pricing →
                </button>
                </div>
            </div>
        </section>

        <section className={styles.aboutSection}>
            <div className={styles.container}>
                <div className={styles.aboutGrid}>
                <div>
                    <h2 className={styles.aboutTitle}>
                    Your Trusted Financial Partner
                    </h2>
                    <p className={styles.aboutText}>
                    For over 15 years, BookKeeper Pro has been helping businesses of all sizes 
                    maintain accurate financial records and make informed decisions. Our team of 
                    certified professionals combines expertise with cutting-edge technology to 
                    deliver exceptional results.
                    </p>
                    <p className={styles.aboutText}>
                    We believe that every business deserves access to professional bookkeeping 
                    services, regardless of size or industry. That's why we've built scalable 
                    solutions that grow with your business.
                    </p>
                    <button className={styles.aboutBtn}>
                    Learn More About Us
                    </button>
                </div>
                <div className={styles.aboutImageContainer}>
                    <img 
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                    alt="Professional team working" 
                    className={styles.aboutImage}
                    />
                    <div className={styles.certificationBadge}>
                    <div className={styles.badgeContent}>
                        <div className={styles.badgeIcon}>
                        <Award style={{height: '1.5rem', width: '1.5rem', color: '#059669'}} />
                        </div>
                        <div>
                        <p className={styles.badgeTitle}>Certified Professionals</p>
                        <p className={styles.badgeSubtitle}>CPA & QuickBooks ProAdvisors</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        
        <section className={styles.faqsSection}>
           <Faqs faqs={FAQS} />
        </section>
        
    </>
  )
}
