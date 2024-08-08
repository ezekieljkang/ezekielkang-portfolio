/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  reactStrictMode: true,
  images: {
    domains: ['assets.aceternity.com', 'images.unsplash.com', "api.microlink.io"],
  },
  experimental: {
    middleware: true,
  },
};

export default nextConfig;
