-- Run once in Supabase: SQL Editor -> New query -> paste -> Run
create table if not exists public.scores (
  id bigint generated always as identity primary key,
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  username text not null check (char_length(username) between 1 and 30),
  category text not null,
  category_id text not null,
  score int not null check (score between 0 and 100),
  correct int not null check (correct between 0 and 100),
  total int not null check (total between 1 and 100),
  created_at timestamptz not null default now()
);
alter table public.scores enable row level security;
create policy "read own scores" on public.scores for select to authenticated using (auth.uid() = user_id);
create policy "insert own scores" on public.scores for insert to authenticated with check (auth.uid() = user_id);
create or replace view public.leaderboard as
  select username, sum(score)::int as points, count(*)::int as quizzes
  from public.scores group by username order by points desc;
grant select on public.leaderboard to anon, authenticated;
