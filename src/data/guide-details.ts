import type { Locale } from '@/i18n/routing';

// Observation, route, photo position and a question specific to each guide.
const details: Record<string, Record<Locale, readonly [string, string, string, string, string]>> = {
  'north-gate': {
    bg: ['Арката стеснява преминаването от откритото плато към вътрешността на укрепения град. Сравнете възстановения силует с ниските останки в съседство.', 'Тръгнете от подхода при Табиите, преминете моста и спрете от вътрешната страна на арката.', 'Снимайте през арката към моста отстрани на прохода.', 'Влиза ли се само през северната порта?', 'Музеят описва три исторически входа. На място следвайте обозначения отворен подход.'],
    en: ['The arch constricts the passage from the exposed plateau into the fortified town. Compare its restored profile with the lower archaeological remains beside it.', 'Approach from Tabiite, cross the bridge and stop on the inner side of the arch.', 'Frame the bridge through the arch while standing to one side of the passage.', 'Is the north gate the only entrance?', 'The museum records three historical entrances. Follow the approach signed as open when you arrive.'],
    zh: ['拱门将开阔高地通往城内的路收窄。可以对照现有修复轮廓与两侧较低的考古遗迹，理解门道的尺度。', '从塔比泰一侧接近，经桥面抵达北门，在拱门内侧停留。', '从门洞边缘向外取景，把桥面和拱形轮廓纳入画面。', '北门是唯一入口吗？', '博物馆记载有三处历史入口，当天请按现场开放指示行走。'],
  },
  'wooden-bridge': {
    bg: ['Погледната отстрани, теснината обяснява защо тук е било необходимо мостово съоръжение.', 'Започнете при арката, преминете по отворения мост и обърнете поглед назад от Табиите.', 'От площадката пред арката използвайте парапетите като водещи линии.', 'Историческа ли е днешната настилка?', 'Днешният мост помага да се прочете историческата връзка между платата. Не приемайте видимата настилка за средновековен материал.'],
    en: ['A side view of the gap explains why this crossing required a bridge. The deck shows the line of approach between two steep-sided landforms.', 'Start at the arch, cross while the bridge is open and turn back from the Tabiite side.', 'Use the rails as leading lines from the area in front of the arch.', 'Is the current deck medieval?', 'The present bridge illustrates the historical link between the plateaus. Its visible decking should not be read as medieval fabric.'],
    zh: ['从侧面看，两片陡壁围成的缺口比桥面正视图更容易说明为何要在这里架桥。', '从拱门前出发，桥梁开放时走到塔比泰侧再回望城门。', '在拱门外的落脚处，用桥栏作为引导线，避开桥面中线。', '现在的桥面是中世纪遗物吗？', '现有桥梁呈现两片高地的历史联系，眼前桥面并非辨认中世纪原材料的依据。'],
  },
  tabiite: {
    bg: ['Тясната връзка с Калето прави Табиите естествена наблюдателна точка за северната отбранителна линия.', 'От северната порта преминете към Табиите и се върнете по обозначения маршрут.', 'Кадрирайте портата и скалния ръб заедно от разрешена точка.', 'Табиите и Калето едно плато ли са?', 'Това са съседни плата, разделени от теснина и свързани при северния вход.'],
    en: ['The narrow connection with Kaleto makes Tabiite a useful place to read the line of the northern defences.', 'Cross from the north gate to Tabiite and return on the marked route.', 'Include the gate and cliff line in the same frame from a permitted viewpoint.', 'Are Tabiite and Kaleto the same plateau?', 'They are neighbouring plateaus, joined at the narrow approach beside the north gate.'],
    zh: ['塔比泰与卡莱托之间连接狭窄，从塔比泰回看能辨认北面防御的走向。', '从北门过桥到塔比泰，再沿标记路线返回。', '从开放观景处同框拍摄北门和崖线，表现两片高地的关系。', '塔比泰与卡莱托是同一块高地吗？', '它们是相邻高地，在要塞北面的狭窄地段相接。'],
  },
  kaleto: {
    bg: ['Калето е самата скална основа на крепостта. Останките от улици, храмове и водни съоръжения показват различни функции на ограничена площ.', 'Сравнете изгледа от града с плана на обекта след изкачването и продължете към църковните основи.', 'От обозначената гледка снимайте града и ръба на скалата в един широк кадър.', 'Кое плато носи самата крепост?', 'Основните останки от Овеч се намират на Калето.'],
    en: ['Kaleto is the rock platform beneath the fortress. Street traces, church foundations and water features reveal how different uses fitted in a confined area.', 'Compare the view from town with the site plan after ascending, then head toward the church foundations.', 'Use a marked viewpoint to frame town and cliff edge together.', 'Which plateau holds the fortress itself?', 'Most of the Ovech remains are on Kaleto.'],
    zh: ['卡莱托是承托要塞的岩台。在有限空间内，旧街道、教堂和水利设施承担了不同功能。', '先从镇上辨认山体，登高后对照遗址图，再走向教堂基址。', '从标示观景处拍摄城镇与崖缘同框的广角画面。', '要塞本体坐落在哪块高地上？', '奥韦奇的主要遗迹坐落于卡莱托高地。'],
  },
  'cliff-defences': {
    bg: ['Отвесите са естествено препятствие, а зидовете допълват отбраната при достъпните теснини.', 'Сравнете силуета от ниското с подхода към северната порта.', 'Изберете широк кадър от пътеката, който показва стената и отвеса под нея.', 'Нужно ли е да се доближа до ръба?', 'Релефът се вижда добре от обозначените пътеки и от ниските точки в града.'],
    en: ['Steep rock formed the first obstacle, while masonry reinforced places where an approach was possible.', 'Compare the cliff silhouette from below with the view on the approach to the north gate.', 'Use a wide shot from the path to include wall and rock face together.', 'Do I need to approach the edge?', 'The terrain is legible from marked paths and from lower viewpoints in town.'],
    zh: ['陡岩是天然阻隔，人工砌墙集中在能够接近高地的地段。', '先在低处看山体轮廓，再在北门方向对照天然岩壁与人工门道。', '用步道上的广角位置同时拍到砌墙和其下的岩壁。', '必须靠近崖边才能看清吗？', '开放步道和山下城区都能观察到这种地形关系。'],
  },
  'stone-stairs': {
    bg: ['Каменните стъпала следват скалния склон и показват колко рязко се сменя височината над града.', 'От градската страна потърсете обозначението за стъпалата. Планирайте връщане по същия или по друг отворен подход.', 'Снимайте нагоре от широка площадка, без да заставате на тясно стъпало.', 'Подходящи ли са след дъжд?', 'Оценете сцеплението на място. При мокър камък изберете по-подходящ отворен подход.'],
    en: ['The stairway follows the rock slope, making the change in elevation above town especially apparent.', 'Find the signed stair approach on the town side. Plan to return the same way or by another open approach.', 'Shoot upward from a wider landing where walkers can pass.', 'Are the steps suitable after rain?', 'Check footing on arrival. Choose another open approach if the stone is slippery.'],
    zh: ['石阶顺岩坡抬升，是感受城区到高地落差最直观的一段。', '在城区一侧找石阶指示，提前决定原路返回还是改走另一条开放路线。', '在宽台阶或平台向上取景，给通行者让出位置。', '雨后适合走石阶吗？', '到场查看石面是否湿滑，抓地不佳时换另一条开放路线。'],
  },
  'eco-trail': {
    bg: ['Екопътеката показва прехода от градската периферия към скалния терен и позволява да се види укреплението отдолу.', 'От табелата в началото проследете маркировката до входа. Направете отделен план за слизане.', 'На широка извивка потърсете кадър с пътеката и скалния склон.', 'Може ли да я комбинирам със стъпалата?', 'Да, ако двата подхода са отворени. Проверете маркировката на връщане.'],
    en: ['The eco trail shows the transition from town edge to rock slope and offers a lower view of the fortifications.', 'Follow the waymarks from the trailhead to the entrance and decide separately how to descend.', 'Look for a broad bend where the trail and cliff can share the frame.', 'Can I combine it with the stairs?', 'Yes, when both approaches are open. Check the return waymarks before committing to the loop.'],
    zh: ['生态步道从城区边缘过渡到岩坡，沿途可从较低位置仰看要塞轮廓。', '在起点读路标，沿标记走到入口，并单独确认下山路线。', '在宽阔弯道把步道和岩坡同框。', '可以和石阶组成环线吗？', '两条路线都开放时可以，登高前后都要核对返程路标。'],
  },
  'deep-well': {
    bg: ['Дълбокият кладенец и цистерните отразяват различни начини за осигуряване на вода на платото.', 'Намерете кладенеца по схемата на обекта и сравнете отвора му с близките съоръжения за вода.', 'Снимайте широк кадър зад предпазната ограда, включващ каменната околност.', 'Може ли да се види дъното?', 'Дълбочината се разбира от музейната информация. Наблюдавайте отвора само от достъпната посетителска зона.'],
    en: ['The deep well and cisterns illustrate different ways of supplying the plateau with water.', 'Find the well on the site plan and compare its opening with the nearby water features.', 'Stay behind the barrier and include the stone setting in a wider shot.', 'Can I see the bottom?', 'Use the museum information to understand the depth and view the opening from the designated visitor area.'],
    zh: ['深井与蓄水设施呈现两种不同用水思路，一处向下到深层，其他设施在地表收集雨水。', '按遗址图找到深井后，再对照附近储水设施的开口与位置。', '从围栏外拍摄井口与周围岩面，不向井内探身。', '能看到井底吗？', '深度可参考博物馆资料，现场在标示游客区观察井口即可。'],
  },
  cisterns: {
    bg: ['Формата на вдлъбнатините и връзката им с горната скална повърхност дават представа за събиране и съхранение.', 'Започнете от кладенеца, после потърсете поясненията за цистерните покрай пътеката.', 'Снимайте под наклон от пътеката, за да личи формата, без да слизате в отвора.', 'Всяка скална вдлъбнатина ли е цистерна?', 'Използвайте археологическите табели. В скалата има съоръжения с различно предназначение.'],
    en: ['The shape of the recesses and their relationship to the surrounding rock suggest how collection and storage worked.', 'Begin at the well and follow the signs for cisterns along the visitor path.', 'Shoot obliquely from the path to show the shape without stepping inside.', 'Is every rock hollow a cistern?', 'Use the archaeological signs. Cut features on this plateau served several purposes.'],
    zh: ['观察凿槽轮廓，以及它与上方岩面的关系，可以理解雨水如何汇集、储存。', '先看深井，再沿游客步道寻找蓄水设施的解说。', '从步道斜向取景，表现凿槽的深浅和边缘。', '每个岩穴都是蓄水池吗？', '岩凿遗迹用途各异，具体辨认以考古解说为准。'],
  },
  'metropolitan-church': {
    bg: ['Ниските зидове се четат като план. Обходете очертанието с поглед и потърсете къде вътрешното пространство се стеснява или разделя.', 'Отправете се от схемата към означената митрополитска църква и сравнете с другите храмови останки.', 'Използвайте по-висока точка на пътеката, за да обхванете основите.', 'Има ли действащ храм?', 'Тук се разглеждат археологически основи на средновековна църква.'],
    en: ['Read the low walls as a floor plan. Follow their outline and look where the interior narrows or divides.', 'Find the metropolitan church on the site plan and compare with the other church foundations.', 'Use a higher point on the path to fit the foundations into the frame.', 'Is this an operating church?', 'The feature on the plateau is the archaeological foundation of a medieval church.'],
    zh: ['低矮砌体应当作为平面图来阅读，留意内部空间在哪些位置收窄或分隔。', '按遗址图找到都主教教堂，再对照同一高地上其他教堂基址。', '从稍高的开放步道拍摄墙基整体轮廓。', '这里仍是使用中的教堂吗？', '高地上供参观的是中世纪教堂的考古基址。'],
  },
  'medieval-churches': {
    bg: ['Трите църковни плана позволяват да се сравнят различни места на богослужение в рамките на укрепения град.', 'Използвайте схемата, за да отбележите трите места, после ги обходете по разрешените пътеки.', 'Снимайте табелата и съответните основи в отделни кадри, за да запазите ориентацията.', 'Как да различа трите храма?', 'Съпоставете номерата на табелите и плана на обекта, вместо да разчитате само на височината на зидовете.'],
    en: ['The three floor plans make it possible to compare places of worship within the fortified town.', 'Mark the three locations on the site plan and follow the permitted paths between them.', 'Take separate frames of signs and foundations to keep track of which is which.', 'How do I tell the churches apart?', 'Match the signs to the site map rather than relying on the height of the surviving walls.'],
    zh: ['三处教堂平面能用来比较同一座设防城镇内不同礼拜空间的位置和尺度。', '先在遗址图上找到三处编号，再按开放步道逐一辨认。', '分别拍摄编号说明与对应墙基，回看照片时更容易对应。', '如何区分三处基址？', '用标牌编号与遗址图对照，仅凭残墙高度难以区分。'],
  },
  'fortress-towers': {
    bg: ['Следите от кулите имат смисъл в общия план на входовете и скалния ръб. Видимата зидария може да включва възстановки.', 'Започнете при северната порта и сравнете видимите отбранителни елементи със схемата.', 'Покажете кулата и съседния зид в един кадър, за да се вижда къде се свързват.', 'Целите кули ли са запазени?', 'Музейните и туристическите описания посочват останки от отбранителни съоръжения. Табелите помагат да отличите фрагментите.'],
    en: ['Tower traces make sense beside the entrances and cliff edge. Some visible stonework may be reconstructed.', 'Start near the north gate and compare the defensive features with their positions on the site plan.', 'Photograph the tower and adjacent wall together to show where they join.', 'Are the towers preserved in full?', 'Sources describe surviving parts of the defences. Use the signs to identify the archaeological fragments.'],
    zh: ['塔楼遗迹要结合入口和崖缘整体观察，今天可见的石砌部分可能包括修复段。', '从北门出发，对照现场平面图辨认防御构筑物。', '把塔楼和相邻墙段拍入同一画面，突出两者衔接的位置。', '是否保留了完整的塔楼？', '资料记载的是防御设施遗存，现场标牌有助于辨认各段遗迹。'],
  },
  'knights-prison': {
    bg: ['Името се среща в туристическите описания. Скалният обект се разбира по-добре в контекста на близките укрепления.', 'От главната пътека потърсете табелата за затвора и останете в обозначената зона.', 'Снимайте отвора с околната скала за мащаб.', 'Потвърждава ли името всяка местна легенда?', 'Името обозначава обекта. За датировка и тълкуване се обърнете към музейната информация.'],
    en: ['The feature is named in tourism accounts. Read its rock-cut shape in the context of the neighbouring fortifications.', 'Look for the prison sign from the main path and stay in the designated visitor area.', 'Include the rock around the opening to give a sense of scale.', 'Does the name establish every story told about it?', 'The name identifies the feature. Consult the museum for dating and interpretation.'],
    zh: ['旅游资料以「骑士监狱」称呼这处岩石遗迹，把它放在周围防御设施中观察更有意义。', '从主步道找遗迹标牌，在划定的游客区内观察。', '让洞口与周围岩壁同框，可交代尺度。', '这个名称能证明所有当地传说吗？', '名称用于辨识遗迹，年代和用途宜参考博物馆解说。'],
  },
  'friars-holes': {
    bg: ['Отворите се виждат в скалния контекст. Формата и разположението са по-надеждни ориентири от местни преразкази.', 'Проследете указанията от главната пътека до разрешената точка за наблюдение.', 'Приближете кадъра с обектива, без да приближавате скалата.', 'Това ли са скалните манастири край Провадия?', 'Този пътеводител описва означения обект при Овеч. Други скални обекти в района изискват отделна ориентация.'],
    en: ['Read the openings in their rock setting. Shape and position are more useful first observations than stories about individual hollows.', 'Follow signs from the main path to the permitted viewing point.', 'Use a longer lens for the openings from the marked path.', 'Are these the rock monasteries around Provadia?', 'This guide covers the named feature at Ovech. Other rock sites around the town require separate directions.'],
    zh: ['把岩穴放回整段岩壁观察，首先辨认开口形状和相对位置。', '沿主步道寻找标牌，仅前往允许到达的观察位置。', '在步道上用长焦拍摄洞口细节。', '这里就是普罗瓦迪亚周边的岩窟修道院吗？', '本页介绍奥韦奇要塞内的修士岩穴，周边其他岩窟遗址需要单独查路线。'],
  },
  'central-square': {
    bg: ['Жилищни и търговски следи около площада поставят ежедневието редом с военната история.', 'Тръгнете от схемата, после сравнете трасетата на улиците с очертанията на помещенията.', 'Снимайте ниските зидове косо, за да личат отделните помещения.', 'Това ли е днешният площад на Провадия?', 'Средновековният площад е археологическа зона в крепостта. Днешният център е долу в града.'],
    en: ['Domestic and commercial traces around the square place everyday life alongside the military history.', 'Start with the site plan, then compare the street traces with the outlines of rooms.', 'Photograph the low walls at an angle to show separate rooms.', 'Is this the present-day square in Provadia?', 'The medieval square is an archaeological area on the plateau. The modern centre is in town below.'],
    zh: ['广场周围的居住和商业遗迹，呈现军事防御之外的城市日常。', '先找遗址图，再对照旧街道与一间间房屋的轮廓。', '沿步道斜拍低墙，让相邻房间的分隔更清晰。', '这里是现代镇中心广场吗？', '中世纪广场在要塞高地，现代城区在坡下。'],
  },
  'fortress-names': {
    bg: ['Проват се свързва с византийските извори, Овеч с българския период, а Таш Хисар с османското название на каменната крепост.', 'Прочетете уводната табела при входа и сравнете имената с хронологията в музея.', 'Съчетайте кадър на табелата с общ изглед на портата.', 'Проват и Овеч отделни места ли са?', 'Това са исторически имена, свързани с един и същ укрепен обект.'],
    en: ['Provat appears in Byzantine sources, Ovech is the Bulgarian name, and Tash Hisar is the Ottoman name for the stone fortress.', 'Read the entrance panel, then compare the names with the timeline in Provadia’s museum.', 'Pair a photograph of the panel with a view of the gate.', 'Are Provat and Ovech different places?', 'They are historical names associated with the same fortified site.'],
    zh: ['普罗瓦特见于拜占庭资料，奥韦奇是保加利亚时期的名称，塔什希萨尔是奥斯曼时期对这处石堡的称呼。', '读入口的时间线，再与镇上博物馆的历史展陈对照。', '分别拍摄解说和城门全景，给名字留下空间参照。', '普罗瓦特和奥韦奇是两个地点吗？', '这些是与同一处设防遗址有关的不同时期名称。'],
  },
  'late-antiquity': {
    bg: ['Музеят представя крепостта като обект с прекъсвания в обитаването. Различните основи не бива да се четат като едновременни.', 'Сравнете датировката в музейната експозиция с обозначенията на платото.', 'Снимайте ниските основи с табелата за периода в отделен кадър.', 'Всяка видима стена ли е късноантична?', 'На обекта има следи от различни периоди. Датировката се проверява по археологическите означения.'],
    en: ['The museum describes intermittent occupation. Foundations from different phases should be read against the site chronology.', 'Compare the museum timeline with the archaeological signs on the plateau.', 'Record a close view of the low walls and a separate frame of the period sign.', 'Is every visible wall from Late Antiquity?', 'The site has multiple phases. Check the archaeological labels for individual remains.'],
    zh: ['博物馆资料显示，这里经历过居住中断与再利用。虽然基址彼此相邻，年代可能不同。', '先掌握馆内时间线，再上高地核对考古标牌。', '低矮墙基和年代标牌各拍一张，避免日后混淆。', '所有可见城墙都属于晚期古代吗？', '遗址包含多个阶段，具体断代以考古标识为准。'],
  },
  'second-bulgarian-empire': {
    bg: ['Златни и сребърни пръстени, монети и християнски символи в музейната експозиция допълват следите от градски живот на платото.', 'Обходете портата, площада и църковните основи, а след това вижте находките в Провадия.', 'Кадрирайте улица и основи, за да покажете връзките между сградите.', 'Къде са преносимите находки?', 'Проверете средновековната експозиция на Историческия музей в Провадия.'],
    en: ['Rings, coins and Christian symbols in the museum add portable evidence to the traces of town life on the plateau.', 'Visit the gate, square and church foundations, then see the finds displayed in Provadia.', 'Frame the street traces with the foundations to show the relationship between buildings.', 'Where can I see portable finds?', 'Check the medieval exhibition at the Historical Museum in Provadia.'],
    zh: ['馆内的戒指、钱币和基督教符号，为高地上的城市空间提供了可移动文物的证据。', '依次看城门、广场和教堂基址，再到镇上参观出土文物。', '让旧街道走向和相邻墙基同框，突出街区联系。', '出土器物去哪里看？', '可查询普罗瓦迪亚历史博物馆的中世纪常设展览。'],
  },
  ivaylo: {
    bg: ['Връзката с Ивайло поставя Овеч в политическата история на XIII век. Общият план обяснява защо укрепеният град е имал регионално значение.', 'Започнете с историческите табели и продължете към средновековната експозиция в града.', 'Изберете изглед, показващ укреплението и долината заедно.', 'Има ли отделна сграда на Ивайло?', 'Темата се проследява чрез историята на крепостта и музейните материали.'],
    en: ['The association with Ivaylo places Ovech within thirteenth-century political history. Its layout helps explain the fortified town’s importance in the region.', 'Start with the historical panels and continue to the medieval exhibition in town.', 'Choose a view that shows the fortification in relation to the valley.', 'Is there a separate building associated with Ivaylo?', 'Follow this topic through the history of the fortress and the museum displays.'],
    zh: ['伊瓦伊洛的故事将奥韦奇放进 13 世纪的政治背景。要塞的地形和规模能帮助理解它在区域中的地位。', '先读遗址年代展板，再去镇上的中世纪展区延伸阅读。', '选能同框拍出堡垒和河谷的视角，交代地势。', '有以伊瓦伊洛命名的独立建筑吗？', '本专题通过要塞历史和博物馆材料理解这一时期。'],
  },
  'savoy-campaign': {
    bg: ['Кампанията от 1366 г. дава исторически контекст за отбранителната роля на Овеч. Днешните конструкции показват релефа, а не точната военна обстановка.', 'Сравнете входа и теснината, после потърсете хронологията на обекта в музея.', 'Снимайте тясната връзка между платата от обозначена точка.', 'Може ли да проследя точния ход на кампанията на терен?', 'Използвайте историческите източници за събитията и пътеките за ориентация в релефа.'],
    en: ['The 1366 campaign gives context for Ovech’s defensive role. Today’s structures help explain the terrain, rather than reconstructing the precise events.', 'Compare the entrance and the gap, then check the site chronology at the museum.', 'Photograph the narrow connection from a marked viewpoint.', 'Can I follow the exact course of the campaign on site?', 'Use the historical sources for events and the paths to understand the terrain.'],
    zh: ['1366 年远征是理解奥韦奇防御角色的一段背景。今天的构筑物适合用来观察地形。', '对照入口和两座高地间的缺口，再通过博物馆资料了解事件顺序。', '从标记观景点拍摄地峡全貌。', '现场能循着当时的交战路线走一遍吗？', '具体事件参考历史资料，现有步道用于辨认地势。'],
  },
  'varnencik-campaign': {
    bg: ['Походът свързва Овеч и Варна в един исторически разказ. Това позволява да съпоставите крепостния терен с музейната памет в града.', 'Посетете първо платото, а за отделна спирка във Варна проверете музея „Владислав Варненчик“.', 'Заснемете общ изглед на долината от платото.', 'На Овеч ли е музейният парк във Варна?', 'Музейният парк е отделен обект във Варна. Картата тук отбелязва именно него.'],
    en: ['The campaign links Ovech and Varna in the same historical account. Compare the fortress terrain with the museum interpretation in Varna.', 'See the plateau first, then check the Vladislav Varnenchik museum park in Varna as a separate stop.', 'Take a wide view of the valley from the plateau.', 'Is the Varna museum park at Ovech?', 'The museum park is a separate site in Varna. The map on this page marks that stop.'],
    zh: ['1444 年远征把奥韦奇与瓦尔纳连在同一段历史中，可以将要塞地形与瓦尔纳的博物馆解说对照。', '先看奥韦奇高地，另安排一站参观瓦尔纳的瓦迪斯瓦夫纪念博物馆公园。', '从高地的开放位置拍摄河谷全景。', '纪念博物馆公园在奥韦奇吗？', '它是瓦尔纳的另一处景点，本页地图标记的是该到访地点。'],
  },
  'provadia-centre': {
    bg: ['Модерният град лежи в долината, откъдето се вижда защо крепостта доминира над района.', 'Започнете в центъра, отбийте се в музея на ул. „Опълченска“ и отделете време за изкачването.', 'Снимайте града и скалния венец от открита обществена точка.', 'Може ли градът да е резервен план?', 'Да. Проверете работното време на музея, ако изкачването е неподходящо.'],
    en: ['The modern town occupies the valley, where the fortress’s position above the surroundings is easy to read.', 'Start downtown, stop at the museum on Opalchenska Street and reserve time for the ascent.', 'Frame the town and rock rim from an open public viewpoint.', 'Can the town be a fallback plan?', 'Yes. Check the museum’s hours if the climb is unsuitable.'],
    zh: ['现代城镇位于河谷，从镇上容易看清要塞高踞其东侧的地理关系。', '从镇中心出发，经过奥帕尔琴斯卡街上的博物馆，再另留时间登城。', '从开放公共位置把城区和上方崖线同框。', '天气不适合登城，镇上还有安排吗？', '可先查询历史博物馆开放时间，把参观转到室内。'],
  },
  'provadia-museum': {
    bg: ['Средновековната експозиция поставя находките от Овеч до предмети от манастира Равна. Сравнете монетите, печатите и християнските символи.', 'Започнете от ул. „Опълченска“ № 3, разгледайте средновековието и продължете към крепостта, ако времето позволява.', 'Попитайте на касата за условията за снимане на експонатите.', 'Къде да започна, ако имам кратко време?', 'Потърсете витрините за Проват–Овеч и попитайте кои находки са свързани с видимите днес останки.'],
    en: ['The medieval exhibition places finds from Ovech alongside material from Ravna monastery. Compare coins, seals and Christian symbols.', 'Begin at 3 Opalchenska Street, see the medieval rooms and continue to the fortress if time permits.', 'Ask at the desk about photography in the exhibition.', 'Where should I start on a short visit?', 'Look for Provat–Ovech in the medieval displays and ask which finds relate to the remains visible today.'],
    zh: ['中世纪展厅将奥韦奇出土文物与拉夫纳修道院的器物并列展出，可比较钱币、印戒和基督教符号。', '从奥帕尔琴斯卡街 3 号入馆，先看中世纪展陈，再视时间登城。', '拍摄展柜前先向前台确认馆内摄影规则。', '时间短先看哪里？', '可以从普罗瓦特—奥韦奇展柜开始，询问哪些展品与今日可见遗迹有关。'],
  },
  solnitsata: {
    bg: ['При разкопките се разграничават местата за производство на сол от укрепената селищна част. Беседата помага да се разчетат пластовете и остатъците от укрепления.', 'Пристигнете отделно от крепостта по път 904 и се срещнете с водача в определения час.', 'Снимайте общия план само от разрешените точки, посочени от водача.', 'Има ли посещения при дъжд?', 'Официалният сайт посочва, че при дъжд или сняг обектът не приема посетители. Обадете се предварително.'],
    en: ['The excavations distinguish salt-production areas from the fortified settlement. A guided visit helps visitors read the layers and the defensive remains.', 'Make this a separate stop from Ovech via Road 904 and meet the guide at the agreed time.', 'Photograph the excavation layout from positions approved by the guide.', 'Can I visit in the rain?', 'The project lists rain and snow as closure conditions. Call before travelling.'],
    zh: ['考古发掘图区分了制盐区与有防御设施的聚落区，现场讲解有助于理解地层及围护遗迹。', '从 904 号公路单独前往盐业遗址，在约定时间与讲解员汇合。', '只在讲解员允许的位置拍摄发掘区的整体布局。', '下雨还开放吗？', '考古项目官网说明雨雪天气暂停参观，出发前宜电话确认。'],
  },
  'ravna-monastery': {
    bg: ['Манастирът е книжовно средище от IX–XI век. Надписите на старогръцки, старобългарски и латински показват разнообразието на писмената култура.', 'Започнете в музея в Провадия. За терена край жп спирка Равна поискайте актуални указания за достъп.', 'Ако е разрешено, заснемете изложените надписи в музея и запишете номера на етикета.', 'До центъра на селото ли е обектът?', 'Музеят описва местоположението спрямо жп спирка Равна. Проверете подхода с музея преди тръгване.'],
    en: ['The monastery was a centre of learning in the ninth to eleventh centuries. Inscriptions in Greek, Old Bulgarian and Latin show the range of its written culture.', 'Start at Provadia’s museum. Ask for current access directions to the site near Ravna railway halt.', 'If photography is allowed, capture displayed inscriptions and note their label numbers.', 'Is it in the village centre?', 'The museum locates the remains near Ravna railway halt. Check the approach with museum staff before setting out.'],
    zh: ['修道院在 9 至 11 世纪是学术与抄写中心。希腊语、古保加利亚语和拉丁语铭文反映了当地书写文化的多样性。', '先到普罗瓦迪亚历史博物馆，再向馆方询问拉夫纳铁路停靠点附近遗址的现行入口。', '若馆方允许，可拍展出的铭文并记录展签编号。', '遗址就在村中心吗？', '博物馆以拉夫纳铁路停靠点为定位参照，出发前应向馆方核对进场路线。'],
  },
  'devnya-mosaics': {
    bg: ['Римските подови мозайки представят битовия декор на Марцианопол. В паното с Медуза сравнете централния мотив и геометричните рамки.', 'Слезте в квартал Река Девня, потърсете входа на музея по табелите край бул. „Съединение“ и следвайте музейния маршрут между залите.', 'Ако правилата позволяват, снимайте от посетителската пътека без светкавица.', 'Намира ли се музеят в Провадия?', 'Музеят е в Девня и изисква отделно придвижване.'],
    en: ['Roman floor mosaics reveal the domestic decoration of Marcianopolis. Compare the figure of Medusa with the geometric borders around it.', 'Go to Reka Devnya, follow the signs near Saedinenie Boulevard to the museum entrance and continue along the visitor route.', 'If permitted, photograph the mosaics from the visitor walkway without flash.', 'Is the museum in Provadia?', 'The museum is in Devnya. Allow for a separate journey.'],
    zh: ['罗马地面马赛克呈现马尔西亚诺波利斯的室内装饰。参观时可对照美杜莎中央图案与四周几何边框。', '抵达雷卡区后，从联合大道一带沿博物馆指示找入口，再按馆内路线参观各展室。', '馆方允许时，从参观步道拍摄地面拼花，避免使用闪光灯。', '博物馆位于普罗瓦迪亚吗？', '该馆位于代夫尼亚，需要单独安排交通。'],
  },
  'varna-by-train': {
    bg: ['Гара Варна е отправната точка на морския град. За Овеч железопътният етап приключва в Провадия, след което следва отделен подход към платото.', 'Проверете маршрут Варна–Провадия в БДЖ, слезте на гара Провадия и продължете към центъра, преди да поемете нагоре.', 'Снимайте фасадата на гара Варна от площада. За историческата снимка на Провадия вижте означената година.', 'Има ли влак до портата?', 'Влакът стига до Провадия. За последния участък планирайте местен транспорт или ходене.'],
    en: ['Varna station is the rail departure point. The train leg ends at Provadia, followed by a separate approach to the plateau.', 'Check Varna–Provadia with BDZ, alight at Provadia station and go via the town centre before ascending.', 'Photograph the Varna station façade from the square. The Provadia station photo is dated in its caption.', 'Does the train go to the gate?', 'Trains reach Provadia. Plan the final leg on foot or by local transport.'],
    zh: ['铁路行程由瓦尔纳火车站出发，到普罗瓦迪亚站结束，登高仍需留出单独路段。', '查保加利亚国铁的瓦尔纳至普罗瓦迪亚班次，到站后先经镇中心再登城。', '可在广场拍瓦尔纳站外观。普罗瓦迪亚站历史照片的年份见图注。', '火车可以直接坐到城门吗？', '铁路到达普罗瓦迪亚城区，最后一段需步行或安排当地交通。'],
  },
  'varna-by-bus': {
    bg: ['Централната автогара във Варна е отправна точка за регионални линии. За Провадия проверете конкретния превозвач и спирката на пристигане.', 'Отидете на бул. „Владислав Варненчик“ 158Б, проверете час и сектор, после планирайте прехода от Провадия до входа.', 'В Провадия потърсете обществена гледка към платото, преди да поемете нагоре.', 'Еднакво ли е разписанието всеки ден?', 'Проверете конкретната дата и двата курса при автогарата или превозвача.'],
    en: ['Varna’s central bus station serves regional routes. For Provadia, check the specific operator and the stop used on arrival.', 'Go to 158B Vladislav Varnenchik Boulevard, check the time and bay, then plan the onward leg from Provadia to the entrance.', 'On arrival in Provadia, find a public view of the plateau before heading uphill.', 'Is the timetable the same every day?', 'Check both journeys for the actual date with the bus station or carrier.'],
    zh: ['瓦尔纳中央汽车站发出区域班车。前往普罗瓦迪亚时，先确认实际运营商和抵达站点。', '前往瓦迪斯瓦夫·瓦尔嫩奇克大道 158B 号核对时间和站台，再安排从普罗瓦迪亚下车点到城门的路段。', '抵达普罗瓦迪亚后，可在登高前从公共位置拍山脊。', '每天的班次都一样吗？', '请按实际出行日期查询去程和返程，班次以车站或运营商公布为准。'],
  },
  photography: {
    bg: ['Арката дава естествена рамка, дървеният мост подчертава перспективата, а далечният изглед показва релефа.', 'Направете първо широк кадър от обозначена точка, после снимайте по оста на моста отстрани на прохода.', 'Изчакайте проходът да се освободи. При силна светлина пазете детайлите в небето и сянката на арката.', 'Струва ли си да нося дълъг обектив?', 'Полезен е за детайли по скалите и стените, които се виждат от безопасно разстояние.'],
    en: ['The arch offers a natural frame, the bridge gives perspective, and the distant view shows why the site was defensible.', 'Begin with a wide view from a marked point, then shoot along the bridge from one side of the passage.', 'Wait for the passage to clear. In harsh light, balance the sky with the shadows beneath the arch.', 'Is a longer lens worthwhile?', 'It helps with details on the cliffs and walls that can be viewed from a distance.'],
    zh: ['门拱可作为天然画框，桥栏能加强透视，远景则说明要塞为何选在这片高地。', '先在开放观景处拍全景，再从通道边缘顺桥面轴线取景。', '等游客通过再拍。强光时留意天空与门洞阴影的曝光差。', '长焦镜头有用吗？', '从开放位置拍城墙和岩面细节时，长焦比走近崖缘更实用。'],
  },
  'half-day': {
    bg: ['За кратко посещение подредете обектите по терен: вход и мост, обитавана зона, после съоръжения за вода.', 'При отворен северен подход започнете от моста. От арката продължете към църковните основи и кладенеца, после се върнете по избрания подход.', 'Заснемете един общ изглед от началото и отделен кадър на водно съоръжение.', 'Какво да пропусна при кратък престой?', 'Оставете отделното посещение на музея или Солницата за друг момент, за да не съкращавате времето за слизане.'],
    en: ['Organise a short visit by terrain: entrance and bridge, the occupied area, then the water features.', 'If the north approach is open, begin with the bridge. Continue from the arch to the church foundations and well, then return by the approach you chose.', 'Take an establishing view early and a separate frame of one of the water features.', 'What should I leave out if pressed for time?', 'Keep the museum or Solnitsata for a separate visit so you have enough time to descend.'],
    zh: ['短时间参观可按地形分成三段：入口和桥、昔日城内生活区、用水遗迹。', '北侧开放时从桥开始，经拱门走向教堂基址和深井，再按预先选好的路线下山。', '先拍一张交代空间的全景，再单拍一处水利设施。', '时间紧应该舍弃哪一段？', '把博物馆或盐业遗址另排一站，给下山留足时间。'],
  },
  'one-day': {
    bg: ['Един ден позволява да съпоставите руините на Овеч с движимите находки в музея. Солницата добавя отделен праисторически пласт.', 'Започнете с обекта, който затваря по-рано, оставете време за обяд в града и добавете Солницата само при потвърдена беседа и транспорт.', 'Съпоставете широк изглед от крепостта с градската гледна точка в долината.', 'Необходимо ли е да включа и трите места?', 'Музеят и крепостта образуват пълноценна програма. Солницата има собствен режим на посещение.'],
    en: ['A full day lets you compare the ruins with the museum’s portable finds. Solnitsata adds a separate prehistoric chapter.', 'Start with whichever venue closes first, leave time for lunch in town and add Solnitsata only with a confirmed tour and transport.', 'Pair a wide shot from the fortress with a view from the town in the valley.', 'Do I need to include all three stops?', 'The museum and fortress make a full visit. Solnitsata follows its own visitor arrangements.'],
    zh: ['一日游有时间将高地遗迹与博物馆的出土器物对照。若加上盐业遗址，还可以再看一个独立的史前阶段。', '从较早关门的地点开始，在镇上留出午餐时间；确认盐业遗址讲解和交通后再加第三站。', '在要塞拍一张全景，再从河谷中的城区回拍高地。', '一定要去齐三个地点吗？', '博物馆与要塞已能组成完整的一日行程，盐业遗址另有独立的参观安排。'],
  },
};

export function guideDetails(slug: string, locale: Locale) {
  const [observation, route, photography, question, answer] = details[slug][locale];
  return { observation, route, photography, question, answer };
}
