import type { Metadata } from 'next';
import CFTVClient from '@/components/pages/CFTVClient';

export const metadata: Metadata = {
  title: 'CFTV e Segurança Eletrônica em Manaus | Semper Vincit Industrial',
  description: 'Sistemas inteligentes de CFTV para indústrias no Polo Industrial de Manaus. Soluções com câmeras IP de IA para resiliência ao clima amazônico. Solicite orçamento.',
  keywords: ['CFTV Manaus', 'segurança eletrônica PIM', 'câmeras de segurança industriais', 'monitoramento 24h Amazonas', 'videomonitoramento IP'],
  openGraph: {
    title: 'CFTV e Segurança Eletrônica Industrial | Semper Vincit',
    description: 'Monitoramento inteligente e resiliente para o ecossistema industrial de Manaus.',
    images: ['/og-cftv.jpg'],
  },
};

export default function Page() {
  return <CFTVClient />;
}
