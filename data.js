window.BENCH = {
 "updated": "2026-11-04",
 "tests": [
  {
   "id": "shop",
   "title": "Тест 1 · Магазин",
   "share": 0.2,
   "lang": "Python",
   "desc": "Учебный сервис заказов (3 файла, ~150 строк) с заложенными ошибками и ловушками — правильным кодом, похожим на ошибку. Лёгкий: отсеивает слабые модели.",
   "ideal": 76.59,
   "families": 17,
   "serious": 4,
   "units": [
    {
     "id": "G1",
     "kind": "finding",
     "weight": 3,
     "title": "купон — доля, apply_discount ждёт проценты; итог float",
     "where": "pricing.py:10-14, orders.py:54",
     "value": 9.53,
     "families": 16,
     "models": {
      "MiMo V2.6 Pro": 1.0,
      "Muse Wonder": 1.0,
      "Claude Opus 4.6": 0.5,
      "Qwen 3.8 Max Prime": 1.0,
      "Step 5 Preview": 0.5,
      "Muse Spark": 0.5,
      "Nemotron 3.5 Lightning 30B": 0.5,
      "GPT-6.1 Terra Pro": 1.0,
      "Nemotron 3 Ultra": 0.5,
      "Mistral Large 4": 0.5,
      "GPT-OSS 120B": 1.0,
      "DeepSeek V4 Pro": null,
      "Ministral 14B": 0.5,
      "GPT-6.1 Sol": 1.0,
      "Gemini 3.1 Pro": 0.5,
      "Command A+": 1.0,
      "DeepSeek V4.1 Flash": 0.5,
      "MiniMax M3": 1.0,
      "GLM 5.3 Prime": 1.0,
      "Gemini Argon · high": 1.0,
      "Kimi K3.1 Pro": 1.0,
      "Gemini Argon · medium": 1.0,
      "North Mini Code": 0.5,
      "LFM 2.5 2.6B": 0,
      "Gemini 3.8 Flash": 1.0,
      "Muse Glimmer 30B": 1.0,
      "GPT-OSS 20B": 0.5,
      "Mistral Medium 3.5": 0.5,
      "Codestral": 0.5,
      "Grok 4.7": 1.0,
      "Claude Opus 5.5": 1.0,
      "Claude Sonnet 5.5": 1.0,
      "Claude Haiku 5.5": 1.0
     }
    },
    {
     "id": "G2",
     "kind": "finding",
     "weight": 3,
     "title": "date >= datetime — TypeError на любом купоне",
     "where": "pricing.py:25-27",
     "value": 9.53,
     "families": 16,
     "models": {
      "MiMo V2.6 Pro": 1.0,
      "Muse Wonder": 1.0,
      "Claude Opus 4.6": 1.0,
      "Qwen 3.8 Max Prime": 1.0,
      "Step 5 Preview": 1.0,
      "Muse Spark": 1.0,
      "Ministral 3B": 0,
      "Nemotron 3.5 Lightning 30B": 1.0,
      "GPT-6.1 Terra Pro": 1.0,
      "Nemotron 3 Ultra": 1.0,
      "Mistral Large 4": 1.0,
      "GPT-OSS 120B": 1.0,
      "DeepSeek V4 Pro": null,
      "Ministral 14B": 0,
      "GPT-6.1 Sol": 1.0,
      "Laguna XS 2.1": 1.0,
      "Gemini 3.1 Pro": 1.0,
      "Command A+": 1.0,
      "DeepSeek V4.1 Flash": 1.0,
      "MiniMax M3": 1.0,
      "GLM 5.3 Prime": 1.0,
      "Gemini Argon · high": 1.0,
      "Kimi K3.1 Pro": 1.0,
      "Gemini Argon · medium": 1.0,
      "North Mini Code": 1.0,
      "Gemini 3.8 Flash": 1.0,
      "Muse Glimmer 30B": 1.0,
      "GPT-OSS 20B": 1.0,
      "Mistral Medium 3.5": 1.0,
      "Grok 4.7": 1.0,
      "Claude Opus 5.5": 1.0,
      "Claude Sonnet 5.5": 1.0,
      "Claude Haiku 5.5": 1.0
     }
    },
    {
     "id": "G15",
     "kind": "finding",
     "weight": 3,
     "title": "проверка остатка вне блокировки",
     "where": "orders.py:27-31",
     "value": 9.53,
     "families": 16,
     "models": {
      "MiMo V2.6 Pro": 1.0,
      "Muse Wonder": 1.0,
      "Claude Opus 4.6": 1.0,
      "Qwen 3.8 Max Prime": 1.0,
      "Step 5 Preview": 1.0,
      "Muse Spark": 1.0,
      "Nemotron 3.5 Lightning 30B": 1.0,
      "GPT-6.1 Terra Pro": 1.0,
      "Nemotron 3 Ultra": 1.0,
      "Mistral Large 4": 1.0,
      "GPT-OSS 120B": 1.0,
      "DeepSeek V4 Pro": null,
      "Ministral 8B": 0,
      "GPT-6.1 Sol": 1.0,
      "Laguna XS 2.1": 1.0,
      "Gemini 3.1 Pro": 1.0,
      "DeepSeek V4.1 Flash": 1.0,
      "MiniMax M3": 1.0,
      "GLM 5.3 Prime": 1.0,
      "Gemini Argon · high": 1.0,
      "Kimi K3.1 Pro": 1.0,
      "Gemini Argon · medium": 1.0,
      "North Mini Code": 1.0,
      "Gemini 3.8 Flash": 1.0,
      "Muse Glimmer 30B": 1.0,
      "GPT-OSS 20B": 1.0,
      "Mistral Medium 3.5": 1.0,
      "Grok 4.7": 1.0,
      "Claude Opus 5.5": 1.0,
      "Claude Sonnet 5.5": 1.0,
      "Claude Haiku 5.5": 1.0
     }
    },
    {
     "id": "G4",
     "kind": "finding",
     "weight": 3,
     "title": "SQL-инъекция через email",
     "where": "storage.py:35-38",
     "value": 9.0,
     "families": 17,
     "models": {
      "MiMo V2.6 Pro": 1.0,
      "Muse Wonder": 1.0,
      "Claude Opus 4.6": 1.0,
      "Qwen 3.8 Max Prime": 1.0,
      "Step 5 Preview": 1.0,
      "Muse Spark": 1.0,
      "Ministral 3B": 1.0,
      "GPT-6.1 Terra Pro": 1.0,
      "Nemotron 3 Ultra": 1.0,
      "Mistral Large 4": 1.0,
      "GPT-OSS 120B": 1.0,
      "DeepSeek V4 Pro": null,
      "Ministral 14B": 1.0,
      "Ministral 8B": 1.0,
      "GPT-6.1 Sol": 1.0,
      "Laguna XS 2.1": 1.0,
      "Gemini 3.1 Pro": 1.0,
      "Command A+": 1.0,
      "DeepSeek V4.1 Flash": 1.0,
      "MiniMax M3": 1.0,
      "GLM 5.3 Prime": 1.0,
      "Gemini Argon · high": 1.0,
      "Kimi K3.1 Pro": 1.0,
      "Gemini Argon · medium": 1.0,
      "North Mini Code": 1.0,
      "LFM 2.5 2.6B": 1.0,
      "Gemini 3.8 Flash": 1.0,
      "Muse Glimmer 30B": 1.0,
      "GPT-OSS 20B": 1.0,
      "Mistral Medium 3.5": 1.0,
      "Codestral": 1.0,
      "Grok 4.7": 1.0,
      "Claude Opus 5.5": 1.0,
      "Claude Sonnet 5.5": 1.0,
      "Claude Haiku 5.5": 1.0
     }
    },
    {
     "id": "B1",
     "kind": "better",
     "weight": 2,
     "title": "пагинация в SQL (LIMIT/OFFSET) — снимает лишнюю запись на странице и отрицательный сдвиг, не грузит всё в память",
     "where": "",
     "value": 4.94,
     "families": 6,
     "models": {
      "Qwen 3.8 Max Prime": null,
      "Muse Spark": null,
      "GPT-6.1 Terra Pro": null,
      "GPT-6.1 Sol": null,
      "MiniMax M3": null,
      "Gemini Argon · high": null,
      "Claude Opus 5.5": null,
      "Claude Sonnet 5.5": null
     }
    },
    {
     "id": "G24",
     "kind": "finding",
     "weight": 2,
     "title": "нет проверки qty > 0",
     "where": "orders.py:43-45",
     "value": 3.71,
     "families": 13,
     "models": {
      "MiMo V2.6 Pro": 1.0,
      "Muse Wonder": 1.0,
      "Qwen 3.8 Max Prime": 1.0,
      "Step 5 Preview": 1.0,
      "Muse Spark": 1.0,
      "Nemotron 3.5 Bolt E4B": 0,
      "GPT-6.1 Terra Pro": 1.0,
      "Nemotron 3 Ultra": 0.5,
      "Mistral Large 4": 1.0,
      "DeepSeek V4 Pro": null,
      "GPT-6.1 Sol": 1.0,
      "Gemini 3.1 Pro": 0.5,
      "DeepSeek V4.1 Flash": 1.0,
      "MiniMax M3": 1.0,
      "Gemini Argon · high": 1.0,
      "Kimi K3.1 Pro": 1.0,
      "Gemini Argon · medium": 1.0,
      "Mistral Medium 3.5": 0.5,
      "Codestral": 0.5,
      "Grok 4.7": 1.0,
      "Claude Opus 5.5": 1.0,
      "Claude Sonnet 5.5": 1.0,
      "Claude Haiku 5.5": 1.0
     }
    },
    {
     "id": "B5",
     "kind": "better",
     "weight": 2,
     "title": "атомарный условный UPDATE статуса — снимает повторный возврат, возврат товара до смены статуса и гонку",
     "where": "",
     "value": 3.71,
     "families": 13,
     "models": {
      "MiMo V2.6 Pro": null,
      "Muse Wonder": null,
      "Qwen 3.8 Max Prime": null,
      "Step 5 Preview": null,
      "GPT-6.1 Terra Pro": null,
      "Mistral Large 4": null,
      "GPT-6.1 Sol": null,
      "DeepSeek V4.1 Flash": null,
      "MiniMax M3": null,
      "GLM 5.3 Prime": null,
      "Gemini Argon · high": null,
      "Kimi K3.1 Pro": null,
      "Gemini Argon · medium": null,
      "Gemini 3.8 Flash": null,
      "Grok 4.7": null,
      "Claude Opus 5.5": null,
      "Claude Sonnet 5.5": null,
      "Claude Haiku 5.5": null
     }
    },
    {
     "id": "G23",
     "kind": "finding",
     "weight": 2,
     "title": "резерв не возвращается при сбое после резервирования",
     "where": "orders.py:41-59",
     "value": 3.53,
     "families": 14,
     "models": {
      "MiMo V2.6 Pro": 1.0,
      "Muse Wonder": 1.0,
      "Qwen 3.8 Max Prime": 1.0,
      "Step 5 Preview": 1.0,
      "GPT-6.1 Terra Pro": 1.0,
      "Nemotron 3 Ultra": 1.0,
      "Mistral Large 4": 0.5,
      "DeepSeek V4 Pro": null,
      "Ministral 14B": 0,
      "GPT-6.1 Sol": 1.0,
      "Gemini 3.1 Pro": 1.0,
      "MiniMax M3": 1.0,
      "GLM 5.3 Prime": 1.0,
      "Gemini Argon · high": 1.0,
      "Kimi K3.1 Pro": 1.0,
      "Gemini Argon · medium": 1.0,
      "Gemini 3.8 Flash": 0,
      "Muse Glimmer 30B": 1.0,
      "Grok 4.7": 1.0,
      "Claude Opus 5.5": 1.0,
      "Claude Sonnet 5.5": 1.0,
      "Claude Haiku 5.5": 1.0
     }
    },
    {
     "id": "G3",
     "kind": "finding",
     "weight": 2,
     "title": "> вместо >= для бесплатной доставки",
     "where": "pricing.py:21-23",
     "value": 3.18,
     "families": 16,
     "models": {
      "MiMo V2.6 Pro": 1.0,
      "Muse Wonder": 1.0,
      "Claude Opus 4.6": 1.0,
      "Qwen 3.8 Max Prime": 1.0,
      "Step 5 Preview": 1.0,
      "Muse Spark": 1.0,
      "Nemotron 3.5 Lightning 30B": 1.0,
      "GPT-6.1 Terra Pro": 1.0,
      "Nemotron 3 Ultra": 1.0,
      "Mistral Large 4": 1.0,
      "GPT-OSS 120B": 1.0,
      "DeepSeek V4 Pro": null,
      "GPT-6.1 Sol": 1.0,
      "Laguna XS 2.1": 1.0,
      "Gemini 3.1 Pro": 1.0,
      "Command A+": 1.0,
      "DeepSeek V4.1 Flash": 1.0,
      "MiniMax M3": 1.0,
      "GLM 5.3 Prime": 1.0,
      "Gemini Argon · high": 1.0,
      "Kimi K3.1 Pro": 1.0,
      "Gemini Argon · medium": 1.0,
      "North Mini Code": 1.0,
      "Gemini 3.8 Flash": 1.0,
      "Muse Glimmer 30B": 1.0,
      "GPT-OSS 20B": 1.0,
      "Mistral Medium 3.5": 1.0,
      "Grok 4.7": 1.0,
      "Claude Opus 5.5": 1.0,
      "Claude Sonnet 5.5": 1.0,
      "Claude Haiku 5.5": 1.0
     }
    },
    {
     "id": "G8",
     "kind": "finding",
     "weight": 2,
     "title": "лишний заказ на странице",
     "where": "storage.py:40-41",
     "value": 3.18,
     "families": 16,
     "models": {
      "MiMo V2.6 Pro": 1.0,
      "Muse Wonder": 1.0,
      "Claude Opus 4.6": 1.0,
      "Qwen 3.8 Max Prime": 1.0,
      "Step 5 Preview": 1.0,
      "Muse Spark": 1.0,
      "Ministral 3B": 1.0,
      "Nemotron 3.5 Lightning 30B": 1.0,
      "Nemotron 3.5 Bolt E4B": 1.0,
      "GPT-6.1 Terra Pro": 1.0,
      "Nemotron 3 Ultra": 1.0,
      "Mistral Large 4": 1.0,
      "GPT-OSS 120B": 1.0,
      "Ministral 14B": 1.0,
      "Ministral 8B": 1.0,
      "GPT-6.1 Sol": 1.0,
      "Laguna XS 2.1": 1.0,
      "Gemini 3.1 Pro": 1.0,
      "Command A+": 1.0,
      "DeepSeek V4.1 Flash": 1.0,
      "MiniMax M3": 1.0,
      "GLM 5.3 Prime": 1.0,
      "Gemini Argon · high": 1.0,
      "Kimi K3.1 Pro": 1.0,
      "Gemini Argon · medium": 1.0,
      "North Mini Code": 1.0,
      "Gemini 3.8 Flash": 1.0,
      "Muse Glimmer 30B": 1.0,
      "GPT-OSS 20B": 1.0,
      "Mistral Medium 3.5": 1.0,
      "Codestral": 1.0,
      "Grok 4.7": 1.0,
      "Claude Opus 5.5": 1.0,
      "Claude Sonnet 5.5": 1.0,
      "Claude Haiku 5.5": 1.0
     }
    },
    {
     "id": "G17",
     "kind": "finding",
     "weight": 2,
     "title": "tags=[] по умолчанию",
     "where": "orders.py:37",
     "value": 3.18,
     "families": 16,
     "models": {
      "MiMo V2.6 Pro": 1.0,
      "Muse Wonder": 1.0,
      "Claude Opus 4.6": 1.0,
      "Qwen 3.8 Max Prime": 1.0,
      "Step 5 Preview": 1.0,
      "Muse Spark": 1.0,
      "Ministral 3B": 0,
      "Nemotron 3.5 Lightning 30B": 0.5,
      "Nemotron 3.5 Bolt E4B": 0.5,
      "GPT-6.1 Terra Pro": 1.0,
      "Nemotron 3 Ultra": 0.5,
      "Mistral Large 4": 1.0,
      "GPT-OSS 120B": 1.0,
      "DeepSeek V4 Pro": null,
      "GPT-6.1 Sol": 1.0,
      "Laguna XS 2.1": 0.5,
      "Gemini 3.1 Pro": 1.0,
      "Command A+": 1.0,
      "DeepSeek V4.1 Flash": 1.0,
      "MiniMax M3": 1.0,
      "GLM 5.3 Prime": 1.0,
      "Gemini Argon · high": 1.0,
      "Kimi K3.1 Pro": 1.0,
      "Gemini Argon · medium": 1.0,
      "North Mini Code": 1.0,
      "Gemini 3.8 Flash": 1.0,
      "Muse Glimmer 30B": 1.0,
      "GPT-OSS 20B": 0.5,
      "Grok 4.7": 1.0,
      "Claude Opus 5.5": 1.0,
      "Claude Sonnet 5.5": 1.0,
      "Claude Haiku 5.5": 1.0
     }
    },
    {
     "id": "G21",
     "kind": "finding",
     "weight": 2,
     "title": "повторный возврат того же объекта",
     "where": "orders.py:61-67",
     "value": 3.18,
     "families": 16,
     "models": {
      "MiMo V2.6 Pro": 1.0,
      "Muse Wonder": 1.0,
      "Claude Opus 4.6": 1.0,
      "Qwen 3.8 Max Prime": 1.0,
      "Step 5 Preview": 1.0,
      "Muse Spark": 1.0,
      "GPT-6.1 Terra Pro": 1.0,
      "Nemotron 3 Ultra": 0,
      "Mistral Large 4": 1.0,
      "DeepSeek V4 Pro": null,
      "Ministral 14B": 0.5,
      "Ministral 8B": 0,
      "GPT-6.1 Sol": 1.0,
      "Gemini 3.1 Pro": 1.0,
      "Command A+": 1.0,
      "DeepSeek V4.1 Flash": 1.0,
      "MiniMax M3": 1.0,
      "GLM 5.3 Prime": 1.0,
      "Gemini Argon · high": 1.0,
      "Kimi K3.1 Pro": 1.0,
      "Gemini Argon · medium": 1.0,
      "North Mini Code": 0.5,
      "LFM 2.5 2.6B": 0,
      "Gemini 3.8 Flash": 1.0,
      "Muse Glimmer 30B": 1.0,
      "GPT-OSS 20B": 0,
      "Codestral": 0,
      "Grok 4.7": 1.0,
      "Claude Opus 5.5": 1.0,
      "Claude Sonnet 5.5": 1.0,
      "Claude Haiku 5.5": 1.0
     }
    },
    {
     "id": "B8",
     "kind": "better",
     "weight": 1,
     "title": "транзакция / контекст для резерва с откатом — резерв не теряется при сбое после резервирования",
     "where": "",
     "value": 1.82,
     "families": 3,
     "models": {
      "DeepSeek V4 Pro": null,
      "Ministral 14B": null,
      "MiniMax M3": null
     }
    },
    {
     "id": "G9",
     "kind": "finding",
     "weight": 1,
     "title": "page < 1 — отрицательный сдвиг среза",
     "where": "storage.py:31-41",
     "value": 1.76,
     "families": 4,
     "models": {
      "Mistral Large 4": null,
      "DeepSeek V4 Pro": null,
      "Ministral 14B": null,
      "Ministral 8B": null,
      "GLM 5.3 Prime": null,
      "Claude Opus 5.5": null
     }
    },
    {
     "id": "G22",
     "kind": "finding",
     "weight": 1,
     "title": "товар возвращается на склад до записи статуса",
     "where": "orders.py:64-66",
     "value": 1.76,
     "families": 4,
     "models": {
      "GPT-6.1 Terra Pro": null,
      "DeepSeek V4 Pro": null,
      "MiniMax M3": null,
      "Claude Opus 5.5": null,
      "Claude Sonnet 5.5": null,
      "Claude Haiku 5.5": null
     }
    },
    {
     "id": "G5",
     "kind": "finding",
     "weight": 1,
     "title": "% и _ в email не экранированы в LIKE",
     "where": "storage.py:36",
     "value": 1.47,
     "families": 9,
     "models": {
      "MiMo V2.6 Pro": null,
      "Muse Wonder": null,
      "Step 5 Preview": null,
      "GPT-6.1 Terra Pro": null,
      "GPT-6.1 Sol": null,
      "Laguna XS 2.1": null,
      "MiniMax M3": null,
      "GLM 5.3 Prime": null,
      "Grok 4.7": null,
      "Claude Opus 5.5": null,
      "Claude Haiku 5.5": null
     }
    },
    {
     "id": "G18",
     "kind": "finding",
     "weight": 1,
     "title": "tags.append меняет список вызывающего",
     "where": "orders.py:56",
     "value": 1.24,
     "families": 13,
     "models": {
      "MiMo V2.6 Pro": null,
      "Muse Wonder": null,
      "Claude Opus 4.6": null,
      "Step 5 Preview": null,
      "Muse Spark": null,
      "Nemotron 3 Ultra": null,
      "Mistral Large 4": null,
      "GPT-OSS 120B": null,
      "GPT-6.1 Sol": null,
      "Laguna XS 2.1": null,
      "Gemini 3.1 Pro": null,
      "MiniMax M3": null,
      "GLM 5.3 Prime": null,
      "Gemini Argon · high": null,
      "Kimi K3.1 Pro": null,
      "Gemini Argon · medium": null,
      "Muse Glimmer 30B": null,
      "Grok 4.7": null,
      "Claude Opus 5.5": null,
      "Claude Sonnet 5.5": null,
      "Claude Haiku 5.5": null
     }
    },
    {
     "id": "G19",
     "kind": "finding",
     "weight": 1,
     "title": "тег coupon у недействительного купона",
     "where": "orders.py:56",
     "value": 1.24,
     "families": 13,
     "models": {
      "MiMo V2.6 Pro": null,
      "Muse Wonder": null,
      "Claude Opus 4.6": null,
      "Step 5 Preview": null,
      "Muse Spark": null,
      "GPT-6.1 Terra Pro": null,
      "Nemotron 3 Ultra": null,
      "Mistral Large 4": null,
      "DeepSeek V4 Pro": null,
      "Ministral 14B": null,
      "Ministral 8B": null,
      "DeepSeek V4.1 Flash": null,
      "MiniMax M3": null,
      "GLM 5.3 Prime": null,
      "Gemini Argon · high": null,
      "Kimi K3.1 Pro": null,
      "Gemini Argon · medium": null,
      "North Mini Code": null,
      "Gemini 3.8 Flash": null,
      "GPT-OSS 20B": null,
      "Mistral Medium 3.5": null,
      "Claude Opus 5.5": null,
      "Claude Haiku 5.5": null
     }
    },
    {
     "id": "G7",
     "kind": "finding",
     "weight": 1,
     "title": "соединение не закрывается при отсутствии купона",
     "where": "storage.py:23-29",
     "value": 1.12,
     "families": 15,
     "models": {
      "MiMo V2.6 Pro": null,
      "Muse Wonder": null,
      "Claude Opus 4.6": null,
      "Qwen 3.8 Max Prime": null,
      "Step 5 Preview": null,
      "Muse Spark": null,
      "Ministral 3B": null,
      "GPT-6.1 Terra Pro": null,
      "Nemotron 3 Ultra": null,
      "Mistral Large 4": null,
      "GPT-OSS 120B": null,
      "DeepSeek V4 Pro": null,
      "Ministral 8B": null,
      "GPT-6.1 Sol": null,
      "Laguna XS 2.1": null,
      "Gemini 3.1 Pro": null,
      "DeepSeek V4.1 Flash": null,
      "MiniMax M3": null,
      "GLM 5.3 Prime": null,
      "Gemini Argon · high": null,
      "Kimi K3.1 Pro": null,
      "Gemini Argon · medium": null,
      "Gemini 3.8 Flash": null,
      "Grok 4.7": null,
      "Claude Opus 5.5": null,
      "Claude Sonnet 5.5": null,
      "Claude Haiku 5.5": null
     }
    }
   ],
   "falses": [
    {
     "title": "Отсутствие фильтрации по статусу заказа в методе find_orders",
     "where": "storage.py:36",
     "why": "фильтр по статусу спецификация не требует",
     "models": {
      "Ministral 3B": 9
     }
    },
    {
     "title": "Некорректная обработка или форматирование отрицательных сумм в функции fmt()",
     "where": "pricing.py:30-32",
     "why": "fmt верен для неотрицательных сумм",
     "models": {
      "Ministral 3B": 9
     }
    },
    {
     "title": "Погрешность округления или точности при вычислении налога в tax()",
     "where": "pricing.py:17-19",
     "why": "Decimal + ROUND_HALF_UP по спецификации",
     "models": {
      "Ministral 3B": 9
     }
    },
    {
     "title": "Некорректный порядок применения скидки и расчёта subtotal для налогов и доставки",
     "where": "orders.py:51-55",
     "why": "скидка уже до налога и доставки",
     "models": {
      "Ministral 3B": 9
     }
    },
    {
     "title": "Некорректное предположение о структуре кортежа items при распаковке в refund",
     "where": "orders.py:64-66",
     "why": "распаковка уже for sku, _, qty",
     "models": {
      "Ministral 3B": 9
     }
    },
    {
     "title": "Потенциальное состояние гонки при освобождении товара (release)",
     "where": "orders.py:35",
     "why": "release целиком под блокировкой",
     "models": {
      "Ministral 8B": 9
     }
    },
    {
     "title": "Потенциальная SQL-инъекция через подстановку параметра column в ORDER BY",
     "where": "storage.py:31-36",
     "why": "колонка из белого списка",
     "models": {
      "Nemotron 3.5 Bolt E4B": 3
     }
    },
    {
     "title": "Неверное имя столбца order_id вместо id в SQL-запросе set_status",
     "where": "storage.py:55",
     "why": "в коде WHERE id = ?",
     "models": {
      "North Mini Code": 3
     }
    }
   ]
  },
  {
   "id": "fetcher",
   "title": "Тест 2 · Загрузчик",
   "share": 0.4,
   "lang": "Kotlin, Android",
   "desc": "Реальный класс приложения (~600 строк): параллельная загрузка картинок из нескольких источников в запас с квотами, повторами и паузами. Версия до исправления реальных ошибок; в задании о них ни слова.",
   "ideal": 64.21,
   "families": 14,
   "serious": 1,
   "units": [
    {
     "id": "G15",
     "kind": "finding",
     "weight": 3,
     "title": "проверка предела до скачивания, добавление после — параллельные потоки переполняют запас («63 из 50»)",
     "where": "Fetcher.kt:509, 563",
     "value": 12.86,
     "families": 8,
     "models": {
      "GPT-6.1 Terra Pro": 1.0,
      "Qwen 3.8 Max Prime": 1.0,
      "MiniMax M3": 1.0,
      "GPT-6.1 Sol": 1.0,
      "Grok 4.7": 1.0,
      "Step 5 Preview": 1.0,
      "Kimi K3.1 Pro": 1.0,
      "Gemini Argon · medium": 1.0,
      "Claude Haiku 5.5": 1.0
     }
    },
    {
     "id": "G17",
     "kind": "finding",
     "weight": 2,
     "title": "«отстаёт» для исправного источника с малой долей / фильтрами — вечная догоняющая без предела",
     "where": "Fetcher.kt:245, 411-420",
     "value": 5.57,
     "families": 2,
     "models": {
      "Gemini Argon · medium": 1.0,
      "Claude Opus 5.5": 1.0
     }
    },
    {
     "id": "K5",
     "kind": "finding",
     "weight": 2,
     "title": "при запасе ≥ 80 % повтор отменяется — упавший источник не перепроверяется",
     "where": "Fetcher.kt:136, 418",
     "value": 5.14,
     "families": 4,
     "models": {
      "Gemini 3.8 Flash": 1.0,
      "GPT-6.1 Terra Pro": 0.5,
      "MiniMax M3": 1.0,
      "Gemini Argon · high": 0.5,
      "DeepSeek V4.1 Flash": 1.0
     }
    },
    {
     "id": "G13",
     "kind": "finding",
     "weight": 2,
     "title": "clearPool в checkScreenSize до проверок допуска — запас пуст до следующей разрешённой загрузки",
     "where": "Fetcher.kt:214, 244-248, 459",
     "value": 4.93,
     "families": 5,
     "models": {
      "GLM 5.3 Prime": 1.0,
      "Grok 4.7": 1.0,
      "Gemini Argon · high": 1.0,
      "Step 5 Preview": 0.5,
      "Claude Opus 5.5": 0.5,
      "Claude Haiku 5.5": 1.0
     }
    },
    {
     "id": "B3",
     "kind": "better",
     "weight": 2,
     "title": "одно состояние / координатор вместо пяти флагов — снимает гонки перезапуска и отмены и потерю запроса на загрузку",
     "where": "",
     "value": 4.71,
     "families": 6,
     "models": {
      "MiMo V2.6 Pro": null,
      "MiniMax M3": null,
      "GPT-6.1 Sol": null,
      "Grok 4.7": null,
      "Gemini Argon · high": null,
      "Claude Sonnet 5.5": null,
      "Claude Haiku 5.5": null
     }
    },
    {
     "id": "G26",
     "kind": "finding",
     "weight": 1,
     "title": "фильтры (18+) проверяются до скачивания, не при добавлении",
     "where": "Fetcher.kt:517-520, 560-567",
     "value": 1.93,
     "families": 1,
     "models": {
      "GPT-6.1 Terra Pro": null,
      "GPT-6.1 Sol": null
     }
    },
    {
     "id": "G27",
     "kind": "finding",
     "weight": 1,
     "title": "останов по cap/месту после одной неудачи — IOException, источник ложно «сломан»",
     "where": "Fetcher.kt:498, 509",
     "value": 1.93,
     "families": 1,
     "models": {
      "Claude Opus 5.5": null,
      "Claude Haiku 5.5": null
     }
    },
    {
     "id": "G28",
     "kind": "finding",
     "weight": 1,
     "title": "при проверке восстановившегося — два поиска подряд",
     "where": "Fetcher.kt:283-291",
     "value": 1.93,
     "families": 1,
     "models": {
      "Gemini 3.1 Pro": null
     }
    },
    {
     "id": "G37",
     "kind": "finding",
     "weight": 1,
     "title": "nextResume берёт только будущие паузы — готовый источник ждёт чужую",
     "where": "Fetcher.kt:68-72, 140-143",
     "value": 1.93,
     "families": 1,
     "models": {
      "MiniMax M3": null
     }
    },
    {
     "id": "G46",
     "kind": "finding",
     "weight": 1,
     "title": "scheduleRetry не смотрит место на диске — холостые повторы",
     "where": "Fetcher.kt:132-144",
     "value": 1.93,
     "families": 1,
     "models": {
      "DeepSeek V4 Pro": null
     }
    },
    {
     "id": "G49",
     "kind": "finding",
     "weight": 1,
     "title": "отсеянные по цвету / дубликаты не считаются в ok — одна битая картинка объявляет рабочий источник сломанным",
     "where": "Fetcher.kt:498-500, 545-559, 574",
     "value": 1.93,
     "families": 1,
     "models": {
      "Claude Sonnet 5.5": null,
      "Claude Opus 5.5": null
     }
    },
    {
     "id": "B6",
     "kind": "better",
     "weight": 1,
     "title": "временный файл + rename после addUnique — недописанный файл не остаётся в запасе",
     "where": "",
     "value": 1.93,
     "families": 1,
     "models": {
      "MiMo V2.6 Pro": null
     }
    },
    {
     "id": "B8",
     "kind": "better",
     "weight": 1,
     "title": "проверка упавших источников отдельным шагом до квот — упавший перепроверяется и при полном запасе",
     "where": "",
     "value": 1.93,
     "families": 1,
     "models": {
      "DeepSeek V4.1 Flash": null
     }
    },
    {
     "id": "G22",
     "kind": "finding",
     "weight": 1,
     "title": "нет раннего выхода при серии сетевых ошибок — перебор всех кандидатов по таймаутам",
     "where": "Fetcher.kt:508-592",
     "value": 1.86,
     "families": 2,
     "models": {
      "Gemini Argon · high": null,
      "Claude Sonnet 5.5": null
     }
    },
    {
     "id": "G25",
     "kind": "finding",
     "weight": 1,
     "title": "избыток NSFW у Wallhaven не вычитается — квота источника превышается",
     "where": "Fetcher.kt:317-321",
     "value": 1.86,
     "families": 2,
     "models": {
      "MiniMax M3": null,
      "Gemini Argon · high": null
     }
    },
    {
     "id": "G12",
     "kind": "finding",
     "weight": 1,
     "title": "onAvailable не учитывает догоняющую",
     "where": "Fetcher.kt:177-182",
     "value": 1.79,
     "families": 3,
     "models": {
      "GLM 5.3 Prime": null,
      "Gemini Argon · high": null,
      "Muse Spark": null
     }
    },
    {
     "id": "G6",
     "kind": "finding",
     "weight": 1,
     "title": "testSource с неизвестным ключом не вызывает done",
     "where": "Fetcher.kt:391-394",
     "value": 1.71,
     "families": 4,
     "models": {
      "Gemini 3.8 Flash": null,
      "Qwen 3.8 Max Prime": null,
      "Grok 4.7": null,
      "Gemini Argon · high": null,
      "Kimi K3.1 Pro": null
     }
    },
    {
     "id": "G8",
     "kind": "finding",
     "weight": 1,
     "title": "refill из «Проверить» теряется, если загрузка уже идёт",
     "where": "Fetcher.kt:205, 402",
     "value": 1.71,
     "families": 4,
     "models": {
      "GPT-6.1 Terra Pro": null,
      "Grok 4.7": null,
      "Gemini Argon · high": null,
      "Claude Sonnet 5.5": null,
      "Gemini Argon · medium": null
     }
    },
    {
     "id": "G5",
     "kind": "finding",
     "weight": 1,
     "title": "результат compress не проверяется",
     "where": "Fetcher.kt:561",
     "value": 1.43,
     "families": 8,
     "models": {
      "MiMo V2.6 Pro": null,
      "Qwen 3.8 Max Prime": null,
      "MiniMax M3": null,
      "Grok 4.7": null,
      "Gemini Argon · high": null,
      "Step 5 Preview": null,
      "Kimi K3.1 Pro": null,
      "Claude Sonnet 5.5": null,
      "Claude Opus 5.5": null
     }
    },
    {
     "id": "G18",
     "kind": "finding",
     "weight": 1,
     "title": "parallel глотает исключения задач (в т.ч. OOM)",
     "where": "Fetcher.kt:364-366",
     "value": 1.43,
     "families": 8,
     "models": {
      "GPT-6.1 Terra Pro": null,
      "Qwen 3.8 Max Prime": null,
      "Gemini Argon · high": null,
      "Step 5 Preview": null,
      "Kimi K3.1 Pro": null,
      "Nemotron 3 Ultra": null,
      "Mistral Large 4": null,
      "Claude Sonnet 5.5": null,
      "Claude Haiku 5.5": null
     }
    },
    {
     "id": "G2",
     "kind": "finding",
     "weight": 1,
     "title": "cancel.set(false) в начале задачи стирает отмену, выставленную до старта",
     "where": "Fetcher.kt:193-195, 205-210",
     "value": 1.36,
     "families": 9,
     "models": {
      "MiMo V2.6 Pro": null,
      "GPT-6.1 Terra Pro": null,
      "Qwen 3.8 Max Prime": null,
      "GLM 5.3 Prime": null,
      "MiniMax M3": null,
      "Step 5 Preview": null,
      "Muse Spark": null,
      "DeepSeek V4.1 Flash": null,
      "DeepSeek V4 Pro": null,
      "Claude Sonnet 5.5": null,
      "Claude Haiku 5.5": null
     }
    },
    {
     "id": "G1",
     "kind": "finding",
     "weight": 1,
     "title": "restartPending теряется / повисает на стыке running.set(false) и проверки",
     "where": "Fetcher.kt:192-200, 223-228",
     "value": 1.29,
     "families": 10,
     "models": {
      "MiMo V2.6 Pro": null,
      "Qwen 3.8 Max Prime": null,
      "MiniMax M3": null,
      "GPT-6.1 Sol": null,
      "Grok 4.7": null,
      "Gemini Argon · high": null,
      "Muse Spark": null,
      "Nemotron 3 Ultra": null,
      "Mistral Large 4": null,
      "Claude Sonnet 5.5": null,
      "Gemini Argon · medium": null,
      "Claude Opus 5.5": null,
      "Claude Haiku 5.5": null
     }
    },
    {
     "id": "K6",
     "kind": "finding",
     "weight": 1,
     "title": "файл в pool/ остаётся при сбое записи/addUnique",
     "where": "Fetcher.kt:560-573, 581-590",
     "value": 1.14,
     "families": 12,
     "models": {
      "Gemini 3.8 Flash": null,
      "MiMo V2.6 Pro": null,
      "Gemini 3.1 Pro": null,
      "GPT-6.1 Terra Pro": null,
      "Qwen 3.8 Max Prime": null,
      "GLM 5.3 Prime": null,
      "MiniMax M3": null,
      "GPT-6.1 Sol": null,
      "Grok 4.7": null,
      "Gemini Argon · high": null,
      "Step 5 Preview": null,
      "Muse Spark": null,
      "Kimi K3.1 Pro": null,
      "DeepSeek V4.1 Flash": null,
      "DeepSeek V4 Pro": null,
      "Claude Sonnet 5.5": null,
      "Claude Opus 5.5": null,
      "Claude Haiku 5.5": null
     }
    }
   ],
   "falses": [
    {
     "title": "Утечка сетевого колбэка: watchNetwork регистрирует NetworkCallback, но никогда не снимает регистрацию",
     "where": "Fetcher.kt:167-185",
     "why": "колбэк регистрируется один раз (watching) — не «копится»",
     "models": {
      "Nemotron 3 Ultra": 9
     }
    },
    {
     "title": "Вызов cur.getDelay() в setRetry после проверки !cur.isDone() подвержен гонке и может выбросить IllegalStateException при завершении задачи",
     "where": "Fetcher.kt:153-154",
     "why": "getDelay у завершённой задачи не бросает — вернёт ≤ 0",
     "models": {
      "Nemotron 3 Ultra": 3
     }
    },
    {
     "title": "Оптимизация обращений к SQLite: отказ от проверки Store.poolCount и переменной cap в цикле скачивания в пользу остановки по рассчитанной квоте",
     "where": "",
     "why": "«убрать cap — квот достаточно»: без предела было 225 из 200 (комментарий стр. 426)",
     "models": {
      "Gemini 3.1 Pro": 3
     }
    }
   ]
  },
  {
   "id": "astar",
   "title": "Тест 3 · Маршруты A*",
   "share": 0.4,
   "lang": "Python",
   "desc": "Реальный модуль планировщика (2 файла, ~1000 строк): поиск пути A* по сетке со стенами и платными воротами, склейка маршрута по точкам. Версия до исправления реальной ошибки.",
   "ideal": 46.92,
   "families": 13,
   "serious": 1,
   "units": [
    {
     "id": "G3",
     "kind": "finding",
     "weight": 3,
     "title": "окно поиска «старт/цель ± 40 клеток» отсекает обход длинной стены — путь есть, а ответ «нет маршрута»",
     "where": "pathfinder.py:359-366",
     "value": 11.77,
     "families": 9,
     "models": {
      "Gemini 3.1 Pro": 0.5,
      "DeepSeek V4.1 Flash": 0.5,
      "Gemini Argon · high": 0.5,
      "Nemotron 3 Ultra": 0.5,
      "Mistral Large 4": 0.5,
      "GPT-6.1 Sol": 0.5,
      "MiMo V2.6 Pro": 1.0,
      "GPT-6.1 Terra Pro": 0.5,
      "Kimi K3.1 Pro": 1.0,
      "Step 5 Preview": 0.5,
      "Claude Opus 5.5": 1.0,
      "Claude Haiku 5.5": 0.5,
      "Claude Sonnet 5.5": 1.0
     }
    },
    {
     "id": "G12",
     "kind": "finding",
     "weight": 2,
     "title": "_cells_near_segment перебирает весь bbox отрезка: длинная диагональ / большая толщина из веб-документа — секунды CPU и память",
     "where": "pathfinder.py:416-431",
     "value": 4.62,
     "families": 6,
     "models": {
      "Gemini 3.1 Pro": 1.0,
      "DeepSeek V4.1 Flash": 1.0,
      "Grok 4.7": 0.5,
      "Gemini Argon · high": 1.0,
      "Qwen 3.8 Max Prime": 1.0,
      "GPT-6.1 Sol": 1.0,
      "GPT-6.1 Terra Pro": 1.0,
      "Gemini 3.8 Flash": 1.0,
      "Claude Opus 5.5": 1.0,
      "Claude Haiku 5.5": 1.0,
      "Claude Sonnet 5.5": 0.5
     }
    },
    {
     "id": "G1",
     "kind": "finding",
     "weight": 2,
     "title": "растеризация по одному сегменту: ворота пробивают ранее нарисованные стены, поздняя стена закрывает ворота — проходимость зависит от порядка",
     "where": "pathfinder.py:84-114",
     "value": 3.69,
     "families": 10,
     "models": {
      "Grok 4.7": 1.0,
      "Gemini Argon · high": 0.5,
      "Muse Spark": 0.5,
      "Qwen 3.8 Max Prime": 0.5,
      "Mistral Large 4": 0.5,
      "GPT-6.1 Sol": 1.0,
      "MiMo V2.6 Pro": 1.0,
      "GPT-6.1 Terra Pro": 1.0,
      "DeepSeek V4 Pro": 0.5,
      "Kimi K3.1 Pro": 1.0,
      "Gemini 3.8 Flash": 0.5,
      "Claude Opus 5.5": 0.5,
      "Claude Haiku 5.5": 1.0,
      "Claude Sonnet 5.5": 1.0,
      "Gemini Argon · medium": 0.5
     }
    },
    {
     "id": "G7",
     "kind": "finding",
     "weight": 2,
     "title": "при промежуточных точках каждый кусок с пустым paid, штрафы складываются — нарушено «once per path» из докстринга",
     "where": "planner.py:70, 83-94, 343",
     "value": 3.69,
     "families": 10,
     "models": {
      "Gemini 3.1 Pro": 1.0,
      "DeepSeek V4.1 Flash": 0.5,
      "Grok 4.7": 1.0,
      "Gemini Argon · high": 0.5,
      "Muse Spark": 1.0,
      "Qwen 3.8 Max Prime": 1.0,
      "GPT-6.1 Sol": 1.0,
      "MiMo V2.6 Pro": 1.0,
      "MiniMax M3": 1.0,
      "GPT-6.1 Terra Pro": 1.0,
      "DeepSeek V4 Pro": 1.0,
      "Kimi K3.1 Pro": 1.0,
      "Claude Opus 5.5": 1.0,
      "Claude Haiku 5.5": 1.0,
      "Claude Sonnet 5.5": 1.0,
      "Gemini Argon · medium": 1.0
     }
    },
    {
     "id": "G15",
     "kind": "finding",
     "weight": 1,
     "title": "forbidden из одной точки с воротами отбрасывается, хотя Pathfinder такие поддерживает",
     "where": "planner.py:524",
     "value": 1.85,
     "families": 2,
     "models": {
      "Qwen 3.8 Max Prime": null,
      "Gemini Argon · medium": null
     }
    },
    {
     "id": "G24",
     "kind": "finding",
     "weight": 1,
     "title": "fast == short: в «short» берётся геометрический путь без проверки, что он не длиннее",
     "where": "planner.py:410",
     "value": 1.85,
     "families": 2,
     "models": {
      "Grok 4.7": null,
      "Claude Haiku 5.5": null
     }
    },
    {
     "id": "B3",
     "kind": "better",
     "weight": 1,
     "title": "растеризация только в окне поиска / пространственный индекс — без перебора всей карты",
     "where": "",
     "value": 1.85,
     "families": 2,
     "models": {
      "GPT-6.1 Sol": null,
      "Kimi K3.1 Pro": null
     }
    },
    {
     "id": "G8",
     "kind": "finding",
     "weight": 1,
     "title": "_mid_path_block накрывает 5×5 и соседей промежуточной точки — альтернативный коридор молча не строится",
     "where": "planner.py:187-201, 311-321",
     "value": 1.77,
     "families": 3,
     "models": {
      "Gemini 3.1 Pro": null,
      "Gemini Argon · high": null,
      "MiMo V2.6 Pro": null,
      "Gemini 3.8 Flash": null,
      "Claude Sonnet 5.5": null
     }
    },
    {
     "id": "G4",
     "kind": "finding",
     "weight": 1,
     "title": "start/goal не проверяются на _blocked: точка в тонкой стене даёт пройти сквозь неё; из толстой полосы не выйти",
     "where": "pathfinder.py:169-174, 296-301",
     "value": 1.69,
     "families": 4,
     "models": {
      "Gemini Argon · high": null,
      "GPT-6.1 Sol": null,
      "GPT-6.1 Terra Pro": null,
      "DeepSeek V4 Pro": null,
      "Gemini 3.8 Flash": null,
      "Claude Opus 5.5": null,
      "Gemini Argon · medium": null
     }
    },
    {
     "id": "G6",
     "kind": "finding",
     "weight": 1,
     "title": "состояние (клетка, frozenset ворот) растёт экспоненциально при многих воротах, лимита раскрытий нет",
     "where": "pathfinder.py:145, 183",
     "value": 1.69,
     "families": 4,
     "models": {
      "DeepSeek V4.1 Flash": null,
      "Gemini Argon · high": null,
      "GPT-6.1 Sol": null,
      "Claude Haiku 5.5": null,
      "Gemini Argon · medium": null
     }
    },
    {
     "id": "G14",
     "kind": "finding",
     "weight": 1,
     "title": "thickness 0 → «or 2» превращает в 2",
     "where": "planner.py:527",
     "value": 1.69,
     "families": 4,
     "models": {
      "Gemini Argon · high": null,
      "Qwen 3.8 Max Prime": null,
      "Mistral Large 4": null,
      "MiMo V2.6 Pro": null
     }
    },
    {
     "id": "G17",
     "kind": "finding",
     "weight": 1,
     "title": "окно time-based включает все линии размещения карты — сетка раздувается",
     "where": "pathfinder.py:345-357",
     "value": 1.69,
     "families": 4,
     "models": {
      "Muse Spark": null,
      "MiMo V2.6 Pro": null,
      "Gemini 3.8 Flash": null,
      "Claude Opus 5.5": null
     }
    },
    {
     "id": "B4",
     "kind": "better",
     "weight": 1,
     "title": "растеризация вдоль линии вместо перебора всего прямоугольника отрезка",
     "where": "",
     "value": 1.69,
     "families": 4,
     "models": {
      "Gemini 3.1 Pro": null,
      "Muse Spark": null,
      "GPT-6.1 Sol": null,
      "Claude Opus 5.5": null,
      "Claude Haiku 5.5": null
     }
    },
    {
     "id": "G5",
     "kind": "finding",
     "weight": 1,
     "title": "диагональный шаг без проверки углов: стена тоньше ~1.42 протекает (по умолчанию толщина 2 — не протекает)",
     "where": "pathfinder.py:168-174, 384-393",
     "value": 1.62,
     "families": 5,
     "models": {
      "Gemini Argon · high": null,
      "Muse Spark": null,
      "GPT-6.1 Terra Pro": null,
      "Kimi K3.1 Pro": null,
      "Claude Opus 5.5": null,
      "Claude Sonnet 5.5": null
     }
    },
    {
     "id": "G9",
     "kind": "finding",
     "weight": 1,
     "title": "evaluate_existing_path: penalty_time=0 — нарисованный через ворота маршрут оценивается без штрафа",
     "where": "planner.py:424-462",
     "value": 1.54,
     "families": 6,
     "models": {
      "Gemini 3.1 Pro": null,
      "DeepSeek V4.1 Flash": null,
      "Nemotron 3 Ultra": null,
      "Muse Spark": null,
      "Mistral Large 4": null,
      "Claude Haiku 5.5": null
     }
    },
    {
     "id": "G13",
     "kind": "finding",
     "weight": 1,
     "title": "gate['position'][0] без проверки длины и т.п. — повреждённый документ роняет планирование",
     "where": "planner.py:486-508, 526",
     "value": 1.46,
     "families": 7,
     "models": {
      "Gemini 3.1 Pro": null,
      "DeepSeek V4.1 Flash": null,
      "Gemini Argon · high": null,
      "Qwen 3.8 Max Prime": null,
      "Mistral Large 4": null,
      "MiMo V2.6 Pro": null,
      "Step 5 Preview": null,
      "Gemini 3.8 Flash": null,
      "Claude Haiku 5.5": null,
      "Claude Sonnet 5.5": null,
      "Gemini Argon · medium": null
     }
    },
    {
     "id": "G2",
     "kind": "finding",
     "weight": 1,
     "title": "перекрытие 3×3 соседних ворот — _cell_to_gate хранит последние, штраф первых теряется",
     "where": "pathfinder.py:106-109",
     "value": 1.38,
     "families": 8,
     "models": {
      "Gemini 3.1 Pro": null,
      "Grok 4.7": null,
      "Gemini Argon · high": null,
      "Nemotron 3 Ultra": null,
      "Muse Spark": null,
      "Mistral Large 4": null,
      "MiniMax M3": null,
      "GPT-6.1 Terra Pro": null,
      "Claude Haiku 5.5": null
     }
    },
    {
     "id": "G10",
     "kind": "finding",
     "weight": 1,
     "title": "pathfinder подменяет flight_speed=0 дефолтом, planner делит на 0",
     "where": "planner.py:113-119, 169",
     "value": 1.38,
     "families": 8,
     "models": {
      "DeepSeek V4.1 Flash": null,
      "Grok 4.7": null,
      "Gemini Argon · high": null,
      "Qwen 3.8 Max Prime": null,
      "MiMo V2.6 Pro": null,
      "GPT-6.1 Terra Pro": null,
      "Kimi K3.1 Pro": null,
      "Gemini 3.8 Flash": null,
      "Claude Opus 5.5": null,
      "Claude Haiku 5.5": null,
      "Claude Sonnet 5.5": null
     }
    }
   ],
   "falses": [
    {
     "title": "Слишком большая погрешность допуска (1.0) в _same_path ошибочно отбрасывает близкие альтернативные маршруты",
     "where": "planner.py:465-473",
     "why": "клетки целые: |Δ| < 1.0 — это точное совпадение, близкие пути не отбрасываются",
     "models": {
      "Mistral Large 4": 1
     }
    }
   ]
  }
 ],
 "tiers": [
  "лидеры",
  "сильные",
  "средние",
  "слабые"
 ],
 "models": [
  {
   "name": "Claude Haiku 5.5",
   "family": "Anthropic",
   "access": "Claude Code, xhigh",
   "tests": {
    "shop": {
     "score": 88.9,
     "found": 16,
     "false": 0,
     "penalty": 0,
     "serious": 4,
     "cost": 0.0154,
     "cost_kind": "cc"
    },
    "fetcher": {
     "score": 46.2,
     "found": 8,
     "false": 0,
     "penalty": 0,
     "serious": 1,
     "cost": 0.0426,
     "cost_kind": "cc"
    },
    "astar": {
     "score": 69.9,
     "found": 11,
     "false": 0,
     "penalty": 0,
     "serious": 1,
     "cost": 0.0308,
     "cost_kind": "cc"
    }
   },
   "label": "",
   "total": 64.2,
   "tier": "лидеры",
   "cost": 0.089,
   "cost_kind": "cc",
   "serious": [
    6,
    6
   ]
  },
  {
   "name": "Gemini Argon · high",
   "family": "Google",
   "access": "веб Gemini, high",
   "tests": {
    "shop": {
     "score": 91.1,
     "found": 15,
     "false": 0,
     "penalty": 0,
     "serious": 4,
     "cost": null,
     "cost_kind": "sub"
    },
    "fetcher": {
     "score": 43.8,
     "found": 12,
     "false": 0,
     "penalty": 0,
     "serious": 0,
     "cost": null,
     "cost_kind": "sub"
    },
    "astar": {
     "score": 70.9,
     "found": 12,
     "false": 0,
     "penalty": 0,
     "serious": 1,
     "cost": null,
     "cost_kind": "sub"
    }
   },
   "label": "",
   "total": 64.1,
   "tier": "лидеры",
   "cost": null,
   "cost_kind": "sub",
   "serious": [
    5,
    6
   ]
  },
  {
   "name": "GPT-6.1 Terra Pro",
   "family": "OpenAI",
   "access": "OpenRouter, high",
   "tests": {
    "shop": {
     "score": 93.7,
     "found": 16,
     "false": 0,
     "penalty": 0,
     "serious": 4,
     "cost": 0.0712,
     "cost_kind": "api"
    },
    "fetcher": {
     "score": 38.5,
     "found": 7,
     "false": 0,
     "penalty": 0,
     "serious": 1,
     "cost": 0.1076,
     "cost_kind": "api"
    },
    "astar": {
     "score": 59.4,
     "found": 8,
     "false": 0,
     "penalty": 0,
     "serious": 1,
     "cost": 0.1135,
     "cost_kind": "api"
    }
   },
   "label": "",
   "total": 57.9,
   "tier": "лидеры",
   "cost": 0.292,
   "cost_kind": "api",
   "serious": [
    6,
    6
   ]
  },
  {
   "name": "Claude Opus 5.5",
   "family": "Anthropic",
   "access": "Claude Code, xhigh",
   "tests": {
    "shop": {
     "score": 97.6,
     "found": 18,
     "false": 0,
     "penalty": 0,
     "serious": 4,
     "cost": 0.1741,
     "cost_kind": "cc"
    },
    "fetcher": {
     "score": 27.1,
     "found": 7,
     "false": 0,
     "penalty": 0,
     "serious": 0,
     "cost": 0.8691,
     "cost_kind": "cc"
    },
    "astar": {
     "score": 66.6,
     "found": 9,
     "false": 0,
     "penalty": 0,
     "serious": 1,
     "cost": 0.5688,
     "cost_kind": "cc"
    }
   },
   "label": "",
   "total": 57.0,
   "tier": "лидеры",
   "cost": 1.612,
   "cost_kind": "cc",
   "serious": [
    5,
    6
   ]
  },
  {
   "name": "GPT-6.1 Sol",
   "family": "OpenAI",
   "access": "OpenRouter, high",
   "tests": {
    "shop": {
     "score": 91.4,
     "found": 15,
     "false": 0,
     "penalty": 0,
     "serious": 4,
     "cost": 0.0644,
     "cost_kind": "api"
    },
    "fetcher": {
     "score": 34.1,
     "found": 5,
     "false": 0,
     "penalty": 0,
     "serious": 1,
     "cost": 0.1209,
     "cost_kind": "api"
    },
    "astar": {
     "score": 61.2,
     "found": 8,
     "false": 0,
     "penalty": 0,
     "serious": 1,
     "cost": 0.1408,
     "cost_kind": "api"
    }
   },
   "label": "",
   "total": 56.4,
   "tier": "лидеры",
   "cost": 0.326,
   "cost_kind": "api",
   "serious": [
    6,
    6
   ]
  },
  {
   "name": "Claude Sonnet 5.5",
   "family": "Anthropic",
   "access": "Claude Code, xhigh",
   "tests": {
    "shop": {
     "score": 91.8,
     "found": 15,
     "false": 0,
     "penalty": 0,
     "serious": 4,
     "cost": 0.0919,
     "cost_kind": "cc"
    },
    "fetcher": {
     "score": 26.3,
     "found": 9,
     "false": 0,
     "penalty": 0,
     "serious": 0,
     "cost": 0.4093,
     "cost_kind": "cc"
    },
    "astar": {
     "score": 62.3,
     "found": 8,
     "false": 0,
     "penalty": 0,
     "serious": 1,
     "cost": 0.3338,
     "cost_kind": "cc"
    }
   },
   "label": "",
   "total": 53.8,
   "tier": "лидеры",
   "cost": 0.835,
   "cost_kind": "cc",
   "serious": [
    5,
    6
   ]
  },
  {
   "name": "Grok 4.7",
   "family": "xAI",
   "access": "OpenRouter, high",
   "tests": {
    "shop": {
     "score": 84.9,
     "found": 14,
     "false": 0,
     "penalty": 0,
     "serious": 4,
     "cost": 0.1184,
     "cost_kind": "api"
    },
    "fetcher": {
     "score": 46.4,
     "found": 8,
     "false": 0,
     "penalty": 0,
     "serious": 1,
     "cost": 0.2868,
     "cost_kind": "api"
    },
    "astar": {
     "score": 33.8,
     "found": 6,
     "false": 0,
     "penalty": 0,
     "serious": 0,
     "cost": 0.413,
     "cost_kind": "api"
    }
   },
   "label": "",
   "total": 49.1,
   "tier": "сильные",
   "cost": 0.818,
   "cost_kind": "api",
   "serious": [
    5,
    6
   ]
  },
  {
   "name": "Kimi K3.1 Pro",
   "family": "Moonshot",
   "access": "OpenRouter, high",
   "tests": {
    "shop": {
     "score": 84.6,
     "found": 14,
     "false": 0,
     "penalty": 0,
     "serious": 4,
     "cost": 0.0757,
     "cost_kind": "api"
    },
    "fetcher": {
     "score": 28.9,
     "found": 5,
     "false": 0,
     "penalty": 0,
     "serious": 1,
     "cost": 0.1881,
     "cost_kind": "api"
    },
    "astar": {
     "score": 51.1,
     "found": 6,
     "false": 0,
     "penalty": 0,
     "serious": 1,
     "cost": 0.155,
     "cost_kind": "api"
    }
   },
   "label": "",
   "total": 48.9,
   "tier": "сильные",
   "cost": 0.419,
   "cost_kind": "api",
   "serious": [
    6,
    6
   ]
  },
  {
   "name": "MiMo V2.6 Pro",
   "family": "Xiaomi",
   "access": "OpenRouter, high",
   "tests": {
    "shop": {
     "score": 86.6,
     "found": 15,
     "false": 0,
     "penalty": 0,
     "serious": 4,
     "cost": 0.0072,
     "cost_kind": "api"
    },
    "fetcher": {
     "score": 18.5,
     "found": 6,
     "false": 0,
     "penalty": 0,
     "serious": 0,
     "cost": 0.0439,
     "cost_kind": "api"
    },
    "astar": {
     "score": 57.9,
     "found": 8,
     "false": 0,
     "penalty": 0,
     "serious": 1,
     "cost": 0.0287,
     "cost_kind": "api"
    }
   },
   "label": "",
   "total": 47.9,
   "tier": "сильные",
   "cost": 0.08,
   "cost_kind": "api",
   "serious": [
    5,
    6
   ]
  },
  {
   "name": "Qwen 3.8 Max Prime",
   "family": "Qwen",
   "access": "OpenRouter, high",
   "tests": {
    "shop": {
     "score": 87.9,
     "found": 13,
     "false": 0,
     "penalty": 0,
     "serious": 4,
     "cost": 0.2391,
     "cost_kind": "api"
    },
    "fetcher": {
     "score": 33.0,
     "found": 7,
     "false": 0,
     "penalty": 0,
     "serious": 1,
     "cost": 0.41,
     "cost_kind": "api"
    },
    "astar": {
     "score": 37.9,
     "found": 7,
     "false": 0,
     "penalty": 0,
     "serious": 0,
     "cost": 0.3759,
     "cost_kind": "api"
    }
   },
   "label": "",
   "total": 45.9,
   "tier": "сильные",
   "cost": 1.025,
   "cost_kind": "api",
   "serious": [
    5,
    6
   ]
  },
  {
   "name": "MiniMax M3",
   "family": "MiniMax",
   "access": "OpenRouter, high",
   "tests": {
    "shop": {
     "score": 97.7,
     "found": 18,
     "false": 0,
     "penalty": 0,
     "serious": 4,
     "cost": 0.0235,
     "cost_kind": "api"
    },
    "fetcher": {
     "score": 49.4,
     "found": 9,
     "false": 0,
     "penalty": 0,
     "serious": 1,
     "cost": 0.0847,
     "cost_kind": "api"
    },
    "astar": {
     "score": 10.8,
     "found": 2,
     "false": 0,
     "penalty": 0,
     "serious": 0,
     "cost": 0.0547,
     "cost_kind": "api"
    }
   },
   "label": "",
   "total": 43.6,
   "tier": "сильные",
   "cost": 0.163,
   "cost_kind": "api",
   "serious": [
    5,
    6
   ]
  },
  {
   "name": "Gemini Argon · medium",
   "family": "Google",
   "access": "веб Gemini, medium",
   "tests": {
    "shop": {
     "score": 84.6,
     "found": 14,
     "false": 0,
     "penalty": 0,
     "serious": 4,
     "cost": null,
     "cost_kind": "sub"
    },
    "fetcher": {
     "score": 33.4,
     "found": 4,
     "false": 0,
     "penalty": 0,
     "serious": 1,
     "cost": null,
     "cost_kind": "sub"
    },
    "astar": {
     "score": 28.7,
     "found": 6,
     "false": 0,
     "penalty": 0,
     "serious": 0,
     "cost": null,
     "cost_kind": "sub"
    }
   },
   "label": "",
   "total": 41.8,
   "tier": "сильные",
   "cost": null,
   "cost_kind": "sub",
   "serious": [
    5,
    6
   ]
  },
  {
   "name": "DeepSeek V4.1 Flash",
   "family": "DeepSeek",
   "access": "OpenRouter, high",
   "tests": {
    "shop": {
     "score": 76.3,
     "found": 12,
     "false": 0,
     "penalty": 0,
     "serious": 4,
     "cost": 0.0082,
     "cost_kind": "api"
    },
    "fetcher": {
     "score": 14.9,
     "found": 4,
     "false": 0,
     "penalty": 0,
     "serious": 0,
     "cost": 0.0207,
     "cost_kind": "api"
    },
    "astar": {
     "score": 50.2,
     "found": 7,
     "false": 0,
     "penalty": 0,
     "serious": 1,
     "cost": 0.0093,
     "cost_kind": "api"
    }
   },
   "label": "",
   "total": 41.3,
   "tier": "сильные",
   "cost": 0.038,
   "cost_kind": "api",
   "serious": [
    5,
    6
   ]
  },
  {
   "name": "Step 5 Preview",
   "family": "StepFun",
   "access": "OpenRouter, high",
   "tests": {
    "shop": {
     "score": 84.5,
     "found": 15,
     "false": 0,
     "penalty": 0,
     "serious": 4,
     "cost": 0.0321,
     "cost_kind": "api"
    },
    "fetcher": {
     "score": 34.8,
     "found": 6,
     "false": 0,
     "penalty": 0,
     "serious": 1,
     "cost": 0.1514,
     "cost_kind": "api"
    },
    "astar": {
     "score": 24.0,
     "found": 2,
     "false": 0,
     "penalty": 0,
     "serious": 1,
     "cost": 0.0415,
     "cost_kind": "api"
    }
   },
   "label": "",
   "total": 40.4,
   "tier": "сильные",
   "cost": 0.225,
   "cost_kind": "api",
   "serious": [
    6,
    6
   ]
  },
  {
   "name": "Gemini 3.1 Pro",
   "family": "Google",
   "access": "веб Gemini, high",
   "tests": {
    "shop": {
     "score": 75.3,
     "found": 12,
     "false": 0,
     "penalty": 0,
     "serious": 4,
     "cost": null,
     "cost_kind": "sub"
    },
    "fetcher": {
     "score": 0.1,
     "found": 2,
     "false": 1,
     "penalty": 3,
     "serious": 0,
     "cost": null,
     "cost_kind": "sub"
    },
    "astar": {
     "score": 55.3,
     "found": 8,
     "false": 0,
     "penalty": 0,
     "serious": 1,
     "cost": null,
     "cost_kind": "sub"
    }
   },
   "label": "",
   "total": 37.2,
   "tier": "средние",
   "cost": null,
   "cost_kind": "sub",
   "serious": [
    5,
    6
   ]
  },
  {
   "name": "Mistral Large 4",
   "family": "Mistral",
   "access": "Mistral API",
   "tests": {
    "shop": {
     "score": 84.1,
     "found": 15,
     "false": 0,
     "penalty": 0,
     "serious": 4,
     "cost": 0.0197,
     "cost_kind": "est"
    },
    "fetcher": {
     "score": 4.2,
     "found": 2,
     "false": 0,
     "penalty": 0,
     "serious": 0,
     "cost": 0.0491,
     "cost_kind": "est"
    },
    "astar": {
     "score": 38.3,
     "found": 6,
     "false": 1,
     "penalty": 1,
     "serious": 1,
     "cost": 0.0333,
     "cost_kind": "est"
    }
   },
   "label": "",
   "total": 33.8,
   "tier": "средние",
   "cost": 0.102,
   "cost_kind": "est",
   "serious": [
    5,
    6
   ]
  },
  {
   "name": "Gemini 3.8 Flash",
   "family": "Google",
   "access": "Antigravity, high",
   "tests": {
    "shop": {
     "score": 76.7,
     "found": 12,
     "false": 0,
     "penalty": 0,
     "serious": 4,
     "cost": null,
     "cost_kind": "sub"
    },
    "fetcher": {
     "score": 12.5,
     "found": 3,
     "false": 0,
     "penalty": 0,
     "serious": 0,
     "cost": null,
     "cost_kind": "sub"
    },
    "astar": {
     "score": 33.4,
     "found": 7,
     "false": 0,
     "penalty": 0,
     "serious": 0,
     "cost": null,
     "cost_kind": "sub"
    }
   },
   "label": "",
   "total": 33.7,
   "tier": "средние",
   "cost": null,
   "cost_kind": "sub",
   "serious": [
    4,
    6
   ]
  },
  {
   "name": "Muse Spark",
   "family": "Meta",
   "access": "OpenRouter, high",
   "tests": {
    "shop": {
     "score": 79.6,
     "found": 13,
     "false": 0,
     "penalty": 0,
     "serious": 4,
     "cost": 0.0187,
     "cost_kind": "api"
    },
    "fetcher": {
     "score": 8.7,
     "found": 4,
     "false": 0,
     "penalty": 0,
     "serious": 0,
     "cost": 0.048,
     "cost_kind": "api"
    },
    "astar": {
     "score": 31.3,
     "found": 7,
     "false": 0,
     "penalty": 0,
     "serious": 0,
     "cost": 0.0448,
     "cost_kind": "api"
    }
   },
   "label": "",
   "total": 31.9,
   "tier": "средние",
   "cost": 0.112,
   "cost_kind": "api",
   "serious": [
    4,
    6
   ]
  },
  {
   "name": "DeepSeek V4 Pro",
   "family": "DeepSeek",
   "access": "OpenRouter, high",
   "tests": {
    "shop": {
     "score": 81.0,
     "found": 14,
     "false": 0,
     "penalty": 0,
     "serious": 4,
     "cost": 0.0342,
     "cost_kind": "api"
    },
    "fetcher": {
     "score": 6.9,
     "found": 3,
     "false": 0,
     "penalty": 0,
     "serious": 0,
     "cost": 0.0557,
     "cost_kind": "api"
    },
    "astar": {
     "score": 18.0,
     "found": 3,
     "false": 0,
     "penalty": 0,
     "serious": 0,
     "cost": 0.0472,
     "cost_kind": "api"
    }
   },
   "label": "",
   "total": 26.2,
   "tier": "слабые",
   "cost": 0.137,
   "cost_kind": "api",
   "serious": [
    4,
    6
   ],
   "note": "тест 1: не по формату, разобран вручную"
  },
  {
   "name": "Nemotron 3 Ultra",
   "family": "NVIDIA",
   "access": "NVIDIA",
   "tests": {
    "shop": {
     "score": 74.8,
     "found": 13,
     "false": 0,
     "penalty": 0,
     "serious": 4,
     "cost": 0.0132,
     "cost_kind": "est"
    },
    "fetcher": {
     "score": 0.0,
     "found": 2,
     "false": 2,
     "penalty": 12,
     "serious": 0,
     "cost": 0.0312,
     "cost_kind": "est"
    },
    "astar": {
     "score": 27.1,
     "found": 3,
     "false": 0,
     "penalty": 0,
     "serious": 1,
     "cost": 0.032,
     "cost_kind": "est"
    }
   },
   "label": "",
   "total": 25.8,
   "tier": "слабые",
   "cost": 0.076,
   "cost_kind": "est",
   "serious": [
    5,
    6
   ]
  },
  {
   "name": "Muse Wonder",
   "family": "Meta",
   "access": "OpenRouter, high",
   "tests": {
    "shop": {
     "score": 86.6,
     "found": 15,
     "false": 0,
     "penalty": 0,
     "serious": 4,
     "cost": 0.1279,
     "cost_kind": "api"
    }
   },
   "label": "исключена из-за цены",
   "total": null,
   "tier": "",
   "cost": 0.128,
   "cost_kind": "api",
   "serious": [
    4,
    4
   ]
  },
  {
   "name": "GLM 5.3 Prime",
   "family": "Z.ai",
   "access": "OpenRouter, high",
   "tests": {
    "shop": {
     "score": 84.0,
     "found": 15,
     "false": 0,
     "penalty": 0,
     "serious": 4,
     "cost": 0.0378,
     "cost_kind": "api"
    },
    "fetcher": {
     "score": 14.3,
     "found": 4,
     "false": 0,
     "penalty": 0,
     "serious": 0,
     "cost": 0.1854,
     "cost_kind": "api"
    }
   },
   "label": "тест 3 не прогнан (бюджет)",
   "total": null,
   "tier": "",
   "cost": 0.223,
   "cost_kind": "api",
   "serious": [
    4,
    5
   ]
  },
  {
   "name": "Muse Glimmer 30B",
   "family": "Meta",
   "access": "NVIDIA",
   "tests": {
    "shop": {
     "score": 71.9,
     "found": 10,
     "false": 0,
     "penalty": 0,
     "serious": 4,
     "cost": 0.0055,
     "cost_kind": "est"
    }
   },
   "label": "отсеяна тестом 1",
   "total": null,
   "tier": "",
   "cost": 0.005,
   "cost_kind": "est",
   "serious": [
    4,
    4
   ]
  },
  {
   "name": "Claude Opus 4.6",
   "family": "Anthropic",
   "access": "Antigravity",
   "tests": {
    "shop": {
     "score": 68.3,
     "found": 11,
     "false": 0,
     "penalty": 0,
     "serious": 4,
     "cost": null,
     "cost_kind": "sub"
    }
   },
   "label": "есть модель новее",
   "total": null,
   "tier": "",
   "cost": null,
   "cost_kind": "sub",
   "serious": [
    4,
    4
   ]
  },
  {
   "name": "GPT-OSS 120B",
   "family": "OpenAI",
   "access": "Groq, medium",
   "tests": {
    "shop": {
     "score": 64.6,
     "found": 9,
     "false": 0,
     "penalty": 0,
     "serious": 4,
     "cost": 0.0019,
     "cost_kind": "est"
    }
   },
   "label": "отсеяна тестом 1",
   "total": null,
   "tier": "",
   "cost": 0.002,
   "cost_kind": "est",
   "serious": [
    4,
    4
   ]
  },
  {
   "name": "GPT-OSS 20B",
   "family": "OpenAI",
   "access": "Groq, medium",
   "tests": {
    "shop": {
     "score": 63.1,
     "found": 9,
     "false": 0,
     "penalty": 0,
     "serious": 4,
     "cost": 0.0006,
     "cost_kind": "est"
    }
   },
   "label": "отсеяна тестом 1",
   "total": null,
   "tier": "",
   "cost": 0.001,
   "cost_kind": "est",
   "serious": [
    4,
    4
   ]
  },
  {
   "name": "Mistral Medium 3.5",
   "family": "Mistral",
   "access": "OpenRouter",
   "tests": {
    "shop": {
     "score": 60.9,
     "found": 8,
     "false": 0,
     "penalty": 0,
     "serious": 4,
     "cost": 0.0917,
     "cost_kind": "api"
    }
   },
   "label": "отсеяна тестом 1",
   "total": null,
   "tier": "",
   "cost": 0.092,
   "cost_kind": "api",
   "serious": [
    4,
    4
   ]
  },
  {
   "name": "North Mini Code",
   "family": "Cohere",
   "access": "OpenRouter",
   "tests": {
    "shop": {
     "score": 60.6,
     "found": 9,
     "false": 1,
     "penalty": 3,
     "serious": 4,
     "cost": 0,
     "cost_kind": "api"
    }
   },
   "label": "отсеяна тестом 1",
   "total": null,
   "tier": "",
   "cost": 0,
   "cost_kind": "api",
   "serious": [
    4,
    4
   ]
  },
  {
   "name": "Laguna XS 2.1",
   "family": "Poolside",
   "access": "NVIDIA",
   "tests": {
    "shop": {
     "score": 53.4,
     "found": 9,
     "false": 0,
     "penalty": 0,
     "serious": 3,
     "cost": null,
     "cost_kind": "unknown"
    }
   },
   "label": "отсеяна тестом 1",
   "total": null,
   "tier": "",
   "cost": null,
   "cost_kind": "unknown",
   "serious": [
    3,
    4
   ]
  },
  {
   "name": "Command A+",
   "family": "Cohere",
   "access": "OpenRouter",
   "tests": {
    "shop": {
     "score": 53.2,
     "found": 7,
     "false": 0,
     "penalty": 0,
     "serious": 3,
     "cost": 0.0144,
     "cost_kind": "api"
    }
   },
   "label": "отсеяна тестом 1",
   "total": null,
   "tier": "",
   "cost": 0.014,
   "cost_kind": "api",
   "serious": [
    3,
    4
   ]
  },
  {
   "name": "Ministral 14B",
   "family": "Mistral",
   "access": "Mistral API",
   "tests": {
    "shop": {
     "score": 47.4,
     "found": 9,
     "false": 0,
     "penalty": 0,
     "serious": 3,
     "cost": 0.0008,
     "cost_kind": "est"
    }
   },
   "label": "отсеяна тестом 1",
   "total": null,
   "tier": "",
   "cost": 0.001,
   "cost_kind": "est",
   "serious": [
    3,
    4
   ]
  },
  {
   "name": "Nemotron 3.5 Lightning 30B",
   "family": "NVIDIA",
   "access": "NVIDIA",
   "tests": {
    "shop": {
     "score": 47.0,
     "found": 6,
     "false": 0,
     "penalty": 0,
     "serious": 3,
     "cost": 0.0036,
     "cost_kind": "est"
    }
   },
   "label": "отсеяна тестом 1",
   "total": null,
   "tier": "",
   "cost": 0.004,
   "cost_kind": "est",
   "serious": [
    3,
    4
   ]
  },
  {
   "name": "Codestral",
   "family": "Mistral",
   "access": "Mistral API",
   "tests": {
    "shop": {
     "score": 33.1,
     "found": 5,
     "false": 0,
     "penalty": 0,
     "serious": 2,
     "cost": 0.0013,
     "cost_kind": "est"
    }
   },
   "label": "отсеяна тестом 1",
   "total": null,
   "tier": "",
   "cost": 0.001,
   "cost_kind": "est",
   "serious": [
    2,
    4
   ]
  },
  {
   "name": "LFM 2.5 2.6B",
   "family": "Liquid",
   "access": "OpenRouter",
   "tests": {
    "shop": {
     "score": 22.8,
     "found": 3,
     "false": 0,
     "penalty": 0,
     "serious": 2,
     "cost": 0,
     "cost_kind": "api"
    }
   },
   "label": "отсеяна тестом 1",
   "total": null,
   "tier": "",
   "cost": 0,
   "cost_kind": "api",
   "serious": [
    2,
    4
   ]
  },
  {
   "name": "Ministral 8B",
   "family": "Mistral",
   "access": "Mistral API",
   "tests": {
    "shop": {
     "score": 20.6,
     "found": 7,
     "false": 1,
     "penalty": 9,
     "serious": 2,
     "cost": 0.0006,
     "cost_kind": "est"
    }
   },
   "label": "отсеяна тестом 1",
   "total": null,
   "tier": "",
   "cost": 0.001,
   "cost_kind": "est",
   "serious": [
    2,
    4
   ]
  },
  {
   "name": "Nemotron 3.5 Bolt E4B",
   "family": "NVIDIA",
   "access": "NVIDIA",
   "tests": {
    "shop": {
     "score": 6.9,
     "found": 3,
     "false": 1,
     "penalty": 3,
     "serious": 0,
     "cost": null,
     "cost_kind": "unknown"
    }
   },
   "label": "отсеяна тестом 1",
   "total": null,
   "tier": "",
   "cost": null,
   "cost_kind": "unknown",
   "serious": [
    0,
    4
   ]
  },
  {
   "name": "Ministral 3B",
   "family": "Mistral",
   "access": "Mistral API",
   "tests": {
    "shop": {
     "score": 0.0,
     "found": 5,
     "false": 5,
     "penalty": 45,
     "serious": 2,
     "cost": 0.0004,
     "cost_kind": "est"
    }
   },
   "label": "отсеяна тестом 1",
   "total": null,
   "tier": "",
   "cost": 0.0,
   "cost_kind": "est",
   "serious": [
    2,
    4
   ]
  }
 ]
};
