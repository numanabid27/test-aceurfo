import OfferComponent from '@/components/offer/offer.component'
import { SERVICES } from '@/components/home.constant'

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }) {
  const slug = await params;
  const service = SERVICES.find((item) => item.slug === slug.slug);
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
    },
  };
}

export default async function page({params}) {
  const slug = await params;
  return <OfferComponent slug={slug.slug} />
}
