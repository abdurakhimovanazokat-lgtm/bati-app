// api/bati-brain.js
// Serverless-функция Vercel. Единственное место, где используется API-ключ.
// Ключ никогда не попадает в браузер и никогда не пишется в код.

import { buildSystemPrompt, buildUserMessage, MODEL, MAX_TOKENS } from '../lib/batiBrainPrompt.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Только POST запросы' });
  }

  const { question, childAgeText } = req.body || {};

  if (!question || typeof question !== 'string' || question.trim().length === 0) {
    return res.status(400).json({ error: 'Вопрос не передан' });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: 'API-ключ не настроен на сервере' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: MAX_TOKENS,
        system: buildSystemPrompt(),
        messages: [{ role: 'user', content: buildUserMessage(question.trim(), childAgeText) }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Anthropic error:', data);
      return res.status(502).json({ error: 'AI временно недоступен, попробуйте ещё раз' });
    }

    const answer = data.content?.[0]?.text || 'Извините, не получилось сформировать ответ.';
    return res.status(200).json({ answer });

  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Ошибка сервера' });
  }
}
