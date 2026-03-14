"use client";
import React, { useRef, useState } from 'react';
import CanvasDraw from "react-canvas-draw";

export default function Classroom() {
  const canvasRef = useRef(null);
  const [brushColor, setBrushColor] = useState("#000000");
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-4 font-sans" dir="rtl">
      {/* Header */}
      <div className="flex justify-between items-center bg-emerald-800 p-4 rounded-2xl shadow-xl mb-4 border-b-4 border-emerald-900">
        <h1 className="text-2xl font-bold">البرھان لائیو کلاس روم</h1>
        <div className="flex gap-2">
          <button onClick={() => canvasRef.current.undo()} className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-xl text-sm font-bold shadow-lg transition">واپس</button>
          <button onClick={() => canvasRef.current.clear()} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl text-sm font-bold shadow-lg transition">صاف کریں</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[75vh]">
        {/* Whiteboard Area */}
        <div className="lg:col-span-3 bg-white rounded-3xl shadow-2xl relative border-8 border-slate-800 overflow-hidden">
          {showVideo ? (
            <iframe
              src="https://meet.jit.si/AlBurhanClassroom"
              allow="camera; microphone; fullscreen; display-capture"
              className="w-full h-full border-0"
            ></iframe>
          ) : (
            <CanvasDraw
              ref={canvasRef}
              brushColor={brushColor}
              brushRadius={3}
              lazyRadius={0}
              canvasWidth={1200}
              canvasHeight={800}
              style={{ width: '100%', height: '100%' }}
            />
          )}
          
          {/* Color Palette (Only show when not in video) */}
          {!showVideo && (
            <div className="absolute top-4 left-4 flex gap-2 bg-slate-100 p-2 rounded-lg shadow-md border border-slate-300">
              <button onClick={() => setBrushColor("#000000")} className="w-6 h-6 bg-black rounded-full border-2 border-white"></button>
              <button onClick={() => setBrushColor("#ff0000")} className="w-6 h-6 bg-red-600 rounded-full border-2 border-white"></button>
              <button onClick={() => setBrushColor("#0000ff")} className="w-6 h-6 bg-blue-600 rounded-full border-2 border-white"></button>
            </div>
          )}
        </div>

        {/* Control Panel */}
        <div className="lg:col-span-1 bg-slate-800 p-6 rounded-3xl border border-slate-700 shadow-xl flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-6 text-emerald-400 border-b border-slate-700 pb-2">کنٹرول پینل</h2>
            
            <button 
              onClick={() => setShowVideo(!showVideo)}
              className={`w-full ${showVideo ? 'bg-orange-600' : 'bg-emerald-600'} py-4 rounded-xl font-bold mb-4 shadow-lg hover:opacity-90 transition`}
            >
              {showVideo ? "🖌️ وائٹ بورڈ پر جائیں" : "📹 کیمرہ آن کریں"}
            </button>
            
            <button className="w-full bg-blue-600 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition">
              🖥️ اسکرین شیئر
            </button>
          </div>

          <div className="mt-8 p-4 bg-slate-900 rounded-2xl border border-emerald-900/50">
             <p className="text-xs text-emerald-500 font-bold uppercase tracking-wider mb-1">مدرس:</p>
             <p className="text-lg font-bold">طلحہ عرفان صاحب</p>
          </div>
        </div>
      </div>
    </div>
  );
}