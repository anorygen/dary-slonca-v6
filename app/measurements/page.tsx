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

const [mood, setMood] = useState('')

const [saved, setSaved] = useState<any[]>([])

const saveMeasurement = async () => {

await supabase.from('measurements').insert([

{

weight,

waist,

hips,

mood,

date: new Date().toLocaleDateString(),

},

])

loadMeasurements()

setWeight('')

setWaist('')

setHips('')

setMood('')

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

className="rounded-2xl border p-4"

/>

<input

type="number"

placeholder="Talia (cm)"

value={waist}

onChange={(e) => setWaist(e.target.value)}

className="rounded-2xl border p-4"

/>

<input

type="number"

placeholder="Biodra (cm)"

value={hips}

onChange={(e) => setHips(e.target.value)}

className="rounded-2xl border p-4"

/>

<input

type="number"

placeholder="Samopoczucie 1-10"

value={mood}

onChange={(e) => setMood(e.target.value)}

className="rounded-2xl border p-4"

/>

<button

onClick={saveMeasurement}

className="rounded-2xl bg-[#ec4899] p-4 font-bold text-white"

>

Zapisz pomiary

</button>

</div>

<div className="mt-12 h-[300px]">

<ResponsiveContainer width="100%" height="100%">

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

