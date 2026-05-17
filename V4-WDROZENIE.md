# Instrukcja wdrożenia Dary Słońca V4 — krok po kroku

## 1. Supabase
- Załóż projekt Supabase.
- Wklej `supabase-schema.sql` w SQL Editor.
- Utwórz Storage bucket: `transformation-photos`.
- Utwórz Storage bucket: `premium-materials`.

## 2. Konta
- W Supabase Auth utwórz konto właściciela.
- W tabeli `profiles` ustaw temu kontu rolę `admin`.
- Konta użytkowniczek można tworzyć ręcznie w Auth, a następnie dodać profil w `profiles` z rolą `user`.

## 3. Lokalny start
```bash
npm install
npm run dev
```

## 4. Publikacja Vercel
- Import projektu z GitHub.
- Dodaj zmienne `NEXT_PUBLIC_SUPABASE_URL` i `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- Kliknij Deploy.

## 5. Test po wdrożeniu
- Zaloguj admina.
- Wejdź w `/admin`.
- Dodaj PDF premium.
- Zaloguj użytkowniczkę.
- Dodaj trening, pomiary i zdjęcie przemiany.
