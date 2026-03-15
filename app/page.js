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
      
      {/* روحانی ہیڈر مع نیویگیشن (فکسڈ امیجز) */}
      <header className="relative h-[400px] flex items-center justify-center overflow-hidden border-b-8 border-yellow-600 bg-emerald-950">
        <div className="absolute inset-0 flex opacity-40 z-0">
          <img src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800" alt="Kaaba" className="w-1/2 h-full object-cover" />
          <img src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=800" alt="Madinah" className="w-1/2 h-full object-cover scale-x-[-1]" />
        </div>

        {/* ٹاپ مینو */}
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

      {/* وہ ایڈز/رجسٹریشن والی