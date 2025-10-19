import OfferComponent from '@/components/offer/offer.component'
import { SERVICES } from '@/components/home.constant'

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }))
}

export default async function page({params}) {
  const slug = await params;
  return <OfferComponent slug={slug.slug} />
}
