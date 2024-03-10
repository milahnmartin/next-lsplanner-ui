'use client'
import ConnextBTN from '@/components/Button/Connext'
import { LampMain } from '@/components/Lamp/LampMain'
import Modal from '@/components/modal/Main'
import { useSendEmail } from '@/app/hooks'
export default function Page() {
  return (
    <>
      <LampMain headerText="LS PLANNER" subText="Shining Light On Loadshedding">
        <ConnextBTN text="Notify Me" onClick={() => console.log('CLICKED')} />
      </LampMain>
    </>
  )
}
