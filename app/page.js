import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">
      {/* Navigation Bar */}
      <nav className="bg-emerald-800 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold tracking-wider">البرھان مرکز</span>
            </div>
            <div className="hidden md:flex space-x-reverse space-x-8 text-lg">
              <a href="#" className="hover:text-emerald-200 transition">ہوم</a>
              <a href="#library" className="hover:text-emerald-200 transition">مکتبہ (لائبریری)</a>
              <a href="#courses" className="hover:text-emerald-200 transition">کورسز</a>
              <a href="#contact" className="hover:text-emerald-200 transition">رابطہ</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-white py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-emerald-900 mb-6">البرھان مرکز برائے تحقیق و تدریس</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            علم، تحقیق اور جدید تربیت کا عالمی ادارہ۔ ہم جدید ٹیکنالوجی کے ذریعے مستند علوم کی ترویج کر رہے ہیں۔
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#courses" className="bg-emerald-700 text-white px-8 py-4 rounded-xl text-xl font-bold shadow-xl hover:bg-emerald-800 transition">ہمارے کورسز دیکھیں</a>
            <a href="https://wa.me/923018355308" className="bg-white border-2 border-emerald-700 text-emerald-700 px-8 py-4 rounded-xl text-xl font-bold hover:bg-emerald-50 transition">واٹس ایپ رابطہ</a>
          </div>
        </div>
      </header>

      {/* Main Sections */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Library */}
          <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-emerald-500">
            <div className="text-4xl mb-4 text-emerald-600">📚</div>
            <h3 className="text-2xl font-bold mb-4 text-emerald-900">اوپن لائبریری</h3>
            <p className="text-gray-600 mb-4">تمام طلبہ کے لیے مفت پی ڈی ایف کتابیں اور تحقیقی مقالے دستیاب ہیں۔</p>
            <span className="text-emerald-700 font-bold underline cursor-pointer">مطالعہ شروع کریں ←</span>
          </div>

          {/* AI Tutor */}
          <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-emerald-500">
            <div className="text-4xl mb-4 text-emerald-600">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-emerald-900">اے آئی ٹیوٹر</h3>
            <p className="text-gray-600 mb-4">عربی گرامر اور اسلامی علوم سیکھنے کے لیے ہمارا جدید آرٹیفیشل انٹیلیجنس سسٹم۔</p>
            <span className="text-sm bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-bold">جلد آ رہا ہے ($5)</span>
          </div>

          {/* Premium Classes */}
          <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-emerald-500">
            <div className="text-4xl mb-4 text-emerald-600">🎓</div>
            <h3 className="text-2xl font-bold mb-4 text-emerald-900">پریمیئم کلاسز</h3>
            <p className="text-gray-600 mb-4">ماہر اساتذہ کے زیرِ سایہ براہِ راست ویڈیو، آڈیو اور وائٹ بورڈ کے ساتھ آن لائن سیشنز۔</p>
            <span className="text-sm bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-bold">رجسٹریشن جاری ہے ($50)</span>
          </div>
        </div>
      </section>

      {/* --- Ad Slot (For Earning) --- */}
      <div className="bg-gray-200 py-12 my-10 border-2 border-dashed border-gray-400">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xl font-bold text-gray-500">اشتہارات کی جگہ (گوگل ایڈسینس سے آمدنی کے لیے)</p>
          <p className="text-sm text-gray-400 mt-2 italic">یہاں اشتہارات دکھا کر ویب سائٹ سے ارننگ کی جائے گی</p>
        </div>
      </div>

      {/* Footer / Contact Details */}
      <footer className="bg-emerald-900 text-white py-12" id="contact">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 italic">"ہمارا مشن علم کو تجارت نہیں بلکہ عبادت بنانا ہے۔"</h2>
          <div className="space-y-4 mb-8 border-t border-emerald-800 pt-8">
            <p className="text-xl">رابطہ برائے رجسٹریشن و معلومات:</p>
            <p className="text-3xl font-bold text-emerald-200 tracking-widest">0301-8355308</p>
            <p className="text-xl opacity-90">ti2101263@gmail.com</p>
          </div>
          <div className="pt-8 border-t border-emerald-800 text-emerald-400 text-sm">
            © 2026 البرھان مرکز - جملہ حقوق محفوظ ہیں۔
          </div>
        </div>
      </footer>
    </div>
  );
}