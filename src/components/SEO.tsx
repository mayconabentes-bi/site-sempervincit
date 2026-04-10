import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  schema?: string;
}

export const SEO = ({
  title = "Integradora de Soluções de Alta Performance em TI | Manaus - AM | Semper Vincit",
  description = "Integradora líder em TI e Infraestrutura no Polo Industrial de Manaus e Região Norte. +17 anos de experiência em CFTV, Cabeamento Estruturado, Internet Dedicada, Redes ópticas e Carregadores Elétricos.",
  keywords = "integradora de TI Manaus, consultoria de infraestrutura Amazonas, TI Polo Industrial de Manaus, CFTV Manaus, cabeamento estruturado PIM, internet dedicada",
  canonicalUrl = "https://www.sempervincit.com.br",
  ogType = "website",
  ogImage = "https://www.sempervincit.com.br/logo.png",
  schema,
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      <link rel="canonical" href={canonicalUrl} />
      
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@SemperVincitTI" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schema && (
        <script type="application/ld+json">
          {schema}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
