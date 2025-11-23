import AboutComponent from '@/components/about/about.component'
import React from 'react'

export const metadata = {
  title: "About Us",
  description: "Learn about AccureCFO - Professional financial management and bookkeeping services. We turn complex business challenges into opportunities through personalized finance solutions.",
  openGraph: {
    title: "About Us | AccureCFO",
    description: "Learn about AccureCFO - Professional financial management and bookkeeping services.",
  },
};

export default function page() {
  return (
    <AboutComponent />
  )
}
