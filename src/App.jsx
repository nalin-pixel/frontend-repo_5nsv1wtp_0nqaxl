import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FlipBook from './components/FlipBook'
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {loading && <Loader />}
      <Navbar />
      <Hero />

      <FlipBook />

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-300/80">
          <p className="text-sm">© {new Date().getFullYear()} MAGZ — A modern digital magazine.</p>
          <div className="flex items-center gap-3 text-sm">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <span className="opacity-30">•</span>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
