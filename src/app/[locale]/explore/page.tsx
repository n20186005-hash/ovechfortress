import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import NearbyGuides from '@/components/NearbyGuides';
import Footer from '@/components/Footer';
import LanguageToggle from '@/components/LanguageToggle';
import { Link, type Locale } from '@/i18n/routing';
import { guideMetadata } from './metadata';

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'explore' });
  return guideMetadata(locale, '/explore', t('title'), t('description'));
}

export default async function Explore({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('explore');
  return (
    <>
      <main>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="underline">{t('home')}</Link>
          <LanguageToggle />
        </div>
        <h1 className="sr-only">{t('title')}</h1>
        <NearbyGuides locale={locale} />
      </main>
      <Footer />
    </>
  );
}
