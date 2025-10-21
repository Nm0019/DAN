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
    card_title1 : "همسة الزمن",
    btninfo_art : "بيان الفنان",
    btninfo_detail: "تفاصيل العمل الفني",
    card_title2: "يهمس الحجر",
    card_title3: "الجنة المنسية",
    card_title4: "النظرة المقدسة",
    card_title5: "الجلد القديم",
    card_title6: "لمسة من الهدوء",
    card_title7: "الهدوء المتجمد",
    card_title8: "الثروة الصامتة",
    card_title9: "دموع المحيط",
    card_title10: "الأنفاس القديمة",
    card_title111: "رحلة الطيور المقدسة",
    card_title12: "فجر أهورا",
    card_title13: "مجد خراسان",
    card_title14: "هندسة هادئة" ,
    card_title15: "ذاكرة أشين",
    card_title16: "ذهني",
    card_title17: "جلد الثعبان",
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
    card_title1 : "Whisper of Time",
    btninfo_art : "Artist Statement",
    btninfo_detail : "Artwork Details",
    card_title2: "Stone's Whisper",
    card_title3:"Forgotten paradise",
    card_title4: "Sacred gaze",
    card_title5: "Ancient leather",
    card_title6: "Touch of serenity",
    card_title7: "Frozen calm",
    card_title8: "silent waelth",
    card_title9: "tears of the ocean",
    card_title10: "Ancient breaths",
    card_title11: "Journey of the sacred birds",
    card_title12: "ahura's dawn",
    card_title13: "glory of khorasan",
    card_title14: "tranquil geometry",
    card_title15: "Ashen Memory",
    card_title16: "My Mind",
    card_title17: "Serpent Skin",
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