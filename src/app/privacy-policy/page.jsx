import PrivacyPolicy from '@/components/privacy-policy/privacy-policy.component'

export const metadata = {
  title: "Privacy Policy & Terms and Conditions",
  description: "Read AccureCFO's Privacy Policy and Terms and Conditions. Learn how we protect your data and the terms of using our bookkeeping services.",
  openGraph: {
    title: "Privacy Policy & Terms and Conditions | AccureCFO",
    description: "Read AccureCFO's Privacy Policy and Terms and Conditions.",
  },
};

export default function page() {
  return <PrivacyPolicy />
}
