import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://ovechfortress.com/sitemap.xml',
    host: 'https://ovechfortress.com',
  };
}
