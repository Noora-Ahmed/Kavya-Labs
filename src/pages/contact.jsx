import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
      {/* Background glow assets */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-blob"></div>

      <div className="relative max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-100 p-8 text-center">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 mb-6">
          📬 Connect
        </span>

        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-2">
          Get in Touch
        </h1>
        <p className="text-sm text-slate-500 mb-6">
          Have an idea or a project? Drop us a line.
        </p>

        {!submitted ? (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase">Your Name</label>
              <input type="text" required className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" placeholder="Alex Dev" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase">Message</label>
              <textarea rows="3" required className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-xl transition-all shadow-md shadow-blue-500/10">
              Send Message
            </button>
          </form>
        ) : (
          <div className="py-6 text-center space-y-3">
            <p className="text-sm font-medium text-green-600">✨ Message received successfully!</p>
            <p className="text-xs text-slate-400">Thanks for reaching out. We will get back to you shortly.</p>
          </div>
        )}

        {/* Home Page Direct Link Button */}
        <div className="mt-8 pt-6 border-t border-slate-100">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium rounded-xl text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200/60 transition-all"
          >
            ← Return to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;