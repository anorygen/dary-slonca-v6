export type UserRole = 'admin' | 'user'

export type Profile = {
  id: string
  nick: string
  role: UserRole
  created_at: string
}

export type Plan = {
  id: string
  name: string
  level: string | null
  description: string | null
  created_at: string
}

export type Material = {
  id: string
  title: string
  type: 'pdf' | 'video' | 'link' | 'note'
  file_url: string | null
  description: string | null
  is_premium: boolean
  created_at: string
}
