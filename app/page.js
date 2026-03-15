"use client";
import React, { useState, useEffect } from 'react';

const teachersList = [
  { id: "T001", name: "استاد احمد" },
  { id: "T002", name: "استاد عمر" }
];

export default function Home() {
  const [lang, setLang] = useState('ur'); // گوگل ٹرانسلیٹر متبادل
  const [userRole, setUserRole] = useState('student');
  const [registrations, setRegistrations] = useState([]);
  const [loginId, setLoginId] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('alBurhanRegs');
    if (saved) setRegistrations(JSON.parse(saved));
  }, []);

  const content = {
    ur: {
      title: "البرہان اسلامک سینٹر",
      slogan: "جدید ٹیکنالوجی کے ذریعے قدیم علوم کی ترویج",
      tutor: "اے آئی ٹیوٹر 🤖",
      library: "فری لائبریری 📚",
      classroom: "آن لائن کلاس 🏫",
      login: "لاگ ان",
      coursesTitle: "ہمارے خصوصی تعلیمی پروگرام",
      enroll: "ابھی داخلہ لیں",
      namePlace: "طالب علم کا نام",
      phonePlace: "واٹس ایپ نمبر"
    },
    en: {
      title: "Al-Burhan Islamic Centre",
      slogan: "Promoting Classical Sciences via Modern Tech",
      tutor: "AI Tutor 🤖",
      library: "Free Library 📚",
      classroom: "Online Class 🏫",
      login: "Login",
      coursesTitle: "Our Special Educational Programs",
      enroll: "Enroll Now",
      namePlace: "Student Name",
      phonePlace: "WhatsApp Number"
    }
  };

  const courses = [
    { titleUr: "نورانی قاعدہ", titleEn: "Noorani Qaida", img: "1000484726.jpg", descUr: "تجوید اور بنیادی تلفظ کا بہترین آغاز", descEn: "Perfect start for Tajweed and basic pronunciation" },
    { titleUr: "دروس اللغۃ العربیہ", titleEn: "Arabic Language", img: "1000484729.jpg", descUr: "قرآنی زبان سمجھنے کے لیے مکمل کورس", descEn: "Comprehensive course to understand Quranic Arabic" },
    { titleUr: "ناظرہ قرآن", titleEn: "Quran Recitation", img: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=400", descUr: "خوبصورت آواز اور ترتیل کے ساتھ تلاوت", descEn: "Recitation with beautiful voice and rhythm" },
    { titleUr: "چہل حدیث", titleEn: "Chahal Hadith", img: "https://images.unsplash.com/photo-1584281722576-9d628d009b0b?w=400", descUr: "چالیس منتخب احادیث مبارکہ کا مطالعہ", descEn: "Study of 40 selected blessed Ahadith" },
    { titleUr: "تعلیمِ بالغان", titleEn: "Adult Learning", img: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400", descUr: "بڑی عمر کے افراد کے لیے دینی تعلیم", descEn: "Islamic education for adults and seniors" },
    { titleUr: "روز مرہ کے مسائل", titleEn: "Daily Life Fiqh", img: "https://images.unsplash.com/photo-1512632510442-03033f96950e?w=400", descUr: "زندگی کے عام مسائل کا شرعی حل", descEn: "Shariah solutions for daily life issues" }
  ];

  const t = content[lang];

  return (
    <main className={`min-h-screen bg-[#FDFCF8] font-sans ${lang === 'ur' ? 'text-right' : 'text-left'}`} dir={lang === 'ur' ? 'rtl' : 'ltr'}>
      {/* ہیڈر */}
      <header className="bg-emerald-900 text-white py-10 px-6 text-center shadow-2xl border-b-4 border-yellow-500">
        <div className="flex justify-between items-center max-w-6xl mx-auto mb-4">
          <button onClick={() => setLang(lang === 'ur' ? 'en' : 'ur')} className="bg-yellow-600 text-black px-4 py-1 rounded-full text-xs font-bold hover:bg-yellow-500 transition">
            {lang === 'ur' ? 'English' : 'اردو'}
          </button>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif mb-3 tracking-wide">{t.title}</h1>
        <p className="text-emerald-100 italic text-lg">{t.slogan}</p>
        
        <nav className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
          <button className="bg-white/10 px-6 py-2 rounded-full hover:bg-emerald-700 transition">{t.tutor}</button>
          <button className="bg-white/10 px-6 py-2 rounded-full hover:bg-emerald-700 transition">{t.library}</button>
          <button className="bg-white/10 px-6 py-2 rounded-full hover:bg-emerald-700 transition">{t.classroom}</button>
          <div className="flex gap-2 p-1 bg-white rounded-full shadow-inner">
            <input type="text" placeholder="ID" className="w-16 px-3 text-black rounded-full text-xs outline-none" onChange={(e)=>setLoginId(e.target.value)} />
            <button className="bg-emerald-600 px-4 py-1 rounded-full text-xs text-white hover:bg-emerald-500">{t.login}</button>
          </div>
        </nav>
      </header>

      {/* کورسز */}
      <section className="container mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-emerald-900 mb-4 font-serif">{t.coursesTitle}</h2>
          <div className="h-1.5 w-24 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {courses.map((course, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-50 flex flex-col group hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-64">
                <img src={course.img} alt={course.titleUr} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 right-4 left-4 flex justify-between items-center">
                   <span className="bg-yellow-600 text-[10px] px-2 py-1 rounded text-black font-bold">{lang === 'ur' ? course.titleEn : course.titleUr}</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{lang === 'ur' ? course.titleUr : course.titleEn}</h3>
                <p className="text-sm text-slate-600 mb-8 leading-relaxed">{lang === 'ur' ? course.descUr : course.descEn}</p>
                <form className="space-y-4">
                  <input placeholder={t.namePlace} className="w-full border-b-2 border-slate-200 p-2 outline-none focus:border-emerald-600 bg-transparent text-sm" />
                  <input placeholder={t.phonePlace} className="w-full border-b-2 border-slate-200 p-2 outline-none focus:border-emerald-600 bg-transparent text-sm" />
                  <button className="w-full bg-emerald-900 text-white py-4 rounded-2xl font-bold hover:bg-emerald-800 shadow-lg transition-all">
                    {t.enroll}
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-10 text-center px-6">
        <h2 className="text-white text-xl font-serif mb-2">{t.title}</h2>
        <p className="text-[10px] uppercase tracking-widest opacity-60">© 2026 Al-Burhan Centre</p>
      </footer>
    </main>
  );
}