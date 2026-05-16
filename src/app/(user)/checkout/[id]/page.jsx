

import Link from "next/link";
import React from "react";
import {
  CheckCircle,
  Home,
  ShoppingBag,
  Sparkles,
} from "lucide-react";


export default  function OrderPlacedPage({params}) {

    

  return (

    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-100 flex items-center justify-center px-4 py-10 relative">

      {/* FIREWORKS */}
      <div className="absolute top-10 left-10 text-6xl animate-pulse">
        🎆
      </div>

      <div className="absolute top-20 right-16 text-5xl animate-bounce">
        🎉
      </div>

      <div className="absolute bottom-20 left-20 text-5xl animate-pulse">
        ✨
      </div>

      <div className="absolute bottom-10 right-10 text-6xl animate-bounce">
        🎊
      </div>

      {/* CONFETTI */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {[...Array(25)].map((_, i) => (

          <div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-green-400 animate-bounce"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />

        ))}

      </div>

      {/* MAIN CARD */}
      <div className="relative z-10 w-full max-w-2xl bg-white/90 backdrop-blur-lg rounded-[40px] shadow-2xl border border-green-100 p-8 md:p-12">

        {/* SUCCESS ICON */}
        <div className="flex justify-center">

          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-[0_0_60px_rgba(34,197,94,0.5)] animate-pulse">

            <CheckCircle
              size={70}
              className="text-white"
            />

          </div>

        </div>

        {/* TITLE */}
        <div className="text-center mt-8">

          <h1 className="text-5xl font-extrabold text-green-600 flex items-center justify-center gap-3">

            Yay!

            <span className="animate-bounce">
              🎉
            </span>

          </h1>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800 leading-tight">

            Order Placed Successfully!

          </h2>

          <p className="mt-4 text-gray-500 text-lg">

            Your order has been confirmed and
            will be shipped very soon 🚚💚

          </p>

        </div>

        {/* ORDER ID */}
        <div className="mt-10 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-dashed border-green-300 rounded-3xl p-6 text-center">

          <div className="flex items-center justify-center gap-2 text-green-600 font-semibold text-lg">

            <Sparkles size={20} />

            ORDER ID

          </div>

          <h3 className="mt-3 text-3xl font-black text-green-700 tracking-wider">

            {/* #{orderId} */}

          </h3>

          <p className="mt-2 text-sm text-gray-500">

            Save this ID for tracking your order

          </p>

        </div>

        {/* CARTOON SECTION */}
        <div className="mt-12 flex flex-col items-center">

          <div className="text-8xl animate-bounce">
            📦
          </div>

          <div className="mt-4 bg-green-100 text-green-700 px-6 py-3 rounded-full font-semibold text-lg shadow-sm">

            Our team is preparing your order ❤️

          </div>

        </div>

        {/* BUTTONS */}
        <div className="grid md:grid-cols-2 gap-5 mt-12">

          {/* HOME */}
          <Link href="/">

            <button className="w-full h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg flex items-center justify-center gap-3 shadow-lg hover:scale-105 hover:shadow-green-300/50 transition-all duration-300">

              <Home size={24} />

              Go To Home

            </button>

          </Link>

          {/* ORDERS */}
          <Link href="/orders">

            <button className="w-full h-16 rounded-2xl border-2 border-green-500 text-green-600 font-bold text-lg flex items-center justify-center gap-3 hover:bg-green-50 hover:scale-105 transition-all duration-300">

              <ShoppingBag size={24} />

              View Orders

            </button>

          </Link>

        </div>

        {/* FOOTER */}
        <div className="mt-12 text-center">

          <p className="text-2xl">
            💚 Thank you for shopping with us 💚
          </p>

          <p className="mt-2 text-gray-500">
            Wishing you a wonderful day ✨
          </p>

        </div>

      </div>

    </div>

  );
}