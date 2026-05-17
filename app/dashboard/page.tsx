import Header from '@/components/Header'
import ProtectedRoute from '@/components/ProtectedRoute'
import ProgressRing from '@/components/ProgressRing'
import { todayPlan, quotes } from '@/lib/demoData'

export default function Dashboard() {
  return <main><Header /><ProtectedRoute><section className="mx-auto max-w-6xl px-4 py-10">
    <div className="mb-8"><span className="badge">🌸 Panel użytkowniczki</span><h1 className="mt-4 text-4xl font-black">Witaj w swojej przestrzeni przemiany</h1></div>
    <div className="grid gap-5 md:grid-cols-3"><ProgressRing value={68} label="Rozkwit 28 dni" />
      <div className="card p-6 md:col-span-2"><h2 className="text-2xl font-black">Plan na dziś</h2><div className="mt-5 space-y-3">{todayPlan.map((x) => <div className="flex items-start gap-3 rounded-2xl bg-white/65 p-4" key={x.title}><span>{x.done ? '✅' : '○'}</span><div><b>{x.title}</b><p className="text-sm text-[#8f6b78]">{x.note}</p></div></div>)}</div></div>
    </div>
    <div className="mt-5 grid gap-5 md:grid-cols-4">
      <a className="card p-6" href="/diary"><div className="text-3xl">🏋️‍♀️</div><h3 className="mt-3 text-xl font-black">Dziennik</h3><p className="text-[#8f6b78]">Zapisuj trening.</p></a>
      <a className="card p-6" href="/measurements"><div className="text-3xl">📏</div><h3 className="mt-3 text-xl font-black">Pomiary</h3><p className="text-[#8f6b78]">Monitoruj postępy.</p></a>
      <a className="card p-6" href="/transformation"><div className="text-3xl">🌺</div><h3 className="mt-3 text-xl font-black">Przemiana</h3><p className="text-[#8f6b78]">Zdjęcia i etapy.</p></a>
      <a className="card p-6" href="/materials"><div className="text-3xl">📄</div><h3 className="mt-3 text-xl font-black">Materiały</h3><p className="text-[#8f6b78]">PDF i premium.</p></a>
      <a className="card p-6" href="/calendar"><div className="text-3xl">🗓️</div><h3 className="mt-3 text-xl font-black">Kalendarz</h3><p className="text-[#8f6b78]">Tydzień wellness.</p></a>
      <a className="card p-6" href="/habits"><div className="text-3xl">🌿</div><h3 className="mt-3 text-xl font-black">Nawyki</h3><p className="text-[#8f6b78]">Codzienne rytuały.</p></a>
      <a className="card p-6" href="/onboarding"><div className="text-3xl">🌞</div><h3 className="mt-3 text-xl font-black">Start</h3><p className="text-[#8f6b78]">Profil przemiany.</p></a>
    </div>
    <div className="mt-5 grid gap-5 md:grid-cols-3"><div className="card p-6"><b>🔥 Streak</b><p className="mt-2 text-4xl font-black">7 dni</p></div><div className="card p-6"><b>💧 Woda</b><p className="mt-2 text-4xl font-black">6/8</p></div><div className="card p-6"><b>🌙 Sen</b><p className="mt-2 text-4xl font-black">7 h</p></div></div>
    <div className="card mt-5 p-6"><span className="badge">Motywacja dnia</span><p className="mt-4 text-2xl font-bold italic">„{quotes[2]}”</p></div>
  </section></ProtectedRoute></main>
}
