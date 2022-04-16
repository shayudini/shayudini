/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['source.unsplash.com', 'res.cloudinary.com', 'docs.google.com'],
  },
};

module.exports = nextConfig;
