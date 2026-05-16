import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-4 md:p-6 flex flex-col sm:flex-row gap-4 md:gap-6">
      {/* Left Section - thumbnails, hidden on mobile */}
      <div className="hidden sm:flex flex-col items-center gap-4">
        <div className="bg-green-500 text-white text-xs md:text-sm px-3 py-1 rounded-full">
          SAVE $199.00
        </div>

        <div className="flex flex-row sm:flex-col gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-10 h-14 md:w-12 md:h-16 relative border rounded-md overflow-hidden">
              <Image
                src={`/images/thumb-${i}.jpg`}
                alt="thumb"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main Image */}
      <div className="w-full sm:w-48 md:w-64 h-48 sm:h-64 md:h-96 relative flex-shrink-0">
        <img
          src="/dealsoftheday/mainImage.png"
          alt="product"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col gap-3 md:gap-4">
        <h2 className="text-base md:text-xl font-semibold">
          Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone
        </h2>

        <div className="flex items-center gap-3">
          <span className="text-xl md:text-2xl font-bold text-green-600">$569.00</span>
          <span className="line-through text-gray-400 text-sm">$759.00</span>
        </div>

        <ul className="text-xs md:text-sm text-gray-600 list-disc pl-5 space-y-1">
          <li>Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</li>
          <li>DDR5 Compatible: 4*DIMM slots with XMP 3.0 Memory</li>
          <li>Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
        </ul>

        <div className="flex gap-2 md:gap-3 flex-wrap">
          <button className="px-3 md:px-4 py-1.5 md:py-2 border rounded-md text-xs md:text-sm">FREE SHIPPING</button>
          <button className="px-3 md:px-4 py-1.5 md:py-2 border rounded-md text-xs md:text-sm">FREE GIFT</button>
        </div>

        {/* Countdown */}
        <div className="mt-2 md:mt-4">
          <p className="text-xs md:text-sm font-medium mb-2">HURRY UP! PROMOTION WILL EXPIRES IN</p>
          <div className="flex gap-2 md:gap-3 flex-wrap">
            {["-162 d", "9 h", "-32 m", "-34 s"].map((time, i) => (
              <div key={i} className="px-3 md:px-4 py-2 md:py-3 bg-gray-100 rounded-md text-center text-xs md:text-sm font-semibold">
                {time}
              </div>
            ))}
          </div>
        </div>

        {/* Progress */}
        <div className="mt-2 md:mt-4">
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div className="bg-green-500 h-2 rounded-full w-[35%]"></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">Sold: 26/75</p>
        </div>
      </div>
    </div>
  );
}
