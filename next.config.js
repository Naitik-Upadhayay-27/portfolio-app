/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['vercel.app'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    dangerouslyAllowSVG: true,
    path: '',
  },
  // Ensure static assets are properly handled
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
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
  // Remove the assetPrefix as it can cause issues with Vercel deployments
  // assetPrefix: process.env.NODE_ENV === 'production' ? '.' : '',
  
  // Add output configuration for static exports
  output: 'standalone',
};

module.exports = nextConfig;
