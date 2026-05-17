'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function PhotoUpload() {
  const [stage, setStage] = useState('progress')
  const [note, setNote] = useState('')
  const [message, setMessage] = useState('')

  async function upload(file: File | null) {
    if (!file) return
    const { data: userData } = await supabase.auth.getUser()
    const user = userData.user
    if (!user) return setMessage('Musisz być zalogowana.')
    const path = `${user.id}/${Date.now()}-${file.name}`
    const { error: uploadError } = await supabase.storage.from('transformation-photos').upload(path, file)
    if (uploadError) return setMessage(uploadError.message)
    const { data: publicData } = supabase.storage.from('transformation-photos').getPublicUrl(path)
    const { error } = await supabase.from('transformation_photos').insert({ user_id: user.id, photo_url: publicData.publicUrl, stage, note })
    if (error) return setMessage(error.message)
    setMessage('Zdjęcie przemiany zapisane 🌺')
  }

  return <div className="card mt-8 p-6"><h2 className="text-2xl font-black">Dodaj zdjęcie przemiany</h2><div className="mt-4 grid gap-4 md:grid-cols-2"><select className="input" value={stage} onChange={e=>setStage(e.target.value)}><option value="before">Przed</option><option value="progress">Postęp</option><option value="after">Po</option></select><input className="input" value={note} onChange={e=>setNote(e.target.value)} placeholder="Notatka"/><input className="input md:col-span-2" type="file" accept="image/*" onChange={e=>upload(e.target.files?.[0] ?? null)} /></div>{message && <p className="mt-4 font-bold text-[#8f6b78]">{message}</p>}</div>
}
