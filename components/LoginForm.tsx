'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  async function login() {
    setMessage('Logowanie...')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) return setMessage(error.message)
    window.location.href = '/dashboard'
  }

  async function resetPassword() {
    if (!email) return setMessage('Wpisz email, aby wysłać link resetujący hasło.')
    const { error } = await supabase.auth.resetPasswordForEmail(email)
    setMessage(error ? error.message : 'Wysłano link resetujący hasło.')
  }

  return <form className="card p-8" onSubmit={(e)=>{e.preventDefault(); login()}}>
    <label className="font-bold">Email</label>
    <input className="input mt-2" value={email} onChange={e=>setEmail(e.target.value)} placeholder="twoj@email.pl" type="email" required />
    <label className="mt-4 block font-bold">Hasło</label>
    <input className="input mt-2" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" type="password" required />
    <button className="btn-primary mt-6 w-full" type="submit">Zaloguj</button>
    <button className="btn-secondary mt-3 w-full" type="button" onClick={resetPassword}>Przypomnij hasło</button>
    {message && <p className="mt-4 text-center text-sm font-bold text-[#8f6b78]">{message}</p>}
  </form>
}
