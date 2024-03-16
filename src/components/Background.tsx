import { BackgroundGradientAnimation } from './ui/background-gradient-animation'

export function BackgroundGradient() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute gap-10 flex-col z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          LS PLANNER
        </p>
        <p className="bg-clip-text text-6xl text-transparent drop-shadow-2xl bg-gradient-to-b from-white/20 to-white/20 p-2">
          Bringing an end to Loadshedding
        </p>
      </div>
    </BackgroundGradientAnimation>
  )
}
