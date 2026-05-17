'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export function AuthStatus() {
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setEmail(data.user?.email ?? null))
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setEmail(session?.user?.email ?? null)
    })
    return () => listener.subscription.unsubscribe()
  }, [])

  async function logout() {
    await supabase.auth.signOut()
    window.location.href = '/login'
  }

  if (!email) return <Link href="/login" className="btn-secondary">Zaloguj</Link>

  return (
    <div className="flex items-center gap-3">
      <span className="hidden text-sm text-cocoa/70 md:inline">{email}</span>
      <button onClick={logout} className="btn-secondary" type="button">Wyloguj</button>
    </div>
  )
}
