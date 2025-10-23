import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    qualities: [60, 75, 85, 90],
  },
};

export default nextConfig;
