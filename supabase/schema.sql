-- ============================================================
-- P0 Landing Hub - Supabase Schema
-- ============================================================
-- Executar en: Supabase Dashboard > SQL Editor
-- ============================================================

-- Tabla de mensajes de contacto
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id            UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name          TEXT NOT NULL,
  email         TEXT NOT NULL,
  company       TEXT,
  message       TEXT NOT NULL CHECK (char_length(message) <= 5000),
  created_at    TIMESTAMPTZ DEFAULT now() NOT NULL,
  is_read       BOOLEAN DEFAULT false NOT NULL
);

-- Indice para ordenar por fecha de recepcion
CREATE INDEX idx_contact_messages_created_at
  ON public.contact_messages (created_at DESC);

-- Indice para busqueda por email
CREATE INDEX idx_contact_messages_email
  ON public.contact_messages (email);

-- Row Level Security: solo el server puede insertar (anon OK para insert)
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Permitir insercion anonima (el formulario de contacto)
CREATE POLICY "allow_anon_insert"
  ON public.contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Solo el owner (service_role) puede leer
CREATE POLICY "allow_service_select"
  ON public.contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

-- Funcion para limpiar mensajes antiguos (opcional, correr via pg_cron)
-- CREATE EXTENSION IF NOT EXISTS pg_cron;
-- SELECT cron.schedule(
--   'clean-contact-messages',
--   '0 0 * * 0',
--   $$ DELETE FROM public.contact_messages WHERE created_at < now() - INTERVAL '90 days' $$
-- );
