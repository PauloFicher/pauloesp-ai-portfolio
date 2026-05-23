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

      if (!res.ok) throw new Error('Failed to send');
      setStatus('sent');
      setForm({ name: '', email: '', company: '', message: '' });
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hablemos
          </h2>
          <p className="text-gray-400">
            Si estas en el Grupo Azeta o cualquier empresa interesada en
            automatizacion con IA, deja tu mensaje.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-400 mb-1.5">
                Nombre
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 bg-white/[0.03] border border-white/10 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-azeta-accent/40 transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 bg-white/[0.03] border border-white/10 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-azeta-accent/40 transition-colors"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm text-gray-400 mb-1.5">
              Empresa (opcional)
            </label>
            <input
              id="company"
              type="text"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full px-4 py-2.5 bg-white/[0.03] border border-white/10 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-azeta-accent/40 transition-colors"
              placeholder="Nombre de tu empresa"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-gray-400 mb-1.5">
              Mensaje
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-2.5 bg-white/[0.03] border border-white/10 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-azeta-accent/40 transition-colors resize-none"
              placeholder="Contame sobre tu proyecto o rol..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending' || status === 'sent'}
            className="w-full py-3 bg-azeta-accent text-azeta-primary rounded-lg font-semibold text-sm hover:bg-azeta-accent/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'sending' && 'Enviando...'}
            {status === 'sent' && 'Mensaje enviado'}
            {status === 'error' && 'Error - intenta de nuevo'}
            {status === 'idle' && 'Enviar mensaje'}
          </button>
        </form>
      </div>
    </section>
  );
}
