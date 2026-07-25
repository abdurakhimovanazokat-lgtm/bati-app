// lib/contentLibrary.js
// Библиотека реальных материалов BATI.
// AI выбирает материалы ТОЛЬКО отсюда — никогда не придумывает названия.

export const CONTENT_LIBRARY = [
  {
    id: "video-massage-gas",
    title: "Массаж при газиках",
    type: "video",
    age_from: 0,
    age_to: 6,
    category: "газики",
    tags: ["газики", "колики", "живот", "плач"],
    premium: false,
    url: "/content/video-massage-gas"
  },
  {
    id: "card-overtired-signs",
    title: "Признаки переутомления малыша",
    type: "card",
    age_from: 0,
    age_to: 12,
    category: "сон",
    tags: ["сон", "переутомление", "капризы", "плач"],
    premium: false,
    url: "/content/card-overtired-signs"
  },
  {
    id: "ritual-calm-bedtime",
    title: "Спокойное укладывание",
    type: "ritual",
    age_from: 3,
    age_to: 24,
    category: "сон",
    tags: ["сон", "укладывание", "режим"],
    premium: true,
    url: "/content/ritual-calm-bedtime"
  },
  {
    id: "video-development-leaps",
    title: "Скачки развития: что происходит с малышом",
    type: "video",
    age_from: 0,
    age_to: 24,
    category: "развитие",
    tags: ["развитие", "скачки роста", "капризы"],
    premium: false,
    url: "/content/video-development-leaps"
  },
  {
    id: "article-first-foods",
    title: "С чего начать прикорм",
    type: "article",
    age_from: 4,
    age_to: 8,
    category: "прикорм",
    tags: ["прикорм", "питание", "еда"],
    premium: false,
    url: "/content/article-first-foods"
  },
  {
    id: "card-tummy-time",
    title: "Как правильно делать tummy time",
    type: "card",
    age_from: 0,
    age_to: 6,
    category: "развитие",
    tags: ["развитие", "моторика", "живот"],
    premium: false,
    url: "/content/card-tummy-time"
  }
];

const KEYWORD_CATEGORY_MAP = [
  { keywords: ["газик", "колик", "живот", "пучит"], category: "газики" },
  { keywords: ["спать", "сон", "уклад", "просыпа"], category: "сон" },
  { keywords: ["прикорм", "еда", "кормит", "питание"], category: "прикорм" },
  { keywords: ["переворот", "развит", "скачок", "моторик"], category: "развитие" }
];

function detectCategory(question) {
  const lower = question.toLowerCase();
  for (const entry of KEYWORD_CATEGORY_MAP) {
    if (entry.keywords.some(kw => lower.includes(kw))) {
      return entry.category;
    }
  }
  return null;
}

function parseAgeMonths(childAgeText) {
  if (!childAgeText) return null;
  const match = childAgeText.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : null;
}

// Возвращает до limit подходящих материалов по вопросу и возрасту.
export function findRelevantMaterials(question, childAgeText, limit = 2) {
  const category = detectCategory(question);
  const ageMonths = parseAgeMonths(childAgeText);

  return CONTENT_LIBRARY.filter(item => {
    const categoryMatch = !category || item.category === category;
    const ageMatch = ageMonths == null || (ageMonths >= item.age_from && ageMonths <= item.age_to);
    return categoryMatch && ageMatch;
  }).slice(0, limit);
}
