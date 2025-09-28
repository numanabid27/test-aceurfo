import OfferComponent from '@/components/offer/offer.component'

export default async function page({params}) {
  const slug = await params;
  return <OfferComponent slug={slug.slug} />
}
