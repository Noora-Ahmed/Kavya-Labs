import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <header className="flex justify-between items-center p-6 bg-white shadow">
        <h1 className="text-2xl font-bold text-gray-800">Kavya Labs</h1>
        <nav className="space-x-6">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/" className="hover:text-blue-600">About</a>
          <a href="/" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Main Content (Hero + Features) */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center px-6 py-16 bg-gray-50">
          <h2 className="text-5xl font-extrabold mb-4 text-gray-900">
            Welcome to Kavya Labs
          </h2>
          <p className="text-lg text-gray-600 mb-6 italic">
            Bengaluru’s AI startup — building the future.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Join Us
          </button>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-12 bg-white">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">AI Innovation</h3>
            <p className="text-gray-600">Cutting-edge solutions built in Bengaluru.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Clean UI</h3>
            <p className="text-gray-600">Modern, responsive design with Tailwind CSS.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Scalable Tech</h3>
            <p className="text-gray-600">Built to grow with your business needs.</p>
          </div>
        </section>
      </main>

      {/* Footer (sticks to bottom) */}
      <footer className="p-4 bg-gray-100 text-center text-sm text-gray-500">
        © 2026 Kavya Labs. All rights reserved.
      </footer>
    </div>
  );
}
