import React from "react";
import {
  BadgeCheck,
  Clock3,
  Headphones,
  PackageCheck,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  Users,
} from "lucide-react";

const stats = [
  { value: "50K+", label: "Happy customers" },
  { value: "12K+", label: "Products listed" },
  { value: "180+", label: "Cities served" },
  { value: "24/7", label: "Support care" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Trusted quality",
    text: "Every product is selected with careful checks, clear pricing, and honest product information.",
  },
  {
    icon: Truck,
    title: "Fast delivery",
    text: "We focus on quick dispatch, reliable tracking, and packaging that protects every order.",
  },
  {
    icon: RotateCcw,
    title: "Easy returns",
    text: "Simple return flows help customers shop confidently without second guessing every purchase.",
  },
  {
    icon: Headphones,
    title: "Human support",
    text: "Our support experience is built to be helpful, clear, and available when customers need us.",
  },
];

const promises = [
  "Original products from verified sellers",
  "Secure checkout and protected payments",
  "Fresh deals across electronics, fashion, home, and lifestyle",
  "Clear order updates from cart to doorstep",
];

export const metadata = {
  title: "About Ishop",
  description: "Learn about Ishop, a modern ecommerce destination for quality products, fast delivery, and trusted shopping.",
};

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=85"
            alt="Customer shopping online"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.96),rgba(2,6,23,0.72),rgba(1,164,158,0.28))]" />
        </div>

        <div className="relative mx-auto grid min-h-[560px] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-teal-50 backdrop-blur">
              <ShoppingBag size={16} className="text-[#01A49E]" />
              Built for modern everyday shopping
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-normal sm:text-5xl lg:text-6xl">
              About Ishop
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
              Ishop is an ecommerce marketplace made for people who want great products, fair prices, and a shopping experience that feels simple from first click to final delivery.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-md bg-[#01A49E] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-teal-950/30">
                <PackageCheck size={18} />
                Quality checked
              </span>
              <span className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-bold text-slate-900">
                <Clock3 size={18} className="text-[#01A49E]" />
                Fast fulfilment
              </span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:justify-self-end">
            {stats.map((item) => (
              <div key={item.label} className="rounded-lg border border-white/12 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-3xl font-extrabold text-white">{item.value}</p>
                <p className="mt-2 text-sm font-medium text-slate-200">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-200">
            <img
              src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&w=1300&q=85"
              alt="Delivery package being prepared"
              className="h-full min-h-[360px] w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-extrabold uppercase tracking-wide text-[#01A49E]">
              What we do
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl">
              We bring products, prices, and delivery into one clean shopping experience.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              From trending electronics and everyday essentials to lifestyle picks and home upgrades, Ishop helps customers discover useful products without confusion. Our goal is to keep browsing smooth, checkout secure, and delivery dependable.
            </p>

            <div className="mt-8 grid gap-3">
              {promises.map((promise) => (
                <div key={promise} className="flex items-start gap-3 rounded-md bg-white p-4 shadow-sm ring-1 ring-slate-200">
                  <BadgeCheck size={20} className="mt-0.5 shrink-0 text-[#01A49E]" />
                  <p className="text-sm font-semibold text-slate-700">{promise}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-extrabold uppercase tracking-wide text-[#01A49E]">
              Why shoppers choose us
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Designed around confidence, speed, and value.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#01A49E]/40 hover:shadow-xl hover:shadow-slate-200/70">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-[#01A49E]/10 text-[#01A49E]">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-extrabold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-[#01A49E]">
              <Sparkles size={24} />
            </div>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Our mission is to make online shopping feel reliable, useful, and enjoyable.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              We are building Ishop as a place where customers can compare, choose, and buy with less friction. Every section of the store is shaped around practical discovery, clear decisions, and strong post-purchase care.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-5 text-slate-900">
              <Users size={26} className="text-[#01A49E]" />
              <h3 className="mt-4 text-xl font-extrabold">Customer first</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                We keep the experience clear, responsive, and easy to navigate for every type of shopper.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1605902711622-cfb43c44367f?auto=format&fit=crop&w=900&q=85"
                alt="Ecommerce team working on orders"
                className="h-full min-h-[240px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
