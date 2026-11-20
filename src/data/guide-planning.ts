import type { Locale } from '@/i18n/routing';

type VenueCopy = readonly [kind: string, hours: string, price: string, transport: string, notice: string, stay: string];
type LocalizedVenue = Record<Locale, VenueCopy>;

const fortress: LocalizedVenue = {
  bg: ['Късноантична и средновековна крепост на открито', 'Сряда–неделя, 09:00–17:30', 'Възрастни 2,05 € · Деца 1,02 €', 'От Провадия следвайте означения пешеходен подход по стъпалата или екопътеката. Проверете кой вход е отворен.', 'Пътеките включват неравна скала и открити склонове. Следвайте оградите и предвидете време за слизане преди затваряне.', 'Нощувка в Провадия улеснява сутрешното изкачване. Варна е подходяща база, ако планирате и крайбрежието.'],
  en: ['Open-air late antique and medieval fortress', 'Wednesday–Sunday, 09:00–17:30', 'Adults €2.05 · Children €1.02', 'From Provadia, follow the signed stairway or eco-trail approach. Check which entrance is open before climbing.', 'Expect uneven rock and exposed slopes. Stay behind barriers and allow time to descend before closing.', 'Stay in Provadia for an early start on the plateau. Base yourself in Varna if the coast is also on your itinerary.'],
  zh: ['晚期古代及中世纪露天要塞遗址', '周三至周日 09:00–17:30', '成人 2.05 欧元 · 儿童 1.02 欧元', '从普罗瓦迪亚镇上按路标选择石阶或生态步道。登高前确认当天开放的入口。', '步道有不平岩面和开阔坡段。沿护栏内侧行走，并在关门前预留足够的下山时间。', '计划开门后登城，可住普罗瓦迪亚镇上；若还想游览黑海沿岸，可把瓦尔纳作为住宿基地。'],
};

const venues: Record<string, LocalizedVenue> = {
  museum: {
    bg: ['Градски исторически музей и археологическа експозиция', 'Сезонен режим, проверете при музея', 'Проверете цената и намаленията при музея', 'От центъра отидете пеша до ул. „Опълченска“ № 3. Изкачването до Овеч е отделен маршрут.', 'Проверете дали желаната зала е отворена и попитайте за снимане преди посещението.', 'Изберете центъра на Провадия, ако комбинирате музея с крепостта.'],
    en: ['Town history museum and archaeological exhibition', 'Seasonal hours, confirm with the museum', 'Check current prices and concessions with the museum', 'Walk from central Provadia to 3 Opalchenska Street. The climb to Ovech is a separate leg.', 'Check that the gallery you want is open and ask about photography before taking pictures.', 'Stay in central Provadia if you are combining the museum with the fortress.'],
    zh: ['地方历史博物馆与考古展陈', '按季节调整，请向馆方核对', '请向馆方核对票价及优惠', '从镇中心步行至奥帕尔琴斯卡街 3 号；博物馆至要塞的上坡路段另作安排。', '先核对想看的展厅是否开放，并向前台询问馆内摄影规则。', '打算同日参观历史博物馆和要塞，可住普罗瓦迪亚镇中心。'],
  },
  town: {
    bg: ['Градски център и отправна точка за маршрут', 'Според избраните обекти', 'Обектите имат отделни билети', 'От гарата или автобусната спирка продължете към центъра. Добавете отделен преход за крепостта или Солницата.', 'Оставете резерв между посещенията и не разчитайте на едно и също работно време за музея и крепостта.', 'Центърът на Провадия е практичен за музей, хранене и ранно тръгване.'],
    en: ['Town centre and itinerary starting point', 'Hours vary by stop', 'Attractions have separate admission', 'Continue to the centre from the railway station or bus stop. Plan a separate leg to the fortress or Solnitsata.', 'Allow time between stops. The museum and fortress keep separate schedules.', 'Central Provadia is convenient for the museum, meals and an early start.'],
    zh: ['城镇中心及行程起点', '各站开放时间不同', '各景点分别购票', '从火车站或巴士下车点先到镇中心，再分别安排登城或前往盐业遗址的路段。', '在不同站点之间留出交通缓冲，不要按同一时刻安排进馆和登城。', '普罗瓦迪亚镇中心方便安排博物馆、用餐和第二天早起出发。'],
  },
  solnitsata: {
    bg: ['Действащи праисторически разкопки и солодобивен комплекс', 'Вторник–събота; затворено при дъжд или сняг', 'Уточнете таксата и беседата с археологическия екип', 'Пътувайте отделно от крепостта по път 904 и потвърдете мястото за среща с водача.', 'Разкопките продължават. Влезте само по маршрута, посочен от екипа.', 'Провадия е удобна база, ако уговорената беседа е рано през деня.'],
    en: ['Active prehistoric excavation and salt-production complex', 'Tuesday–Saturday; closed in rain or snow', 'Confirm the fee and guided visit with the project team', 'Travel separately from the fortress via Road 904 and confirm the meeting point with your guide.', 'Excavation is ongoing. Use the visitor path assigned by the archaeological team.', 'Provadia is convenient if your confirmed tour starts early in the day.'],
    zh: ['仍在发掘的史前制盐与聚落遗址', '周二至周六；雨雪天气暂停参观', '票价及讲解安排请向考古团队确认', '从 904 号公路单独前往，与讲解员核对集合点。', '遗址仍在发掘，随队走考古项目指定的参观路线。', '若预约了早场讲解，住普罗瓦迪亚比从瓦尔纳当天赶来更方便。'],
  },
  ravna: {
    bg: ['Средновековен манастирски археологически обект', 'Достъпът до терена се уточнява с музея', 'Уточнете условията за терена отделно от билета за музея', 'Използвайте жп спирка Равна като географски ориентир. Преди пътуване попитайте музея за действащ подход и превоз.', 'Надписите в музейната експозиция и останките на терен се посещават по различен начин.', 'Планирайте база в Провадия за музейната експозиция и за уточняване на достъпа.'],
    en: ['Archaeological remains of a medieval monastery', 'Confirm field access with the museum', 'Check access arrangements separately from museum admission', 'Use Ravna railway halt as a geographic reference. Ask the museum for current approach and transport details before setting out.', 'The museum’s displayed inscriptions and the remains in the field have separate visitor arrangements.', 'Base yourself in Provadia for the exhibition and for checking access to the remains.'],
    zh: ['中世纪修道院考古遗址', '地面遗址能否进入请向博物馆核对', '遗址进场条件与馆内门票分别核对', '以拉夫纳铁路停靠点为地理参照，出发前向博物馆确认现行入口和交通。', '馆内铭文展陈与地面遗址是两个参观地点，分别安排时间。', '可住普罗瓦迪亚，先参观馆内展品，再向馆方核对现场路线。'],
  },
  devnya: {
    bg: ['Музей на римски подови мозайки', 'Проверете при музея преди тръгване', 'Проверете актуалната музейна тарифа', 'Пътувайте до квартал Река Девня. Следвайте музейните означения от бул. „Съединение“.', 'Проверете правилата за снимане и използвайте посетителските подходи край мозайките.', 'Варна е удобна за съчетаване на Девня с други музейни посещения.'],
    en: ['Museum of Roman floor mosaics', 'Confirm with the museum before travelling', 'Check the museum’s current admission tariff', 'Travel to Reka Devnya and follow museum signs near Saedinenie Boulevard.', 'Check photography rules and stay on the visitor walkways around the mosaics.', 'Varna is a practical base for combining Devnya with other museum visits.'],
    zh: ['罗马地面马赛克博物馆', '出发前向博物馆核对', '按馆方公布的现行票价', '前往代夫尼亚雷卡区，在联合大道一带循博物馆路标找入口。', '拍摄前询问馆内规定，并在马赛克周边的指定参观步道停留。', '若行程还包括其他博物馆，可住瓦尔纳，再单独安排代夫尼亚一站。'],
  },
  memorial: {
    bg: ['Мемориален парк и музей във Варна', 'Вторник–събота, 10:00–18:00', 'Открита експозиция 1,53 € · Комбиниран билет 4,09 €', 'Потърсете спирка „Парк-музей Владислав Варненчик“ във Варна. Овеч е отделна спирка в Провадия.', 'Продажбата на билети приключва 30 минути преди затваряне. Оставете време за вътрешната и откритата експозиция.', 'Останете във Варна за музейния парк и пътувайте отделно до Провадия.'],
    en: ['Memorial park and museum in Varna', 'Tuesday–Saturday, 10:00–18:00', 'Outdoor exhibits €1.53 · Combined admission €4.09', 'Use the Park Museum Vladislav Varnenchik stop in Varna. Ovech is a separate stop in Provadia.', 'Ticket sales close 30 minutes before the museum. Allow time for indoor and outdoor exhibits.', 'Stay in Varna for the memorial park and make a separate trip to Provadia.'],
    zh: ['瓦尔纳纪念公园与博物馆', '周二至周六 10:00–18:00', '室外展区 1.53 欧元 · 联票 4.09 欧元', '在瓦尔纳查找瓦迪斯瓦夫纪念博物馆公园站；奥韦奇要塞是普罗瓦迪亚的另一站。', '售票在闭馆前 30 分钟结束，室内外展区均需预留时间。', '参观纪念公园时可住瓦尔纳，再安排普罗瓦迪亚的独立行程。'],
  },
  train: {
    bg: ['Железопътен маршрут Варна–Провадия', 'Според разписанието на БДЖ', 'Билет за конкретния влак; входът за Овеч е отделен', 'Отпътувайте от гара Варна към гара Провадия, после продължете пеша или с местен транспорт.', 'Проверете обратния влак и оставете резерв за слизането от платото.', 'За ранно отпътуване изберете нощувка с лесен достъп до гара Варна.'],
    en: ['Varna–Provadia railway itinerary', 'Consult the BDZ timetable', 'Train fare and fortress admission are separate', 'Depart Varna station for Provadia, then continue on foot or by local transport.', 'Check the return train and allow a buffer for the descent from the plateau.', 'For an early departure, choose accommodation with easy access to Varna station.'],
    zh: ['瓦尔纳至普罗瓦迪亚铁路行程', '按保加利亚国铁当日时刻表', '车票与要塞门票分别计费', '从瓦尔纳站搭车到普罗瓦迪亚站，之后步行或安排当地交通。', '核对返程列车，并给下山和回车站留出缓冲。', '若搭早班列车，可选择前往瓦尔纳火车站方便的住宿。'],
  },
  bus: {
    bg: ['Регионален автобусен маршрут от Варна', 'Автогарата е денонощна; проверете конкретния курс', 'Цената се определя от превозвача', 'От Централната автогара във Варна проверете сектора и спирката в Провадия.', 'Работното време на касите е различно от това на автогарата. Проверете и обратния курс.', 'Планирайте достъп до автогара Варна, ако тръгвате рано сутрин.'],
    en: ['Regional bus itinerary from Varna', 'Terminal open around the clock; check the actual service', 'Fare set by the carrier', 'At Varna Central Bus Station, confirm the boarding bay and your stop in Provadia.', 'Ticket desks and the terminal keep different hours. Check the return service too.', 'Choose accommodation with a convenient connection to Varna Central Bus Station for an early departure.'],
    zh: ['从瓦尔纳出发的区域巴士行程', '车站全天开放，具体班次另查', '按班车运营商公布的票价', '在瓦尔纳中央汽车站核对上车站台及普罗瓦迪亚下车点。', '售票窗口和车站本身的开放时间不同，出发前也要核对回程班次。', '若坐早班车，可选容易抵达瓦尔纳中央汽车站的住宿。'],
  },
};

const profiles: Record<string, string> = {
  'second-bulgarian-empire': 'museum', ivaylo: 'museum', 'provadia-museum': 'museum',
  'provadia-centre': 'town', 'one-day': 'town', solnitsata: 'solnitsata',
  'ravna-monastery': 'ravna', 'devnya-mosaics': 'devnya', 'varnencik-campaign': 'memorial',
  'varna-by-train': 'train', 'varna-by-bus': 'bus',
};

const links: Record<string, readonly [string, string]> = {
  'north-gate': ['tabiite', 'wooden-bridge'], 'wooden-bridge': ['north-gate', 'tabiite'],
  tabiite: ['wooden-bridge', 'kaleto'], kaleto: ['cliff-defences', 'medieval-churches'],
  'cliff-defences': ['kaleto', 'north-gate'], 'stone-stairs': ['provadia-centre', 'eco-trail'],
  'eco-trail': ['provadia-centre', 'stone-stairs'], 'deep-well': ['north-gate', 'cisterns'],
  cisterns: ['deep-well', 'central-square'], 'metropolitan-church': ['medieval-churches', 'provadia-museum'],
  'medieval-churches': ['kaleto', 'metropolitan-church'], 'fortress-towers': ['north-gate', 'cliff-defences'],
  'knights-prison': ['fortress-towers', 'central-square'], 'friars-holes': ['cliff-defences', 'kaleto'],
  'central-square': ['medieval-churches', 'second-bulgarian-empire'], 'fortress-names': ['north-gate', 'provadia-museum'],
  'late-antiquity': ['kaleto', 'provadia-museum'], 'second-bulgarian-empire': ['central-square', 'provadia-museum'],
  ivaylo: ['fortress-names', 'provadia-museum'], 'savoy-campaign': ['north-gate', 'wooden-bridge'],
  'varnencik-campaign': ['half-day', 'varna-by-train'], 'provadia-centre': ['varna-by-train', 'provadia-museum'],
  'provadia-museum': ['provadia-centre', 'ravna-monastery'], solnitsata: ['provadia-centre', 'provadia-museum'],
  'ravna-monastery': ['provadia-museum', 'provadia-centre'], 'devnya-mosaics': ['varna-by-train', 'one-day'],
  'varna-by-train': ['provadia-centre', 'half-day'], 'varna-by-bus': ['provadia-centre', 'one-day'],
  photography: ['cliff-defences', 'wooden-bridge'], 'half-day': ['north-gate', 'deep-well'],
  'one-day': ['provadia-museum', 'solnitsata'],
};

export function guidePlanning(slug: string, locale: Locale) {
  const profile = profiles[slug];
  const [kind, hours, price, transport, notice, stay] = (profile ? venues[profile] : fortress)[locale];
  return { kind, hours, price, transport, notice, stay, fortressRating: !profile, related: links[slug] };
}

const taglines: Record<string, readonly [string, string, string]> = {
  'north-gate': ['Каменната арка между моста и укрепения град', 'The stone arch between the bridge and the fortified town', '从高地桥面走进昔日设防城镇'],
  'wooden-bridge': ['Пешеходната връзка през седловината', 'The foot crossing over the gap between the plateaus', '横跨两片高地之间的窄谷'],
  tabiite: ['Поглед към северната порта от съседното плато', 'A view back to the north gate from the neighbouring plateau', '从相邻高地回望北门与城墙'],
  kaleto: ['Скалната основа на улици, храмове и укрепления', 'The rock platform beneath streets, churches and defences', '城墙、街巷与教堂共处的岩石高地'],
  'cliff-defences': ['Как скалният релеф оформя отбраната', 'How the rock face shaped the defences', '在天然崖壁与人工城墙之间读懂防御布局'],
  'stone-stairs': ['Пешеходно изкачване по склона над града', 'An uphill walk on the rock slope above town', '沿岩坡石阶从城镇登上高地'],
  'eco-trail': ['От градската периферия до скалното плато', 'From the town edge to the rocky plateau', '从城区边缘循步道走向岩石高地'],
  'deep-well': ['Водоизточникът на укрепеното плато', 'The deep water source on the fortified plateau', '从七十九米深井了解高地如何取水'],
  cisterns: ['Следите от събиране на вода в самата скала', 'Traces of rainwater storage cut into the rock', '在岩面上辨认昔日集蓄雨水的设施'],
  'metropolitan-church': ['Планът на средновековен църковен център', 'The footprint of a medieval religious centre', '沿残存墙基辨认中世纪都主教教堂布局'],
  'medieval-churches': ['Три църковни основи в границите на крепостта', 'Three church foundations within the fortress', '在同一座堡垒内对照三处教堂基址'],
  'fortress-towers': ['Отбранителните елементи при входовете', 'Defensive masonry beside the entrances', '从入口与城墙辨认残存塔楼'],
  'knights-prison': ['Означен скален обект в укрепения комплекс', 'A named rock feature inside the fortified complex', '从现场标牌辨认骑士监狱岩石遗迹'],
  'friars-holes': ['Скалните отвори в контекста на платото', 'Rock openings in the setting of the plateau', '从开放步道观察岩穴与崖壁的位置关系'],
  'central-square': ['Следи от домове, търговия и улици', 'Traces of homes, commerce and streets', '从住宅、商铺和旧街道认识要塞中的城市生活'],
  'fortress-names': ['Проват, Овеч и Таш Хисар през вековете', 'Provat, Ovech and Tash Hisar across the centuries', '从三种历史地名认识同一座要塞'],
  'late-antiquity': ['Най-ранните укрепени пластове на Калето', 'Early fortified layers on the Kaleto plateau', '通过遗址层次辨认要塞较早的建筑阶段'],
  'second-bulgarian-empire': ['От градския план на Овеч до музейните находки', 'From Ovech’s town plan to the museum finds', '把中世纪城镇布局与馆内出土文物对照'],
  ivaylo: ['Овеч в политическата история на XIII век', 'Ovech in the political history of the thirteenth century', '在十三世纪保加利亚史中理解奥韦奇'],
  'savoy-campaign': ['Поглед към релефа през събитията от 1366 г.', 'Reading the terrain through the events of 1366', '结合一三六六年远征观察要塞地形'],
  'varnencik-campaign': ['От Провадия до мемориалния музей във Варна', 'From Provadia to the memorial museum in Varna', '从奥韦奇遗迹延伸至瓦尔纳纪念博物馆'],
  'provadia-centre': ['Музей, градски улици и поглед към Калето', 'Museum, town streets and views up to Kaleto', '从镇中心安排博物馆与登城行程'],
  'provadia-museum': ['Находките, които допълват разходката из Овеч', 'Finds that put a walk through Ovech in context', '在展柜中寻找高地遗址之外的考古线索'],
  solnitsata: ['Праисторическо производство на сол и укрепено селище', 'Prehistoric salt production and a fortified settlement', '走进史前制盐区与设防聚落的发掘现场'],
  'ravna-monastery': ['Манастирска археология и средновековни надписи', 'Monastic archaeology and medieval inscriptions', '从多语种铭文认识拉夫纳的中世纪书写文化'],
  'devnya-mosaics': ['Римски настилки и образът на Медуза', 'Roman floors and the figure of Medusa', '从美杜莎镶嵌画观察罗马室内装饰'],
  'varna-by-train': ['Железопътен преход и последна отсечка до платото', 'A rail journey followed by a separate leg to the plateau', '从瓦尔纳搭火车，再安排登高的最后一段路'],
  'varna-by-bus': ['От централната автогара до град Провадия', 'From Varna Central Bus Station to Provadia', '从瓦尔纳中央汽车站到普罗瓦迪亚的行程'],
  photography: ['Каменна арка, дървен мост и широки гледки', 'Stone arch, wooden bridge and wide valley views', '在拱门、桥面与河谷全景之间寻找构图'],
  'half-day': ['Порта, храмови основи и кладенец в едно изкачване', 'Gate, church foundations and well in one ascent', '一次登高串起北门、教堂基址和深井'],
  'one-day': ['Крепост, музей и възможна спирка при Солницата', 'Fortress, museum and an optional stop at Solnitsata', '一日串联要塞与博物馆，按预约加访盐业遗址'],
};

export function guideTagline(slug: string, locale: Locale) {
  return taglines[slug][{ bg: 0, en: 1, zh: 2 }[locale]];
}
