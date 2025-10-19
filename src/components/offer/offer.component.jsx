import React from 'react'
import { SERVICES } from '../home.constant';
import Image from 'next/image';
import styles from './offer.module.css';

export default function OfferComponent({slug}) {
  const data = SERVICES.find((item) => item.slug === slug);
  return (
    <>
      <section className={styles.offerBanner}>
        <div className={styles.bannerContainer}>
          <h1 className={styles.offerTitle}>{data?.title}</h1>
        </div>
      </section>
      <div className={styles.contentContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.contentGrid}>
            <div>
              <p className={styles.offerDescription}>{data?.longDescription}</p>
            </div>
            <div>
              <Image src={data?.img} alt={data?.title} className={styles.offerImage} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
