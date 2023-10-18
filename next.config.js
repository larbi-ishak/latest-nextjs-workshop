/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')()

const nextConfig = {
    images: {
    remotePatterns: [
      {
        hostname: 'storage.googleapis.com',
      },
    ],
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

}

module.exports = withMDX(nextConfig)