import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Paulo Espinola Fischer | AI Automation Specialist',
  description:
    'Especialista en Automatizacion con IA para empresas del Grupo Azeta. Agentes LLM, RAG, OCR, analisis de sentimiento. Postulacion 2026.',
  openGraph: {
    title: 'Paulo Espinola Fischer | AI Automation Specialist',
    description: 'Automatizacion con IA para empresas del Grupo Azeta',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
