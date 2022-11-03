/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      'dennisivy-personal.s3.amazonaws.com'      
    ],
  },
}

module.exports = nextConfig
