import React from 'react'

export default function TopPhonesBanner() {
    return (
      <section className="bg-white mt-2 rounded-md p-4 md:p-6 max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="font-bold text-base md:text-lg mb-4">TOP CELL PHONES & TABLETS</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* LEFT BIG CARD */}
          <div className="relative md:col-span-2 bg-gray-300 rounded-xl overflow-hidden flex items-center min-h-[200px] md:min-h-[240px]">
            {/* Text */}
            <div className="absolute left-6 md:left-8 z-10 text-white max-w-xs">
              <h3 className="text-xl md:text-3xl font-bold leading-tight">
                Noise Cancelling
                <br />
                <span className="font-medium">Headphone</span>
              </h3>
  
              <p className="text-xs md:text-sm mt-3 md:mt-4 text-gray-200">
                Base Over-Ear Headphone
                <br />
                With Voice Assistant
                <br />
                Low Latency Game Mode
              </p>
  
              <button className="mt-4 md:mt-6 bg-white text-black text-xs md:text-sm px-4 md:px-5 py-1.5 md:py-2 rounded-md font-medium">
                BUY NOW
              </button>
            </div>
  
            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=800"
              className="w-full h-full object-cover opacity-90"
              alt="headphone"
            />
  
            {/* Slider Indicator */}
            <div className="absolute bottom-3 right-4 md:bottom-4 md:right-6 bg-white/80 text-black text-xs px-3 py-1 rounded-full">
              3 / 3
            </div>
          </div>
  
          {/* RIGHT CARD */}
          <div className="bg-gradient-to-br from-purple-200 to-orange-100 rounded-xl p-4 md:p-6 flex flex-col justify-between min-h-[160px]">
            <div>
              <div className="flex justify-between items-start">
                <h3 className="text-base md:text-lg font-semibold leading-tight">
                  redmi note 12
                  <br />
                  Pro+ 5g
                </h3>
  
                <button className="bg-black text-white text-xs px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                  SHOP NOW
                </button>
              </div>
  
              <p className="text-xs md:text-sm text-gray-600 mt-2">Rise to the challenge</p>
            </div>
  
            {/* Phones Image */}
            <div className="flex justify-end mt-3 md:mt-4">
              <img
                src="https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=400"
                className="h-24 md:h-32 object-contain"
                alt="phone"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  