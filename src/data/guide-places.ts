import type { Locale } from '@/i18n/routing';

type Localized = Record<Locale, string>;
const text = (bg: string, en: string, zh: string): Localized => ({ bg, en, zh });

const fortressSource = 'https://muzei-provadia.com/istoricheski-obekti/istoricheski-obekt-krepost-ovech.html';
const fortressManagement = 'https://www.provadia.bg/vid2/3091.pdf';
const fortressLocation = text('Калето, 9200 Провадия, България', 'Kaleto Plateau, 9200 Provadia, Bulgaria', '保加利亚普罗瓦迪亚 9200，卡莱托高地');
const fortress = {
  location: fortressLocation,
  management: text(
    'Крепостта Овеч се стопанисва от Община Провадия. Историческият музей в града представя археологическите находки и историята на обекта.',
    'Provadia Municipality manages Ovech Fortress. The town’s Historical Museum interprets the site and displays archaeological finds.',
    '奥韦奇要塞由普罗瓦迪亚市政府管理。普罗瓦迪亚历史博物馆负责馆内相关考古文物的展示，并提供遗址历史资料。',
  ),
  managementUrl: fortressManagement,
  visit: text(
    'Порталът на Варна посочва сряда–неделя, 09:00–17:30, и вход 2,05 € за възрастни и 1,02 € за деца. Проверете за промени преди изкачване.',
    'Visit Varna lists Wednesday to Sunday, 09:00–17:30, with admission of €2.05 for adults and €1.02 for children. Check for changes before climbing.',
    '瓦尔纳官方旅游网站公布的开放时间为周三至周日 09:00–17:30，成人票 2.05 欧元，儿童票 1.02 欧元。登城前请核对变动及入口状态。',
  ),
  visitUrl: 'https://visit.varna.bg/en/krepost_ovech_provadiya.html',
};

const insideQueries: Record<string, string> = {
  'north-gate': 'Северна порта Крепост Овеч',
  'wooden-bridge': 'Дървен мост Крепост Овеч плато Табиите',
  tabiite: 'Плато Табиите',
  kaleto: 'Плато Калето Крепост Овеч',
  'cliff-defences': 'Скални отвеси Крепост Овеч Калето',
  'stone-stairs': 'Каменни стъпала източен вход Крепост Овеч',
  'eco-trail': 'Екопътека Овеч начало',
  'deep-well': 'Кладенец 79 метра Крепост Овеч',
  cisterns: 'Скални щерни Крепост Овеч',
  'metropolitan-church': 'Митрополитска църква Крепост Овеч',
  'medieval-churches': 'Средновековни църкви Крепост Овеч',
  'fortress-towers': 'Отбранителни кули Крепост Овеч',
  'knights-prison': 'Рицарски затвор Крепост Овеч',
  'friars-holes': 'Монашески дупки Крепост Овеч',
  'central-square': 'Средновековен площад Крепост Овеч',
  'fortress-names': 'Информационни табели вход Крепост Овеч',
  'late-antiquity': 'Късноантични останки Крепост Овеч',
  'savoy-campaign': 'Теснина Табиите северна порта Крепост Овеч',
  photography: 'Панорамна гледка Крепост Овеч Калето',
  'half-day': 'Северен подход Крепост Овеч Провадия',
};

const town = {
  query: 'Център Провадия, България',
  location: text('Център, 9200 Провадия, България', 'Town centre, 9200 Provadia, Bulgaria', '保加利亚普罗瓦迪亚 9200，镇中心'),
  management: text('Община Провадия отговаря за общинските обществени пространства в града. Музеят и крепостта имат отделни условия за посещение.', 'Provadia Municipality is responsible for municipal public spaces. The museum and fortress have their own visitor arrangements.', '镇内的市政公共空间由普罗瓦迪亚市政府负责，博物馆与要塞各有参观安排。'),
  managementUrl: 'https://www.provadia.bg/',
  visit: text('Планирайте музея отделно и проверете последния обратен курс.', 'Plan the museum separately and check your last return service.', '博物馆单独核对开放时间，乘公共交通时确认末班返程。'),
  visitUrl: 'https://tourism.government.bg/en/tourist-destinations/2804/5506',
};
const museum = {
  query: 'Исторически музей Провадия, Опълченска 3',
  location: text('ул. „Опълченска“ 3, 9200 Провадия', '3 Opalchenska Street, 9200 Provadia', '普罗瓦迪亚 9200，奥帕尔琴斯卡街 3 号'),
  management: text('Историческият музей в Провадия стопанисва музейната експозиция и представя находките от Овеч и Равна.', 'The Historical Museum in Provadia runs the exhibition and interprets finds from Ovech and Ravna.', '馆内展览由普罗瓦迪亚历史博物馆运营，展出奥韦奇与拉夫纳的考古材料。'),
  managementUrl: 'https://muzei-provadia.com/',
  visit: text('Проверете сезонното работно време и цените при музея.', 'Check seasonal opening hours and admission directly with the museum.', '开放时间和门票以博物馆当季公布为准。'),
  visitUrl: 'https://www.bta.bg/bg/museums/varna/1128744-istoricheski-muzey-provadiya',
};
const external: Record<string, typeof town> = {
  'provadia-centre': town,
  'one-day': { ...town, query: 'Община Провадия център град Провадия България' },
  'provadia-museum': museum,
  ivaylo: { ...museum, query: 'Исторически музей Провадия средновековна експозиция Опълченска 3' },
  'second-bulgarian-empire': {
    ...museum, query: 'Експозиция Средновековие Проват Овеч Исторически музей Провадия',
    visitUrl: 'https://muzei-provadia.com/ekspozicii/ekspoziciya-srednovekovie.html',
  },
  'varnencik-campaign': {
    query: 'Парк музей Владислав Варненчик, Януш Хуняди 55, Варна',
    location: text('бул. „Януш Хуняди“ 55, 9027 Варна', '55 Yanush Hunyadi Boulevard, 9027 Varna', '瓦尔纳 9027，亚努什·匈雅提大道 55 号'),
    management: text('Парк-музеят „Владислав Варненчик“ организира посещенията във Варна. Крепостта Овеч е под управлението на Община Провадия.', 'The Vladislav Varnenchik Park Museum handles visits in Varna. Ovech Fortress itself is managed by Provadia Municipality.', '瓦尔纳的到访安排由瓦迪斯瓦夫纪念博物馆公园负责，奥韦奇要塞则由普罗瓦迪亚市政府管理。'),
    managementUrl: 'https://varnenchikmuseum.com/en/',
    visit: text('Проверете работното време и билета за избраната експозиция на сайта на музея.', 'Check the museum’s hours and admission for the exhibition you plan to visit.', '出发前按计划参观的展区核对博物馆开放时间和票价。'),
    visitUrl: 'https://varnenchikmuseum.com/en/visit/',
  },
  solnitsata: {
    query: 'Провадия-Солницата археологически обект, път 904',
    location: text('път 904, 9200 Провадия', 'Road 904, 9200 Provadia', '普罗瓦迪亚 9200，904 号公路'),
    management: text('Проучванията се водят от екип на Националния археологически институт с музей при БАН с участието на Историческия музей в Провадия.', 'The National Archaeological Institute with Museum at the Bulgarian Academy of Sciences leads the research with the Historical Museum in Provadia.', '发掘研究由保加利亚科学院国家考古研究所暨博物馆团队牵头，普罗瓦迪亚历史博物馆参与。'),
    managementUrl: 'https://www.provadia-solnitsata.com/en/team',
    visit: text('Проектът посочва посещения от вторник до събота, без прием при дъжд или сняг. Обадете се предварително за беседа и условия за вход.', 'The project lists visits Tuesday through Saturday, with closures in rain or snow. Call ahead to confirm a tour and admission arrangements.', '项目公布的参观日为周二至周六，雨雪天气暂停开放。请提前电话确认场次和入场安排。'),
    visitUrl: 'https://www.provadia-solnitsata.com/en/visit',
  },
  'ravna-monastery': {
    query: 'Равненски манастир, жп спирка Равна, Провадия',
    location: text('при жп спирка Равна, община Провадия', 'Near Ravna railway halt, Provadia municipality', '普罗瓦迪亚市辖区，拉夫纳铁路停靠点附近'),
    management: text('Историческият музей в Провадия представя обекта и съхранява находки от него. За достъп до терена и отговорната институция се обърнете към музея.', 'Provadia’s Historical Museum interprets the remains and holds material from the site. Ask the museum about on-site access and the responsible authority.', '普罗瓦迪亚历史博物馆提供遗址资料并保存出土文物。地面遗址的现行管护与进场安排请向馆方核实。'),
    managementUrl: 'https://muzei-provadia.com/istoricheski-obekti/istoricheski-obekt-ravnenski-manastir.html',
    visit: text('Уточнете достъпа до останките с музея. Справката за музейната експозиция е отделна.', 'Confirm access to the remains with the museum. Opening hours for the indoor exhibition are separate.', '先向博物馆核对遗址是否开放，室内展陈另有开放安排。'),
    visitUrl: 'https://muzei-provadia.com/istoricheski-obekti/istoricheski-obekt-ravnenski-manastir.html',
  },
  'devnya-mosaics': {
    query: 'Музей на мозайките, Река Девня, България',
    location: text('кв. Река Девня, бул. „Съединение“, Девня', 'Saedinenie Boulevard, Reka Devnya, Devnya', '代夫尼亚雷卡区，联合大道一带'),
    management: text('Община Девня публикува информацията за посещение на Музея на мозайките. Музеят съхранява и показва настилки от античния Марцианопол.', 'Devnya Municipality publishes visitor information for the Museum of Mosaics, which conserves and displays floors from ancient Marcianopolis.', '代夫尼亚市政府发布马赛克博物馆的参观信息。博物馆保存并展示古代马尔西亚诺波利斯的地面镶嵌作品。'),
    managementUrl: 'https://old.devnya.bg/en-US/SiteSections/mosaic-museum',
    visit: text('Проверете работното време, билета и условията за снимане при музея.', 'Confirm opening hours, admission and photography rules with the museum.', '请向馆方核对开放时间、门票和摄影规定。'),
    visitUrl: 'https://old.devnya.bg/en-US/SiteSections/mosaic-museum',
  },
  'varna-by-train': {
    query: 'Varna railway station, Petko Slaveykov Square 1, Varna',
    location: text('пл. „Петко Славейков“ 1, 9000 Варна', '1 Petko Slaveykov Square, 9000 Varna', '瓦尔纳 9000，佩特科·斯拉韦伊科夫广场 1 号'),
    management: text('Разписанията и билетите за железопътния маршрут се проверяват при БДЖ. Крепостта се стопанисва от Община Провадия.', 'BDZ provides railway timetables and fares. Provadia Municipality manages the fortress at the destination.', '铁路时刻与票价由保加利亚国铁发布，目的地奥韦奇要塞由普罗瓦迪亚市政府管理。'),
    managementUrl: 'https://www.bdz.bg/en',
    visit: text('Проверете разписание и цена за датата на пътуване, включително курса за връщане.', 'Check services and fares for your travel date, including the return leg.', '按实际日期查去返程班次和票价。'),
    visitUrl: 'https://www.bdz.bg/en',
  },
  'varna-by-bus': {
    query: 'Central bus station Varna, Vladislav Varnenchik 158B',
    location: text('бул. „Владислав Варненчик“ 158Б, 9000 Варна', '158B Vladislav Varnenchik Boulevard, 9000 Varna', '瓦尔纳 9000，瓦迪斯瓦夫·瓦尔嫩奇克大道 158B 号'),
    management: text('Автогара Варна предоставя информация за автогарата. Конкретните курсове се обслужват от автобусните превозвачи.', 'Varna Bus Station provides terminal information. Individual bus services are run by their respective carriers.', '瓦尔纳汽车站发布站内信息，具体班车由各自运营商负责。'),
    managementUrl: 'https://autogaravn.com/en/contact',
    visit: text('Потвърдете превозвач, час и цена. Работното време на гишетата е отделно от това на автогарата.', 'Confirm carrier, departure time and fare. Ticket-office hours differ from terminal hours.', '确认运营商、发车时间与票价，售票窗口与车站本身的开放时间有别。'),
    visitUrl: 'https://autogaravn.com/en/contact',
  },
};

export function guidePlace(slug: string, locale: Locale) {
  const outside = external[slug];
  const place = outside ?? fortress;
  const query = outside?.query ?? `${insideQueries[slug]}, 9200 Провадия, България`;
  return {
    map: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`,
    location: place.location[locale],
    management: place.management[locale],
    managementUrl: place.managementUrl,
    visit: place.visit[locale],
    visitUrl: place.visitUrl,
    heritageSource: outside ? undefined : fortressSource,
    sitePlan: !outside,
  };
}
