'use client'

import { useState, useEffect } from 'react'

import { supabase } from '@/lib/supabase'
import {

LineChart,

Line,

XAxis,

YAxis,

Tooltip,

ResponsiveContainer

} from 'recharts'
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
const saveMeasurements = async () => {

const { error } = await supabase

.from('measurements')

.insert([

{

weight,

waist,

hips,

thigh: thigh || null,

chest: chest || null,
arm: arm || null,
mood: mood || null,




date,
},
])


if (error) {

alert(error.message)

console.log(error)

} else {

alert('Pomiary zapisane 💖')
loadMeasurements()
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

type="number"

placeholder="Udo (cm)"

value={thigh}

onChange={(e) => setThigh(e.target.value)}

className="rounded-2xl border border-[#f0d6df] p-4"

/>

<input

type="number"

placeholder="Klatka (cm)"

value={chest}

onChange={(e) => setChest(e.target.value)}

className="rounded-2xl border border-[#f0d6df] p-4"

/>

<input

type="number"

placeholder="Ramię (cm)"

value={arm}

onChange={(e) => setArm(e.target.value)}

className="rounded-2xl border border-[#f0d6df] p-4"

/>

<input

type="text"

placeholder="Samopoczucie"

value={mood}

onChange={(e) => setMood(e.target.value)}

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
<div className="rounded-3xl bg-white p-6 shadow-md mb-6">

<h3 className="text-xl font-bold text-[#5b4b5c] mb-4">

📈 Postępy wagi

</h3>

<div style={{ width: '100%', height: 300 }}>

<ResponsiveContainer>

<LineChart data={saved}>

<XAxis dataKey="date" />

<YAxis />

<Tooltip />
<div className="flex flex-wrap gap-2 mb-4">

<button

onClick={() =>

setVisibleLines({

...visibleLines,

weight: !visibleLines.weight,

})

}

className="px-3 py-1 rounded-full bg-pink-200"

>

Waga

</button>

<button

onClick={() =>

setVisibleLines({

...visibleLines,

waist: !visibleLines.waist,

})

}

className="px-3 py-1 rounded-full bg-orange-200"

>

Talia

</button>

<button

onClick={() =>

setVisibleLines({

...visibleLines,

hips: !visibleLines.hips,

})

}

className="px-3 py-1 rounded-full bg-violet-200"

>

Biodra

</button>

<button

onClick={() =>

setVisibleLines({

...visibleLines,

arm: !visibleLines.arm,

})

}

className="px-3 py-1 rounded-full bg-green-200"

>

Ramię

</button>

</div>
{visibleLines.weight && (

<Line

type="monotone"

dataKey="weight"

stroke="#ec4899"

strokeWidth={3}

/>

)}

{visibleLines.waist && (

<Line

type="monotone"

dataKey="waist"

stroke="#f59e0b"

strokeWidth={3}

/>

)}

{visibleLines.hips && (

<Line

type="monotone"

dataKey="hips"

stroke="#fb923c"

strokeWidth={3}

/>

)}

{visibleLines.thigh && (

<Line

type="monotone"

dataKey="thigh"

stroke="#22c55e"

strokeWidth={3}

/>

)}

{visibleLines.chest && (

<Line

type="monotone"

dataKey="chest"

stroke="#3b82f6"

strokeWidth={3}

/>

)}

{visibleLines.arm && (

<Line

type="monotone"

dataKey="arm"

stroke="#a855f7"

strokeWidth={3}

/>

)}

</LineChart>

</ResponsiveContainer>

</div>

</div>


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
<p>💪 Ramię: {item.arm}</p>
<p>🌸 Samopoczucie: {item.mood}</p>
<p>📅 Data: {item.date}</p>
</div>

))}

</div>

<div className="rounded-3xl bg-white p-6 shadow-md mt-8">

<h3 className="text-xl font-bold text-[#5b4b5c] mb-4">

🌸 Samopoczucie

</h3>

<div style={{ width: '100%', height: 300 }}>

<ResponsiveContainer>

<LineChart data={saved}>

<XAxis dataKey="date" />

<YAxis />

<Tooltip />

<Line

type="monotone"

dataKey="mood"

stroke="#ec4899"

strokeWidth={4}

/>

</LineChart>

</ResponsiveContainer>

</div>
</div>

</main>

)

}
