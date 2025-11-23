import Blogs from '@/components/blogs/blogs.component'
import React from 'react'

export const metadata = {
  title: "Blogs",
  description: "Read our latest articles about bookkeeping, financial management, cloud-based solutions, AI in accounting, and business finance tips from AccureCFO experts.",
  openGraph: {
    title: "Blogs | AccureCFO",
    description: "Read our latest articles about bookkeeping, financial management, and business finance tips.",
  },
};

export default function page() {
  return <Blogs />
}
