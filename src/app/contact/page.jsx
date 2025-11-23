import ContactComponent from '@/components/contact/contact.component'

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with AccureCFO for professional bookkeeping and financial services. Schedule a free consultation and see how we can help your business grow.",
  openGraph: {
    title: "Contact Us | AccureCFO",
    description: "Get in touch with AccureCFO for professional bookkeeping and financial services.",
  },
};

export default function Contact() {
  return <ContactComponent />
}
