import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { guideSlugs, guidesFor } from '@/data/guides';
import { ATTRACTION } from '@/data/attraction';
import { Link, routing, type Locale } from '@/i18n/routing';
import Footer from '@/components/Footer';
import LanguageToggle from '@/components/LanguageToggle';
import { guideMetadata } from '../metadata';

type Props = { params: Promise<{ locale: Locale; slug: string }> };

export function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }));
}

function findGuide(locale: Locale, slug: string) {
  if (!routing.locales.includes(locale)) notFound();
  const guide = guidesFor(locale).find((item) => item.slug === slug);
  if (!guide) notFound();
  return guide;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = findGuide(locale, slug);
  return guideMetadata(locale, `/explore/${slug}`, guide.title, guide.context);
}

export default async function GuidePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const guide = findGuide(locale, slug);
  const t = await getTranslations('explore');
  return (
    <>
      <main className="max-w-4xl mx-auto px-4 pt-6 pb-16">
        <nav className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4">
            <Link href="/" className="underline">{t('home')}</Link>
            <Link href="/explore" className="underline">{t('all')}</Link>
          </div>
          <LanguageToggle />
        </nav>
        <article className="rounded-xl border p-6 sm:p-10" style={{ background: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
          <h1 className="font-display text-3xl sm:text-5xl font-semibold mb-5">{guide.title}</h1>
          <p className="text-lg leading-relaxed mb-8">{guide.context}</p>
          <h2 className="font-display text-2xl font-semibold mb-3">{t('tip')}</h2>
          <p className="leading-relaxed mb-8">{guide.tip}</p>
          <div className="flex flex-wrap gap-4" style={{ color: 'var(--accent)' }}>
            <a href={guide.map ?? ATTRACTION.mapsUrl} target="_blank" rel="noopener noreferrer" className="underline">
              {guide.map ? t('map') : t('fortressMap')}
            </a>
            <a href={guide.source} target="_blank" rel="noopener noreferrer" className="underline">{t('source')}</a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
