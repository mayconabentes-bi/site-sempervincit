import type { Metadata } from 'next';
import CFTVNavalClient from '@/components/pages/CFTVNavalClient';

export const metadata: Metadata = {
  title: 'CFTV Naval Inteligente | Segurança para Embarcações no Amazonas',
  description: 'Monitoramento por câmeras com IA para balsas, empurradores e navios. Reconhecimento facial e controle de tripulação em conformidade com as normas da Marinha.',
  keywords: ['CFTV naval Manaus', 'segurança embarcações Amazonas', 'monitoramento balsa PIM', 'câmera térmica naval'],
  openGraph: {
    title: 'Monitoramento Naval Inteligente | Semper Vincit',
    description: 'Tecnologia de ponta para segurança em rios e portos da Região Norte.',
    images: ['/og-naval.jpg'],
  },
};

export default function Page() {
  return <CFTVNavalClient />;
}
