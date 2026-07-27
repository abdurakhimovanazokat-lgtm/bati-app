// lib/contentLibrary.js
// Единственный источник практических материалов BATI.
// AI Brain не придумывает техники — он только находит и ранжирует материалы отсюда.
//
// ДВА УРОВНЯ КОНТЕНТА:
//   Level 1 (бесплатно) — type: "card"            — отдельная карточка-картинка
//   Level 2 (BATI Plus) — type: "premium_bundle"   — полный гид по теме

export const CONTENT_LIBRARY = [
  // ===== РАЗВИТИЕ / МОТОРИКА =====
  { id: "card-001-massage-nozhek", title: "Массаж ножек", type: "card", age_from: 0, age_to: 12, category: "развитие", tags: ["развитие", "моторика", "ножки", "массаж"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0001.jpg" },
  { id: "card-002-ruchki-vverh", title: "Ручки вверх", type: "card", age_from: 0, age_to: 12, category: "развитие", tags: ["развитие", "моторика", "ручки"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0002.jpg" },
  { id: "card-003-nozhki-velo", title: "Ножки — вело", type: "card", age_from: 0, age_to: 12, category: "развитие", tags: ["развитие", "моторика", "газики", "колики"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0003.jpg" },
  { id: "card-004-ruchnoy-massazh", title: "Ручной массаж", type: "card", age_from: 0, age_to: 12, category: "развитие", tags: ["развитие", "моторика", "массаж"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0004.jpg" },
  { id: "card-005-ruchki-krestom", title: "Ручки крестом", type: "card", age_from: 0, age_to: 12, category: "развитие", tags: ["развитие", "моторика"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0005.jpg" },
  { id: "card-006-serединnoe-rastyazhenie", title: "Серединное растяжение", type: "card", age_from: 3, age_to: 12, category: "развитие", tags: ["развитие", "моторика", "ползание", "ходьба"], stage: "моторное развитие", url: "/Bati_babytime_20250913_161711_0000_page-0006.jpg" },
  { id: "card-007-tummy-time", title: "Время на животике (tummy time)", type: "card", age_from: 0, age_to: 6, category: "развитие", tags: ["развитие", "моторика", "живот", "переворот"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0007.jpg" },
  { id: "card-008-podtyagivanie", title: "Подтягивание", type: "card", age_from: 3, age_to: 12, category: "развитие", tags: ["развитие", "моторика"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0008.jpg" },
  { id: "card-009-stoim-i-pruzhinim", title: "Стоим и пружиним", type: "card", age_from: 6, age_to: 12, category: "развитие", tags: ["развитие", "моторика"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0009.jpg" },
  { id: "card-010-vozdushnaya-igra", title: "Воздушная игра", type: "card", age_from: 3, age_to: 12, category: "развитие", tags: ["развитие", "координация"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0010.jpg" },
  { id: "card-011-perevorot", title: "Переворот", type: "card", age_from: 3, age_to: 8, category: "развитие", tags: ["развитие", "переворот", "моторика"], stage: "моторное развитие", url: "/Bati_babytime_20250913_161711_0000_page-0011.jpg" },
  { id: "card-012-super-malysh", title: "Супер малыш", type: "card", age_from: 3, age_to: 12, category: "развитие", tags: ["развитие", "координация"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0012.jpg" },
  { id: "card-013-tolchok-nozhkami", title: "Толчок ножками", type: "card", age_from: 0, age_to: 12, category: "развитие", tags: ["развитие", "моторика", "ножки"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0013.jpg" },

  // ===== ПРОРЕЗЫВАНИЕ ЗУБОВ =====
  { id: "card-014-schechki-zub", title: "Щёчки", type: "card", age_from: 3, age_to: 24, category: "зубы", tags: ["зубы", "прорезывание"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0014.jpg" },
  { id: "card-015-massazh-ladoshki", title: "Массаж ладошки", type: "card", age_from: 0, age_to: 24, category: "зубы", tags: ["зубы", "успокоение"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0015.jpg" },
  { id: "card-016-ulybki-zub", title: "Улыбки", type: "card", age_from: 3, age_to: 24, category: "зубы", tags: ["зубы", "прорезывание"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0016.jpg" },
  { id: "card-017-podtyanut-i-rasslabit", title: "Подтянуть и расслабить", type: "card", age_from: 3, age_to: 24, category: "зубы", tags: ["зубы", "прорезывание"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0017.jpg" },
  { id: "card-018-kasanie-palchikov-nog", title: "Касание пальчиков ног", type: "card", age_from: 3, age_to: 24, category: "зубы", tags: ["зубы", "прорезывание"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0018.jpg" },
  { id: "card-019-massazh-ushek", title: "Массаж ушек", type: "card", age_from: 0, age_to: 24, category: "зубы", tags: ["зубы", "успокоение", "расслабление"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0019.jpg" },
  { id: "card-020-szhatie-ruki", title: "Сжатие руки", type: "card", age_from: 3, age_to: 24, category: "зубы", tags: ["зубы", "прорезывание"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0020.jpg" },
  { id: "card-021-uspokoenie-chelyusti", title: "Успокоение челюсти", type: "card", age_from: 3, age_to: 24, category: "зубы", tags: ["зубы", "прорезывание", "расслабление"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0021.jpg" },
  { id: "card-022-palchiki-nozhki", title: "Пальчики ножки", type: "card", age_from: 3, age_to: 24, category: "зубы", tags: ["зубы", "прорезывание"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0022.jpg" },

  // ===== СОН =====
  { id: "card-023-nad-brovkami", title: "Над бровками", type: "card", age_from: 0, age_to: 24, category: "сон", tags: ["сон", "расслабление"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0023.jpg" },
  { id: "card-024-sonnoe-poglazhivanie", title: "Сонное поглаживание", type: "card", age_from: 0, age_to: 24, category: "сон", tags: ["сон", "расслабление"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0024.jpg" },
  { id: "card-025-tochka-spokoystviya-1", title: "Точка спокойствия", type: "card", age_from: 0, age_to: 24, category: "сон", tags: ["сон", "расслабление"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0025.jpg" },
  { id: "card-026-laskovoe-skolzhenie", title: "Ласковое скольжение", type: "card", age_from: 0, age_to: 24, category: "сон", tags: ["сон", "расслабление"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0026.jpg" },
  { id: "card-027-massazh-golovy", title: "Массаж головы", type: "card", age_from: 0, age_to: 24, category: "сон", tags: ["сон", "расслабление"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0027.jpg" },
  { id: "card-028-krestets", title: "Крестец", type: "card", age_from: 0, age_to: 24, category: "сон", tags: ["сон", "напряжение"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0028.jpg" },
  { id: "card-029-pokachivanie-na-kolenyah", title: "Покачивание на коленях", type: "card", age_from: 0, age_to: 24, category: "сон", tags: ["сон", "расслабление", "кормление"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0029.jpg" },
  { id: "card-030-uspokaivayuschee-polozhenie", title: "Успокаивающее положение", type: "card", age_from: 0, age_to: 24, category: "сон", tags: ["сон", "дискомфорт"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0030.jpg" },
  { id: "card-031-tihiy-ladoshki", title: "Тихие ладошки", type: "card", age_from: 0, age_to: 24, category: "сон", tags: ["сон", "расслабление"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0031.jpg" },
  { id: "card-032-veterki-spokoystviya", title: "Ветерки спокойствия", type: "card", age_from: 0, age_to: 24, category: "сон", tags: ["сон", "расслабление"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0032.jpg" },
  { id: "card-033-zigzag-po-spinke", title: "Зигзаг по спинке", type: "card", age_from: 0, age_to: 24, category: "сон", tags: ["сон", "расслабление"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0033.jpg" },

  // ===== ДЫХАНИЕ / ЗАЛОЖЕННОСТЬ =====
  { id: "card-034-kruzhochki-po-spinke", title: "Кружочки по спинке", type: "card", age_from: 0, age_to: 24, category: "дыхание", tags: ["дыхание", "заложенность", "кашель"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0034.jpg" },
  { id: "card-035-bolshoe-serdtse", title: "Большое сердце", type: "card", age_from: 0, age_to: 24, category: "дыхание", tags: ["дыхание"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0035.jpg" },
  { id: "card-036-babochka", title: "Бабочка", type: "card", age_from: 0, age_to: 24, category: "дыхание", tags: ["дыхание", "грудная клетка"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0036.jpg" },
  { id: "card-037-otkrytaya-knizhka", title: "Открытая книжка", type: "card", age_from: 0, age_to: 24, category: "дыхание", tags: ["дыхание"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0037.jpg" },
  { id: "card-038-kapelki-zaboty", title: "Капельки заботы", type: "card", age_from: 0, age_to: 24, category: "дыхание", tags: ["дыхание", "расслабление"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0038.jpg" },
  { id: "card-039-bokovoy-skolzhok", title: "Боковой скользок", type: "card", age_from: 0, age_to: 24, category: "дыхание", tags: ["дыхание", "лимфоток", "отёк"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0039.jpg" },
  { id: "card-040-nosik-svobodno", title: "Носик свободно", type: "card", age_from: 0, age_to: 24, category: "дыхание", tags: ["дыхание", "заложенность"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0040.jpg" },
  { id: "card-041-dorozhka-svezhego-dyhaniya", title: "Дорожка свежего дыхания", type: "card", age_from: 0, age_to: 24, category: "дыхание", tags: ["дыхание"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0041.jpg" },

  // ===== ГАЗИКИ / КОЛИКИ / ПИЩЕВАРЕНИЕ =====
  { id: "card-042-tyoplye-palchiki", title: "Тёплые пальчики", type: "card", age_from: 0, age_to: 6, category: "газики", tags: ["газики", "колики", "расслабление"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0042.jpg" },
  { id: "card-043-bokovoy-shtrih", title: "Боковой штрих", type: "card", age_from: 0, age_to: 6, category: "газики", tags: ["газики", "колики", "кишечник"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0043.jpg" },
  { id: "card-044-krugi-na-stopah", title: "Круги на стопах", type: "card", age_from: 0, age_to: 6, category: "газики", tags: ["газики", "колики", "живот"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0044.jpg" },
  { id: "card-045-krugi-vokrug-schikolotok", title: "Круги вокруг щиколоток", type: "card", age_from: 0, age_to: 6, category: "газики", tags: ["газики", "колики", "кровообращение"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0045.jpg" },
  { id: "card-046-poglazhivanie-stop", title: "Поглаживание стоп", type: "card", age_from: 0, age_to: 6, category: "газики", tags: ["газики", "колики", "пищеварение"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0046.jpg" },
  { id: "card-047-tochka-spokoystviya-2", title: "Точка спокойствия (перед сном)", type: "card", age_from: 0, age_to: 24, category: "сон", tags: ["сон", "расслабление"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0047.jpg" },
  { id: "card-048-krugovye-poglazhivaniya", title: "Круговые поглаживания", type: "card", age_from: 0, age_to: 6, category: "газики", tags: ["газики", "колики", "живот"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0048.jpg" },
  { id: "card-049-palchikovyy-krug", title: "Пальчиковый круг", type: "card", age_from: 0, age_to: 6, category: "газики", tags: ["газики", "колики", "кишечник"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0049.jpg" },
  { id: "card-050-solnechnye-ladoshki", title: "Солнечные ладошки", type: "card", age_from: 0, age_to: 6, category: "газики", tags: ["газики", "колики", "пищеварение"], stage: null, url: "/Bati_babytime_20250913_161711_0000_page-0050.jpg" },
];

var KEYWORD_CATEGORY_MAP = [
  { keywords: ["колик"], category: "колики" },
  { keywords: ["газик", "пучит", "вздут"], category: "газики" },
  { keywords: ["спать", "сон", "уклад", "просыпа", "засып"], category: "сон" },
  { keywords: ["прикорм", "еда", "кормит", "питание"], category: "прикорм" },
  { keywords: ["переворот", "развит", "скачок", "моторик"], category: "развитие" },
  { keywords: ["температур", "жар", "градус"], category: "температура" },
  { keywords: ["зуб", "прорезыва"], category: "зубы" },
  { keywords: ["кашель", "заложен", "насморк", "дыш", "дыхан"], category: "дыхание" }
];

var SYMPTOM_KEYWORDS = [
  "плач", "капризнича", "температур", "рвот", "понос", "судорог",
  "вял", "не спит", "не ест", "кричит", "кашель", "заложен"
];

var STAGE_KEYWORDS = [
  { keywords: ["скачок", "кризис", "регресс"], stage: "скачок роста" },
  { keywords: ["первый прикорм", "начал", "старт прикорма"], stage: "старт прикорма" },
  { keywords: ["переворот", "ползать", "садится"], stage: "моторное развитие" }
];

function detectCategory(question) {
  var lower = question.toLowerCase();
  for (var i = 0; i < KEYWORD_CATEGORY_MAP.length; i++) {
    var entry = KEYWORD_CATEGORY_MAP[i];
    for (var j = 0; j < entry.keywords.length; j++) {
      if (lower.indexOf(entry.keywords[j]) !== -1) {
        return entry.category;
      }
    }
  }
  return null;
}

function detectSymptoms(question) {
  var lower = question.toLowerCase();
  var found = [];
  for (var i = 0; i < SYMPTOM_KEYWORDS.length; i++) {
    if (lower.indexOf(SYMPTOM_KEYWORDS[i]) !== -1) {
      found.push(SYMPTOM_KEYWORDS[i]);
    }
  }
  return found;
}

function detectStage(question) {
  var lower = question.toLowerCase();
  for (var i = 0; i < STAGE_KEYWORDS.length; i++) {
    var entry = STAGE_KEYWORDS[i];
    for (var j = 0; j < entry.keywords.length; j++) {
      if (lower.indexOf(entry.keywords[j]) !== -1) {
        return entry.stage;
      }
    }
  }
  return null;
}

function parseAgeMonths(childAgeText) {
  if (!childAgeText) return null;
  var match = childAgeText.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : null;
}

function scoreItem(item, category, symptoms, stage, lowerQuestion) {
  var score = 0;

  if (category && item.category === category) {
    score += 10;
  }

  for (var s = 0; s < symptoms.length; s++) {
    if (item.tags.indexOf(symptoms[s]) !== -1) {
      score += 5;
    }
  }

  if (stage && item.stage === stage) {
    score += 4;
  }

  for (var t = 0; t < item.tags.length; t++) {
    if (lowerQuestion.indexOf(item.tags[t]) !== -1) {
      score += 2;
    }
  }

  return score;
}

export function findRelevantMaterials(question, childAgeText, cardLimit) {
  cardLimit = cardLimit || 2;

  if (!CONTENT_LIBRARY || CONTENT_LIBRARY.length === 0) {
    return { cards: [], premiumBundle: null };
  }

  var category = detectCategory(question);
  var symptoms = detectSymptoms(question);
  var stage = detectStage(question);
  var ageMonths = parseAgeMonths(childAgeText);
  var lowerQuestion = question.toLowerCase();

  var scoredCards = [];
  var scoredBundles = [];

  for (var i = 0; i < CONTENT_LIBRARY.length; i++) {
    var item = CONTENT_LIBRARY[i];

    if (ageMonths != null) {
      if (ageMonths < item.age_from || ageMonths > item.age_to) {
        continue;
      }
    }

    var score = scoreItem(item, category, symptoms, stage, lowerQuestion);
    if (score <= 0) {
      continue;
    }

    if (item.type === "premium_bundle") {
      scoredBundles.push({ item: item, score: score });
    } else {
      scoredCards.push({ item: item, score: score });
    }
  }

  scoredCards.sort(function (a, b) { return b.score - a.score; });
  scoredBundles.sort(function (a, b) { return b.score - a.score; });

  var cards = [];
  for (var r = 0; r < Math.min(cardLimit, scoredCards.length); r++) {
    cards.push(scoredCards[r].item);
  }

  var premiumBundle = scoredBundles.length > 0 ? scoredBundles[0].item : null;

  return { cards: cards, premiumBundle: premiumBundle };
}
