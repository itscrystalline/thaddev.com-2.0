/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'www.vectorlogo.zone',
      "upload.vectorlogo.zone",
      "i.redd.it",
      "avatars.githubusercontent.com",
      "cdn.worldvectorlogo.com",
      "hrcdn.net",
      "leetcode.com",
      "github.githubassets.com"
    ]
  }
}

module.exports = nextConfig
