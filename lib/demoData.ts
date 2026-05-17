export const brand = {
  name: 'Dary Słońca',
  tagline: 'Piękno • Zdrowie • Harmonia',
  promise: 'Kobieca przestrzeń przemiany, zdrowia i codziennego światła.'
}

export const todayPlan = [
  { title: 'Poranny rytuał', note: 'Woda z cytryną, 5 minut oddechu, intencja dnia', done: true },
  { title: 'Trening wellness', note: 'Pośladki + brzuch, 35 minut', done: false },
  { title: 'Pomiary i energia', note: 'Zapis wagi, samopoczucia i snu', done: false },
]

export const plans = [
  { name: 'Rozkwit 28 dni', level: 'Start', focus: 'nawyki, lekki trening, regularność' },
  { name: 'Kobieca Siła', level: 'Średni', focus: 'modelowanie sylwetki i energia' },
  { name: 'Harmonia Ciała', level: 'Wellness', focus: 'mobilność, oddech, regeneracja' },
]

export const adminStats = [
  { label: 'Użytkowniczki', value: '24' },
  { label: 'Aktywne plany', value: '18' },
  { label: 'Dzienniki dziś', value: '11' },
  { label: 'Przemiany', value: '7' },
]

export const quotes = [
  'Twoje ciało lubi spokój, rytm i konsekwencję.',
  'Nie musisz robić wszystkiego idealnie. Wystarczy, że wracasz do siebie.',
  'Piękno zaczyna się od troski, nie od presji.',
]

export const wellnessCalendar = [
  { day: 'Pon', icon: '🏋️‍♀️', title: 'Trening siłowy', status: 'zrobione' },
  { day: 'Wt', icon: '🧘‍♀️', title: 'Mobilność', status: 'dziś' },
  { day: 'Śr', icon: '💧', title: 'Nawyki', status: 'plan' },
  { day: 'Czw', icon: '📏', title: 'Pomiary', status: 'plan' },
  { day: 'Pt', icon: '🌺', title: 'Przemiana', status: 'plan' },
  { day: 'Sob', icon: '🚶‍♀️', title: 'Spacer', status: 'plan' },
  { day: 'Nd', icon: '🌙', title: 'Regeneracja', status: 'plan' },
]

export const sampleUsers = [
  { name: 'Anna', email: 'anna@test.pl', plan: 'Rozkwit 28 dni', progress: 72, status: 'aktywna' },
  { name: 'Marta', email: 'marta@test.pl', plan: 'Kobieca Siła', progress: 41, status: 'do kontaktu' },
  { name: 'Kasia', email: 'kasia@test.pl', plan: 'Harmonia Ciała', progress: 88, status: 'aktywna' },
]
