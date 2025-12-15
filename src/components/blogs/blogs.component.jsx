import React from "react";
import { BLOGS } from "./blogs.constant";
import Banner from "@/common/components/banner/banner";
import Image from "next/image";
import Link from "next/link";
import styles from './blogs.module.css';

export default function Blogs() {


  return (
    <>
      <Banner title="Blogs" desc={<>At <span style={{fontWeight: 600}}>Accurecfo.com</span>, we offer a wide
          range of financial services tailored to meet the diverse needs of our
          clients. Our team of experts is committed to delivering exceptional
          service and strategic solutions. Explore our services below:</>} />
      <section className={styles.blogsSection}>
        <div className={styles.blogsGrid}>
          {BLOGS.map((blog) => (
            <div
              key={blog.id}
              className={styles.blogCard}
            >
              <Image
                src={blog.image}
                alt={blog.title}
                className={styles.blogImage}
                width={300}
                height={300}
              />
              <div className={styles.blogContent}>
                <p className={styles.blogDate}>{blog.date}</p>
                <h3 className={styles.blogTitle} title={blog.title}>
                  {blog.title}
                </h3>
                <p className={styles.blogDescription}>
                  {blog.description}
                </p>
                <Link href={`/blogs/${blog.slug}`} className={styles.readMoreLink}>
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
