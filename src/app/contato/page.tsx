import type { Metadata } from 'next';
import ContatoClient from '@/components/pages/ContatoClient';

export const metadata: Metadata = {
  title: 'Contato | Semper Vincit - Soluções em TI e CFTV em Manaus',
  description: 'Fale com nossa equipe técnica para orçamentos de CFTV, Internet Dedicada, Cabeamento Estruturado e Carregadores Elétricos no Amazonas.',
  keywords: ['contato Semper Vincit', 'orçamento CFTV Manaus', 'atendimento TI Amazonas', 'WhatsApp Semper Vincit'],
  openGraph: {
    title: 'Fale Conosco | Semper Vincit',
    description: 'Solicite um orçamento para seu projeto de tecnologia industrial ou corporativa.',
    images: ['/og-contato.jpg'],
  },
};

export default function Page() {
  return <ContatoClient />;
}
