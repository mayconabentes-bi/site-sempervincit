import type { Metadata } from 'next';
import './globals.css';
import ClientProviders from '@/providers/ClientProviders';

export const metadata: Metadata = {
  title: 'Integradora de Soluções de Alta Performance em TI | Manaus - AM',
  description: 'A Semper Vincit é líder em TI e Infraestrutura para o Polo Industrial de Manaus (PIM).',
  metadataBase: new URL('https://sempervincit.com.br'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}

