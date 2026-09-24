import { ATTRACTION, type Locale } from '@/data/attraction';

// Server component: emits schema.org TouristAttraction + FAQPage JSON-LD.
// Reads localized FAQ items from the message catalogs so the structured
// data stays in sync with the visible FAQ section.
export default async function JsonLd({ locale }: { locale: Locale }) {
  const messages = (await import(`@/messages/${locale}.json`)).default as any;
  const { url } = ATTRACTION;
  const selfUrl = `${url}/${locale}`;

  const faq = (messages.faq?.items ?? []).map((it: { question: string; answer: string }) => ({
    '@type': 'Question',
    name: it.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: it.answer,
    },
  }));

  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['TouristAttraction', 'HistoricalLandmark', 'LandmarksOrHistoricalBuildings'],
        '@id': `${url}/#attraction`,
        name: ATTRACTION.name,
        alternateName: Object.values(ATTRACTION.alternateName),
        description: ATTRACTION.description[locale],
        url: selfUrl,
        image: `${url}/gallery/fortress-ovech%20(1).jpg`,
        telephone: ATTRACTION.telephone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: ATTRACTION.plusCode,
          addressLocality: ATTRACTION.city,
          addressRegion: ATTRACTION.province,
          postalCode: ATTRACTION.postalCode,
          addressCountry: ATTRACTION.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: ATTRACTION.geo.latitude,
          longitude: ATTRACTION.geo.longitude,
        },
        isAccessibleForFree: ATTRACTION.isAccessibleForFree,
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: '00:00',
            closes: '23:59',
          },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: ATTRACTION.rating,
          reviewCount: ATTRACTION.reviewCount,
          bestRating: 5,
        },
        sameAs: [ATTRACTION.mapsUrl, url],
      },
      {
        '@type': 'FAQPage',
        '@id': `${selfUrl}#faq`,
        mainEntity: faq,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
