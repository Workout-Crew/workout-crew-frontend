/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uoscs-capstone-images.s3.us-west-2.amazonaws.com',
      },
    ],
  },
  webpack: config => {
    config.module.rules.push({ test: /\.svg$/, use: ['@svgr/webpack'] })
    return config
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://uoscs-capstone.click/api/:path*',
      },
    ]
  },
}

export default nextConfig
