import type { Metadata } from 'next';
import PIMClient from '@/components/pages/PIMClient';

export const metadata: Metadata = {
  title: 'Soluções de TI para o Polo Industrial de Manaus | Semper Vincit',
  description: 'Há mais de 17 anos integrando tecnologia para o PIM. CFTV inteligente, redes ópticas de alta densidade e eletromobilidade industrial no Amazonas.',
  keywords: ['Polo Industrial de Manaus', 'PIM TI', 'infraestrutura industrial Manaus', 'CFTV industrial Amazonas', 'redes PIM'],
  openGraph: {
    title: 'Integradora de Soluções PIM | Semper Vincit',
    description: 'Tecnologia de ponta dimensionada para o ecossistema industrial de Manaus.',
    images: ['/og-pim.jpg'],
  },
};

export default function Page() {
  return <PIMClient />;
}
