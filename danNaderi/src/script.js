const translations = {
  ar: {
    home: "الرئيسية",
    gallery: "المعرض",
    about: "من نحن",
    contact: "تواصل معنا",
    hero_title: "فن الباتينا بأسلوب عصري وأنيق",
    hero_subtitle: "نقدم أجمل تصاميم الجدران بتقنيات الباتينا الفريدة.",
    gallery_title: "نماذج من أعمالنا",
    about_title: "عن باتينا بسام",
    about_text: "نحن متخصصون في فن الباتينا، ندمج الأصالة مع اللمسات العصرية لنقدم لكم تصاميم فريدة من نوعها تناسب الذوق الرفيع.",
    contact_info: "للتواصل: 050-123-4567 | Instagram: @patina_bassam",
    service_boaeds : "ألواح فنية",
    service_walls : "تصاميم جدران",
  },
  en: {
    home: "Home",
    gallery: "Gallery",
    about: "About",
    contact: "Contact",
    hero_title: "Elegant & Modern Patina Art",
    hero_subtitle: "We bring unique wall finishes with timeless patina techniques.",
    gallery_title: "Our Works",
    about_title: "About Patina Bassam",
    about_text: "We specialize in patina art, combining traditional craftsmanship with modern aesthetics to create distinctive and elegant designs.",
    contact_info: "Contact: +971 50 123 4567 | Instagram: @patina_bassam",
    service_boaeds : "Art boards",
    service_walls : "Wall designs",
  }
};

const langToggle = document.getElementById("lang-toggle");
let currentLang = "ar";

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";
  document.documentElement.lang = currentLang;
  updateTexts();
  langToggle.textContent = currentLang === "ar" ? "English 🇬🇧" : "العربية 🇦🇪";
});

function updateTexts() {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    el.textContent = translations[currentLang][key];
  });
}