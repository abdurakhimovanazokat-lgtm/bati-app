
// lib/contentLibrary.js
// Единственный источник практических материалов BATI.
// AI Brain не придумывает техники — он только находит и ранжирует материалы отсюда.
//
// ДВА УРОВНЯ КОНТЕНТА:
//   Level 1 (бесплатно) — type: "card"            — отдельная карточка-картинка
//   Level 2 (BATI Plus) — type: "premium_bundle"   — полный гид по теме
//
// Позже добавятся type: "video", "checklist" — они автоматически попадут
// в бесплатный уровень (как card) без изменения логики ниже, если понадобится
// сделать их премиум — достаточно использовать type: "premium_bundle" или
// завести отдельный уровень так же, как сделано для premium_bundle.
//
// РЕЖИМ 1 (сейчас): библиотека наполняется карточками из PDF.
// Пока карточек нет — BATI Brain честно сообщает об отсутствии материала.

export const CONTENT_LIBRARY = [
  // Пример бесплатной карточки:
  //
  // {
  //   id: "card-colic-001",
  //   title: "Массаж животика при коликах",
  //   type: "card",
  //   age_from: 0,
  //   age_to: 6,
  //   category: "колики",
  //   tags: ["колики", "газики", "живот", "плач"],
  //   stage: null,
  //   url: "/content/cards/card-colic-001.webp"
  // },
  //
  // Пример Premium-гида по теме целиком:
  //
  // {
  //   id: "premium-colic-guide",
  //   title: "Колики",
  //   type: "premium_bundle",
  //   age_from: 0,
  //   age_to: 6,
  //   category: "колики",
  //   tags: ["колики", "газики"],
  //   stage: null,
  //   url: "/content/premium/colic-guide.pdf"
  // },
];

var KEYWORD_CATEGORY_MAP = [
  { keywords: ["колик"], category: "колики" },
  { keywords: ["газик", "пучит", "вздут"], category: "газики" },
  { keywords: ["спать", "сон", "уклад", "просыпа", "засып"], category: "сон" },
  { keywords: ["прикорм", "еда", "кормит", "питание"], category: "прикорм" },
  { keywords: ["переворот", "развит", "скачок", "моторик"], category: "развитие" },
  { keywords: ["температур", "жар", "градус"], category: "температура" }
];

var SYMPTOM_KEYWORDS = [
  "плач", "капризнича", "температур", "рвот", "понос", "судорог",
  "вял", "не спит", "не ест", "кричит"
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
