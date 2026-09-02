import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans">
      {/* Decorative background ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob [animation-delay:2s]"></div>

      {/* Main Container Card */}
      <div className="relative max-w-2xl w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12 text-center transition-all duration-300 hover:shadow-2xl">
        
        {/* Badge / Subtitle */}
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 mb-6">
          ✨ Deep Tech & AI
        </span>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-slate-950 via-slate-800 to-indigo-950 bg-clip-text text-transparent mb-6">
          About Kavya Labs
        </h1>

        {/* Content Paragraph */}
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto mb-10">
          Kavya Labs is Bengaluru's premium AI collective, engineering 
          highly innovative, intelligent solutions paired with clean user interfaces 
          and highly scalable architectures.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-sm font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 shadow-sm transition-all active:scale-[0.98]"
          >
            ← Back to Home
          </Link>
          
          <Link 
            to="/contact" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 transition-all active:scale-[0.98]"
          >
            Get in touch
          </Link>
        </div>

      </div>
    </div>
  );
}

export default About;