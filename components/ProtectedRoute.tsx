'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function ProtectedRoute({ children, adminOnly = false }: { children: React.ReactNode; adminOnly?: boolean }) {
  const [ready, setReady] = useState(false)
  const [allowed, setAllowed] = useState(false)

  useEffect(() => {
    async function check() {
      const { data } = await supabase.auth.getUser()
      const user = data.user
      if (!user) {
        window.location.href = '/login'
        return
      }
      if (adminOnly) {
        const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single()
        if (profile?.role !== 'admin') {
          window.location.href = '/dashboard'
          return
        }
      }
      setAllowed(true)
      setReady(true)
    }
    check()
  }, [adminOnly])

  if (!ready) return <div className="mx-auto max-w-4xl px-4 py-16"><div className="card p-8">Ładowanie bezpiecznej przestrzeni...</div></div>
  if (!allowed) return null
  return <>{children}</>
}
