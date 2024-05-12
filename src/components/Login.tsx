'use client'

import React, { useState } from 'react'
import { useGoogleSignin } from '@/app/hooks'
import { Button } from './ui/button'

type Props = {
  className?: string
}
function Login({ className }: Props) {
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const googleSignIn = useGoogleSignin()
  return (
    <div
      className={`aspect-square rounded-lg flex items-center justify-center bg-slate-950 p-20 outline outline-white h-[30vh] ${className}`}
    >
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
