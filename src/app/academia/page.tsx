import type { Metadata } from 'next';
import AcademiaClient from '@/components/pages/AcademiaClient';

export const metadata: Metadata = {
  title: 'Academia Semper Vincit | Centro de Formação Técnica em Manaus',
  description: 'Capacitação profissional em Segurança Eletrônica, Cabeamento Estruturado e Redes. Formando especialistas para o Polo Industrial de Manaus.',
  keywords: ['curso CFTV Manaus', 'treinamento redes Amazonas', 'academia técnica TI', 'formação profissional PIM'],
  openGraph: {
    title: 'Academia Semper Vincit | Educação e Tecnologia',
    description: 'Transformando profissionais através do conhecimento técnico de excelência.',
    images: ['/og-academia.jpg'],
  },
};

export default function Page() {
  return <AcademiaClient />;
}
