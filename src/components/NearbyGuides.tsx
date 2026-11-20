import { useTranslations } from 'next-intl';
import { Link, type Locale } from '@/i18n/routing';
import { guidesFor } from '@/data/guides';

export default function NearbyGuides({ locale, limit }: { locale: Locale; limit?: number }) {
  const t = useTranslations('explore');
  const guides = guidesFor(locale);
  const featured = ['north-gate', 'wooden-bridge', 'provadia-museum', 'solnitsata', 'devnya-mosaics', 'one-day'];
  const cards = limit === undefined
    ? guides
    : featured.slice(0, limit).flatMap((slug) => guides.filter((guide) => guide.slug === slug));
  return (
    <section id="explore" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-3">{t('title')}</h2>
        <p className="mb-6" style={{ color: 'var(--text-muted)' }}>{t('description')}</p>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ slug, title, context }) => (
            <li key={slug}>
              <Link href={{ pathname: '/explore/[slug]', params: { slug } }}
                className="block rounded-lg border p-4 font-medium hover:underline"
                style={{ background: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
                <span className="block">{title}</span>
                {limit !== undefined && <span className="block mt-1 text-sm font-normal" style={{ color: 'var(--text-muted)' }}>{context}</span>}
              </Link>
            </li>
          ))}
        </ul>
        {limit !== undefined && (
          <Link href="/explore" className="inline-block mt-6 font-medium underline" style={{ color: 'var(--accent)' }}>
            {t('all')}
          </Link>
        )}
      </div>
    </section>
  );
}
