import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: process.env.BASE_PATH,
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:8080", // for reverse proxy
      ],
    },
  },
};

export default nextConfig;
