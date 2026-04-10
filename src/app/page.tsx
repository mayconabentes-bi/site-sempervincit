import type { Metadata } from 'next';
import HomeClient from '@/components/HomeClient';

export const metadata: Metadata = {
  title: 'Semper Vincit | TI & Infraestrutura de Missão Crítica em Manaus',
  description: 'Integradora de soluções de TI liderando a transformação no Polo Industrial de Manaus. CFTV Inteligente, Redes de Alta Disponibilidade e Link Dedicado.',
  keywords: ['TI Manaus', 'PIM', 'CFTV Manaus', 'Redes Corporativas', 'Fibra Óptica Manaus', 'Link Dedicado PIM'],
  openGraph: {
    title: 'Semper Vincit | TI & Infraestrutura PIM',
    description: 'Soluções de alta performance para indústrias e corporações em Manaus.',
    images: ['/og-image.jpg'],
  },
};

export default function Home() {
  return <HomeClient />;
}
