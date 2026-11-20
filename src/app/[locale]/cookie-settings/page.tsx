import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import CookieSettingsClient from './CookieSettingsClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://ovechfortress.com';
  const zhUrl = `${baseUrl}/zh/cookie-settings`;
  const enUrl = `${baseUrl}/en/cookie-settings`;
  const bgUrl = `${baseUrl}/bg/cookie-settings`;
  const selfUrl = `${baseUrl}/${locale}/cookie-settings`;

  if (!['bg', 'en', 'zh'].includes(locale)) return {};
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const title = `${messages.cookieSettings.title} · ${messages.header.siteName}`;
  const description = messages.cookieSettings.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: messages.header.siteName,
      locale: locale === 'zh' ? 'zh_CN' : locale === 'bg' ? 'bg_BG' : 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: selfUrl,
      languages: {
        'zh': zhUrl,
        'en': enUrl,
        'bg': bgUrl,
        'x-default': bgUrl,
      },
    },
  };
}

export default async function CookiePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CookieSettingsClient />;
}
