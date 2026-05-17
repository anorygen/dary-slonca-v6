import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        roseSoft: '#F7DDE6',
        blush: '#F9EEF2',
        goldSoft: '#C8A85A',
        cocoa: '#5C3D3D',
        cream: '#FFF8F1'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(92, 61, 61, 0.12)'
      }
    },
  },
  plugins: [],
}
export default config
