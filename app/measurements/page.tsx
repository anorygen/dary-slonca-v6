import Header from '@/components/Header'
import ProtectedRoute from '@/components/ProtectedRoute'
import MeasurementsForm from '@/components/MeasurementsForm'
export default function Measurements(){return <main><Header/><ProtectedRoute><section className="mx-auto max-w-4xl px-4 py-10"><span className="badge">📏 Pomiary</span><h1 className="mt-4 text-4xl font-black">Spokojny monitoring postępów</h1><MeasurementsForm/></section></ProtectedRoute></main>}
