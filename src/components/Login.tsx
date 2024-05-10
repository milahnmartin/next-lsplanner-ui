'use client'

import React from 'react'
import { useGoogleSignin } from '@/app/hooks'
import { Button } from './ui/button'
function Login() {
  const googleSignIn = useGoogleSignin()
  return (
    <div className="rounded-md p-10 gap-5 flex flex-col items-center justify-evenly min-w-80">
      <h1 className="text-3xl">Sign Up</h1>
      <Button className="w-full" onClick={async () => await googleSignIn()}>
        Google
      </Button>
    </div>
  )
}

export default Login
