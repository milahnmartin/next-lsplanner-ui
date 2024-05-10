import { db } from '@/db'
import { signOut } from 'next-auth/react'
export function useSignOut() {
  return async () => await signOut()
}
