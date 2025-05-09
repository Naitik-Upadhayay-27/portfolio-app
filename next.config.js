/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['vercel.app'], // Add your Vercel domain here if needed
    unoptimized: true, // This can help with image loading issues on Vercel
  },
  webpack: (config) => {
    // Add a rule to handle shader files
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader'],
    });

    // Add a fallback for node modules that use the 'fs' module
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };

    return config;
  },
  // Ensure assets are properly loaded from the correct base path
  assetPrefix: process.env.NODE_ENV === 'production' ? '.' : '',
};

module.exports = nextConfig;
