import type { Metadata } from 'next';
import CabeamentoClient from '@/components/pages/CabeamentoClient';

export const metadata: Metadata = {
  title: 'Cabeamento Estruturado e Redes | Manaus - AM | Semper Vincit',
  description: 'Engenharia de redes para missão crítica no Polo Industrial de Manaus. Projetos em fibra óptica e cabo metálico com garantia de até 25 anos.',
  keywords: ['cabeamento estruturado Manaus', 'rede industrial PIM', 'fibra óptica Amazonas', 'instalação de rede corporativa', 'infraestrutura de TI'],
  openGraph: {
    title: 'Cabeamento Estruturado e Fibra Óptica | Semper Vincit',
    description: 'Backbone de alta performance para indústrias no PIM.',
    images: ['/og-cabeamento.jpg'],
  },
};

export default function Page() {
  return <CabeamentoClient />;
}
