import Button from '@/components/Button'
import { LampMain } from '@/components/Lamp/LampMain'

export default function Page() {
  return (
    <LampMain headerText="LS PLANNER" subText="Shining Light On Loadshedding">
      <Button className="flex items-center justify-center p-4 rounded-md" text="Get Started" />
    </LampMain>
  )
}
