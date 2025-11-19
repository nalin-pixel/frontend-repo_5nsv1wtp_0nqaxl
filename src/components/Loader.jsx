import React, { useEffect, useState } from 'react'

export default function Loader() {
  const title = 'Digital Magazine'
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(title.slice(0, i + 1))
      i++
      if (i === title.length) clearInterval(interval)
    }, 60)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950">
      <div className="text-center">
        <div className="text-2xl md:text-3xl tracking-widest text-slate-400 mb-3">Loading</div>
        <div className="text-4xl md:text-5xl font-extrabold">
          <span className="bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">{displayed}</span>
          <span className="text-fuchsia-400 animate-pulse">{displayed.length < title.length ? '|' : ''}</span>
        </div>
      </div>
    </div>
  )
}
