export function FeatureCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="card">
      <h3 className="mb-2 text-xl font-bold text-cocoa">{title}</h3>
      <p className="leading-relaxed text-cocoa/70">{text}</p>
    </div>
  )
}
