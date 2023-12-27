/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    USERNAME: process.env.USERNAME,
    PASSWORD: process.env.PASSWORD,
  },
  publicRuntimeConfig: {
    PUBLIC_SECRET: process.env.PUBLIC_SECRET,
  }
}

module.exports = nextConfig
