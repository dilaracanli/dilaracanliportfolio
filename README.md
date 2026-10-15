# Dilara Canlı — Portfolio

Static portfolio site (HTML/CSS/JS, no build step), ready for Vercel.

## İçeriği düzenleme

Tüm metinler, projeler, deneyim ve eğitim bilgileri **`content.js`** dosyasında. Her metnin `en` ve `tr` karşılığı var; site sağ üstteki EN / TR düğmesiyle dil değiştirir.

### Proje eklemek

1. Görselleri `assets/projects/<proje-adi>/` klasörüne koy (ör. `cover.jpg`, `01.jpg`, `02.jpg`).
2. `content.js` içindeki `projects` listesinde ilgili projeyi düzenle:

```js
{
  title: { en: "Riverside Loft", tr: "Nehir Kenarı Loft" },
  category: "interior",          // interior | architecture | visualization | graphic
  year: "2026",
  location: "Rotterdam, NL",
  cover: "assets/projects/riverside-loft/cover.jpg",
  images: ["assets/projects/riverside-loft/01.jpg"],
  summary: { en: "…", tr: "…" },
  tools: ["Revit", "Enscape"],
}
```

Görsel eklenmeyen projelerde çizgisel bir yer tutucu gösterilir.

### CV

PDF'i `assets/` içine koyup `content.js` içindeki `cv` alanına yolunu yaz (ör. `"assets/dilara-canli-cv.pdf"`). Boşsa CV butonu gizlenir.

## Yerelde çalıştırma

```bash
npx serve .
```

## Vercel'de yayınlama

1. [vercel.com/new](https://vercel.com/new) → GitHub ile giriş → `dilaracanliportfolio` reposunu seç.
2. Framework Preset: **Other**, Build Command ve Output Directory boş kalsın.
3. **Deploy**. Bundan sonra `main` dalına her push otomatik yayınlanır.
