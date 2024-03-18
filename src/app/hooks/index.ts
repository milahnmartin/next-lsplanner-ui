import { useQuery } from '@tanstack/react-query'
import { signIn } from 'next-auth/react'
export function useSendEmail(): ReturnType<typeof useQuery> {
  // @ts-ignore
  return useQuery('send-email', () => {
    return fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
  })
}

export function useGoogleSignin(): any {
  return () => {
    signIn('google', { callbackUrl: '/' })
  }
}
