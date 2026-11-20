import type { Locale } from '@/i18n/routing';

type Labels = readonly [bg: string, en: string, zh: string];
type Photo = { src: string; labels: Labels; credit?: { name: string; source: string; license: string } };

function gallery(number: number, labels: Labels): Photo {
  return { src: `/gallery/fortress-ovech%20(${number}).jpg`, labels };
}

function commons(id: string, file: string, name: string, version: string, labels: Labels): Photo {
  return {
    src: `/guide-photos/${id}.jpg`, labels,
    credit: {
      name,
      source: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replaceAll(' ', '_'))}`,
      license: `https://creativecommons.org/licenses/by-sa/${version}/`,
    },
  };
}

const bridge = gallery(1, ['Мостът върху скалната теснина', 'The bridge on the narrow rock approach', '跨越狭窄岩脊的桥']);
const arch = gallery(10, ['Мостът, видян през каменната арка', 'Bridge seen through the stone arch', '从石拱门望向桥面']);
const gate = gallery(23, ['Портата и прилежащият зид', 'Gate and adjoining stonework', '城门与相接砌墙']);
const plateau = gallery(7, ['Общ изглед към останките върху Калето', 'Overview of the remains on Kaleto', '卡莱托高地上的要塞遗迹全景']);
const cliffs = gallery(22, ['Укрепленията над скалния отвес', 'Fortifications above the cliff face', '崖壁上方的要塞防御工事']);
const panoramic = gallery(2, ['Платото и долината край Провадия', 'Plateau and valley beside Provadia', '普罗瓦迪亚的高地与河谷']);
const wall = gallery(11, ['Каменни защитни зидове на Овеч', 'Stone defensive walls at Ovech', '奥韦奇要塞的石砌防御墙']);
const stairs = gallery(19, ['Каменни стъпала по скалния склон', 'Stone steps on the rock slope', '岩坡上的石阶']);
const well = gallery(13, ['Зидан воден отвор на платото', 'Masonry around a water feature on the plateau', '高地上有石砌围护的水井']);
const sign = gallery(14, ['Археологическа табела при останки на Овеч', 'Interpretive sign beside remains at Ovech', '奥韦奇遗迹旁的考古说明牌']);
const town = commons('provadia', 'Provadia 1.jpg', 'Izvora', '2.5', ['Изглед към Провадия', 'View of Provadia', '普罗瓦迪亚镇实景']);
const tabiite = commons('tabiite', 'Платото "Табиите" 001.jpg', 'AlexFilipov85', '4.0', ['Провадия, видяна от платото Табиите', 'Provadia viewed from Tabiite Plateau', '从塔比泰高地俯瞰普罗瓦迪亚']);
const salt = commons('solnitsata', 'Провадия - солницата.jpg', 'Pl71', '4.0', ['Археологическият комплекс Провадия–Солницата', 'Provadia–Solnitsata archaeological complex', '普罗瓦迪亚史前盐业遗址']);
const devnya = commons('devnya-medusa', 'Devnya-mosaics-museum-gorgon-medusa-1.jpg', 'Vassia Atanassova – Spiritia', '3.0', ['Мозайката с Медуза в Девня', 'Medusa mosaic in Devnya', '代夫尼亚马赛克博物馆的美杜莎镶嵌画']);
const varnaRail = commons('varna-station', 'Varna station.jpg', 'Nils Öberg', '3.0', ['Железопътна гара Варна', 'Varna railway station', '瓦尔纳火车站']);
const provadiaRail = commons('provadia-station', 'Railway station of Provadia, Bulgaria, October 1993.jpg', 'sludgegulper', '2.0', ['Гара Провадия през октомври 1993 г.', 'Provadia railway station in October 1993', '1993 年 10 月的普罗瓦迪亚火车站']);
const memorial = commons('varna-memorial', 'Varna 2025 IMG 121222650.jpg', 'Michał Derela', '4.0', ['Мавзолеят в парк-музея във Варна', 'Mausoleum at the Varna park museum', '瓦尔纳纪念博物馆公园的陵墓']);

const photos: Record<string, readonly Photo[]> = {
  'north-gate': [gate, arch],
  'wooden-bridge': [bridge, arch],
  tabiite: [tabiite, bridge],
  kaleto: [plateau, panoramic],
  'cliff-defences': [cliffs, wall],
  'stone-stairs': [stairs],
  'eco-trail': [cliffs, panoramic],
  'deep-well': [well],
  cisterns: [well, plateau],
  'metropolitan-church': [sign],
  'medieval-churches': [sign, plateau],
  'fortress-towers': [wall, gate],
  'knights-prison': [plateau],
  'friars-holes': [cliffs],
  'central-square': [plateau],
  'fortress-names': [gate, sign],
  'late-antiquity': [plateau, sign],
  'second-bulgarian-empire': [plateau, gate],
  ivaylo: [cliffs, panoramic],
  'savoy-campaign': [bridge, arch],
  'varnencik-campaign': [memorial, panoramic],
  'provadia-centre': [town, tabiite],
  'provadia-museum': [plateau],
  solnitsata: [salt],
  'ravna-monastery': [],
  'devnya-mosaics': [devnya],
  'varna-by-train': [varnaRail, provadiaRail],
  'varna-by-bus': [town],
  photography: [arch, bridge, panoramic],
  'half-day': [bridge, sign, well],
  'one-day': [town, plateau, salt],
};

export function guidePhotos(slug: string, locale: Locale) {
  const index = { bg: 0, en: 1, zh: 2 }[locale];
  return photos[slug].map(({ labels, ...photo }) => ({ ...photo, caption: labels[index] }));
}
