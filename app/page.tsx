import Header from '@/components/Header'

export default function Home() {

return (

<main>

<Header />

<section className="mx-auto max-w-7xl px-6 py-8">

<div className="overflow-hidden rounded-[40px] bg-white/85 shadow-xl backdrop-blur">

<div className="grid min-h-[720px] items-center lg:grid-cols-[38%_62%]">

<div className="px-8 py-10 lg:px-12">

<p className="mb-5 whitespace-nowrap text-xs font-medium uppercase tracking-[5px] text-[#c8a06f]">

PIĘKNO • ZDROWIE • HARMONIA

</p>

<h1 className="mb-6 leading-[0.95]">

<span className="block text-4xl font-black text-[#3d3846] lg:text-[46px]">

Nie jesteś sama

</span>

<span className="block text-4xl font-black text-[#d695a4] lg:text-[46px]">

w drodze

</span>

<span className="block font-serif text-4xl italic text-[#c8a06f] lg:text-[46px]">

do lepszej

</span>

<span className="block font-serif text-4xl italic text-[#c8a06f] lg:text-[46px]">

Ciebie

</span>

</h1>

<p className="mb-6 max-w-xl text-base leading-7 text-[#6b6672]">

Dary Słońca to kobiecy program przemiany premium. Łączymy

piękną aplikację z codziennym wsparciem prawdziwego trenera,

który prowadzi Cię krok po kroku.

</p>

<div className="mb-7 space-y-3 text-sm text-[#6b6672]">

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

className="rounded-full bg-[#d695a4] px-7 py-3.5 font-bold text-white transition hover:bg-[#cb8495]"

>

Rozpocznij przemianę

</a>

<a

href="/plans"

className="rounded-full border border-[#d695a4] bg-white/60 px-7 py-3.5 font-bold text-[#d695a4]"

>

Poznaj program

</a>

</div>

</div>

<div className="relative flex min-h-[720px] items-center justify-center bg-[#f8f1ec] p-6">

<img

src="/hero.jpg.png"

alt="Dary Słońca"

className="max-h-[560px] w-full object-contain"

/>

<div className="absolute -bottom-4 left-8 right-8 rounded-3xl bg-white/95 p-6 shadow-xl">

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
