/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            'www.vectorlogo.zone',
            "upload.vectorlogo.zone",
            "cdn.discordapp.com",
            "avatars.githubusercontent.com",
            "cdn.worldvectorlogo.com",
            "hrcdn.net",
            "leetcode.com",
            "github.githubassets.com",
            "cloud.thaddev.com"
        ]
    }
}

module.exports = nextConfig
