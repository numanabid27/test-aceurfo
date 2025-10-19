import BlogDetail from '@/components/blogs-detail/blog-detail.component'
import { BLOGS } from '@/components/blogs/blogs.constant'
import React from 'react'

export async function generateStaticParams() {
  return BLOGS.map((blog) => ({
    slug: blog.slug,
  }))
}

export default async function page({params}) {
    const slug = await params;
  return <BlogDetail slug={slug.slug} />
}
