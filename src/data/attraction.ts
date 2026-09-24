// Canonical, language-neutral facts for Fortress „Ovech“ (Крепост „Овеч“).
// Edit attraction facts here only; visible UI and JSON-LD both read from this source.

export const ATTRACTION = {
  name: 'Fortress „Ovech“',
  url: 'https://ovechfortress.com',
  mapsUrl: 'https://maps.app.goo.gl/6i3FwKB2LmU58Bxw8',
  telephone: '+35951842033',
  city: 'Provadia',
  province: 'Varna Province',
  postalCode: '9200',
  country: 'BG',
  plusCode: '5CGX+54R',
  address: '5CGX+54R, 9200 Provadia, Bulgaria',
  geo: {
    latitude: 43.1772,
    longitude: 27.4485,
  },
  rating: 4.6,
  reviewCount: 5310,
  isAccessibleForFree: true,
  // Alternate display names per locale (used for schema.org alternateName).
  alternateName: {
    bg: 'Крепост „Овеч“',
    en: 'Fortress Ovech',
    zh: '奥韦奇要塞',
  },
  // Short localized blurb used in the JSON-LD description.
  description: {
    bg: 'Средновековна крепост „Овеч“ в Провадия, България — историческа забележителност с древни стени, панорамни гледки и свободен достъп целогодишно.',
    en: 'Medieval Fortress „Ovech“ in Provadia, Bulgaria — a historical landmark with ancient walls, panoramic views, and free year-round access.',
    zh: '位于保加利亚普罗瓦迪亚的中世纪奥韦奇要塞，是拥有古城墙与全景视野的历史地标，全年免费开放。',
  },
} as const;

export type Locale = 'bg' | 'en' | 'zh';
