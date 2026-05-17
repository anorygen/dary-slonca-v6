import Header from '@/components/Header'
import { quotes } from '@/lib/demoData'
export default function Motivation(){return <main><Header/><section className="mx-auto max-w-4xl px-4 py-10"><span className="badge">✨ Motywacja</span><h1 className="mt-4 text-4xl font-black">Codzienne światło</h1><div className="mt-8 space-y-4">{quotes.map(q=><div className="card p-6 text-xl font-bold italic" key={q}>„{q}”</div>)}</div></section></main>}
