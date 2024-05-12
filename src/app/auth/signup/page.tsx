import Image from 'next/image'
import Login from '@/components/Login'
export default function SignUp() {
  return (
    <section className="grid grid-cols-1 grid-rows-[1fr,1fr] md:grid-rows-1 md:grid-cols-[1fr,1fr] container min-h-[85vh] mx-auto">
      <div className="grid-cols-1 flex items-center justify-center">
        <Login />
      </div>
      <div className="grid-cols-1 flex items-center justify-center">
        <Image src="/logo.png" width={300} height={300} alt="logo" />
      </div>
    </section>
  )
}
