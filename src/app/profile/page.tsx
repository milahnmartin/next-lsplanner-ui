import React from 'react'
import { BackGround } from '@/components/Background'
function Profile() {
  return (
    <BackGround>
      <div className="flex border-4 w-full">
        <div className="flex flex-col gap-5 items-center justify-center h-screen w-1/3 border-2">
          Left
        </div>
        <div className="flex flex-col gap-5 items-center justify-center h-screen w-2/3 border-2">
          right
        </div>
      </div>
    </BackGround>
  )
}

export default Profile
