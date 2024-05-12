import Hero from '@/components/Hero'
import { BackGround } from '@/components/Background'
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[90vh] ">
      <BackGround>
        <Hero />
      </BackGround>
    </section>
  )
}
