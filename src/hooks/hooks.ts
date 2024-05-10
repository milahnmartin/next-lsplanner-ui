'use server'
import { db } from '../db/index'
import type { ApiQuota, User } from '@/db/schema'

export async function getUserCredentials(userEmail: string) {
  return () =>
    db.query.users.findFirst({
      where: {
        email: userEmail,
      },
    })
}

export async function getUserApiQuotas(userid: string) {
  return () =>
    db.query.users.findFirst({
      where: {
        id: userid,
      },
      include: {
        api_quotas: true,
      },
    })
}
