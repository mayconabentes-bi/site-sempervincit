import type { Metadata } from 'next';
import InternetClient from '@/components/pages/InternetClient';

export const metadata: Metadata = {
  title: 'Internet Dedicada para Indústrias | Link Privado Manaus - AM',
  description: 'Link de internet dedicada com SLA 99,9% para o Polo Industrial de Manaus. Conectividade simétrica em anel óptico para operações críticas.',
  keywords: ['internet dedicada Manaus', 'link dedicado PIM', 'internet industrial Amazonas', 'link simétrico', 'conectividade corporativa', 'SLA 99,9%'],
  openGraph: {
    title: 'Internet Dedicada e Link Privado | Semper Vincit',
    description: 'Alta disponibilidade e performance garantida para sua empresa em Manaus.',
    images: ['/og-internet.jpg'],
  },
};

export default function Page() {
  return <InternetClient />;
}
