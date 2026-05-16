import AddToCartButton from "@/app/components/user components/Store/AddToCart";
import ProductGallery from "@/app/components/user components/Store/ProductGallery";
import { getMe } from "@/api_call/serverApi";
import { client } from "@/utils/helper";
import {
  BadgeCheck,
  ChevronRight,
  CreditCard,
  RotateCcw,
  ShieldCheck,
  Star,
} from "lucide-react";
import ProductsSection from "@/app/components/user components/ProductSection";
import { MapPin, Truck, Store } from "lucide-react";
import ProductDetailsTabs from "@/app/components/user components/ProductDetailsTabs";

const highlights = [
  "Premium quality product with verified seller support",
  "Strong performance for everyday use and long-term reliability",
  "Secure packaging with quick doorstep delivery",
  "Easy replacement support on eligible orders",
];

const offers = [
  "10% instant discount with selected bank cards",
  "Free delivery on prepaid orders above Rs. 499",
  "Extra cashback available on wallet payments",
  "No-cost EMI available on eligible cards",
];

const services = [
  { icon: Truck, title: "Fast delivery", text: "Expected in 2-5 days" },
  { icon: RotateCcw, title: "Easy returns", text: "7 day replacement" },
  { icon: ShieldCheck, title: "Secure payment", text: "Protected checkout" },
  { icon: BadgeCheck, title: "Assured quality", text: "Verified product" },
];

const specs = [
  ["Brand", "Ishop Select"],
  ["Warranty", "1 year seller warranty"],
  ["Delivery", "Free shipping available"],
  ["Return policy", "7 day replacement"],
  ["Payment", "Cards, UPI, EMI and wallets"],
  ["Support", "24/7 customer care"],
];

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const productRes = await client.get(`product/slug/${slug}`);
  const product = productRes?.data?.data || {};
  const user = await getMe();

  const finalPrice = Number(product?.final_price || 0);
  const originalPrice = Number(product?.original_price || 0);
  const discount =
    Number(product?.discount_percentage) ||
    (originalPrice > finalPrice && finalPrice
      ? Math.round(((originalPrice - finalPrice) / originalPrice) * 100)
      : 0);
  const brandName = product?.brandId?.name || product?.brand || "Ishop";
  const productName = product?.name || "Premium Everyday Product";
  const isInStock = product?.status ?? product?.stock > 0;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-7xl px-4 pb-3 pt-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
          <span>Home</span>
          <ChevronRight size={14} />
          <span>Products</span>
          <ChevronRight size={14} />
          <span className="text-[#01A49E]">{brandName}</span>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-start gap-6 px-4 pb-8 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <ProductGallery product={product} />

        <div className="self-start rounded-sm bg-white pt-0 sm:p-0 lg:p-0">
          {/* brand name rating */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-[#01A49E]/10 px-3 py-1.5 text-xs font-semi uppercase tracking-wide text-[#017d78]">
              {brandName}
            </span>
            <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2.5 py-1.5 text-xs font-bold text-amber-700">
              <Star size={14} className="fill-amber-500 text-amber-500" />
              4.6
            </span>
            <span className="text-xs font-semibold text-slate-500">
              2,841 ratings
            </span>
          </div>
          {/* product name */}
          <h1 className="mt-4 text-2xl font-semibold leading-tight text-slate-700 sm:text-3xl">
            {productName}
          </h1>
          {/* short desc */}
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base border-b border-gray-300 pb-4">
            A reliable choice for shoppers who want strong value, trusted
            quality, and a smooth buying experience from Ishop.
          </p>
          {/* pricing */}
          <div className="mt-5 rounded-lg bg-slate-50 ">
            <div className="flex flex-wrap items-end gap-3">
              <span className="text-2xl  leading-none  text-slate-950 sm:text-2xl">
                Rs. {finalPrice || "0"}
              </span>
              {originalPrice > finalPrice && (
                <span className="text-base  text-slate-400 line-through">
                  Rs. {originalPrice}
                </span>
              )}
              {discount > 0 && (
                <span className="rounded-md bg-red-500 px-2.5 py-1.5 text-xs font-extrabold text-white">
                  {discount}% OFF
                </span>
              )}
            </div>
          </div>
          <p className="mt-2 text-sm ">Inclusive of all taxes.</p>
          {/* offers */}
          {/* <div className="mt-5 grid gap-3 rounded-lg bg-green-50 p-4 ring-1 ring-green-100">
            <div className="flex items-center gap-2 text-green-800">
              <Zap size={18} />
              <h2 className="text-sm font-extrabold uppercase tracking-wide">Available offers</h2>
            </div>
            <div className="grid gap-2">
              {offers.map((offer) => (
                <div key={offer} className="flex items-start gap-2 text-sm font-semibold leading-6 text-green-800">
                  <BadgeCheck size={17} className="mt-1 shrink-0" />
                  <span>{offer}</span>
                </div>
              ))}
            </div>
          </div> */}

          {/* delivery details */}
          <section className="  mx-auto mt-4  border-b border-gray-300 pb-4">
            <div className=" text-gray-800 ">
              <h2 className="text-[15px] font-semibold mb-3">
                Delivery details
              </h2>
              <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white">
                {/* Address */}{" "}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-gray-200">
                  <div className="flex items-center gap-2 ">
                    <MapPin size={17} className="text-gray-500 flex-shrink-0" />
                    <p className="text-[13px] text-gray-600 ">
                      Kirana king Shambu lal Jagrawal, Kotkhwada, Jaipur,...
                    </p>
                  </div>
                </div>
                {/* Delivery date */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200">
                  <Truck size={16} className="text-gray-500" />

                  <p className="text-[14px] font-medium text-gray-700">
                    Delivery by 19 May, Tue
                  </p>
                </div>
                {/* Seller */}
                <div className="px-4 py-3">
                  <div className="flex items-start gap-2">
                    <Store size={16} className="text-gray-500 mt-[2px]" />

                    <div>
                      <p className="text-[14px] text-gray-700">
                        Fulfilled by StyleWavesLLP
                      </p>

                      <p className="text-[12px] text-gray-400 mt-1">
                        4.1 ★ • 1 year with Flipkart
                      </p>

                      <button className="text-[13px] text-blue-600 font-medium mt-1 hover:underline">
                        See other sellers
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* colors */}
          {product?.colorId?.length > 0 && (
            <div className="mt-5">
              <h2 className="text-sm font-extrabold text-slate-900">
                Color options
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.colorId.map((color) => (
                  <button
                    key={color.name}
                    className="inline-flex items-center gap-2 rounded-md border border-gray-400 px-3 py-2 text-sm font-bold text-slate-800"
                  >
                    <span
                      className="h-4 w-4 rounded-full ring-2 ring-white"
                      style={{ backgroundColor: color.colorCode }}
                    />
                    {color.name}
                  </button>
                ))}
              </div>
            </div>
          )}
          {/* add to cart and buy now */}
          <div className="mt-5 flex items-center gap-2 text-md font-semibold">
            <span
              className={`h-2.5 w-2.5 rounded-full ${isInStock ? "bg-green-500" : "bg-red-500"}`}
            />
            <span className="text-gray-600">
              {isInStock ? "In stock" : "Currently unavailable"}
            </span>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row border-b border-gray-300 pb-8">
            <div className="min-w-0 flex-1">
              <AddToCartButton user={user} product={product} />
            </div>
            <button className="flex h-[40px] flex-1 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-2 text-sm font-bold text-white transition-all duration-300 hover:bg-slate-950 active:scale-95">
              <CreditCard size={18} />
              Buy Now
            </button>
          </div>

          {/* services  for above md screens */}
          <section className="  hidden   mx-auto mt-4 md:grid grid-cols-2 md:grid-cols-4 gap-6 ">
            {services.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="flex items-center justify-center rounded-md">
                  <Icon size={30} />
                </div>

                <h3 className="mt-3 text-sm md:text-base  text-slate-800 leading-tight">
                  {title}
                </h3>
              </div>
            ))}
          </section>

          {/*  services for phones */}
          <p className=" md:hidden p-4 font-semibold">Shop With Confidence</p>
          <section className="  md:hidden mx-auto mt-4 grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-gray-300 pb-8">
            {services.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="flex items-center justify-center rounded-md">
                  <Icon size={35} />
                </div>

                <h3 className="mt-3 text-sm md:text-base font-semibold text-slate-950 leading-tight">
                  {title}
                </h3>
              </div>
            ))}
          </section>
        </div>
      </section>
            <p  className="mx-auto max-w-7xl px-6 pb-3 text-xl font-semibold sm:px-8 lg:px-10">
              About Product
            </p>
      {/* Multitabs */}
      <section className="mx-auto max-w-7xl px-4 pb-3  sm:px-6 lg:px-8">
        <ProductDetailsTabs />
      </section>

      {/* <div className="mt-8  border-b border-gray-200 pb-6">
        <h2 className="text-lg font-semibold text-slate-800">Highlights</h2>

        <div className="mt-4 grid gap-3">
          {highlights.map((item) => (
            <div
              key={item}
              className="flex items-start gap-2 text-sm text-slate-600"
            >
              <div className="mt-2 h-1.5 w-1.5 rounded-full bg-[#01A49E]" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-12 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
        <div className="rounded-lg  bg-white p-5  sm:p-6">
          <h2 className="text-xl font-extrabold text-slate-950">
            Product description
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            This product is designed for customers who want dependable quality,
            smart pricing, and a smooth ecommerce experience. The details shown
            here can be replaced with your real API description when available.
            Until then, this section gives the page a complete big-store product
            feel.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Ishop packages products carefully, supports quick delivery, and
            keeps return handling simple. Use this area for product features,
            material details, compatibility, care instructions, or usage
            guidance.
          </p>
        </div>

        <div className="rounded-lg   bg-white p-5  sm:p-6">
          <h2 className="text-xl font-extrabold text-slate-950">
            Specifications
          </h2>
          <div className="mt-4 divide-y divide-slate-100">
            {specs.map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-[0.8fr_1.2fr] gap-4 py-3 text-sm"
              >
                <span className="font-bold text-slate-500">{label}</span>
                <span className="font-semibold text-slate-800">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      */}
      <ProductsSection excludeSlug={slug} /> 
    </main>
  );
}
