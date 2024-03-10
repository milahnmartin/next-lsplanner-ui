'use client'
import { useEffect, useState } from 'react'

type Props = {
  children?: React.ReactNode
  open: Boolean
  onClose?: () => void
}
export default function Modal({ open, onClose }: Props) {
  if (!open) return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg">
        <h1 className="text-2xl font-bold mb-8">Modal</h1>
        <p className="mb-8">This is a modal</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
      </div>
    </div>
  )
}
