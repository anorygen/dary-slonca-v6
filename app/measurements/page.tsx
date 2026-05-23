'use client'

import { useState, useEffect } from 'react'

import { supabase } from '@/lib/supabase'

export default function MeasurementsPage() {
const [weight, setWeight] = useState('')

const [waist, setWaist] = useState('')

const [hips, setHips] = useState('')

const [thigh, setThigh] = useState('')

const [chest, setChest] = useState('')

const [mood, setMood] = useState('')
const [date, setDate] = useState('') 
const [saved, setSaved] = useState<any[]>([])
const saveMeasurements = async () => {

const { error } = await supabase

.from('measurements')

.insert([

{

weight,

waist,

hips,

thigh,

chest,

mood,
date,
},
])


if (error) {

alert('Błąd zapisu')

console.log(error)

} else {

alert('Pomiary zapisane 💖')

}

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


<input
type="number"

placeholder="Waga (kg)"


value={weight}

onChange={(e) => setWeight(e.target.value)}

className="rounded-2xl border border-[#f0d6df] p-4"

/>

<input

type="number"

placeholder="Talia (cm)"
value={waist}

onChange={(e) => setWaist(e.target.value)}
className="rounded-2xl border border-[#f0d6df] p-4"

/>

<input

type="number"

placeholder="Biodra (cm)"
value={hips}

onChange={(e) => setHips(e.target.value)}
className="rounded-2xl border border-[#f0d6df] p-4"

/>

<input

type="date"
value={date}

onChange={(e) => setDate(e.target.value)}
className="rounded-2xl border border-[#f0d6df] p-4"

/>

<button

onClick={saveMeasurements}

className="btn-primary mt-4"

>

Zapisz pomiary

</button>

</div>
<div className="mt-10">

<h2 className="text-2xl font-bold text-[#5b4b5c] mb-4">

Historia pomiarów

</h2>

<div className="space-y-4">

{saved.map((item: any, index: number) => (

<div

key={index}

className="rounded-2xl border border-[#f0d6df] p-4 bg-white"

>

<p>⚖️ Waga: {item.weight}</p>

<p>📏 Talia: {item.waist}</p>

<p>🍑 Biodra: {item.hips}</p>

<p>🦵 Udo: {item.thigh}</p>

<p>💪 Klatka: {item.chest}</p>

<p>🌸 Samopoczucie: {item.mood}</p>
<p>📅 Data: {item.date}</p>
</div>

))}

</div>

</div>
</div>

</main>

)

}
