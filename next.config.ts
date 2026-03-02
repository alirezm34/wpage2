import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 900, 1120, 1920],
    imageSizes: [80, 120, 200, 400, 800],
  },
};

export default nextConfig;
