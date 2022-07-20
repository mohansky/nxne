module.exports = {
  reactStrictMode: true,
  images: {
      formats: ['image/avif', 'image/webp'],
    }
  }

  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  })
  module.exports = withBundleAnalyzer({})