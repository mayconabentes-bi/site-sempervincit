import type { Metadata } from 'next';
import CasesClient from '@/components/pages/CasesClient';

export const metadata: Metadata = {
  title: 'Cases de Sucesso | Semper Vincit - Portfólio de TI no Amazonas',
  description: 'Conheça nossos principais projetos de CFTV, Redes e Conectividade no Polo Industrial de Manaus e em todo o Amazonas. Impacto real através da tecnologia.',
  keywords: ['cases de sucesso TI', 'portfólio Semper Vincit', 'projetos PIM Manaus', 'infraestrutura de rede Amazonas'],
  openGraph: {
    title: 'Nossos Projetos e Impacto | Semper Vincit',
    description: 'Soluções personalizadas para os desafios da infraestrutura na Região Norte.',
    images: ['/og-cases.jpg'],
  },
};

export default function Page() {
  return <CasesClient />;
}
