import Link from 'next/link'
import { brand } from '@/lib/demoData'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/45 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-[#f8dfe7] via-white to-[#efd8bd] shadow-lg">☀️</div>
          <div>
            <div className="text-lg font-black tracking-tight">{brand.name}</div>
            <div className="text-xs font-semibold text-[#9b6a7b]">{brand.tagline}</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-2 text-sm font-bold text-[#6b4655] md:flex">
          <Link className="rounded-full px-3 py-2 hover:bg-white/60" href="/dashboard">Panel</Link>
          <Link className="rounded-full px-3 py-2 hover:bg-white/60" href="/onboarding">Start</Link>
          <Link className="rounded-full px-3 py-2 hover:bg-white/60" href="/plans">Plany</Link>
          <Link className="rounded-full px-3 py-2 hover:bg-white/60" href="/calendar">Kalendarz</Link>
          <Link className="rounded-full px-3 py-2 hover:bg-white/60" href="/transformation">Przemiana</Link>
          <Link className="rounded-full px-3 py-2 hover:bg-white/60" href="/admin">Admin</Link>
        </nav>
        <Link href="/login" className="btn-primary text-sm">Zaloguj</Link>
      </div>
    </header>
  )
}
