import React from 'react';
import { Suspense } from 'react';
import Hero from '../components/user components/Home/Hero';
import FeatureBrand from '../components/user components/Home/FeatureBrand';
import Topcategories from '../components/user components/Home/Topcategories';
import DealsOfTheDay from '../components/user components/Home/dealsoftheday/DealsOfTheDay';
import PreOrder from '../components/user components/Home/PreOrder';
import MultiTabs from '../components/user components/Home/MultiTabs';
import LaptopsSection from '../components/user components/Home/LaptopsSection';
// import LaptopsSection from '../components/user components/Home/LaptopsSection';

function SectionSkeleton({ className = "h-56" }) {
  return (
    <div className="mx-auto mt-4 max-w-7xl px-4 md:px-0">
      <div className={`animate-pulse rounded-md bg-gray-200 ${className}`} />
    </div>
  );
}

export default function Page() {
  return (
    <div className='bg-white lg:bg-gray-200 '>
      <Suspense fallback={<div className="h-[360px] animate-pulse bg-gray-200 md:h-[480px]" />}>
        <Hero/>
      </Suspense>
      <div className='flex flex-col max-h-fit md:flex-row max-w-7xl mx-auto gap-4 px-4 md:px-0'>
        <Suspense fallback={<SectionSkeleton className="h-44" />}>
          <FeatureBrand/>
        </Suspense>
        <Suspense fallback={<SectionSkeleton className="h-44" />}>
          <Topcategories />
        </Suspense>
      </div>
      <Suspense fallback={<SectionSkeleton className="h-96" />}>
        <DealsOfTheDay/>
      </Suspense>
      <PreOrder/>
      <Suspense fallback={<SectionSkeleton className="h-[420px]" />}>
        <LaptopsSection/>
      </Suspense>
      <Suspense fallback={<SectionSkeleton className="h-[420px]" />}>
        <MultiTabs/>
      </Suspense>
    </div>
  )
}
