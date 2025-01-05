import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false,
      },
    ];
  },
  images: {
    domains: ['via.placeholder.com'],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;