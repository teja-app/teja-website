const withMDX = require('@next/mdx')()
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'f000.backblazeb2.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.leonardo.ai',
      },
    ],
  },
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ["@svgr/webpack"]
        });
    
        return config;
      },
}

module.exports = withMDX(nextConfig)