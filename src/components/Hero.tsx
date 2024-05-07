import React from 'react'
import Image from 'next/image'
function Hero() {
  return (
    <div className="flex">
      <div className="w-8/12 flex flex-col justify-evenly items-start space-y-11">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-r from-white/90 to-white/10">
          LS PLANNER
        </p>
        <p className="text-start bg-clip-text text-6xl text-transparent drop-shadow-2xl bg-gradient-to-b from-white/20 to-white/20 leading-tight">
          Bringing an
          <span className="bg-clip-text font-bold text-transparent drop-shadow-xl bg-gradient-to-r from-purple-600 to-red-500 tracking-wide">
            end
          </span>
          to Loadshedding
        </p>
      </div>
      <div className="w-4/12 grid col-span-full items-center justify-center">
        <Image src="/logo.png" width={200} height={200} alt="hero" />
      </div>
    </div>
  )
}

export default Hero
