"use client";
import React, { useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState('ur');

  const content = {
    ur: {
      title: "البرہان اسلامک سینٹر",
      slogan: "نورِ قرآن و سنت سے دلوں کو روشن کرنے والا ادارہ",
      enroll: "واٹس ایپ داخلہ",
      langBtn: "English",
      email: "ti2101263@gmail.com",
      phone: "0301-8355308",
      regTitle: "داخلہ فارم: اپنی تفصیلات یہاں درج کریں",
      feeLabel: "ماہانہ فیس: ",
      sections: {
        tutor: "اے آئی ٹیوٹر",
        library: "مکتبۃ البرہان",
        classroom: "کلاس روم",
        schedule: "ٹائم ٹیبل",
        admin: "ایڈمن / اساتذہ"
      }
    },
    en: {
      title: "Al-Burhan Islamic Centre",
      slogan: "Illuminating hearts with the light of Quran & Sunnah",
      enroll: "WhatsApp Enroll",
      langBtn: "اردو",
      email: "ti2101263@gmail.com",
      phone: "0301-8355308",
      regTitle: "Registration Form: Enter your details below",
      feeLabel: "Monthly Fee: ",
      sections: {
        tutor: "AI Tutor",
        library: "Maktaba Al-Burhan",
        classroom: "Classroom",
        schedule: "Time Table",
        admin: "Admin / Teacher Login"
      }
    }
  };

  const t = content[lang];

  return (
    <main className="min-h-screen bg-[#FDFCF8] text-slate-900" dir={lang === 'ur' ? 'rtl' : 'ltr'}>
      
      {/* روحانی ہیڈر مع فکسڈ تصاویر */}
      <header className="relative h-[400px] flex items-center justify-center overflow-hidden border-b-8 border-yellow-600 bg-emerald-950">
        <div className="absolute inset-0 flex opacity-40 z-0">
          <img src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800" alt="Kaaba" className="w-1/2 h-full object-cover" />
          <img src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=800" alt="Madinah" className="w-1/2 h-full object-cover scale-x-[-1]" />
        </div>

        {/* ٹاپ نیویگیشن: تمام آپشنز محفوظ ہیں */}
        <nav className="absolute top-4 left-4 right-4 flex flex-wrap justify-between items-center z-30 gap-2">
          <div className="flex gap-2 flex-wrap">
            <button className="bg-emerald-800 text-white px-4 py-1.5 rounded-lg text-sm font-bold border border-white/10">{t.sections.tutor}</button>
            <button className="bg-emerald-800 text-white px-4 py-1.5 rounded-lg text-sm font-bold border border-white/10">{t.sections.library}</button>
            <button className="bg-emerald-800 text-white px-4 py-1.5 rounded-lg text-sm font-bold border border-white/10">{t.sections.classroom}</button>
            <button className="bg-emerald-800 text-white px-4 py-1.5 rounded-lg text-sm font-bold border border-white/10">{t.sections.schedule}</button>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setLang(lang === 'ur' ? 'en' : 'ur')} className="bg-yellow-600 text-black px-4 py-1.5 rounded-lg text-sm font-bold shadow-md">{t.langBtn}</button>
            <button className="bg-white text-emerald-900 px-4 py-1.5 rounded-lg text-sm font-black shadow-md">{t.sections.admin}</button>
          </div>
        </nav>

        <div className="relative z-10 text-center px-4 pt-10">
          <h1 className="text-4xl md:text-6xl font-serif text-yellow-100 drop-shadow-2xl mb-2">{t.title}</h1>
          <p className="text-lg md:text-xl text-white font-light italic bg-black/30 backdrop-blur-sm px-6 py-1 rounded-full inline-block">{t.slogan}</p>
        </div>
      </header>

      {/* رجسٹریشن پٹی (ایڈز لائن) */}
      <div className="bg-yellow-600 text-black py-4 text-center font-bold text-lg md:text-xl shadow-inner border-b-2 border-yellow-700 sticky top-0 z-40">
        📢 {t.regTitle}
      </div>

      <section className="container mx-auto py-16 px-4">
        {/* مین کارڈز (ٹیوٹر، لائبریری وغیرہ) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-emerald-50 p-8 rounded-3xl border-2 border-emerald-100 text-center">
            <div className="text-5xl mb-5">🤖</div>
            <h3 className="text-2xl font-bold text-emerald-950 mb-1">{t.sections.tutor}</h3>
            <p className="text-emerald-700 font-bold mb-3">{t.feeLabel} $5 / Month</p>
            <p className="text-sm opacity-70">جدید اے آئی استاد سے سیکھیں</p>
          </div>
          <div className="bg-yellow-50 p-8 rounded-3xl border-2 border-yellow-100 text-center">
            <div className="text-5xl mb-5">📚</div>
            <h3 className="text-2xl font-bold text-emerald-950 mb-3">{t.sections.library}</h3>
            <p className="text-sm opacity-70">ڈیجیٹل کتب خانہ</p>
          </div>
          <div className="bg-blue-50 p-8 rounded-3xl border-2 border-blue-100 text-center">
            <div className="text-5xl mb-5">🏫</div>
            <h3 className="text-2xl font-bold text-emerald-950 mb-3">{t.sections.classroom}</h3>
            <p className="text-sm opacity-70">لائیو تعلیمی سیشن</p>
          </div>
          <div className="bg-purple-50 p-8 rounded-3xl border-2 border-purple-100 text-center">
            <div className="text-5xl mb-5">⏰</div>
            <h3 className="text-2xl font-bold text-emerald-950 mb-3">{t.sections.schedule}</h3>
            <p className="text-sm opacity-70">بہترین نظام الاوقات</p>
          </div>
        </div>

        {/* کورسز مع فیس */}
        <h2 className="text-4xl font-bold text-center mb-12 text-emerald-950">کورسز اور فیس کی تفصیلات</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { n: "نورانی قاعدہ", fee: "50", img: "1000484726.jpg" },
            { n: "ناظرہ قرآن", fee: "50", img: "1000484727.jpg" },
            { n: "دروس اللغۃ العربیہ", fee: "50", img: "1000484729.jpg" },
            { n: "تعلیمِ بالغان", fee: "50", img: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400" },
            { n: "چہل حدیث", fee: "50", img: "hadith.jpg" },
            { n: "روز مرہ کے مسائل", fee: "50", img: "fiqh.jpg" }
          ].map((c, i) => (
            <div key={i} className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100">
              <img src={c.img} alt={c.n} className="h-56 w-full object-cover" />
              <div className="p-8 text-center">
                <h4 className="text-2xl font-bold mb-1">{c.n}</h4>
                <p className="text-emerald-700 font-bold mb-5">{t.feeLabel} ${c.fee} / Month</p>
                <div className="flex gap-2 mb-5">
                  <input placeholder="نام" className="w-1/2 bg-slate-50 p-3 rounded-xl text-sm" />
                  <input placeholder="نمبر" className="w-1/2 bg-slate-50 p-3 rounded-xl text-sm" />
                </div>
                <button className="w-full bg-emerald-900 text-yellow-50 py-4 rounded-xl font-bold">{t.enroll}</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* فوٹر مع درست ای میل */}
      <footer className="bg-emerald-950 text-emerald-100 py-16 text-center border-t-8 border-yellow-600 px-6">
        <p className="text-2xl font-bold text-yellow-500 mb-2">{t.phone}</p>
        <p className="text-lg font-light mb-8 lowercase opacity-80">{t.email}</p>
        <p className="text-[12px] opacity-40 tracking-widest uppercase">© 2026 AL-BURHAN ISLAMIC CENTRE</p>
      </footer>
    </main>
  );
}