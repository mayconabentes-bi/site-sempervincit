import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Allow importing images from src/assets
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
      },
    ],
  },
  // Required to silence the turbopack/webpack conflict warning in Next.js 16
  turbopack: {},
  // Disable strict mode
  reactStrictMode: false,
};

export default nextConfig;
