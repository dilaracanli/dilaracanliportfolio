// ─────────────────────────────────────────────────────────────
//  Sitenin tüm içeriği bu dosyada. Metinleri buradan değiştir.
//  Her metnin { en: "...", tr: "..." } şeklinde iki dili var.
// ─────────────────────────────────────────────────────────────

window.CONTENT = {
  name: "Dilara Canlı",
  email: "dilaraacanli@gmail.com",
  linkedin: "https://www.linkedin.com/in/dilara-canli-244047227",
  github: "https://github.com/dilaracanli",
  cv: "", // ör. "assets/dilara-canli-cv.pdf" — boşsa CV butonu gizlenir

  roles: {
    en: ["Interior Architect", "Architect", "Visual Communication Designer"],
    tr: ["İç Mimar", "Mimar", "Görsel İletişim Tasarımcısı"],
  },

  heroLine: {
    en: "Designing innovative, functional and user-centered spaces — between Ankara, Bologna, Barcelona and Rotterdam.",
    tr: "Yenilikçi, işlevsel ve kullanıcı odaklı mekânlar tasarlıyorum — Ankara, Bologna, Barselona ve Rotterdam arasında.",
  },

  about: {
    en: [
      "I am an interior architect and architect with international academic and professional experience in Türkiye, Italy, Spain and the Netherlands.",
      "I graduated first in the Interior Architecture program at Çankaya University with High Honors, completed a double major in Architecture, and hold a B.A. in Visual Communication Design. I am currently pursuing an M.Sc. in Interior Architecture.",
      "My work moves between technical drawing, BIM, 3D modelling and visual storytelling — from construction compliance on site to presentation boards in the studio.",
    ],
    tr: [
      "Türkiye, İtalya, İspanya ve Hollanda'da akademik ve profesyonel deneyime sahip bir iç mimar ve mimarım.",
      "Çankaya Üniversitesi İç Mimarlık bölümünü yüksek onur derecesiyle birincilikle bitirdim, Mimarlık çift anadalını tamamladım ve Görsel İletişim Tasarımı lisansına sahibim. Şu anda İç Mimarlık yüksek lisansı yapıyorum.",
      "Çalışmalarım teknik çizim, BIM, 3B modelleme ve görsel anlatım arasında ilerliyor — şantiyedeki uygunluk denetiminden stüdyodaki sunum paftalarına kadar.",
    ],
  },

  stats: [
    { value: "4", label: { en: "Countries", tr: "Ülke" } },
    { value: "6", label: { en: "Positions", tr: "Pozisyon" } },
    { value: "5", label: { en: "Degrees & programs", tr: "Diploma & program" } },
    { value: "1st", label: { en: "In class, High Honors", tr: "Bölüm birinciliği" } },
  ],

  // ─── PROJELER ───────────────────────────────────────────────
  // cover: kapak görseli yolu (ör. "assets/projects/villa/cover.jpg").
  //        Boş bırakılırsa çizgisel bir yer tutucu gösterilir.
  // images: proje penceresinde gösterilecek ek görseller.
  // category: filtrelerde görünür — "interior" | "architecture" | "visualization" | "graphic"
  projects: [
    {
      title: { en: "Project Title 01", tr: "Proje Başlığı 01" },
      category: "interior",
      year: "2026",
      location: "Rotterdam, NL",
      cover: "",
      images: [],
      summary: { en: "Short description of the project — coming soon.", tr: "Projenin kısa açıklaması — yakında." },
      tools: ["Revit", "Enscape"],
    },
    {
      title: { en: "Project Title 02", tr: "Proje Başlığı 02" },
      category: "architecture",
      year: "2024",
      location: "Barcelona, ES",
      cover: "",
      images: [],
      summary: { en: "Short description of the project — coming soon.", tr: "Projenin kısa açıklaması — yakında." },
      tools: ["AutoCAD", "Rhino"],
    },
    {
      title: { en: "Project Title 03", tr: "Proje Başlığı 03" },
      category: "visualization",
      year: "2023",
      location: "Cesena, IT",
      cover: "",
      images: [],
      summary: { en: "Short description of the project — coming soon.", tr: "Projenin kısa açıklaması — yakında." },
      tools: ["3ds Max", "Corona"],
    },
    {
      title: { en: "Project Title 04", tr: "Proje Başlığı 04" },
      category: "architecture",
      year: "2023",
      location: "Bologna, IT",
      cover: "",
      images: [],
      summary: { en: "Short description of the project — coming soon.", tr: "Projenin kısa açıklaması — yakında." },
      tools: ["ArchiCAD", "Grasshopper"],
    },
    {
      title: { en: "Project Title 05", tr: "Proje Başlığı 05" },
      category: "interior",
      year: "2022",
      location: "Ankara, TR",
      cover: "",
      images: [],
      summary: { en: "Short description of the project — coming soon.", tr: "Projenin kısa açıklaması — yakında." },
      tools: ["AutoCAD", "D5 Render"],
    },
    {
      title: { en: "Project Title 06", tr: "Proje Başlığı 06" },
      category: "graphic",
      year: "2025",
      location: "Eskişehir, TR",
      cover: "",
      images: [],
      summary: { en: "Short description of the project — coming soon.", tr: "Projenin kısa açıklaması — yakında." },
      tools: ["Illustrator", "InDesign"],
    },
  ],

  categories: {
    all: { en: "All", tr: "Tümü" },
    interior: { en: "Interior", tr: "İç Mimarlık" },
    architecture: { en: "Architecture", tr: "Mimarlık" },
    visualization: { en: "Visualization", tr: "Görselleştirme" },
    graphic: { en: "Graphic Design", tr: "Grafik Tasarım" },
  },

  experience: [
    {
      role: { en: "Architectural Assistant", tr: "Mimari Asistan" },
      company: "Base Rotterdam Design",
      place: "Rotterdam, Netherlands",
      period: { en: "Jul 2026 – Sep 2026", tr: "Tem 2026 – Eyl 2026" },
      text: {
        en: "Contributed to architectural and interior design projects by preparing technical drawings, 3D models and presentation materials.",
        tr: "Teknik çizimler, 3B modeller ve sunum materyalleri hazırlayarak mimari ve iç mimari projelere katkı sağladım.",
      },
    },
    {
      role: { en: "Architect – Assistant Building Inspector", tr: "Mimar – Yardımcı Yapı Denetçisi" },
      company: "Hitit Yapı Denetim",
      place: "Ankara, Türkiye",
      period: { en: "Dec 2024 – Present", tr: "Ara 2024 – Günümüz" },
      text: {
        en: "Assisted in building inspections, construction compliance reviews, and the preparation of technical reports and project documentation.",
        tr: "Yapı denetimleri, inşaat uygunluk incelemeleri ile teknik rapor ve proje dokümantasyonunun hazırlanmasında görev aldım.",
      },
    },
    {
      role: { en: "Architectural Assistant", tr: "Mimari Asistan" },
      company: "Cream Estudio",
      place: "Barcelona, Spain",
      period: { en: "Jul 2024 – Sep 2024", tr: "Tem 2024 – Eyl 2024" },
      text: {
        en: "Supported residential and commercial architectural projects through drawings, visualizations and presentation materials.",
        tr: "Konut ve ticari mimari projelere çizim, görselleştirme ve sunum materyalleriyle destek verdim.",
      },
    },
    {
      role: { en: "Architectural Assistant", tr: "Mimari Asistan" },
      company: "Tisselli Studio Architetti",
      place: "Cesena, Italy",
      period: { en: "May 2023 – Jul 2023", tr: "May 2023 – Tem 2023" },
      text: {
        en: "Contributed to architectural design development by preparing 3D models, presentation drawings and project documentation.",
        tr: "3B modeller, sunum çizimleri ve proje dokümantasyonu hazırlayarak mimari tasarım geliştirme sürecine katkı sağladım.",
      },
    },
    {
      role: { en: "Architectural Intern", tr: "Mimarlık Stajyeri" },
      company: "Pasifik İnşaat – Merkez Ankara Project",
      place: "Ankara, Türkiye",
      period: { en: "Jun 2021 – Aug 2021", tr: "Haz 2021 – Ağu 2021" },
      text: {
        en: "Supported office-based architectural design processes, documentation and project coordination.",
        tr: "Ofis tabanlı mimari tasarım süreçlerine, dokümantasyona ve proje koordinasyonuna destek verdim.",
      },
    },
    {
      role: { en: "Construction Intern", tr: "Şantiye Stajyeri" },
      company: "Arissa Göksu",
      place: "Ankara, Türkiye",
      period: { en: "Jun 2020 – Jul 2020", tr: "Haz 2020 – Tem 2020" },
      text: {
        en: "Observed construction site operations and assisted with site supervision and technical documentation.",
        tr: "Şantiye operasyonlarını gözlemledim; saha denetimi ve teknik dokümantasyonda yardımcı oldum.",
      },
    },
  ],

  education: [
    {
      degree: { en: "M.Sc. Interior Architecture", tr: "İç Mimarlık Yüksek Lisansı" },
      school: "Çankaya University",
      place: "Ankara, Türkiye",
      period: { en: "2025 – 2027 (Expected)", tr: "2025 – 2027 (Beklenen)" },
      note: null,
    },
    {
      degree: { en: "B.A. Visual Communication Design", tr: "Görsel İletişim Tasarımı Lisansı" },
      school: "Anadolu University",
      place: "Eskişehir, Türkiye",
      period: { en: "2023 – 2026", tr: "2023 – 2026" },
      note: null,
    },
    {
      degree: { en: "Erasmus+ Exchange – Architecture", tr: "Erasmus+ Değişim – Mimarlık" },
      school: "University of Bologna",
      place: "Bologna, Italy",
      period: { en: "2022 – 2023", tr: "2022 – 2023" },
      note: null,
    },
    {
      degree: { en: "B.Arch. Architecture (Double Major)", tr: "Mimarlık Lisansı (Çift Anadal)" },
      school: "Çankaya University",
      place: "Ankara, Türkiye",
      period: { en: "2018 – 2025", tr: "2018 – 2025" },
      note: { en: "Graduated with Honors", tr: "Onur derecesiyle mezun" },
    },
    {
      degree: { en: "B.A. Interior Architecture", tr: "İç Mimarlık Lisansı" },
      school: "Çankaya University",
      place: "Ankara, Türkiye",
      period: { en: "2017 – 2022", tr: "2017 – 2022" },
      note: { en: "Ranked 1st in program · High Honors", tr: "Bölüm birincisi · Yüksek onur" },
    },
  ],

  skills: [
    { group: { en: "CAD & BIM", tr: "CAD & BIM" }, items: ["AutoCAD", "Revit", "ArchiCAD", "Rhino", "Grasshopper"] },
    { group: { en: "Visualization", tr: "Görselleştirme" }, items: ["3ds Max", "Corona Renderer", "D5 Render", "Enscape", "Lumion", "Twinmotion"] },
    { group: { en: "Adobe Creative Suite", tr: "Adobe Creative Suite" }, items: ["Photoshop", "Illustrator", "InDesign", "Lightroom", "Premiere Pro"] },
    { group: { en: "Other", tr: "Diğer" }, items: ["Microsoft Office"] },
  ],

  languages: [
    { name: { en: "Turkish", tr: "Türkçe" }, level: { en: "Native", tr: "Ana dil" }, value: 100 },
    { name: { en: "English", tr: "İngilizce" }, level: { en: "C1 – Advanced", tr: "C1 – İleri" }, value: 85 },
    { name: { en: "Italian", tr: "İtalyanca" }, level: { en: "A1 – Basic", tr: "A1 – Başlangıç" }, value: 20 },
  ],

  // Arayüz metinleri
  ui: {
    nav: { works: { en: "Works", tr: "Projeler" }, about: { en: "About", tr: "Hakkımda" }, experience: { en: "Experience", tr: "Deneyim" }, contact: { en: "Contact", tr: "İletişim" } },
    worksTitle: { en: "Selected Works", tr: "Seçili Projeler" },
    aboutTitle: { en: "About", tr: "Hakkımda" },
    experienceTitle: { en: "Experience", tr: "Deneyim" },
    educationTitle: { en: "Education", tr: "Eğitim" },
    skillsTitle: { en: "Tools", tr: "Araçlar" },
    languagesTitle: { en: "Languages", tr: "Diller" },
    contactTitle: { en: "Let's work together", tr: "Birlikte çalışalım" },
    contactText: {
      en: "Open to collaborations, studio positions and interior architecture projects.",
      tr: "İş birliklerine, stüdyo pozisyonlarına ve iç mimarlık projelerine açığım.",
    },
    viewWorks: { en: "View works", tr: "Projeleri gör" },
    downloadCv: { en: "Download CV", tr: "CV indir" },
    comingSoon: { en: "Images coming soon", tr: "Görseller yakında" },
    based: { en: "Based in Ankara · Working internationally", tr: "Ankara merkezli · Uluslararası çalışıyor" },
    close: { en: "Close", tr: "Kapat" },
  },
};
