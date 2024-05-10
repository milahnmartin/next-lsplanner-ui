'use client'

import React from 'react'
import { useGoogleSignin } from '@/app/hooks'
import { Button } from './ui/button'
function Login() {
  const googleSignIn = useGoogleSignin()
  return <Button onClick={async () => await googleSignIn()}>Sign in with Google</Button>
}

export default Login
