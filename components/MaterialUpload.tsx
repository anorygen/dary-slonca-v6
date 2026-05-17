'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function MaterialUpload() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [message, setMessage] = useState('')

  async function upload(file: File | null) {
    if (!file || !title) return setMessage('Dodaj tytuł i wybierz plik PDF.')
    const path = `premium/${Date.now()}-${file.name}`
    const { error: uploadError } = await supabase.storage.from('premium-materials').upload(path, file)
    if (uploadError) return setMessage(uploadError.message)
    const { data } = supabase.storage.from('premium-materials').getPublicUrl(path)
    const { error } = await supabase.from('materials').insert({ title, description, type: 'pdf', file_url: data.publicUrl, is_premium: true })
    if (error) return setMessage(error.message)
    setMessage('Materiał premium dodany 📄')
    setTitle(''); setDescription('')
  }

  return <div className="card p-6"><h2 className="text-2xl font-black">Dodaj PDF premium</h2><div className="mt-4 space-y-3"><input className="input" value={title} onChange={e=>setTitle(e.target.value)} placeholder="Tytuł materiału"/><textarea className="input min-h-24" value={description} onChange={e=>setDescription(e.target.value)} placeholder="Opis"/><input className="input" type="file" accept="application/pdf" onChange={e=>upload(e.target.files?.[0] ?? null)} /></div>{message && <p className="mt-4 font-bold text-[#8f6b78]">{message}</p>}</div>
}
