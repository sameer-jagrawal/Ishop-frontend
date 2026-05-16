import React from 'react'
import Dealsofthedayproduct from './Dealsofthedayproduct'

export default function DealsOfTheDay() {
  return (
    <div className='max-w-7xl bg-gray-200 mx-auto mt-4 px-4 md:px-0 flex flex-col lg:flex-row gap-4 md:gap-6'>
        {/* left side */}
      <div className='flex-1'>
        <div className='py-4 px-6 md:px-10 items-center bg-[#01A49E] rounded-xl font-semibold text-white text-lg md:text-xl'>
            DEALS OF THE DAY
        </div>
        <div>
        <Dealsofthedayproduct/>
        </div>
      </div>
      {/* right side - hidden on mobile */}
      <div className='hidden lg:flex flex-col'>
        <img className='rounded-xl mb-4 md:mb-6' src="/dealsoftheday/rightside/3.png" width={350} alt="" />
        <img className='rounded-xl mb-4 md:mb-6' src="/dealsoftheday/rightside/1.png" width={350} alt="" />
        <img className='rounded-xl mb-4 md:mb-6' src="/dealsoftheday/rightside/2.png" width={350} alt="" />
      </div>
    </div>
  )
}
