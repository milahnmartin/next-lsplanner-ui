'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { NavigationMenuMiddle } from './NavMiddleMenu'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { useSession } from 'next-auth/react'
import { useGoogleSignin } from '@/app/hooks'
export default function Navbar() {
  const session = useSession()
  const googleSignIn = useGoogleSignin()
  return (
    <header className="m-10 absolute left-0 top-0 right-0 z-50">
      <nav className="gap-10 grid grid-cols-[1fr,2fr,1fr]">
        <Link className="col-span-1 items-center hidden md:flex gap-2 justify-center" href="/">
          <Image className="" src="/logo.png" alt="logo" width={100} height={100} />
        </Link>

        <div className="col-span-1 flex items-center justify-center">
          <NavigationMenuMiddle />
        </div>
        {session.data ? (
          <div className="hidden md:flex gap-5 items-center col-span-1 justify-center">
            <Avatar>
              <AvatarImage src={session.data?.user?.image ?? ''} />
              <AvatarFallback>{session.data?.user?.name}</AvatarFallback>
            </Avatar>
          </div>
        ) : (
          <div className="hidden md:flex gap-5 items-center col-span-1 justify-center">
            <Link href="/Sign-In">
              <Button variant={'link'}>Sign In</Button>
            </Link>
            <Link href="/Sign-Up">
              <Button onClick={async () => await googleSignIn()}>Sign Up</Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
