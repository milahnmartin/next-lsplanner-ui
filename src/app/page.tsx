import ShimmerBTN from '@/components/Button/Shimer'
import { LampMain } from '@/components/Lamp/LampMain'

export default function Page() {
  return (
    <LampMain headerText="LS PLANNER" subText="Shining Light On Loadshedding">
      <ShimmerBTN text="Notify Me ->" onClick={() => console.log('clicked')} />
    </LampMain>
  )
}
