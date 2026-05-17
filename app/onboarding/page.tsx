import Header from '@/components/Header'
import ProtectedRoute from '@/components/ProtectedRoute'

const steps = [
  { title: 'Cel przemiany', text: 'Określ główny kierunek: energia, sylwetka, zdrowie, spokój albo regularność.', icon: '🌷' },
  { title: 'Poziom aktywności', text: 'Dopasuj intensywność planu do realnego dnia i obecnych możliwości.', icon: '🏋️‍♀️' },
  { title: 'Nawyki wellness', text: 'Wybierz wodę, sen, kroki, oddech i motywację jako codzienne rytuały.', icon: '✨' },
]

export default function Onboarding(){return <main><Header/><ProtectedRoute><section className="mx-auto max-w-6xl px-4 py-10"><span className="badge">🌞 Pierwsze uruchomienie</span><h1 className="mt-4 text-4xl font-black">Poznajmy Twoją drogę przemiany</h1><p className="mt-3 max-w-2xl text-[#8f6b78]">Ten ekran jest przygotowany pod pierwszy start użytkowniczki. W wersji testowej służy jako gotowy workflow, który podepniemy do bazy jako profil startowy.</p><div className="mt-8 grid gap-5 md:grid-cols-3">{steps.map(s=><div className="card p-6" key={s.title}><div className="text-4xl">{s.icon}</div><h2 className="mt-4 text-2xl font-black">{s.title}</h2><p className="mt-2 text-[#8f6b78]">{s.text}</p></div>)}</div><div className="card mt-6 p-6"><h2 className="text-2xl font-black">Formularz startowy</h2><div className="mt-4 grid gap-4 md:grid-cols-2"><input className="input" placeholder="Twój główny cel"/><input className="input" placeholder="Poziom aktywności"/><input className="input" placeholder="Waga startowa"/><input className="input" placeholder="Ile dni w tygodniu możesz trenować?"/><textarea className="input min-h-32 md:col-span-2" placeholder="Co jest dla Ciebie najważniejsze w tej przemianie?"/></div><button className="btn-primary mt-5">Zapisz profil startowy</button></div></section></ProtectedRoute></main>}
