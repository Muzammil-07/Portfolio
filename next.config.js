/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.NEXT_APP_PUBLIC_ID,
  }

}

module.exports = nextConfig
