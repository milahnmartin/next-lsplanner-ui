import React from 'react'
import { useSession } from 'next-auth/react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useSignOut } from '@/hooks/auth'
import Link from 'next/link'

type Props = {
  children: React.ReactNode
}
function ProfileDropDown({ children }: Props) {
  const session = useSession()
  const signout = useSignOut()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/profile">
          <DropdownMenuItem>Profile</DropdownMenuItem>
        </Link>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={async () => await signout()}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProfileDropDown
