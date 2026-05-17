'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function DiaryForm() {
  const [form, setForm] = useState({ training_name: '', duration: '', energy: '', mood: '', notes: '' })
  const [message, setMessage] = useState('')
  function set(key: string, value: string) { setForm(prev => ({ ...prev, [key]: value })) }

  async function save() {
    const { data: userData } = await supabase.auth.getUser()
    const user = userData.user
    if (!user) return setMessage('Musisz być zalogowana.')
    const { error } = await supabase.from('training_diary').insert({
      user_id: user.id,
      training_name: form.training_name,
      duration: form.duration,
      energy: form.energy ? Number(form.energy) : null,
      mood: form.mood,
      notes: form.notes,
    })
    if (error) return setMessage(error.message)
    setMessage('Zapisano dziennik treningowy ☀️')
    setForm({ training_name: '', duration: '', energy: '', mood: '', notes: '' })
  }

  return <form className="card mt-8 p-6" onSubmit={(e)=>{e.preventDefault(); save()}}><div className="grid gap-4 md:grid-cols-2"><input className="input" value={form.training_name} onChange={e=>set('training_name', e.target.value)} placeholder="Nazwa treningu"/><input className="input" value={form.duration} onChange={e=>set('duration', e.target.value)} placeholder="Czas, np. 35 min"/><input className="input" value={form.energy} onChange={e=>set('energy', e.target.value)} placeholder="Energia 1-10" type="number" min="1" max="10"/><input className="input" value={form.mood} onChange={e=>set('mood', e.target.value)} placeholder="Nastrój"/></div><textarea className="input mt-4 min-h-36" value={form.notes} onChange={e=>set('notes', e.target.value)} placeholder="Notatki: co poszło dobrze, co poprawić?"/><button type="submit" className="btn-primary mt-5">Zapisz wpis</button>{message && <p className="mt-4 font-bold text-[#8f6b78]">{message}</p>}</form>
}
