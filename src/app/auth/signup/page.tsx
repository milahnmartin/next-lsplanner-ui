import { Button } from '@/components/ui/button'
import { Background } from '@/components/Background'
import Login from '@/components/Login'
export default function SignUp() {
  return (
    <Background>
      <div className="flex gap-5 items-center justify-center h-screen">
        <Login />
      </div>
    </Background>
  )
}
