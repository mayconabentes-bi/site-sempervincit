import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem', background: 'hsl(0 0% 100%)' }}>
      <h1 style={{ fontSize: '8rem', fontWeight: 'bold', color: 'hsl(222 82% 32% / 0.2)', lineHeight: 1 }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '1rem', marginBottom: '0.5rem' }}>Página não encontrada</h2>
      <p style={{ color: 'hsl(215 16% 47%)', marginBottom: '2rem', maxWidth: '28rem' }}>
        A página que você está procurando não existe ou foi removida.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.625rem 1.5rem',
          background: 'hsl(222 82% 32%)',
          color: 'white',
          borderRadius: '0.5rem',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '0.875rem',
        }}
      >
        ← Voltar para a Home
      </Link>
    </div>
  );
}
