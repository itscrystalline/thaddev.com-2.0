/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.vectorlogo.zone', "upload.vectorlogo.zone", "i.redd.it", "avatars.githubusercontent.com", "brandeps.com"]
  }
}

module.exports = nextConfig
