'use client'
import Link from 'next/link'
import { Button } from './ui/button'
import { NavigationMenuMiddle } from './NavMiddleMenu'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import ProfileDropDown from './ProfileDropDown'
import BurgerMenu from './BurgerMenu'

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const session = useSession()
  useEffect(() => {
    if (!session.data) return
  }, [session])
  return (
    <header className="hidden md:block p-10">
      <nav className="gap-10 grid grid-cols-[1fr,1fr] md:grid-cols-[1fr,2fr,1fr]">
        <Link className="col-span-1 items-center md:flex gap-2 justify-center" href="/">
          <h1 className="text-lg lg:text-2xl font-bold tracking-wide">LS PLANNER</h1>
        </Link>

        <div className="hidden md:flex col-span-1 items-center justify-center">
          <NavigationMenuMiddle />
        </div>
        {session.data ? (
          <div className="hidden md:flex gap-5 items-center col-span-1 justify-center">
            <ProfileDropDown>
              <Avatar className="border-2">
                <AvatarImage src={session.data?.user?.image ?? ''} />
                <AvatarFallback className="!bg-white dark:!bg-black dark:!text-white">
                  {session.data?.user?.name
                    ?.split(' ')
                    .map((char: string) => {
                      return char[0]
                    })
                    .join('')}
                </AvatarFallback>
              </Avatar>
            </ProfileDropDown>
          </div>
        ) : (
          <div className="hidden md:flex gap-5 items-center col-span-1 justify-center">
            <Link href="/auth/signin">
              <Button variant="link">Sign In</Button>
            </Link>
            <Link href="/auth/signup">
              <Button className="rounded-full !bg-white hover:!bg-white/80 !text-black">
                Get Started <span className="ml-1">{'->'}</span>
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
