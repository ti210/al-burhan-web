"use client";
import React, { useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState('ur');

  return (
    <main className="min-h-screen bg-[#FDFCF8]" dir={lang === 'ur' ? 'rtl' : 'ltr'}>
      
      {/* 1. ایڈز والی لائن - اب یہ سب سے اوپر ہے تاکہ کٹے نہیں */}
      <div className="bg-yellow-600 text-black py-3 text-center font-bold text-lg sticky top-0 z-50">
        📢 داخلہ فارم: اپنی تفصیلات یہاں درج کریں (0301-8355308)
      </div>

      {/* 2. ہائیڈر - اب یہ آپ کے پبلک فولڈر سے تصویر اٹھائے گا */}
      <header className="relative h-[350px] flex items-center justify-center overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 opacity-40">
          <img src="/kaaba.jpg" alt="Kaaba" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-100">البرہان اسلامک سینٹر</h1>
          <p className="text-xl text-white mt-2">نورِ قرآن و سنت سے دلوں کو روشن کرنے والا ادارہ</p>
        </div>
      </header>

      {/* 3. کورسز اور ناظرہ کی تصویر */}
      <section className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { n: "نورانی قاعدہ", img: "/1000484726.jpg" },
            { n: "ناظرہ قرآن", img: "/1000484727.jpg" },
            { n: "دروس اللغۃ العربیہ", img: "/1000484729.jpg" }
          ].map((c, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden border">
              <img src={c.img} alt={c.n} className="h-48 w-full object-cover" />
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold mb-4">{c.n}</h4>
                <button className="w-full bg-emerald-900 text-white py-3 rounded-lg font-bold">واٹس ایپ داخلہ</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}