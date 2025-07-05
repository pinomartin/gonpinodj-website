/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
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