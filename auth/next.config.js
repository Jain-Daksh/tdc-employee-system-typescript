/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.SECRET_KEY
  }
}

module.exports = nextConfig
