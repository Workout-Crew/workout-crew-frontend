/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
