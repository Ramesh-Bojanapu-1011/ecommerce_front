import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

export default nextConfig;
