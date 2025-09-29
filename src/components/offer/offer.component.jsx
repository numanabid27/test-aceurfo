import React from 'react'
import { SERVICES } from '../home.constant';
import Image from 'next/image';

export default function OfferComponent({slug}) {
  const data = SERVICES.find((item) => item.slug === slug);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className='my-10'>
        <h1 className='text-center text-[40px] font-semibold'>{data?.title}</h1>
        <div className='grid grid-cols-2 mt-5 gap-8 items-center'>
          <div>
            <p className='text-lg text-justify'>{data?.longDescription}</p>
          </div>
          <div>
            <Image src={data?.img} alt={data?.title} className='w-full rounded-[4px]' />
          </div>
        </div>
      </div>
    </div>
  )
}
