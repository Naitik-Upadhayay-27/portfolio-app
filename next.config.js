/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
  },
  // Removed output: 'export' to support dynamic routes
};

module.exports = nextConfig;
