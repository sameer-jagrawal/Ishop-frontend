import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm mt-5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10 mt-5">
        {/* Top Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
          {/* Column 1 */}
          <div className="col-span-2 sm:col-span-3 md:col-span-1">
            <h3 className="font-bold text-gray-900 mb-3 text-sm">
              SWOO - 1ST NYC TECH ONLINE MARKET
            </h3>
            <p className="text-xs mb-2">HOTLINE 24/7</p>
            <p className="text-red-500 font-bold text-base md:text-lg mb-3">
              (025) 3686 25 16
            </p>
            <p className="text-xs leading-5 mb-2">
              257 Thatcher Road St, Brooklyn, Manhattan, NY 10092
            </p>
            <p className="text-xs mb-4">support@swootechmart.com</p>

            <div className="flex gap-2">
              {["f", "t", "i", "y", "p"].map((s, i) => (
                <div
                  key={i}
                  className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center bg-white rounded-full shadow text-xs"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-900 text-xs md:text-sm">
              TOP CATEGORIES
            </h4>
            <ul className="space-y-1 text-xs">
              {[
                "Laptops", "PC & Computers", "Cell Phones", "Tablets",
                "Gaming & VR", "Networks", "Cameras", "Sounds", "Office",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-900 text-xs md:text-sm">COMPANY</h4>
            <ul className="space-y-1 text-xs">
              {[
                "About Swoo", "Contact", "Career", "Blog", "Sitemap", "Store Locations",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-900 text-xs md:text-sm">HELP CENTER</h4>
            <ul className="space-y-1 text-xs">
              {[
                "Customer Service", "Policy", "Terms & Conditions",
                "Track Order", "FAQs", "My Account", "Product Support",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-900 text-xs md:text-sm">PARTNER</h4>
            <ul className="space-y-1 text-xs">
              {["Become Seller", "Affiliate", "Advertise", "Partnership"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Subscribe */}
        <div className="mt-8 md:mt-10 text-center">
          <p className="font-semibold text-gray-900 mb-2 text-sm">
            SUBSCRIBE & GET <span className="text-red-500">10% OFF</span> FOR YOUR FIRST ORDER
          </p>
          <div className="flex justify-center items-center border-b max-w-xs sm:max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full bg-transparent outline-none py-2 text-sm"
            />
            <button className="text-red-500 text-xs font-semibold whitespace-nowrap ml-2">
              SUBSCRIBE
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            By subscribing, you&apos;re accepted the our Policy
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-8 md:mt-10 pt-5 md:pt-6 border-t flex flex-col md:flex-row justify-between items-center text-xs gap-3 md:gap-4">
          <p>© 2024 Shawonetc3 . All Rights Reserved</p>
          <div className="flex gap-3 md:gap-4 items-center">
            <span>PayPal</span>
            <span>Visa</span>
            <span>Stripe</span>
            <span>Klarna</span>
          </div>
          <a className="text-blue-500">Mobile Site</a>
        </div>
      </div>
    </footer>
  );
}
