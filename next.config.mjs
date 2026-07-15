/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/portfolio',
        destination: '/',
      },

      {
        source: '/portfolio/:slug',
        destination: '/',
      }
    ];
  }
};

export default nextConfig;
