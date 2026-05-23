'use client';

import { useState, type FormEvent } from 'react';

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Error');
      setStatus('sent');
      setForm({ name: '', email: '', company: '', message: '' });
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contacto" className="max-w-5xl mx-auto px-6 py-20 border-t border-wire">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-[-0.02em] mb-3">
            Contacto
          </h2>
          <p className="text-ink-secondary leading-relaxed">
            Interesado en automatizacion con IA para tu empresa? Dejame tu mensaje.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-[13px] font-medium text-ink-secondary mb-1.5">
                Nombre
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-wire bg-surface text-ink text-sm placeholder:text-ink-tertiary focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[13px] font-medium text-ink-secondary mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-wire bg-surface text-ink text-sm placeholder:text-ink-tertiary focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-[13px] font-medium text-ink-secondary mb-1.5">
              Empresa (opcional)
            </label>
            <input
              id="company"
              type="text"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-wire bg-surface text-ink text-sm placeholder:text-ink-tertiary focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
              placeholder="Nombre de tu empresa"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-[13px] font-medium text-ink-secondary mb-1.5">
              Mensaje
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-wire bg-surface text-ink text-sm placeholder:text-ink-tertiary focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all resize-none"
              placeholder="Contame sobre tu proyecto o interes..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending' || status === 'sent'}
            className="btn-primary w-full justify-center disabled:opacity-50"
          >
            {status === 'sending' && 'Enviando...'}
            {status === 'sent' && 'Mensaje enviado'}
            {status === 'error' && 'Error. Intenta de nuevo'}
            {status === 'idle' && 'Enviar mensaje'}
          </button>
        </form>
      </div>
    </section>
  );
}
