import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "static.abbeglasses.com"
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.abbeglasses.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      }
    ]
  }
};

export default nextConfig;
