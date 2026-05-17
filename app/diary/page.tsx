import Header from '@/components/Header'
import ProtectedRoute from '@/components/ProtectedRoute'
import DiaryForm from '@/components/DiaryForm'
export default function Diary(){return <main><Header/><ProtectedRoute><section className="mx-auto max-w-4xl px-4 py-10"><span className="badge">🏋️‍♀️ Dziennik</span><h1 className="mt-4 text-4xl font-black">Zapis treningu</h1><DiaryForm/></section></ProtectedRoute></main>}
