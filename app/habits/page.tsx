import Header from '@/components/Header'
import ProtectedRoute from '@/components/ProtectedRoute'

const habits = ['2 litry wody','30 minut ruchu','10 minut oddechu','7 godzin snu','posiłek białkowy','chwila dla siebie']
export default function Habits(){return <main><Header/><ProtectedRoute><section className="mx-auto max-w-5xl px-4 py-10"><span className="badge">🌿 Nawyki</span><h1 className="mt-4 text-4xl font-black">Codzienne rytuały</h1><div className="mt-8 grid gap-4 md:grid-cols-2">{habits.map((h,i)=><div className="card flex items-center justify-between p-5" key={h}><div><h2 className="text-xl font-black">{h}</h2><p className="text-sm text-[#8f6b78]">{i<3?'Dziś do wykonania':'Wieczorny rytuał'}</p></div><button className={i<2?'btn-primary':'btn-secondary'}>{i<2?'Zrobione':'Oznacz'}</button></div>)}</div></section></ProtectedRoute></main>}
