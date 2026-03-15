"use client";
import React, { useState, useEffect } from 'react';

const courses = [
  { titleUr: "نورانی قاعدہ", titleEn: "Noorani Qaida", img: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=400" },
  { titleUr: "ناظرہ قرآن", titleEn: "Quran Recitation", img: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=400" },
  { titleUr: "دروس اللغۃ العربیہ", titleEn: "Arabic Language", img: "https://images.unsplash.com/photo-1590071089561-2087ff1f918e?w=400" }
];

const teachersList = [
  { id: "T001", name: "استاد احمد" },
  { id: "T002", name: "استاد عمر" }
];

export default function Home() {
  const [userRole, setUserRole] = useState('student');
  const [currentTeacher, setCurrentTeacher] = useState(null);
  const [registrations, setRegistrations] = useState([]);
  const [activeClass, setActiveClass] = useState(null);
  const [loginId, setLoginId] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());

  // ہر منٹ گھڑی اپ ڈیٹ کرنا
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    const saved = localStorage.getItem('alBurhanRegs');
    if (saved) setRegistrations(JSON.parse(saved));
    return () => clearInterval(timer);
  }, []);

  const handleLogin = () => {
    if (loginId === "admin123") { setUserRole('admin'); }
    else {
      const teacher = teachersList.find(t => t.id === loginId);
      if (teacher) { setUserRole('teacher'); setCurrentTeacher(teacher); }
      else { alert("غلط آئی ڈی!"); }
    }
  };

  const updateStudentSession = (regId, field, value) => {
    const updated = registrations.map(r => r.id === regId ? { ...r, [field]: value } : r);
    setRegistrations(updated);
    localStorage.setItem('alBurhanRegs', JSON.stringify(updated));
  };

  const checkClassStatus = (classTime) => {
    if (!classTime) return null;
    const [h, m] = classTime.split(':');
    const now = new Date();
    const cTime = new Date();
    cTime.setHours(h, m, 0);
    const diff = (cTime - now) / (1000 * 60); // منٹ میں فرق
    if (diff <= 0 && diff > -45) return "کلاس جاری ہے";
    if (diff > 0 && diff <= 10) return "کلاس شروع ہونے والی ہے";
    return null;
  };

  return (
    <main className="min-h-screen bg-[#FDFCF8] p-4 font-sans text-right" dir="rtl">
      
      {/* ہیڈر اور ریمائنڈر پٹی */}
      <div className="bg-emerald-900 text-white p-4 rounded-xl mb-6 shadow-lg">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl font-bold">البرہان اسلامک پورٹل</h1>
          <div className="flex gap-2 text-black">
            <input type="text" placeholder="آئی ڈی" className="px-2 py-1 rounded text-sm w-24" onChange={(e) => setLoginId(e.target.value)} />
            <button onClick={handleLogin} className="bg-emerald-500 text-white px-3 py-1 rounded text-sm">لاگ ان</button>
          </div>
        </div>
        <p className="text-[10px] opacity-70 italic text-left" dir="ltr">Current Time: {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
      </div>

      {/* لائیو کلاس روم */}
      {activeClass && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col">
          <div className="bg-emerald-900 p-2 flex justify-between items-center text-white">
            <span>البرہان لائیو کلاس روم</span>
            <button onClick={() => setActiveClass(null)} className="bg-red-600 px-4 py-1 rounded text-sm font-bold">کلاس ختم کریں</button>
          </div>
          <iframe src={activeClass} className="w-full h-full border-none" allow="camera; microphone; display-capture; whiteboard" />
        </div>
      )}

      {/* ایڈمن پینل: یہاں آپ وقت مقرر کریں گے */}
      {userRole === 'admin' && (
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8 border-r-8 border-emerald-800">
          <h2 className="text-lg font-bold mb-4">ایڈمن: طلباء اور اوقات کا انتظام</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-100">
                <tr><th className="p-2 border">طالب علم</th><th className="p-2 border">استاد</th><th className="p-2 border">وقت (24h)</th></tr>
              </thead>
              <tbody>
                {registrations.map(r => (
                  <tr key={r.id} className="border-b">
                    <td className="p-2">{r.name}</td>
                    <td className="p-2">
                      <select onChange={(e) => updateStudentSession(r.id, 'assignedTeacher', e.target.value)} value={r.assignedTeacher} className="border rounded">
                        <option value="Pending">منتظر</option>
                        {teachersList.map(t => <option key={t.id} value={t.name}>{t.name}</option>)}
                      </select>
                    </td>
                    <td className="p-2">
                      <input type="time" value={r.classTime || ""} onChange={(e) => updateStudentSession(r.id, 'classTime', e.target.value)} className="border rounded px-1" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ٹیچر ڈیش بورڈ: یہاں استاد کو ریمائنڈر ملے گا */}
      {userRole === 'teacher' && (
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8 border-r-8 border-blue-800">
          <h2 className="text-lg font-bold mb-4 text-blue-900">السلام علیکم {currentTeacher.name}!</h2>
          <div className="grid gap-4">
            {registrations.filter(r => r.assignedTeacher === currentTeacher.name).map(r => {
              const status = checkClassStatus(r.classTime);
              return (
                <div key={r.id} className={`p-4 rounded-lg flex justify-between items-center border ${status ? 'bg-orange-50 border-orange-300' : 'bg-slate-50 border-slate-200'}`}>
                  <div>
                    <p className="font-bold">{r.name} <span className="text-xs font-normal text-slate-500">({r.course})</span></p>
                    <p className="text-xs text-blue-700 font-bold">وقت: {r.classTime || "مقرر نہیں"}</p>
                    {status && <p className="text-[10px] bg-orange-500 text-white px-2 py-0.5 rounded-full mt-1 inline-block animate-pulse">{status}</p>}
                  </div>
                  <button onClick={() => setActiveClass(`https://meet.jit.si/AlBurhan-${r.id}`)} className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-bold">کلاس شروع کریں</button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* اسٹوڈنٹ ایریا: یہاں طالب علم کو ریمائنڈر ملے گا */}
      {userRole === 'student' && (
        <div className="space-y-6">
          <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-xl text-center">
            <h3 className="font-bold text-blue-900 mb-2">طالب علموں کے لیے ریمائنڈر</h3>
            <p className="text-xs text-blue-700">اگر آپ کا داخلہ ہو چکا ہے، تو اپنی کلاس کے وقت پر یہاں لاگ ان کریں یا واٹس ایپ لنک چیک کریں۔</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden border border-emerald-50">
                <img src={course.img} className="h-32 w-full object-cover" alt="" />
                <div className="p-4">
                  <h3 className="font-bold mb-3">{course.titleUr}</h3>
                  <form onSubmit={(e) => { e.preventDefault(); const fd = new FormData(e.target); 
                    const newReg = { id: Date.now(), name: fd.get('n'), phone: fd.get('p'), course: course.titleUr, assignedTeacher: 'Pending' };
                    const upd = [...registrations, newReg]; setRegistrations(upd); localStorage.setItem('alBurhanRegs', JSON.stringify(upd));
                    alert("داخلہ ہو گیا۔ وقت کے لیے ایڈمن سے رابطہ کریں یا پورٹل چیک کرتے رہیں۔");
                  }} className="space-y-2">
                    <input name="n" placeholder="نام" required className="w-full border p-2 rounded text-xs" />
                    <input name="p" placeholder="فون" required className="w-full border p-2 rounded text-xs" />
                    <button className="w-full bg-emerald-800 text-white py-2 rounded font-bold text-xs uppercase">رجسٹریشن</button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}