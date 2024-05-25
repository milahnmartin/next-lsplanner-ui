'use client'

import React, { useState } from 'react'
import { useGoogleSignin } from '@/app/hooks'
import { Button } from '@/components/ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import Image from 'next/image'
import { z } from 'zod'
type Props = {
  className?: string
}

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

function Login({ className }: Props) {
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const googleSignIn = useGoogleSignin()

  return (
    <div
      className={`aspect-square rounded-lg flex flex-col bg-black/55 w-full md:w-96 gap-y-5 ${className}`}
    >
      <div className="flex flex-col items-center justify-center gap-y-2 w-full">
        <Image src="/logo.png" width={100} height={100} alt="LS Planner Logo" />
        <h1 className="text-lg font-bold">Welcome back!</h1>
        <p className="text-white/80 font-thin">Sign in to to continue</p>
      </div>
      <div className="flex flex-col w-full gap-y-5">
        <span>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" />
        </span>
        <span>
          <Label htmlFor="Password">Password</Label>
          <Input id="password" type="Password" />
        </span>
      </div>
      <Button disabled={isLoggingIn} variant="secondary" className="w-full">
        Login
      </Button>
      <Button
        disabled={isLoggingIn}
        variant={isLoggingIn ? 'outline' : 'default'}
        className="w-full"
        onClick={async () => {
          try {
            setIsLoggingIn(true)
            await googleSignIn()
          } catch (e) {
            console.error(e)
          } finally {
            setIsLoggingIn(false)
          }
        }}
      >
        {isLoggingIn ? 'Logging in...' : 'Google'}
      </Button>
    </div>
  )
}

export default Login
