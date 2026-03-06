import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/news/slay-the-spire-2-early-access-launch-guide',
        destination: '/news/slay-the-spire-2-launch-time-us-china',
        permanent: true,
      },
    ];
  },

  // Image optimization for external images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.manuscdn.com',
      },
      {
        protocol: 'https',
        hostname: 'shared.akamai.steamstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'www.megacrit.com',
      },
    ],
  },
  
  // Enable compression
  compress: true,
  
  // No trailing slash for cleaner URLs
  trailingSlash: false,
  
  // Enable React strict mode for better development
  reactStrictMode: true,
};

export default nextConfig;
