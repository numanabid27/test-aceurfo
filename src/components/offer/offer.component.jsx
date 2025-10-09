import React from 'react'
import { SERVICES } from '../home.constant';
import Image from 'next/image';

export default function OfferComponent({slug}) {
  const data = SERVICES.find((item) => item.slug === slug);
  return (
    <>
      <section className="bg-gradient-to-br from-[#00A63E] to-[transparent] py-20">
        <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-[44px] text-center font-bold text-[#fff] ">{data?.title}</h1>
          
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='my-10'>
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
    </>
  )
}
