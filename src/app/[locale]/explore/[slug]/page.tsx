import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { guideSlugs, guidesFor } from '@/data/guides';
import { guidePlanning, guideTagline } from '@/data/guide-planning';
import { ATTRACTION } from '@/data/attraction';
import { guideDetails } from '@/data/guide-details';
import { guidePlace } from '@/data/guide-places';
import { guidePhotos } from '@/data/guide-photos';
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
  const details = guideDetails(slug, locale);
  const place = guidePlace(slug, locale);
  const photos = guidePhotos(slug, locale);
  const [lead, ...additionalPhotos] = photos;
  const plan = guidePlanning(slug, locale);
  const related = plan.related.map((key) => findGuide(locale, key));
  const formatLocale = { bg: 'bg-BG', en: 'en-US', zh: 'zh-CN' }[locale];
  const format = new Intl.NumberFormat(formatLocale);
  const rating = plan.fortressRating ? t('fortressRating', {
    score: format.format(ATTRACTION.rating),
    count: format.format(ATTRACTION.reviewCount),
  }) : undefined;
  const rows = [
    [t('name'), guide.title],
    [t('type'), plan.kind],
    [t('location'), place.location],
    [t('hours'), plan.hours],
    [t('admission'), plan.price],
    [t('rating'), rating ?? t('ratingUnavailable')],
  ];
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
        <article className="space-y-8">
          <header className="rounded-xl border overflow-hidden" style={{ background: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
            {lead && <GuidePhoto photo={lead} resizedLabel={t('photoResized')} />}
            <div className="p-6 sm:p-10">
              <h1 className="font-display text-3xl sm:text-5xl font-semibold mb-5">{guide.title}</h1>
              <p className="text-lg leading-relaxed mb-4">{guideTagline(slug, locale)}</p>
              <ul className="flex flex-wrap gap-x-4 gap-y-1 mb-4 text-sm">
                {rating && <li>{rating}</li>}
                <li>{plan.hours}</li>
              </ul>
              <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>{place.location}</p>
              <a href={place.map} target="_blank" rel="noopener noreferrer" className="font-medium underline" style={{ color: 'var(--accent)' }}>
                {t('map')}
              </a>
            </div>
          </header>

          <GuideSection title={t('intro')}>{guide.context}</GuideSection>
          <GuideSection title={t('tip')}>{guide.tip}</GuideSection>
          <GuideSection title={t('highlights')}>{details.observation}</GuideSection>

          <section className="rounded-xl border p-6 sm:p-8" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
            <h2 className="font-display text-2xl font-semibold mb-3">{t('management')}</h2>
            <p className="leading-relaxed mb-3">{place.management}</p>
            <a href={place.managementUrl} className="underline text-sm" style={{ color: 'var(--accent)' }}>{t('source')}</a>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">{t('basics')}</h2>
            <table className="w-full text-left text-sm">
              <tbody>
                {rows.map(([label, value]) => (
                  <tr key={label} className="border-b" style={{ borderColor: 'var(--border-color)' }}>
                    <th scope="row" className="w-1/3 py-3 pr-3 align-top font-semibold">{label}</th>
                    <td className="py-3 leading-relaxed">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <div className="grid gap-8 sm:grid-cols-2">
            <GuideSection title={t('hours')}>
              {place.visit}{' '}
              <a href={place.visitUrl} className="underline" style={{ color: 'var(--accent)' }}>{t('visitSource')}</a>
            </GuideSection>
            <GuideSection title={t('admission')}>{plan.price}</GuideSection>
          </div>

          <GuideSection title={t('transport')}>{plan.transport}</GuideSection>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">{t('discover')}</h2>
            <h3 className="font-semibold mb-2">{t('furtherReading')}</h3>
            <ul className="grid gap-4 sm:grid-cols-2">
              {related.map((stop) => (
                <li key={stop.slug} className="rounded-lg border p-4" style={{ borderColor: 'var(--border-color)' }}>
                  <Link className="underline font-medium" href={{ pathname: '/explore/[slug]', params: { slug: stop.slug } }}>{stop.title}</Link>
                  <p className="mt-1 leading-relaxed">{stop.context}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">{t('route')}</h2>
            <ol className="list-decimal pl-5 space-y-3 leading-relaxed">
              <li>{plan.transport}</li>
              <li>{details.route}</li>
              <li>{t('continueTo')}{' '}
                <Link className="underline" href={{ pathname: '/explore/[slug]', params: { slug: related[1].slug } }}>
                  {related[1].title}
                </Link>
              </li>
            </ol>
          </section>

          <GuideSection title={t('notice')}>{plan.notice}</GuideSection>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">{t('photography')}</h2>
            <p className="leading-relaxed">{details.photography}</p>
            {additionalPhotos.length > 0 && (
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {additionalPhotos.map((photo) => <GuidePhoto key={photo.src} photo={photo} resizedLabel={t('photoResized')} lazy />)}
              </div>
            )}
          </section>

          <section className="rounded-xl border p-6 sm:p-8" style={{ background: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
            <h2 className="font-display text-2xl font-semibold mb-3">{t('faq')}</h2>
            <h3 className="font-semibold mb-2">{details.question}</h3>
            <p className="leading-relaxed">{details.answer}</p>
          </section>

          <GuideSection title={t('stay')}>{plan.stay}</GuideSection>

          <GuideSection title={t('reviews')}>
            {rating ?? t('ratingUnavailable')}{' '}
            <a href={rating ? ATTRACTION.mapsUrl : place.map} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--accent)' }}>
              {rating ? t('fortressReviews') : t('map')}
            </a>
          </GuideSection>

          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">{t('location')}</h2>
            <p className="mb-2">{place.location}</p>
            {place.sitePlan && <p className="mb-3 text-sm" style={{ color: 'var(--text-muted)' }}>{t('sitePlan')}</p>}
            <div className="flex flex-wrap gap-4" style={{ color: 'var(--accent)' }}>
              <a href={place.map} target="_blank" rel="noopener noreferrer" className="underline">{t('map')}</a>
              {[...new Set([guide.source, place.heritageSource].filter((url): url is string => Boolean(url)))].map((url, index) => (
                <a key={url} href={url} className="underline">{t('source')} {index + 1}</a>
              ))}
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

function GuideSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold mb-3">{title}</h2>
      <p className="leading-relaxed">{children}</p>
    </section>
  );
}

function GuidePhoto({ photo, resizedLabel, lazy = false }: {
  photo: ReturnType<typeof guidePhotos>[number];
  resizedLabel: string;
  lazy?: boolean;
}) {
  return (
    <figure className="overflow-hidden rounded-lg">
      <img src={photo.src} alt={photo.caption} loading={lazy ? 'lazy' : 'eager'}
        className={lazy ? 'w-full aspect-[4/3] object-contain bg-black/5' : 'w-full max-h-[28rem] object-contain bg-black/5'} />
      <figcaption className="px-3 py-2 text-sm" style={{ color: 'var(--text-muted)' }}>
        {photo.caption}
        {photo.credit && (
          <>
            {' · '}<a href={photo.credit.source} className="underline">{photo.credit.name}</a>
            {' · '}<a href={photo.credit.license} className="underline">CC BY-SA</a>
            {' · '}{resizedLabel}
          </>
        )}
      </figcaption>
    </figure>
  );
}
