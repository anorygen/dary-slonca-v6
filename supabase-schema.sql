create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  nick text not null,
  role text not null default 'user' check (role in ('admin','user')),
  created_at timestamptz default now()
);

create table if not exists plans (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  level text,
  description text,
  created_at timestamptz default now()
);

create table if not exists assigned_plans (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  plan_id uuid references plans(id) on delete cascade,
  admin_note text,
  start_date date default current_date,
  created_at timestamptz default now()
);

create table if not exists training_diary (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  training_name text,
  duration text,
  energy int,
  mood text,
  notes text,
  created_at timestamptz default now()
);

create table if not exists measurements (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  weight numeric,
  waist numeric,
  hips numeric,
  thigh numeric,
  chest numeric,
  wellbeing text,
  created_at timestamptz default now()
);

create table if not exists transformation_photos (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  photo_url text not null,
  stage text default 'progress',
  note text,
  created_at timestamptz default now()
);

insert into plans (name, level, description) values
('Rozkwit 28 dni','Start','Nawyki, lekki trening i regularność'),
('Kobieca Siła','Średni','Modelowanie sylwetki i energia'),
('Harmonia Ciała','Wellness','Mobilność, oddech i regeneracja')
on conflict do nothing;

-- V4: materiały premium, cele, nawyki i polityki bezpieczeństwa
create table if not exists materials (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  type text not null default 'pdf' check (type in ('pdf','video','link','note')),
  file_url text,
  description text,
  is_premium boolean default true,
  created_at timestamptz default now()
);

create table if not exists habits (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  title text not null,
  done boolean default false,
  habit_date date default current_date,
  created_at timestamptz default now()
);

create table if not exists monthly_goals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  title text not null,
  target_value numeric,
  current_value numeric default 0,
  unit text,
  created_at timestamptz default now()
);

alter table profiles enable row level security;
alter table plans enable row level security;
alter table assigned_plans enable row level security;
alter table training_diary enable row level security;
alter table measurements enable row level security;
alter table transformation_photos enable row level security;
alter table materials enable row level security;
alter table habits enable row level security;
alter table monthly_goals enable row level security;

create policy "Users can read own profile" on profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on profiles for update using (auth.uid() = id);
create policy "Everyone logged in can read plans" on plans for select to authenticated using (true);
create policy "Users can read own assigned plans" on assigned_plans for select using (auth.uid() = user_id);
create policy "Users can manage own diary" on training_diary for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users can manage own measurements" on measurements for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users can manage own photos" on transformation_photos for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users can read materials" on materials for select to authenticated using (true);
create policy "Users can manage own habits" on habits for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users can manage own goals" on monthly_goals for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Buckety utwórz w Supabase Storage:
-- 1. transformation-photos
-- 2. premium-materials
-- Na start możesz ustawić je jako publiczne, a później ograniczyć politykami Storage.

-- V5: onboarding, wydarzenia wellness i programy premium
create table if not exists onboarding_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  main_goal text,
  activity_level text,
  start_weight numeric,
  training_days int,
  motivation_note text,
  created_at timestamptz default now()
);

create table if not exists wellness_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  title text not null,
  event_type text default 'wellness',
  event_date date not null default current_date,
  done boolean default false,
  created_at timestamptz default now()
);

alter table onboarding_profiles enable row level security;
alter table wellness_events enable row level security;

create policy "Users can manage own onboarding" on onboarding_profiles for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users can manage own wellness events" on wellness_events for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
