'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { NavigationMenuMiddle } from './NavMiddleMenu'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { getUserApiQuotas, getUserCredentials } from '@/hooks/hooks'
import ProfileDropDown from './ProfileDropDown'
export default function Navbar() {
  const session = useSession()
  useEffect(() => {
    if (!session.data) return
  }, [session])
  return (
    <header className="absolute left-0 top-0 right-0 z-50 p-10">
      <nav className="gap-10 grid grid-cols-[1fr,2fr,1fr]">
        <Link className="col-span-1 items-center hidden md:flex gap-2 justify-center" href="/">
          <h1 className="text-lg lg:text-2xl font-bold tracking-wide">LS PLANNER</h1>
        </Link>

        <div className="hidden md:flex col-span-1 items-center justify-center">
          <NavigationMenuMiddle />
        </div>
        {session.data ? (
          <ProfileDropDown>
            <div className="hidden md:flex gap-5 items-center col-span-1 justify-center">
              <Avatar className="border-2">
                <AvatarImage src={session.data?.user?.image ?? ''} />
                <AvatarFallback>{session.data?.user?.name}</AvatarFallback>
              </Avatar>
            </div>
          </ProfileDropDown>
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
