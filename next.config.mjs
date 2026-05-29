/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'realestate-analytics.ai' }],
        destination: 'https://www.realestate-analytics.ai/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
