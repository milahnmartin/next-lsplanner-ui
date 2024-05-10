type Props = {
  children: React.ReactNode
  className?: string
}

export function Background({ children, className }: Props) {
  return (
    <div
      className={`px-10 absolute gap-10 -z-10 flex-col inset-0 overflow-x-hidden overflow-y-scroll flex items-center justify-center text-white font-bold text-3xl text-center md:text-4xl lg:text-7xl bg-gradient-to-r from-black/30 to-black/85 ${className}`}
    >
      {children}
    </div>
  )
}
