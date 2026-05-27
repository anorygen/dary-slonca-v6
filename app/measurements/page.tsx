'use client'

import { useEffect, useState } from 'react'

import { createClient } from '@supabase/supabase-js'

import {

LineChart,

Line,

XAxis,

YAxis,

Tooltip,

ResponsiveContainer,

} from 'recharts'

const supabase = createClient(

process.env.NEXT_PUBLIC_SUPABASE_URL!,

process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

)

export default function MeasurementsPage() {

const [weight, setWeight] = useState('')

const [waist, setWaist] = useState('')

const [hips, setHips] = useState('')

const [thigh, setThigh] = useState('')

const [chest, setChest] = useState('')

const [arm, setArm] = useState('')

const [mood, setMood] = useState('')

const [date, setDate] = useState('')

const [saved, setSaved] = useState<any[]>([])

const [visibleLines, setVisibleLines] = useState({

weight: true,

waist: true,

hips: true,

thigh: false,

chest: false,

arm: false,

})

const toNumberOrNull = (value: string) => {

return value === '' ? null : Number(value)

}

const loadMeasurements = async () => {

const { data } = await supabase

.from('measurements')

.select('*')

.order('created_at', { ascending: false })

if (data) {

setSaved(data)

}

}

const saveMeasurement = async () => {

const { error } = await supabase.from('measurements').insert([

{

weight: toNumberOrNull(weight),

waist: toNumberOrNull(waist),

hips: toNumberOrNull(hips),

thigh: toNumberOrNull(thigh),

chest: toNumberOrNull(chest),

arm: toNumberOrNull(arm),

mood: toNumberOrNull(mood),

date: date || new Date().toLocaleDateString('pl-PL'),

},

])

if (error) {

alert(error.message)

return

}

alert('Pomiary zapisane 💗')

setWeight('')

setWaist('')

setHips('')

setThigh('')

setChest('')

setArm('')

setMood('')

setDate('')

loadMeasurements()

}

useEffect(() => {

loadMeasurements()

}, [])

return (

<main className="mx-auto max-w-3xl p-6">

<div className="glass rounded-[36px] p-8">

<h1 className="text-4xl font-black text-[#5b4b5c]">

Pomiary

</h1>

<p className="mt-2 text-[#7b6a7c]">

Monitoruj swoje postępy i zapisuj wyniki.

</p>

<div className="mt-8 grid gap-4">

<input type="number" placeholder="Waga (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} className="rounded-2xl border border-[#f0d6df] p-4" />

<input type="number" placeholder="Talia (cm)" value={waist} onChange={(e) => setWaist(e.target.value)} className="rounded-2xl border border-[#f0d6df] p-4" />

<input type="number" placeholder="Biodra (cm)" value={hips} onChange={(e) => setHips(e.target.value)} className="rounded-2xl border border-[#f0d6df] p-4" />

<input type="number" placeholder="Udo (cm)" value={thigh} onChange={(e) => setThigh(e.target.value)} className="rounded-2xl border border-[#f0d6df] p-4" />

<input type="number" placeholder="Klatka (cm)" value={chest} onChange={(e) => setChest(e.target.value)} className="rounded-2xl border border-[#f0d6df] p-4" />

<input type="number" placeholder="Ramię (cm)" value={arm} onChange={(e) => setArm(e.target.value)} className="rounded-2xl border border-[#f0d6df] p-4" />

<input type="number" placeholder="Samopoczucie 1-10" value={mood} onChange={(e) => setMood(e.target.value)} className="rounded-2xl border border-[#f0d6df] p-4" />

<input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="rounded-2xl border border-[#f0d6df] p-4" />

<button onClick={saveMeasurement} className="rounded-2xl bg-[#ec4899] p-4 font-bold text-white">

Zapisz pomiary

</button>

</div>

<div className="mt-10 rounded-3xl bg-white p-6 shadow-md">

<h2 className="mb-4 text-2xl font-bold text-[#5b4b5c]">

📈 Postępy ciała

</h2>

<div className="mb-4 flex flex-wrap gap-2">

{[

['weight', 'Waga'],

['waist', 'Talia'],

['hips', 'Biodra'],

['thigh', 'Udo'],

['chest', 'Klatka'],

['arm', 'Ramię'],

].map(([key, label]) => (

<button

key={key}

onClick={() =>

setVisibleLines({

...visibleLines,

[key]: !visibleLines[key as keyof typeof visibleLines],

})

}

className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-[#5b4b5c]"

>

{label}

</button>

))}

</div>

<div style={{ width: '100%', height: 300 }}>

<ResponsiveContainer>

<LineChart data={saved}>

<XAxis dataKey="date" />

<YAxis />

<Tooltip />

{visibleLines.weight && <Line type="monotone" dataKey="weight" stroke="#ec4899" strokeWidth={3} />}

{visibleLines.waist && <Line type="monotone" dataKey="waist" stroke="#f59e0b" strokeWidth={3} />}

{visibleLines.hips && <Line type="monotone" dataKey="hips" stroke="#fb923c" strokeWidth={3} />}

{visibleLines.thigh && <Line type="monotone" dataKey="thigh" stroke="#22c55e" strokeWidth={3} />}

{visibleLines.chest && <Line type="monotone" dataKey="chest" stroke="#3b82f6" strokeWidth={3} />}

{visibleLines.arm && <Line type="monotone" dataKey="arm" stroke="#a855f7" strokeWidth={3} />}

</LineChart>

</ResponsiveContainer>

</div>

</div>

<div className="mt-8 rounded-3xl bg-white p-6 shadow-md">

<h2 className="mb-4 text-2xl font-bold text-[#5b4b5c]">

🌸 Samopoczucie

</h2>

<div style={{ width: '100%', height: 300 }}>

<ResponsiveContainer>

<LineChart data={saved}>

<XAxis dataKey="date" />

<YAxis />

<Tooltip />

<Line type="monotone" dataKey="mood" stroke="#ec4899" strokeWidth={4} />

</LineChart>

</ResponsiveContainer>

</div>

</div>

<div className="mt-10">

<h2 className="mb-4 text-2xl font-bold text-[#5b4b5c]">

Historia pomiarów

</h2>

<div className="space-y-4">

{saved.map((item: any, index: number) => (

<div key={index} className="rounded-2xl border border-[#f0d6df] bg-white p-4">

<p>⚖️ Waga: {item.weight}</p>

<p>📏 Talia: {item.waist}</p>

<p>🍑 Biodra: {item.hips}</p>

<p>🦵 Udo: {item.thigh}</p>

<p>💪 Klatka: {item.chest}</p>

<p>💪 Ramię: {item.arm}</p>

<p>🌸 Samopoczucie: {item.mood}</p>

<p>🗓️ Data: {item.date}</p>

</div>

))}

</div>

</div>

</div>

</main>

)

}
