'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

const fields = ['weight','waist','hips','thigh','chest'] as const
const labels: Record<string,string> = { weight:'Waga', waist:'Talia', hips:'Biodra', thigh:'Udo', chest:'Klatka' }

export default function MeasurementsForm() {
  const [form, setForm] = useState<Record<string,string>>({ weight:'', waist:'', hips:'', thigh:'', chest:'', wellbeing:'' })
  const [message, setMessage] = useState('')
  async function save() {
    const { data: userData } = await supabase.auth.getUser()
    const user = userData.user
    if (!user) return setMessage('Musisz być zalogowana.')
    const payload: Record<string, string | number | null> = { user_id: user.id, wellbeing: form.wellbeing }
    fields.forEach(f => payload[f] = form[f] ? Number(form[f]) : null)
    const { error } = await supabase.from('measurements').insert(payload)
    if (error) return setMessage(error.message)
    setMessage('Zapisano pomiary 🌸')
    setForm({ weight:'', waist:'', hips:'', thigh:'', chest:'', wellbeing:'' })
  }
  return <form className="card mt-8 p-6" onSubmit={(e)=>{e.preventDefault(); save()}}><div className="grid gap-4 md:grid-cols-3">{fields.map(f=><input className="input" value={form[f]} onChange={e=>setForm({...form,[f]:e.target.value})} placeholder={labels[f]} key={f} type="number" step="0.1"/>)}<input className="input" value={form.wellbeing} onChange={e=>setForm({...form,wellbeing:e.target.value})} placeholder="Sen / energia"/></div><button type="submit" className="btn-primary mt-5">Zapisz pomiary</button>{message && <p className="mt-4 font-bold text-[#8f6b78]">{message}</p>}</form>
}
