import type { NextConfig } from "next";

const cspHeader = `
    default-src 'self' https://*.amazon.com  ${process.env.NEXT_PUBLIC_API_URL} https://vercel.com;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.amazon.com https://vercel.com https://*.vercel.com;
    style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com;
    img-src 'self' data:  https://*.amazon.com https://vercel.com https://*.vercel.com;
    font-src 'self' https://*.amazon.com https://vercel.com https://*.vercel.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self' https://*.amazon.com https://vercel.com https://*.vercel.com ${process.env.NEXT_PUBLIC_API_URL};
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
