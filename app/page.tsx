import Link from 'next/link'

import Header from '@/components/Header'

export default function Home() {

return (

<main>

<Header />

<section className="mx-auto max-w-7xl px-6 py-10">

<div className="rounded-[48px] bg-white/75 p-8 shadow-2xl backdrop-blur-xl md:p-14">

<div className="grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-center">

<div>

<p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#b9858d]">

Piękno • Zdrowie • Harmonia

</p>

<h1 className="text-5xl font-black leading-tight text-[#4f4352] md:text-6xl">

Nie jesteś sama

<br />

<span className="text-[#c98191]">w drodze</span>

<br />

<span className="font-serif italic text-[#b98a54]">

do lepszej Ciebie

</span>

</h1>

<p className="mt-8 max-w-xl text-lg leading-8 text-[#6f6470]">

Dary Słońca to kobiecy program przemiany premium, który łączy

piękną aplikację z opieką prawdziwego trenera. Masz plan,

wsparcie, motywację i narzędzia, które prowadzą Cię krok po

kroku do celu.

</p>

<div className="mt-8 grid gap-3 text-[#6f6470]">

<div className="flex items-center gap-3">

<span className="text-[#b98a54]">✦</span>

Indywidualne prowadzenie i kontakt z trenerem

</div>

<div className="flex items-center gap-3">

<span className="text-[#b98a54]">✦</span>

Pomiary, zdjęcia przemiany, nawyki i kalendarz

</div>

<div className="flex items-center gap-3">

<span className="text-[#b98a54]">✦</span>

Kobiece podejście bez presji i chaosu

</div>

</div>

<div className="mt-10 flex flex-wrap gap-4">

<Link

href="/dashboard"

className="rounded-full bg-[#c98191] px-8 py-4 font-bold text-white shadow-lg transition hover:scale-105"

>

Rozpocznij przemianę

</Link>

<Link

href="/plans"

className="rounded-full border border-[#c98191] bg-white/70 px-8 py-4 font-bold text-[#9b5f6b] transition hover:scale-105"

>

Poznaj program

</Link>

</div>

</div>

<div className="relative">

<img

src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200"

alt="Kobiecy wellness premium"

className="h-full min-h-[520px] w-full rounded-[38px] object-cover shadow-2xl"

/>

<div className="absolute bottom-6 left-6 right-6 rounded-[28px] bg-white/75 p-6 shadow-xl backdrop-blur-xl">

<p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b9858d]">

Program przemiany kobiet

</p>

<p className="mt-2 text-lg font-black text-[#4f4352]">

Aplikacja + opieka trenera + codzienne wsparcie

</p>

</div>

</div>

</div>

</div>

</section>

<section className="mx-auto max-w-7xl px-6 py-10">

<div className="grid gap-6 md:grid-cols-4">

{[

[

'01',

'Opieka trenera',

'Nie zostajesz sama. Masz wsparcie, prowadzenie i motywację na każdym etapie.',

],

[

'02',

'Aplikacja premium',

'Pomiary, plany, kalendarz, nawyki i postępy w jednym pięknym miejscu.',

],

[

'03',

'Kobieca przemiana',

'Zdrowie, sylwetka, energia i dobre samopoczucie bez presji.',

],

[

'04',

'Widoczne efekty',

'Obserwujesz postępy w pomiarach, zdjęciach i codziennych rytuałach.',

],

].map(([number, title, text]) => (

<div

key={title}

className="rounded-[34px] bg-white/75 p-7 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-2 hover:shadow-2xl"

>

<div className="mb-5 text-sm font-black tracking-[0.3em] text-[#b98a54]">

{number}

</div>

<h3 className="text-xl font-black text-[#4f4352]">{title}</h3>

<p className="mt-4 text-sm leading-6 text-[#7a6c78]">{text}</p>

</div>

))}

</div>

</section>

<section className="mx-auto max-w-7xl px-6 py-12">

<h2 className="text-center text-4xl font-black text-[#4f4352]">

Program Przemiany

</h2>

<p className="mx-auto mt-4 max-w-2xl text-center text-[#7a6c78]">

Kompleksowe prowadzenie kobiet: ciało, zdrowie, nawyki, energia,

samopoczucie i codzienne wsparcie trenera.

</p>

<div className="mt-10 grid gap-6 md:grid-cols-4">

{[

[

'✦',

'Odżywianie & Nawyki',

'Zdrowe wybory, lekkość i codzienne rytuały wspierające przemianę.',

],

[

'☼',

'Równowaga & Regeneracja',

'Sen, spokój, redukcja stresu i troska o kobiece samopoczucie.',

],

[

'↗',

'Postępy pod kontrolą',

'Pomiary, wykresy, zdjęcia przemiany i jasny obraz efektów.',

],

[

'♡',

'Motywacja & Wsparcie',

'Kontakt z trenerem, codzienna inspiracja i prowadzenie krok po kroku.',

],

].map(([icon, title, text]) => (

<div

key={title}

className="rounded-[34px] bg-white/75 p-8 text-center shadow-xl backdrop-blur transition duration-300 hover:-translate-y-2 hover:shadow-2xl"

>

<div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-[#f4dde2] text-3xl text-[#b9858d]">

{icon}

</div>

<h3 className="text-lg font-black text-[#4f4352]">{title}</h3>

<p className="mt-4 text-sm leading-6 text-[#7a6c78]">{text}</p>

</div>

))}

</div>

</section>

<section className="mx-auto max-w-7xl px-6 pb-16">

<div className="rounded-[42px] bg-[#f6e7e8]/80 p-8 text-center shadow-xl md:p-12">

<p className="text-sm font-bold uppercase tracking-[0.35em] text-[#b9858d]">

Dary Słońca

</p>

<h2 className="mt-4 text-4xl font-black text-[#4f4352] md:text-5xl">

To nie tylko aplikacja.

<br />

To prowadzenie, wsparcie i kobieca energia.

</h2>

<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6f6470]">

Każda uczestniczka otrzymuje dostęp do narzędzi, które pomagają

śledzić przemianę, ale największą wartością jest człowiek —

trener, który pomaga utrzymać kierunek i przejść przez proces z

poczuciem bezpieczeństwa.

</p>

</div>

</section>

</main>

)

}
