import React from 'react'
import { GlobeDemo } from './GlobeDemo'
function Hero() {
  return (
    <div className="container flex flex-col md:flex-row w-full px-2 md:px-8 flex-grow">
      <div className="w-full md:w-6/12 flex flex-col justify-center items-center md:items-start space-y-11">
        <p className="bg-clip-text lg:text-6xl md:text-4xl text-5xl text-transparent drop-shadow-2xl bg-gradient-to-r from-white/90 to-white/10">
          LS PLANNER
        </p>
        <p className="text-center md:text-start bg-clip-text lg:text-6xl md:text-4xl text-3xl text-transparent drop-shadow-2xl py-4 bg-gradient-to-b from-white/20 to-white/20 ">
          Bringing an{' '}
          <span className="bg-clip-text font-bold text-transparent drop-shadow-xl bg-gradient-to-r from-purple-600 to-red-500 tracking-wide">
            end
          </span>{' '}
          to Loadshedding
        </p>
      </div>
      <div className="w-full md:w-6/12 flex items-center justify-center">
        <GlobeDemo />
      </div>
    </div>
  )
}

export default Hero
