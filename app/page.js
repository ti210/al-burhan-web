import React from 'react';

const courses = [
  { title: "Noorani Qaida", category: "Foundation", desc: "Start your journey of Quranic recitation with proper Tajweed and pronunciation." },
  { title: "Quran Reading (Nazira)", category: "Foundation", desc: "Practice reciting the Holy Quran with melody and correct rules of Tajweed." },
  { title: "Duroos-ul-Lughat-ul-Arabia", category: "Language", desc: "The world-renowned curriculum for learning Arabic speaking and grammar." },
  { title: "Quranic Arabic", category: "Language", desc: "Understand the vocabulary and linguistic style of the Holy Quran directly." },
  { title: "Chahal Hadith", category: "Ethics", desc: "Study 40 essential Hadiths that provide a complete code for an ideal life." },
  { title: "Taleem-ul-Islam", category: "Jurisprudence", desc: "A comprehensive guide to Islamic beliefs, worship, and basic rulings." },
  { title: "Daily Life Fiqh", category: "Jurisprudence", desc: "Solutions to contemporary issues and daily matters like Salah and Taharah." },
  { title: "Adult Education", category: "Special Course", desc: "A simplified course for adults focusing on basic Deen and understanding Salah." }
];

export default function Home() {
  const whatsappNumber = "923018355308";

  return (
    <main className="min-h-screen bg-white">
      {/* Language Switcher Placeholder (Google Translate Integration) */}
      <div className="bg-slate-100 py-2 px-4 flex justify-end">
        <div id="google_translate_element"></div>
        <script dangerouslySetInnerHTML={{
          __html: `
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
            }
          `
        }} />
        <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
      </div>

      {/* Header Section */}
      <header className="bg-emerald-900 text-white py-16 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Al-Burhan Islamic Centre</h1>
        <p className="text-xl text-emerald-100 italic">Global Institute for Research and Modern Training</p>
      </header>

      {/* Courses Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Short Online Courses</h2>
            <p className="text-slate-500">Click the registration button to join via WhatsApp</p>
            <div className="h-1 w-24 bg-emerald-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {courses.map((course, index) => {
              const message = `Assalam-o-Alaikum!
I would like to register for the course: "${course.title}" at Al-Burhan Islamic Centre.

My Details:
Name: 
Age: 
Country: 
Phone: 
Preferred Time: 

Please provide further details.`;

              return (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full mb-4">
                      {course.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{course.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {course.desc}
                    </p>
                  </div>
                  
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 active:scale-95 shadow-md transition-all"
                  >
                    Register Now
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 text-center text-sm">
        <div className="mb-4 text-emerald-500 font-bold">Al-Burhan Islamic Centre</div>
        <p>© {new Date().getFullYear()} All Rights Reserved | Talha Irfan</p>
      </footer>
    </main>
  );
}