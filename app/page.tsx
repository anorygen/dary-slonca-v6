import Header from '@/components/Header'

export default function Home() {

return (

<main>

<Header />

<section className="mx-auto max-w-7xl px-6 py-16">

<div className="overflow-hidden rounded-[40px] bg-white shadow-xl">

<div className="grid items-center lg:grid-cols-2">

<div className="p-12 lg:p-16">

<img

src="/logo-dary-slonca.png"

alt="Dary Słońca"

className="mb-8 h-20 opacity-80"

/>

<p className="mb-6 text-sm font-semibold uppercase tracking-[8px] text-[#c7a07a]">

PIĘKNO • ZDROWIE • HARMONIA

</p>

<h1 className="mb-8 leading-none">

<span className="block text-6xl font-black text-[#3d3846]">

Nie jesteś sama

</span>

<span className="block text-6xl font-black text-[#d695a4]">

w drodze

</span>

<span className="block font-serif text-6xl italic text-[#c8a06f]">

do lepszej

</span>

<span className="block font-serif text-6xl italic text-[#c8a06f]">

Ciebie

</span>

</h1>

<p className="mb-8 text-xl leading-relaxed text-[#6b6672]">

Dary Słońca to kobiecy program przemiany premium. Łączymy

piękną aplikację z codziennym wsparciem prawdziwego trenera,

który prowadzi Cię krok po kroku.

</p>

<div className="mb-10 space-y-3 text-[#6b6672]">

<div className="flex items-center gap-3">

<span className="text-[#b98a54]">✦</span>

<span>Indywidualne prowadzenie i kontakt z trenerem</span>

</div>

<div className="flex items-center gap-3">

<span className="text-[#b98a54]">✦</span>

<span>Zdjęcia przemiany, pomiary i monitoring postępów</span>

</div>

<div className="flex items-center gap-3">

<span className="text-[#b98a54]">✦</span>

<span>Kobieca społeczność i codzienna motywacja</span>

</div>

<div className="flex items-center gap-3">

<span className="text-[#b98a54]">✦</span>

<span>Zdrowe nawyki bez presji i rygoru</span>

</div>

</div>

<div className="flex flex-wrap gap-4">

<a

href="/dashboard"

className="rounded-full bg-[#d695a4] px-8 py-4 font-bold text-white transition hover:bg-[#cb8495]"

>

Rozpocznij przemianę

</a>

<a

href="/plans"

className="rounded-full border border-[#d695a4] px-8 py-4 font-bold text-[#d695a4]"

>

Poznaj program

</a>

</div>

</div>

<div className="relative h-full">

<img

src="/hero-premium.png"

alt="Dary Słońca"

className="h-full min-h-[700px] w-full object-cover"

/>

<div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-white/95 p-6 shadow-xl backdrop-blur">

<div className="mb-2 text-xs uppercase tracking-[4px] text-[#b28a67]">

Program Przemiany Kobiet

</div>

<div className="text-2xl font-bold text-[#3d3846]">

Aplikacja + trener + codzienne wsparcie

</div>

</div>

</div>

</div>

</div>

</section>

</main>

)

}
