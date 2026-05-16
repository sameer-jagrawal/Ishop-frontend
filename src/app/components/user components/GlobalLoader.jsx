export default function GlobalLoader({ fullScreen = true }) {
    return (
      <div
        className={`
          ${fullScreen ? "fixed inset-0" : "relative w-full h-full"}
          flex items-center justify-center
          bg-white/80 backdrop-blur-sm z-50
        `}
      >
        <div className="relative flex items-center justify-center">
          {/* Outer Ring */}
          <div className="w-20 h-20 rounded-full border-[6px] border-[#01A49E]/20 border-t-[#01A49E] animate-spin" />
  
          {/* Inner Pulse */}
          <div className="absolute w-10 h-10 rounded-full bg-[#01A49E] animate-pulse shadow-[0_0_30px_rgba(1,164,158,0.6)]" />
  
          {/* Brand Text */}
          <div className="absolute top-28 text-[#01A49E] font-semibold tracking-[6px] text-sm uppercase">
            iShop
          </div>
        </div>
      </div>
    );
  }