/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  trailingSlash: true,
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // Handle video files
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mov)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]',
      },
    });
    
    return config;
  },
}

module.exports = nextConfig 