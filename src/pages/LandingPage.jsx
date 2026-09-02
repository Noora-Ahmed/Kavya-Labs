import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleFakeSignUp = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setIsSignedUp(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between p-6 font-sans relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob [animation-delay:2s]"></div>

      {/* Header / Navbar */}
      <header className="relative max-w-6xl w-full mx-auto flex items-center justify-between py-4 z-10">
        <div className="text-xl font-black tracking-tight text-slate-900">
          Kavya <span className="text-blue-600">Labs</span>
        </div>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
          {/* Admin Dashboard shortcut button */}
          <Link to="/admin" className="text-xs bg-slate-900 text-white px-3 py-1.5 rounded-xl hover:bg-blue-600 transition-all shadow-sm">
            Admin Dashboard
          </Link>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="relative my-auto max-w-5xl w-full mx-auto flex flex-col items-center text-center z-10 py-12">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 mb-6">
          🚀 Next-Gen AI Innovation
        </span>
        
        {/* Perfectly broken typographic layout header */}
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-slate-950 via-slate-800 to-indigo-950 bg-clip-text text-transparent mb-6 max-w-4xl leading-tight">
          Building the Future of <br className="hidden md:inline" />
          Intelligent Interfaces
        </h1>
        
        {/* Italicized subtitle descriptor */}
        <p className="text-lg text-slate-600 max-w-xl mx-auto mb-10 leading-relaxed italic">
          We engineer robust machine learning solutions wrapped in clean, human-centric software architectures.
        </p>

        {/* Dynamic Action Zone */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8 mb-8">
          {!isSignedUp ? (
            <form onSubmit={handleFakeSignUp} className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 text-left">Get early access</h2>
              <div className="text-left">
                <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com" 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-xl shadow-md shadow-blue-500/15 transition-all active:scale-[0.99]"
              >
                Continue with Email
              </button>
            </form>
          ) : (
            /* Fake Signup Success State */
            <div className="text-center py-4 space-y-3 animate-fadeIn">
              <div className="mx-auto w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-500 text-xl font-bold">
                ✓
              </div>
              <h2 className="text-xl font-bold text-slate-900">Welcome aboard!</h2>
              <p className="text-sm text-slate-500 px-4">
                Your sandbox account is ready. A verification link was "sent" to <span className="font-medium text-slate-800">{email}</span>.
              </p>
              <button 
                onClick={() => setIsSignedUp(false)} 
                className="text-xs text-slate-400 hover:text-slate-600 underline transition-colors pt-2"
              >
                Reset demo Form
              </button>
            </div>
          )}
        </div>

        {/* Join Us Link Button connected directly to Contact */}
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-all hover:gap-3 group"
        >
          Want to join our collective? <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </main>

      {/* Footer */}
      <footer className="relative max-w-6xl w-full mx-auto text-center py-4 border-t border-slate-100 text-xs text-slate-400 z-10">
        © 2026 Kavya Labs. All rights reserved. Bengaluru, Karnataka, India
      </footer>
    </div>
  );
}