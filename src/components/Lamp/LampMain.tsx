'use client'
import { LampContainer } from './LampContainer'
import { motion } from 'framer-motion'

type Props = {
  children?: React.ReactNode
  headerText: string
  subText: string
  className?: string
}
export function LampMain({ headerText, subText, children, className }: Props) {
  return (
    <LampContainer className={className}>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        {headerText} <br /> <p className="my-2 text-[2rem] tracking-widest">{subText}</p>
      </motion.h1>
      <motion.div
        initial={{
          opacity: 0.5,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="p-4 mt-4 text-center text-lg font-medium text-neutral-400"
      >
        {children}
      </motion.div>
    </LampContainer>
  )
}
