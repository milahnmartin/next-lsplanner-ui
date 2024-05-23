'use client'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { Button } from './ui/button'
import BurgerMenu from './BurgerMenu'
import ProfileDropDown from './ProfileDropDown'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { MobileMenuContext } from '@/contexts/mobile-menu'
import { useContext } from 'react'
export default function MobileMenu() {
  const session = useSession()
  const { isOpen } = useContext(MobileMenuContext)
  useEffect(() => {
    if (!session.data) return
  }, [session])
  return (
    <header className="block md:hidden p-10 h-[10vh]">
      <nav className="gap-10 grid grid-cols-[1fr,1fr]">
        <Link className="col-span-1 items-center md:flex gap-2 justify-center" href="/">
          <h1 className="text-lg lg:text-2xl font-bold tracking-wide">LS PLANNER</h1>
        </Link>
        <div className="col-span-1 flex items-center justify-end">
          <BurgerMenu />
        </div>
        {/* mobile dropdown */}
        <div
          className={`
    flex items-center justify-center flex-col
    fixed inset-0 
    rounded-2xl m-4 p-4
    bg-black
    transition-transform duration-300 ease-in-out
    z-50
  `}
          style={{
            transform: isOpen ? 'translateY(0%)' : 'translateY(-105%)',
          }}
        >
          <div className="flex items-center justify-end w-full p-4">
            <BurgerMenu />
          </div>

          <div className="flex flex-col justify-center items-center h-[95vh] w-full">
            <div className="flex flex-col w-full items-center justify-center gap-10">
              <Link href="/auth/signin" className="w-full">
                <Button className="w-full" variant="link">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/signup" className="w-full">
                <Button className="rounded-full w-full !bg-white hover:!bg-white/80 !text-black">
                  Get Started <span className="ml-1">{'->'}</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
