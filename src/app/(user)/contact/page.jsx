import React from "react";
import {
  Clock3,
  Headphones,
  HelpCircle,
  Mail,
  MapPin,
  MessageCircle,
  PackageSearch,
  Phone,
  Send,
  ShieldCheck,
  Truck,
} from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "Call us",
    value: "+91 98765 43210",
    note: "Mon to Sat, 9:00 AM - 8:00 PM",
  },
  {
    icon: Mail,
    title: "Email support",
    value: "support@ishop.com",
    note: "We usually reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Ishop Commerce Hub, New Delhi",
    note: "India operations and customer care",
  },
];

const supportTopics = [
  {
    icon: PackageSearch,
    title: "Track an order",
    text: "Get quick updates about dispatch, shipping status, and expected delivery.",
  },
  {
    icon: Truck,
    title: "Delivery help",
    text: "Ask about delivery delays, address changes, shipping charges, or courier updates.",
  },
  {
    icon: ShieldCheck,
    title: "Payments and refunds",
    text: "Get help with secure payments, failed transactions, refund timelines, and invoices.",
  },
  {
    icon: HelpCircle,
    title: "Returns and product support",
    text: "Start a return request or get guidance for damaged, missing, or wrong items.",
  },
];

export const metadata = {
  title: "Contact Ishop",
  description: "Contact Ishop customer support for orders, delivery, returns, payments, and product help.",
};

export default function ContactPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1800&q=85"
            alt="Customer support team"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.96),rgba(2,6,23,0.75),rgba(1,164,158,0.25))]" />
        </div>

        <div className="relative mx-auto grid min-h-[460px] max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-teal-50 backdrop-blur">
              <Headphones size={16} className="text-[#01A49E]" />
              Ishop customer care
            </div>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
              Need help with an order, return, payment, or product? Our support team is here to make your Ishop experience simple and stress free.
            </p>
          </div>

          <div className="rounded-lg border border-white/12 bg-white/10 p-5 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-md bg-[#01A49E]">
                <Clock3 size={24} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-300">Average response time</p>
                <p className="text-2xl font-extrabold text-white">Under 24 hours</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-200">
              For faster support, include your order ID, registered phone number, and a clear description of the issue.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {contactCards.map(({ icon: Icon, title, value, note }) => (
            <div key={title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#01A49E]/40 hover:shadow-xl hover:shadow-slate-200/70">
              <div className="grid h-11 w-11 place-items-center rounded-md bg-[#01A49E]/10 text-[#01A49E]">
                <Icon size={22} />
              </div>
              <h2 className="mt-5 text-lg font-extrabold text-slate-950">{title}</h2>
              <p className="mt-2 text-base font-bold text-slate-800">{value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-wide text-[#01A49E]">
              Send a message
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl">
              Tell us what happened. We will help you from there.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Choose the right topic and share the details. This form is ready for your backend integration when you connect an API route later.
            </p>

            <div className="mt-8 overflow-hidden rounded-lg bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1605902711834-8b11c3e3ef2f?auto=format&fit=crop&w=1200&q=85"
                alt="Online shopping support desk"
                className="h-[320px] w-full object-cover"
              />
            </div>
          </div>

          <form className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Full name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2 h-12 w-full rounded-md border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 outline-none transition focus:border-[#01A49E] focus:bg-white focus:ring-4 focus:ring-[#01A49E]/10"
                />
              </label>

              <label className="block">
                <span className="text-sm font-bold text-slate-700">Phone number</span>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="mt-2 h-12 w-full rounded-md border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 outline-none transition focus:border-[#01A49E] focus:bg-white focus:ring-4 focus:ring-[#01A49E]/10"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="text-sm font-bold text-slate-700">Email address</span>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-2 h-12 w-full rounded-md border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 outline-none transition focus:border-[#01A49E] focus:bg-white focus:ring-4 focus:ring-[#01A49E]/10"
              />
            </label>

            <label className="mt-4 block">
              <span className="text-sm font-bold text-slate-700">Support topic</span>
              <select className="mt-2 h-12 w-full rounded-md border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 outline-none transition focus:border-[#01A49E] focus:bg-white focus:ring-4 focus:ring-[#01A49E]/10">
                <option>Order related</option>
                <option>Delivery issue</option>
                <option>Return or refund</option>
                <option>Payment issue</option>
                <option>Product question</option>
              </select>
            </label>

            <label className="mt-4 block">
              <span className="text-sm font-bold text-slate-700">Order ID</span>
              <input
                type="text"
                placeholder="Optional, for example #ISHOP12345"
                className="mt-2 h-12 w-full rounded-md border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 outline-none transition focus:border-[#01A49E] focus:bg-white focus:ring-4 focus:ring-[#01A49E]/10"
              />
            </label>

            <label className="mt-4 block">
              <span className="text-sm font-bold text-slate-700">Message</span>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="mt-2 w-full resize-none rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-[#01A49E] focus:bg-white focus:ring-4 focus:ring-[#01A49E]/10"
              />
            </label>

            <button
              type="submit"
              className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#01A49E] px-5 text-sm font-extrabold text-white shadow-lg shadow-teal-900/15 transition hover:bg-[#018f8a] active:scale-[0.99]"
            >
              <Send size={18} />
              Send message
            </button>
          </form>
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-extrabold uppercase tracking-wide text-[#01A49E]">
              Quick support
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              What can we help you with?
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {supportTopics.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-lg border border-white/10 bg-white/10 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#01A49E]/50">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-[#01A49E] text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 rounded-lg bg-white p-5 text-slate-900 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <MessageCircle size={24} className="mt-1 text-[#01A49E]" />
              <div>
                <h3 className="text-lg font-extrabold">Need urgent help?</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Call customer care for time-sensitive delivery or payment concerns.
                </p>
              </div>
            </div>
            <a
              href="tel:+919876543210"
              className="inline-flex h-11 items-center justify-center rounded-md bg-[#01A49E] px-5 text-sm font-extrabold text-white transition hover:bg-[#018f8a]"
            >
              Call now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
