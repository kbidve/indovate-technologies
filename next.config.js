/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/ai-project-advisor",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "jumpshare.com",
      },

      {
        protocol: "https",
        hostname: "fonts.gstatic.com",
      },
    ],
  },
};

module.exports = nextConfig;
