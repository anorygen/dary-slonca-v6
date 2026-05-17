import { supabase } from './supabase'

export async function getCurrentUser() {
  const { data, error } = await supabase.auth.getUser()
  if (error) return null
  return data.user ?? null
}

export async function getCurrentProfile() {
  const user = await getCurrentUser()
  if (!user) return null
  const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single()
  return data
}

export async function requireUser() {
  const user = await getCurrentUser()
  if (!user) {
    window.location.href = '/login'
    return null
  }
  return user
}
