import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig = {
  outputFileTracingRoot: process.cwd(),
  images: {
    remotePatterns: [
      { protocol: 'https' as const, hostname: 'images.unsplash.com' },
      { protocol: 'https' as const, hostname: 'maps.google.com' },
      { protocol: 'https' as const, hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https' as const, hostname: '*.google.com' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://ovechfortress.com/:path*',
        has: [{ type: 'host', value: 'www.ovechfortress.com' }],
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
