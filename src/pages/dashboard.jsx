import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  // Fake analytical data for portfolio simulation
  const metrics = [
    { name: "Total Registered Users", value: "1,248", change: "+12% this week" },
    { name: "API Request Volume", value: "42.8k", change: "+24% yesterday" },
    { name: "System Response Time", value: "142ms", change: "Optimal performance" },
  ];

  const recentSignups = [
    { email: "alex.jones@dev.com", role: "Developer", status: "Active" },
    { email: "priya.sharma@startup.in", role: "Admin", status: "Active" },
    { email: "michael.smith@cloud.com", role: "User", status: "Pending" },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header section */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-5">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white">Admin Dashboard</h1>
            <p className="text-sm text-slate-400 mt-1">User management & system analytics</p>
          </div>
          <Link to="/" className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 py-2 rounded-xl border border-slate-700/50 transition-colors">
            ← Exit Admin Portal
          </Link>
        </div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((item, idx) => (
            <div key={idx} className="bg-slate-800/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{item.name}</p>
              <p className="text-3xl font-bold text-white mt-2">{item.value}</p>
              <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1">✨ {item.change}</p>
            </div>
          ))}
        </div>

        {/* User Management Section */}
        <div className="bg-slate-800/30 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">Recent User Access Requests</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="text-xs uppercase bg-slate-800/60 text-slate-400">
                <tr>
                  <th className="px-4 py-3 rounded-l-xl">User Email</th>
                  <th className="px-4 py-3">Assigned Role</th>
                  <th className="px-4 py-3 rounded-r-xl">Access State</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {recentSignups.map((user, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/20">
                    <td className="px-4 py-3.5 font-medium text-slate-200">{user.email}</td>
                    <td className="px-4 py-3.5 text-slate-400">{user.role}</td>
                    <td className="px-4 py-3.5">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${user.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}