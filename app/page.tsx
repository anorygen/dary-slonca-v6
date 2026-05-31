import Link from 'next/link'

import Header from '@/components/Header'

export default function Home() {

return (

<main>

<Header />

<section className="mx-auto max-w-7xl px-6 py-10">

<div className="grid gap-10 rounded-[42px] bg-white/70 p-8 shadow-2xl backdrop-blur-xl md:grid-cols-[0.9fr_1.1fr] md:p-14">

<div className="flex flex-col justify-center">

<img

src="/logo-dary-slonca.png"

alt="Dary Słońca"

className="mb-8 h-32 w-32 object-contain"

/>

<p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#c4898f]">

Piękno • Zdrowie • Harmonia

</p>

<h1 className="text-5xl font-black leading-tight text-[#4f4352] md:text-7xl">

Twoja podróż

<br />

<span className="text-[#c98191]">do lepszej</span>

<br />

<span className="font-serif italic text-[#b98a54]">Ciebie</span>

</h1>

<p className="mt-8 max-w-xl text-lg leading-8 text-[#6f6470]">

Holistyczne podejście do zdrowia, sylwetki i samopoczucia.

Treningi, odżywianie, pomiary, nawyki i codzienna motywacja

w jednej pięknej aplikacji.

</p>

<div className="mt-10 flex flex-wrap gap-4">

<Link

href="/dashboard"

className="rounded-full bg-[#c98191] px-8 py-4 font-bold text-white shadow-lg transition hover:scale-105"

>

Rozpocznij przemianę

</Link>

<Link

href="/plans"

className="rounded-full border border-[#c98191] bg-white/60 px-8 py-4 font-bold text-[#9b5f6b] transition hover:scale-105"

>

Poznaj program

</Link>

</div>

</div>

<div className="relative">

<div className="absolute -right-4 -top-4 z-10 rounded-full bg-[#c98191] px-8 py-8 text-center text-sm font-bold uppercase tracking-widest text-white shadow-xl">

Zacznij

<br />

dziś

<br />

♡

</div>

<img

src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200"

alt="Kobiecy wellness"

className="h-full min-h-[520px] w-full rounded-[36px] object-cover shadow-2xl"

/>

</div>

</div>

</section>

<section className="mx-auto max-w-7xl px-6 pb-16">

<h2 className="mb-10 text-center text-4xl font-black text-[#4f4352]">

Program Przemiany

</h2>

<div className="grid gap-6 md:grid-cols-4">

<div className="rounded-[32px] bg-white/75 p-8 text-center shadow-xl backdrop-blur">

<div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-[#f6dfe4] text-3xl">

🥗

</div>

<h3 className="text-lg font-black text-[#4f4352]">

Odżywianie & Nawyki

</h3>

<p className="mt-3 text-sm leading-6 text-[#7a6c78]">

Zdrowe wybory, lekkość i codzienne rytuały wspierające przemianę.

</p>

</div>

<div className="rounded-[32px] bg-white/75 p-8 text-center shadow-xl backdrop-blur">

<div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-[#f6dfe4] text-3xl">

🌿

</div>

<h3 className="text-lg font-black text-[#4f4352]">

Równowaga & Regeneracja

</h3>

<p className="mt-3 text-sm leading-6 text-[#7a6c78]">

Sen, spokój, redukcja stresu i troska o kobiece samopoczucie.

</p>

</div>

<div className="rounded-[32px] bg-white/75 p-8 text-center shadow-xl backdrop-blur">

<div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-[#f6dfe4] text-3xl">

📈

</div>

<h3 className="text-lg font-black text-[#4f4352]">

Postępy pod kontrolą

</h3>

<p className="mt-3 text-sm leading-6 text-[#7a6c78]">

Pomiary, wykresy, zdjęcia przemiany i jasny obraz efektów.

</p>

</div>

<div className="rounded-[32px] bg-white/75 p-8 text-center shadow-xl backdrop-blur">

<div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-[#f6dfe4] text-3xl">

♡

</div>

<h3 className="text-lg font-black text-[#4f4352]">

Motywacja & Wsparcie

</h3>

<p className="mt-3 text-sm leading-6 text-[#7a6c78]">

Codzienna inspiracja, kobieca energia i prowadzenie krok po kroku.

</p>

</div>

</div>

</section>

</main>

)

}
