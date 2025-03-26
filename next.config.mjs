/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['storage.googleapis.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/msgsndr/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://zenwareai.com https://www.zenwareai.com http://localhost:* https://localhost:*"
          },
          {
            key: 'X-Frame-Options',
            value: 'ALLOW-FROM https://zenwareai.com'
          }
        ],
      },
    ];
  },
};

export default nextConfig;