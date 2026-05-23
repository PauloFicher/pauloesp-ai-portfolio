import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  message: string;
}

function validate(payload: unknown): payload is ContactPayload {
  if (!payload || typeof payload !== 'object') return false;
  const p = payload as Record<string, unknown>;
  return (
    typeof p.name === 'string' && p.name.length >= 2 &&
    typeof p.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email) &&
    typeof p.message === 'string' && p.message.length >= 10 &&
    p.message.length <= 5000 &&
    (p.company === undefined || typeof p.company === 'string')
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!validate(body)) {
      return NextResponse.json(
        { error: 'Datos invalidos. Verifica nombre, email y mensaje.' },
        { status: 400 }
      );
    }

    const { error } = await supabase.from('contact_messages').insert({
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      company: body.company?.trim() || null,
      message: body.message.trim(),
    });

    if (error) {
      console.error('[contact] Supabase insert error:', error);
      return NextResponse.json(
        { error: 'Error al guardar el mensaje. Intenta de nuevo.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] Unhandled error:', err);
    return NextResponse.json(
      { error: 'Error interno del servidor.' },
      { status: 500 }
    );
  }
}
