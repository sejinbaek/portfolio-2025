import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true, // 필요없는 코드나 주석 제거
};

export default nextConfig;
