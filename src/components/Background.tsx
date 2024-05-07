type Props = {
  children: React.ReactNode
  className?: string
}

export function Background({ children, className }: Props) {
  return (
    <div
      className={`absolute gap-10 flex-col z-20 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl bg-gradient-to-r from-black/30 to-black/85 ${className}`}
    >
      {children}
    </div>
  )
}
