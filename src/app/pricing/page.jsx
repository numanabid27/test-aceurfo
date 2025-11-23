import Pricing from "@/components/pricing/pricing.component";

export const metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for bookkeeping services. Choose the plan that fits your business needs - Starter, Professional, or Enterprise. All plans include core bookkeeping services with no hidden fees.",
  openGraph: {
    title: "Pricing | AccureCFO",
    description: "Simple, transparent pricing for bookkeeping services. Choose the plan that fits your business needs.",
  },
};

export default function page() {
    return(
        <Pricing />
    )
}