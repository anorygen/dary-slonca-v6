export default function ProgressRing({ value, label }: { value: number; label: string }) {
  const deg = Math.round(value * 3.6)
  return (
    <div className="card p-6 text-center">
      <div className="mx-auto grid h-32 w-32 place-items-center rounded-full" style={{ background: `conic-gradient(#d98fa5 ${deg}deg, rgba(217,143,165,.18) 0deg)` }}>
        <div className="grid h-24 w-24 place-items-center rounded-full bg-white/90">
          <div>
            <div className="text-3xl font-black">{value}%</div>
            <div className="text-xs font-bold text-[#9b6a7b]">realizacji</div>
          </div>
        </div>
      </div>
      <p className="mt-4 font-bold">{label}</p>
    </div>
  )
}
