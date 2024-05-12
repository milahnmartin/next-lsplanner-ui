'use client'
import { useState } from 'react'
import { useContext } from 'react'
import { MobileMenuContext } from '../contexts/mobile-menu'
type Props = {
  dark?: boolean
}
export default function BurgerMenu({ dark = false }: Props) {
  const { toggle, isOpen } = useContext(MobileMenuContext)
  const sharedClass = 'cursor-pointer'
  if (isOpen) {
    return (
      <svg
        role="button"
        onClick={toggle}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke={dark ? 'black' : 'currentColor'}
        className={`w-6 h-6 ${sharedClass}`}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.75 6.75l10.5 10.5m0-10.5L6.75 17.25"
        />
      </svg>
    )
  }

  return (
    <svg
      role="button"
      onClick={toggle}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={dark ? 'black' : 'currentColor'}
      className={`w-6 h-6 ${sharedClass}`}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  )
}
