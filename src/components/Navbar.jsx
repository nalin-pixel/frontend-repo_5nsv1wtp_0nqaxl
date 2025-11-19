import React from 'react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="font-extrabold text-lg tracking-tight">
          <span className="bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">MAGZ</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-200/80">
          <a href="#" className="hover:text-white transition">Issues</a>
          <a href="#" className="hover:text-white transition">Topics</a>
          <a href="#" className="hover:text-white transition">About</a>
        </nav>
        <button className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm transition">Subscribe</button>
      </div>
    </header>
  )
}
