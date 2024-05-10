import { Background } from '@/components/Background'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import { Button } from '@/components/ui/button'
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Background>
        <Hero />
      </Background>
    </div>
  )
}
