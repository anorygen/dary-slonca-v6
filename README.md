# Dary Słońca V5

**Piękno • Zdrowie • Harmonia**

Premium aplikacja wellness PWA dla podopiecznych i administratora.

## Co jest w V5
- logowanie Supabase Auth,
- reset hasła,
- role `admin` i `user`,
- zabezpieczone strony,
- dashboard użytkowniczki,
- onboarding startowy,
- kalendarz wellness,
- system nawyków,
- dziennik treningowy,
- pomiary,
- upload zdjęć przemiany,
- upload PDF premium,
- panel administratora PRO z listą użytkowniczek testowych,
- schemat SQL Supabase z tabelami i RLS,
- PWA pod instalację na telefonie,
- checklisty wdrożenia online.

## Uruchomienie lokalnie
```bash
npm install
npm run dev
```
Wejdź na `http://localhost:3000`.

## Supabase
1. Utwórz projekt w Supabase.
2. W **SQL Editor** wklej zawartość pliku `supabase-schema.sql`.
3. W **Storage** utwórz buckety:
   - `transformation-photos`
   - `premium-materials`
4. Skopiuj `.env.example` do `.env.local`.
5. Uzupełnij:
```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

## Pierwszy administrator
1. W Supabase Auth utwórz użytkownika.
2. Skopiuj jego `id`.
3. W SQL Editor wykonaj:
```sql
insert into profiles (id, nick, role)
values ('TU_WKLEJ_ID_UZYTKOWNIKA', 'Admin', 'admin')
on conflict (id) do update set role = 'admin';
```

## Publikacja testowa
1. Wrzuć projekt na GitHub.
2. Połącz repozytorium z Vercel.
3. W Vercel dodaj zmienne środowiskowe.
4. Kliknij Deploy.
5. Po zakupie domeny ustaw np. `app.daryslonca.pl` jako domenę aplikacji.

## Kolejny etap V6
- Edge Function do tworzenia kont z panelu admina,
- zapisywanie onboardingu do bazy,
- realne przypisywanie planów,
- prywatne linki do PDF,
- powiadomienia web push,
- Stripe / płatności online.
