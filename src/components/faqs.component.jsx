"use client";
import React, { useState } from "react";
import styles from './faqs.module.css';

export default function Faqs({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Frequently Asked Questions
      </h2>
      <div className={styles.faqList}>
        {faqs?.map((faq, index) => (
          <div
            key={index}
            className={styles.faqItem}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className={styles.faqButton}
            >
              <span className={styles.faqQuestion}>{faq.question}</span>
              <svg
                className={`${styles.faqIcon} ${
                  openIndex === index ? styles.faqIconRotated : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
                <div
                    className={`${styles.faqAnswer} ${
                        openIndex === index ? styles.faqAnswerOpen : styles.faqAnswerClosed
                    }`}
                >
                    <div className={styles.faqAnswerContent}>
                        {faq.answer}
                    </div>
                </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
