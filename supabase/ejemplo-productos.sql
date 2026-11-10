-- =============================================================
-- ☁️ EJEMPLO de SQL para Supabase (plantilla con "productos")
-- Tu equipo NO usa este archivo: Copilot genera supabase/tablas.sql
-- con TUS campos de js/config.js. Este sirve para comparar.
-- Pégalo completo en Supabase → SQL Editor → Run.
-- ⚠️ Solo para el taller: cualquiera con la clave puede leer y escribir.
-- =============================================================

-- 1. Tabla principal (una columna por cada campo de config.js)
create table if not exists public.productos (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nombre text not null,
  categoria text,
  precio numeric,
  estado text,
  icono text,
  descripcion text
);

-- 2. Mensajes del formulario de contacto
create table if not exists public.mensajes (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nombre text not null,
  mensaje text not null,
  leido boolean not null default false
);

-- 3. Permisos para que la app pueda leer y escribir (sin inicio de sesión)
grant select, insert, update, delete on table public.productos to anon;
grant select, insert, update, delete on table public.mensajes to anon;

alter table public.productos enable row level security;
alter table public.mensajes enable row level security;

drop policy if exists "taller_acceso_total" on public.productos;
create policy "taller_acceso_total" on public.productos for all to anon using (true) with check (true);

drop policy if exists "taller_acceso_total" on public.mensajes;
create policy "taller_acceso_total" on public.mensajes for all to anon using (true) with check (true);
