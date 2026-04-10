import type { Metadata } from 'next';
import CarregadoresClient from '@/components/pages/CarregadoresClient';

export const metadata: Metadata = {
  title: 'Carregadores de Veículos Elétricos | Instalação em Manaus - AM',
  description: 'Infraestrutura para eletromobilidade no Polo Industrial de Manaus. Dimensionamento e instalação de estações de recarga corporativas e industriais.',
  keywords: ['carregador carro elétrico Manaus', 'instalação de wallbox Amazonas', 'eletromobilidade industrial PIM', 'estação de recarga EV'],
  openGraph: {
    title: 'Infraestrutura de Recarga Veicular | Semper Vincit',
    description: 'Soluções completas para frotas elétricas e condomínios no Amazonas.',
    images: ['/og-carregadores.jpg'],
  },
};

export default function Page() {
  return <CarregadoresClient />;
}
