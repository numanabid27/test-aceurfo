import BlogDetail from '@/components/blogs-detail/blog-detail.component'
import React from 'react'

export default async function page({params}) {
    const slug = await params;
  return <BlogDetail slug={slug.slug} />
}
