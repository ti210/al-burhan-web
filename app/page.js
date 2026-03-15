"use client";
import React, { useState } from 'react';

const courses = [
  { 
    titleUr: "نورانی قاعدہ", titleEn: "Noorani Qaida", category: "Foundation", 
    desc: "A spiritual beginning for children to learn the Holy Quran with Tajweed.",
    img: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&q=80&w=400" 
  },
  { 
    titleUr: "ناظرہ قرآن", titleEn: "Quran Recitation", category: "Foundation", 
    desc: "Illuminate your heart with the melodious recitation of the Book of Allah.",
    img: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=400" 
  },
  { 
    titleUr: "دروس اللغۃ العربیہ", titleEn: "Arabic Language", category: "Language", 
    desc: "Connect with the language of the Quran and the Prophet (PBUH).",
    img: "https://images.unsplash.com/photo-1590071089561-2087ff1f918e?auto=format&fit=crop&q=80&w=400" 
  },
  { 
    titleUr: "چہل حدیث", titleEn: "Chahal Hadith", category: "Wisdom", 
    desc: "Forty gems of prophetic wisdom to guide your daily life.",
    img: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=400" 
  },
  { 
    titleUr: "تعلیمِ بالغان", titleEn: "Adult Learning", category: "Special", 
    desc: "It is never too late to gain the light of sacred knowledge.",
    img: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=400" 
  },
  { 
    titleUr: "روز مرہ کے مسائل", titleEn: "Daily Life Fiqh", category: "Practice", 
    desc: "Walk the path of Shariah in every step of your life.",
    img: "https://images.unsplash.com/photo-1512632510442-03033f96950e?auto=format&fit=crop&q=80&w=400" 
  }
];

export default function Home() {
  const whatsappNumber = "923018355308";

  const handleRegister = (courseName) => {
    const message = `السلام علیکم! میں البرہان اسلامک سنٹر کے کورس "${courseName}" میں رجسٹریشن کروانا چاہتا/چاہتی ہوں۔ براہ کرم رہنمائی فرمائیں۔`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#FDFCF8] font-sans">
      {/* روحانی ہیڈر */}
      <header className="bg-gradient-to-b from-[#064E3B] to-[#065F46] text-white py-20 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-serif mb-2 tracking-wide">Al-Burhan Islamic Centre</h1>
          <h2 className="text-3xl font-arabic mb-6 text-emerald-200 opacity-90" dir="rtl">البرہان اسلامک سنٹر</h2>
          <div className="h-1 w-32 bg-emerald-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-emerald-50 italic max-w-2xl mx-auto">"Seeking knowledge is an obligation upon every Muslim"</p>
        </div>
      </header>

      {/* کورسز کارڈز */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-2 italic">Sacred Knowledge Courses</h2>
            <p className="text-emerald-700 font-arabic text-xl" dir="rtl">ہمارے آن لائن تعلیمی نصاب</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-emerald-50 group">
                <div className="h-56 overflow-hidden">
                  <img src={course.img} alt={course.titleEn} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 text-right" dir="rtl">
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full mb-4 inline-block tracking-widest uppercase">{course.category}</span>
                  <h3 className="text-2xl font-bold text-slate-800 mb-1 leading-tight">{course.titleUr}</h3>
                  <h4 className="text-sm text-emerald-600 font-medium mb-4 italic" dir="ltr">{course.titleEn}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 h-12" dir="ltr">{course.desc}</p>
                  
                  <button 
                    onClick={() => handleRegister(`${course.titleUr} / ${course.titleEn}`)}
                    className="w-full bg-emerald-800 text-white py-3 rounded-lg font-bold hover:bg-black transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
                  >
                    Register via WhatsApp / رجسٹریشن
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* فوٹر */}
      <footer className="bg-emerald-950 text-emerald-200 py-16 text-center border-t border-emerald-900 px-4">
        <p className="text-xl font-serif mb-4 tracking-wider">Al-Burhan Islamic Centre</p>
        <p className="text-xs opacity-60 max-w-md mx-auto mb-8 leading-relaxed">Dedicated to preserving and spreading sacred knowledge in the modern era.</p>
        <div className="h-px w-20 bg-emerald-800 mx-auto mb-8"></div>
        <p className="text-[10px] opacity-30 tracking-widest uppercase">© {new Date().getFullYear()} Talha Irfan</p>
      </footer>
    </main>
  );
}