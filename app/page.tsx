'use client'

export default function Home() {

return (

<main className="mx-auto max-w-7xl px-6 py-10">

<section className="glass rounded-[36px] p-8 md:p-12">

<div className="grid gap-12 md:grid-cols-2 md:items-center">

<div>

<img

src="/logo-dary-slonca.png"

alt="Dary Słońca"

className="mb-8 h-48 w-48 object-contain"

/>

<h1 className="text-5xl font-black text-[#5b4b5c] md:text-6xl">

Dary Słońca

</h1>

<p className="mt-4 text-xl font-semibold text-[#9b6a7b]">

Piękno • Zdrowie • Harmonia

</p>

<p className="mt-8 max-w-xl text-lg leading-8 text-[#6b5a6c]">

Kobieca przestrzeń przemiany.

Programy wellness, zdrowe nawyki,

monitoring postępów, aktywność,

regeneracja i codzienna motywacja.

</p>

<div className="mt-10 flex flex-wrap gap-4">

<button className="rounded-2xl bg-[#d98fa5] px-8 py-4 font-bold text-white shadow-lg">

Rozpocznij przemianę

</button>

<button className="rounded-2xl border border-[#d98fa5] px-8 py-4 font-bold text-[#d98fa5]">

Poznaj program

</button>

</div>

</div>

<div>

<img

src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200"

alt="Wellness"

className="rounded-[36px] shadow-2xl"

/>

</div>

</div>

</section>

<section className="mt-12">

<h2 className="mb-8 text-center text-4xl font-black text-[#5b4b5c]">

Program Przemiany

</h2>

<div className="grid gap-6 md:grid-cols-4">

<div className="glass rounded-3xl p-6 text-center">

<div className="mb-4 text-4xl">🌸</div>

<h3 className="font-bold">Odżywianie</h3>

<p className="mt-2 text-sm">

Zdrowe nawyki i świadome wybory.

</p>

</div>

<div className="glass rounded-3xl p-6 text-center">

<div className="mb-4 text-4xl">🧘</div>

<h3 className="font-bold">Regeneracja</h3>

<p className="mt-2 text-sm">

Sen, odpoczynek i równowaga.

</p>

</div>

<div className="glass rounded-3xl p-6 text-center">

<div className="mb-4 text-4xl">🚶</div>

<h3 className="font-bold">Aktywność</h3>

<p className="mt-2 text-sm">

Ruch dopasowany do Ciebie.

</p>

</div>

<div className="glass rounded-3xl p-6 text-center">

<div className="mb-4 text-4xl">☀️</div>

<h3 className="font-bold">Harmonia</h3>

<p className="mt-2 text-sm">

Piękno, zdrowie i dobre samopoczucie.

</p>

</div>

</div>

</section>

</main>

)

}
