import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blanchedalmond-lark-179970.hostingersite.com',
      },
    ],
  },
  generateBuildId: async () => {
    return Date.now().toString()
  },
};

export default nextConfig;