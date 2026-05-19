export default function MeasurementsPage() {

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

className="rounded-2xl border border-[#f0d6df] p-4"

/>

<input

type="number"

placeholder="Talia (cm)"

className="rounded-2xl border border-[#f0d6df] p-4"

/>

<input

type="number"

placeholder="Biodra (cm)"

className="rounded-2xl border border-[#f0d6df] p-4"

/>

<input

type="date"

className="rounded-2xl border border-[#f0d6df] p-4"

/>

<button className="btn-primary mt-4">

Zapisz pomiary

</button>

</div>

</div>

</main>

)

}
