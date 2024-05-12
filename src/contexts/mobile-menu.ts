import { createContext } from 'react'

export const MobileMenuContext = createContext({
  isOpen: false,
  toggle: () => {
    console.error('toggle function not yet available')
  },
})
