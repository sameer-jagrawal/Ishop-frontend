import React from 'react';
import Hero from '../components/user components/Home/Hero';
import FeatureBrand from '../components/user components/Home/FeatureBrand';
import Topcategories from '../components/user components/Home/Topcategories';
import DealsOfTheDay from '../components/user components/Home/dealsoftheday/DealsOfTheDay';
import PreOrder from '../components/user components/Home/PreOrder';
import MultiTabs from '../components/user components/Home/MultiTabs';
import LaptopsSection from '../components/user components/Home/LaptopsSection';
// import LaptopsSection from '../components/user components/Home/LaptopsSection';


export default function page() {
  return (
    <div className='bg-gray-200 '>
      <Hero/>
      <div className='flex flex-col max-h-fit md:flex-row max-w-7xl mx-auto gap-4 px-4 md:px-0'>
      <FeatureBrand/>
      <Topcategories />
      </div>
      <DealsOfTheDay/>
      <PreOrder/>
      <MultiTabs/>
      {/* <LaptopsSection /> */}
      <LaptopsSection/>
    </div>
  )
}
