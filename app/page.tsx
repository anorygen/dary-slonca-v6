import Link from 'next/link'
import Header from '@/components/Header'
import { brand } from '@/lib/demoData'

export default function Home() {
  return (
    <main>
      <Header />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-[1.05fr_.95fr] md:py-20">
        <div className="glass rounded-[36px] p-8 md:p-12">
          <span className="badge">☀️ Premium wellness app</span>
          <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">{brand.name}</h1>
          <p className="mt-4 text-2xl font-bold text-[#9b6175]">{brand.tagline}</p>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#735160]">{brand.promise} Aplikacja do prowadzenia podopiecznych, dziennika treningowego, pomiarów, planów i kobiecej motywacji.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/login" className="btn-primary">Wejdź do aplikacji</Link>
            <Link href="/dashboard" className="btn-secondary">Zobacz demo</Link>
          </div>
        </div>
        <div className="card overflow-hidden p-6">
          <div className="rounded-[30px] bg-gradient-to-br from-white via-[#fff5f8] to-[#f7dccb] p-6">
            <div className="flex items-center justify-between">
              <span className="badge">Dzisiejsza energia</span><span className="text-3xl">🌷</span>
            </div>
            <div className="mt-8 rounded-3xl bg-white/70 p-5">
              <div className="text-sm font-bold text-[#9b6a7b]">Postęp programu</div>
              <div className="mt-2 text-5xl font-black">68%</div>
              <div className="mt-4 h-3 rounded-full bg-[#f4d4dd]"><div className="h-3 w-[68%] rounded-full bg-[#d98fa5]" /></div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-3xl bg-white/70 p-5"><div className="text-2xl">💧</div><b>Woda</b><p className="text-sm text-[#8f6b78]">6/8 szklanek</p></div>
              <div className="rounded-3xl bg-white/70 p-5"><div className="text-2xl">🔥</div><b>Streak</b><p className="text-sm text-[#8f6b78]">9 dni</p></div>
              <div className="rounded-3xl bg-white/70 p-5"><div className="text-2xl">🧘‍♀️</div><b>Regeneracja</b><p className="text-sm text-[#8f6b78]">dobry sen</p></div>
              <div className="rounded-3xl bg-white/70 p-5"><div className="text-2xl">✨</div><b>Nastrój</b><p className="text-sm text-[#8f6b78]">spokojny</p></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
