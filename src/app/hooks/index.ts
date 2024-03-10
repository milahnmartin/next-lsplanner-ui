import { useQuery } from '@tanstack/react-query'

export function useSendEmail(): ReturnType<typeof useQuery> {
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
