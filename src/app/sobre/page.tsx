import type { Metadata } from 'next';
import SobreClient from '@/components/pages/SobreClient';

export const metadata: Metadata = {
  title: 'Sobre a Semper Vincit | Tecnologia e Infraestrutura no Amazonas',
  description: 'Há mais de 17 anos transformando a segurança e conectividade de empresas no Polo Industrial de Manaus e em todo o Amazonas.',
  keywords: ['quem somos Semper Vincit', 'história Semper Vincit', 'TI Manaus', 'segurança eletrônica Amazonas'],
  openGraph: {
    title: 'Nossa História e Missão | Semper Vincit',
    description: 'Conheça a integradora de referência em tecnologia na Região Norte.',
    images: ['/og-sobre.jpg'],
  },
};

export default function Page() {
  return <SobreClient />;
}
