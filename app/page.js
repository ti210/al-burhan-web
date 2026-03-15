"use client";
import React, { useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState('ur');

  const content = {
    ur: {
      title: "البرہان اسلامک سینٹر",
      slogan: "نورِ قرآن و سنت سے دلوں کو روشن کرنے والا ادارہ",
      enroll: "واٹس ایپ پر داخلہ لیں",
      langBtn: "English",
      curriculum: "نصابِ تعلیم",
      admin: "ایڈمن لاگ ان",
      email: "00923018355308 | info@alburhan.com",
      welcome: "علمِ دین سیکھنے کی سعادت حاصل کریں"
    },
    en: {
      title: "Al-Burhan Islamic Centre",
      slogan: "Illuminating hearts with the light of Quran & Sunnah",
      enroll: "Enroll on WhatsApp",
      langBtn: "اردو",
      curriculum: "Curriculum",
      admin: "Admin Login",
      email: "00923018355308 | info@alburhan.com",
      welcome: "Embark on the journey of Sacred Knowledge"
    }
  };

  // آپ کی تمام اپ لوڈ کردہ تصاویر کی لسٹ
  const courses = [
    { titleUr: "نورانی قاعدہ", titleEn: "Noorani Qaida", img: "1000484726.jpg", desc: "تجوید اور بنیادی تلفظ کا بہترین آغاز" },
    { titleUr: "دروس اللغۃ العربیہ", titleEn: "Arabic Language", img: "1000484729.jpg", desc: "قرآنی زبان سمجھنے کے لیے مکمل کورس" },
    { titleUr: "ناظرہ قرآن", titleEn: "Quran Recitation", img: "1000484727.jpg", desc: "خوبصورت آواز اور ترتیل کے ساتھ تلاوت" },
    { titleUr: "چہل حدیث", titleEn: "Chahal Hadith", img: "hadith.jpg", desc: "چالیس منتخب احادیث مبارکہ کا مطالعہ" },
    { titleUr: "روز مرہ کے مسائل", titleEn: "Daily Life Fiqh", img: "fiqh.jpg", desc: "زندگی کے عام مسائل کا شرعی حل" },
    { titleUr: "تعلیمِ بالغان", titleEn: "Adult Learning", img: "https://images.unsplash.com/photo-1584281722576-9d628d009b0b?w=400", desc: "بڑی عمر کے افراد کے لیے دینی تعلیم" }
  ];

  const t = content[lang];

  const handleWhatsApp = (courseTitle) => {
    const msg = `السلام علیکم! میں البرہان اسلامک سینٹر کے کورس "${courseTitle}" میں داخلہ لینا چاہتا/چاہتی ہوں۔`;
    window.open(`https://wa.me/923018355308?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#FDFCF8] selection:bg-emerald-200" dir={lang === 'ur' ? 'rtl' : 'ltr'}>
      
      {/* روحانی ہیڈر: کعبہ اور روضہ رسول ﷺ کی تھیم */}
      <header className="relative h-[500px] flex items-center justify-center overflow-hidden border-b-8 border-yellow-600 shadow-2xl">
        {/* پس منظر میں تصاویر کا امتزاج */}
        <div className="absolute inset-0 flex">
          <div className="w-1/2 relative h-full">
            <img src="kaaba_background.jpg" alt="Kaaba" className="w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 to-transparent"></div>
          </div>
          <div className="w-1/2 relative h-full">
            <img src="prophet_mosque_background.jpg" alt="Madinah" className="w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-l from-emerald-950/80 to-transparent"></div>
          </div>
        </div>

        {/* نیویگیشن بٹنز */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-30">
          <button onClick={() => setLang(lang === 'ur' ? 'en' : 'ur')} className="bg-yellow-600 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-500 shadow-lg border-2 border-white/20 transition-all">
            {t.langBtn}
          </button>
          <button className="bg-emerald-800/80 backdrop-blur-sm text-white px-6 py-2 rounded-full font-bold hover:bg-emerald-700 border border-white/20 transition-all">
            {t.admin}
          </button>
        </div>

        {/* ٹائٹل */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-8xl font-serif text-yellow-100 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] mb-6">
            {t.title}
          </h1>
          <p className="text-xl md:text-3xl text-white font-light italic bg-black/30 backdrop-blur-sm inline-block px-8 py-2 rounded-lg">
            {t.slogan}
          </p>
        </div>
      </header>

      {/* کورسز کارڈز سیکشن */}
      <section className="container mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">{t.welcome}</h2>
          <div className="h-1.5 w-32 bg-yellow-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, i) => (
            <div key={i} className="group bg-white rounded-[3rem] shadow-2xl overflow-hidden border-2 border-emerald-50 hover:border-yellow-500 transition-all duration-500 hover:-translate-y-4">
              <div className="h-64 overflow-hidden relative">
                <img src={course.img} alt={course.titleUr} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent"></div>
              </div>
              
              <div className="p-10 text-center bg-white">
                <h3 className="text-3xl font-bold text-slate-800 mb-4">{lang === 'ur' ? course.titleUr : course.titleEn}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed h-12 text-lg">{course.desc}</p>
                
                <button 
                  onClick={() => handleWhatsApp(lang === 'ur' ? course.titleUr : course.titleEn)}
                  className="w-full bg-emerald-900 text-yellow-100 py-5 rounded-2xl font-black text-xl hover:bg-emerald-800 shadow-xl transition-all flex items-center justify-center gap-4 border-b-4 border-emerald-950 active:border-0"
                >
                  <span className="text-2xl">💬</span> {t.enroll}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* فوٹر */}
      <footer className="bg-emerald-950 text-emerald-100 py-16 text-center border-t-8 border-yellow-600">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-yellow-500 mb-4 tracking-widest">{t.title}</h2>
          <p className="text-xl mb-6">{t.email}</p>
          <div className="h-px bg-emerald-800 w-full mb-6"></div>
          <p className="text-sm opacity-60 tracking-[0.2em]">© 2026 AL-BURHAN ISLAMIC CENTRE | JATOI, PAKISTAN</p>
        </div>
      </footer>
    </main>
  );
}