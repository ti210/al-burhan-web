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
      admin: "ایڈمن پینل",
      email: "ti2101263@gmail.com", // آپ کی فراہم کردہ درست ای میل
      phone: "0301-8355308",
      regTitle: "رجسٹریشن فارم: اپنی تفصیلات یہاں درج کریں"
    },
    en: {
      title: "Al-Burhan Islamic Centre",
      slogan: "Illuminating hearts with the light of Quran & Sunnah",
      enroll: "Enroll on WhatsApp",
      langBtn: "اردو",
      curriculum: "Curriculum",
      admin: "Admin Panel",
      email: "ti2101263@gmail.com",
      phone: "0301-8355308",
      regTitle: "Registration Form: Enter your details below"
    }
  };

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
    <main className="min-h-screen bg-[#FDFCF8]" dir={lang === 'ur' ? 'rtl' : 'ltr'}>
      
      {/* روحانی ہیڈر: کعبہ اور مدینہ کی تھیم */}
      <header className="relative h-[450px] flex items-center justify-center overflow-hidden border-b-8 border-yellow-600 shadow-2xl bg-emerald-950">
        <div className="absolute inset-0 flex opacity-40">
          <img src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800" alt="Kaaba" className="w-1/2 h-full object-cover" />
          <img src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=800" alt="Madinah" className="w-1/2 h-full object-cover" />
        </div>

        <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-30">
          <button onClick={() => setLang(lang === 'ur' ? 'en' : 'ur')} className="bg-yellow-600 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-500 shadow-lg border border-white/20 transition-all">
            {t.langBtn}
          </button>
          <button className="bg-emerald-800 text-white px-6 py-2 rounded-full font-bold hover:bg-emerald-700 border border-white/20 transition-all">
            {t.admin}
          </button>
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-yellow-100 drop-shadow-2xl mb-4 tracking-tighter">{t.title}</h1>
          <p className="text-xl md:text-2xl text-white font-light italic bg-black/40 backdrop-blur-sm px-8 py-2 rounded-lg">{t.slogan}</p>
        </div>
      </header>

      {/* رجسٹریشن پٹی (یلو بار) */}
      <div className="bg-yellow-600 text-black py-4 text-center font-bold text-lg md:text-xl shadow-inner border-b-2 border-yellow-700">
        {t.regTitle}
      </div>

      {/* کورسز کارڈز مع رجسٹریشن ان پٹس */}
      <section className="container mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {courses.map((course, i) => (
            <div key={i} className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border-2 border-emerald-50 hover:border-yellow-500 transition-all duration-500 group">
              <div className="h-64 overflow-hidden relative">
                <img src={course.img} alt={course.titleUr} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-10 text-center bg-white">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{lang === 'ur' ? course.titleUr : course.titleEn}</h3>
                <p className="text-slate-600 mb-8 text-sm leading-relaxed">{course.desc}</p>
                
                {/* رجسٹریشن فیلڈز */}
                <div className="space-y-4 mb-8 text-right">
                  <input placeholder={lang === 'ur' ? "طالب علم کا نام" : "Student Name"} className="w-full border-b-2 border-slate-200 p-2 outline-none focus:border-emerald-600 bg-emerald-50/20 text-sm" />
                  <input placeholder={lang === 'ur' ? "واٹس ایپ نمبر" : "WhatsApp Number"} className="w-full border-b-2 border-slate-200 p-2 outline-none focus:border-emerald-600 bg-emerald-50/20 text-sm" />
                </div>

                <button 
                  onClick={() => handleWhatsApp(lang === 'ur' ? course.titleUr : course.titleEn)}
                  className="w-full bg-emerald-900 text-yellow-100 py-4 rounded-2xl font-bold hover:bg-emerald-800 shadow-xl transition-all flex items-center justify-center gap-3 border-b-4 border-emerald-950"
                >
                  <span className="text-2xl">💬</span> {t.enroll}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* فوٹر: درست ای میل کے ساتھ */}
      <footer className="bg-emerald-950 text-emerald-100 py-16 text-center border-t-8 border-yellow-600">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-serif text-yellow-500 mb-4 tracking-widest">{t.title}</h2>
          <p className="text-lg font-medium mb-2">{t.phone}</p>
          <p className="text-lg font-light mb-8 lowercase tracking-tight">{t.email}</p>
          <div className="h-px bg-emerald-800 w-full mb-6 opacity-30"></div>
          <p className="text-xs opacity-50 uppercase tracking-widest">© 2026 AL-BURHAN ISLAMIC CENTRE | JATOI</p>
        </div>
      </footer>
    </main>
  );
}