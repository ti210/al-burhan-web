"use client";
import React, { useState, useEffect } from 'react';

const courses = [
  { id: 1, titleUr: "نورانی قاعدہ", titleEn: "Noorani Qaida", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400", desc: "بنیادی قاعدہ اور تجوید" },
  { id: 2, titleUr: "ناظرہ قرآن", titleEn: "Quran Recitation", img: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=400", desc: "صحیح تلفظ کے ساتھ تلاوت" },
  { id: 3, titleUr: "دروس اللغۃ العربیہ", titleEn: "Arabic Language", img: "https://images.unsplash.com/photo-1590071089561-2087ff1f918e?w=400", desc: "قرآنی عربی زبان سیکھیں" },
  { id: 4, titleUr: "چہل حدیث", titleEn: "Chahal Hadith", img: "https://images.unsplash.com/photo-1584281722576-9d628d009b0b?w=400", desc: "چالیس منتخب احادیث مبارکہ" },
  { id: 5, titleUr: "تعلیمِ بالغان", titleEn: "Adult Learning", img: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400", desc: "بڑوں کے لیے دینی تعلیم" },
  { id: 6, titleUr: "روز مرہ کے مسائل", titleEn: "Daily Life Fiqh", img: "https://images.unsplash.com/photo-1512632510442-03033f96950e?w=400", desc: "فقہی مسائل اور حل" }
];

const teachersList = [{ id: "T001", name: "استاد احمد" }, { id: "T002", name: "استاد عمر" }];

export default function Home() {
  const [userRole, setUserRole] = useState('student');
  const [registrations, setRegistrations] = useState([]);
  const [activeClass, setActiveClass] = useState(null);
  const [loginId, setLoginId] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('alBurhanRegs');
    if (saved) setRegistrations(JSON.parse(saved));
  }, []);

  const handleLogin = () => {
    if (loginId === "admin123") setUserRole('admin');
    else {
      const teacher = teachersList.find(t => t.id === loginId);
      if (teacher) { setUserRole('teacher'); }
      else alert("غلط آئی ڈی!");
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F9FA] font-sans text-right" dir="rtl">
      {/* روحانی ہیڈر */}
      <header className="bg-emerald-900 text-white py-10 px-6 text-center shadow-2xl border-b-4 border-gold-500">
        <h1 className="text-4xl font-serif mb-2 tracking-wide">Al-Burhan Islamic Centre</h1>
        <p className="text-emerald-100 italic">"نورِ علم سے دلوں کو روشن کرنے والا ادارہ"</p>
        
        {/* مین نیویگیشن */}
        <nav className="mt-8 flex justify-center gap-6 text-sm overflow-x-auto">
          <button className="bg-white/10 px-4 py-2 rounded-full hover:bg-emerald-700">اے آئی ٹیوٹر 🤖</button>
          <button className="bg-white/10 px-4 py-2 rounded-full hover:bg-emerald-700">فری لائبریری 📚</button>
          <button className="bg-white/10 px-4 py-2 rounded-full hover:bg-emerald-700">کلاس روم 🏫</button>
          <div className="flex gap-2">
            <input type="text" placeholder="ID" className="w-16 px-2 text-black rounded" onChange={(e)=>setLoginId(e.target.value)} />
            <button onClick={handleLogin} className="bg-emerald-500 px-3 py-1 rounded text-xs">لاگ ان</button>
          </div>
        </nav>
      </header>

      {/* کورسز کا حصہ */}
      <section className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-emerald-900 mb-2">ہمارے آن لائن کورسز</h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-100 flex flex-col group hover:shadow-2xl transition-all">
              <div className="relative h-56">
                <img src={course.img} alt={course.titleUr} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-0 right-0 bg-emerald-800 text-white px-3 py-1 text-xs">{course.titleEn}</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{course.titleUr}</h3>
                <p className="text-sm text-slate-500 mb-6">{course.desc}</p>
                <form onSubmit={(e) => { e.preventDefault(); alert("درخواست موصول ہو گئی!"); }} className="space-y-3">
                  <input placeholder="آپ کا نام" required className="w-full border p-2 rounded text-sm bg-slate-50" />
                  <input placeholder="واٹس ایپ نمبر" required className="w-full border p-2 rounded text-sm bg-slate-50" />
                  <button className="w-full bg-emerald-800 text-white py-3 rounded-xl font-bold hover:bg-black transition-all">
                    داخلہ لیں / Register
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* فوٹر */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center border-t border-emerald-900">
        <p className="font-serif text-white mb-4">Al-Burhan Islamic Centre</p>
        <p className="text-xs max-w-lg mx-auto leading-relaxed">جدید ٹیکنالوجی اور قدیم اسلامی علوم کا حسین امتزاج۔ ہمارا مقصد ہر گھر تک علمِ دین پہنچانا ہے۔</p>
      </footer>
    </main>
  );
}