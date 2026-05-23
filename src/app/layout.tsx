import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Paulo Espinola Fischer | AI Automation Specialist',
  description:
    'Portfolio profesional de automatizacion con IA para empresas. Construyo agentes LLM, pipelines RAG y herramientas de IA para retail, finanzas, telecom e inmobiliario. Postulacion Grupo Azeta.',
  keywords: [
    'AI Automation',
    'LLM Agents',
    'RAG',
    'Supabase',
    'Next.js',
    'FastAPI',
    'Grupo Azeta',
    'Paulo Espinola',
    'Paraguay',
  ],
  openGraph: {
    title: 'Paulo Espinola Fischer | AI Automation Specialist',
    description: 'Automatizacion con IA para empresas del Grupo Azeta',
    url: 'https://pauloesp-ai-portfolio.vercel.app',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
