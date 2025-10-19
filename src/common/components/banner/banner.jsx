import React from "react";
import styles from './banner.module.css';

export default function Banner({title, desc}) {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>
          {desc}
        </p>
      </div>
    </section>
  );
}
