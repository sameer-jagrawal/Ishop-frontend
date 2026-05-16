import Image from "next/image";

export default function PreOrder() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0 mt-4">
      <div className="rounded-2xl overflow-hidden relative px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/watch.png"
            alt="background product"
            fill
            className="object-cover opacity-80"
          />
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500 opacity-90"></div>

        {/* Content */}
        <div className="relative z-10 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Left */}
          <div className="flex flex-col gap-1">
            <span className="text-xs md:text-sm tracking-widest uppercase">Pre Order</span>
            <span className="text-xs opacity-80">From $399</span>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start sm:items-end gap-2">
            <span className="text-xs opacity-80">Apple Watch Sport Series 8</span>
            <h2 className="text-base md:text-lg font-medium">A healthy leap ahead</h2>
            <button className="bg-white text-black px-4 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Discover Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
