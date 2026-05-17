import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dary Słońca — Piękno • Zdrowie • Harmonia',
  description: 'Premium wellness app dla kobiecej przemiany.',
  manifest: '/manifest.json',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pl"><body>{children}</body></html>
}
