import Banner from "@/common/components/banner/banner";
import styles from './pricing.module.css';
import { PLANS } from "../home.constant";
import { ArrowRight, CheckCircle, Check, Star , Award } from 'lucide-react';


export default function Pricing() {
    return(
        <section>
            <div className={styles.contactSection}>
                <Banner title="Pricing" desc="Choose the plan that fits your business needs. All plans include our core bookkeeping services with no hidden fees or long-term contracts." />
                <div className={styles.container}>
                    <section className={styles.pricingSection}>
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

                            
                        </div>
                    </section>
                </div>
            </div>
        </section> 
    )
}