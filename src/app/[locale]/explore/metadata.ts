import type { Metadata } from 'next';
import { routing, type Locale } from '@/i18n/routing';
import { ATTRACTION } from '@/data/attraction';

export function guideMetadata(locale: Locale, path: string, title: string, description: string): Metadata {
  const url = (language: string) => `${ATTRACTION.url}/${language}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url(locale),
      languages: {
        ...Object.fromEntries(routing.locales.map((language) => [language, url(language)])),
        'x-default': url(routing.defaultLocale),
      },
    },
    openGraph: {
      title,
      description,
      url: url(locale),
      siteName: ATTRACTION.alternateName[locale],
      type: 'article',
      locale: { bg: 'bg_BG', en: 'en_US', zh: 'zh_CN' }[locale],
    },
  };
}
