import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const pages = [
  {
    title: 'Editorial',
    color: 'from-fuchsia-500 to-rose-500',
    content: 'A bold perspective on the creators shaping tomorrow. Features, interviews, and visual essays for the curious. '
  },
  {
    title: 'Design',
    color: 'from-cyan-400 to-blue-500',
    content: 'Layouts, typography, motion. How form meets function across contemporary products and experiences.'
  },
  {
    title: 'Technology',
    color: 'from-emerald-400 to-teal-500',
    content: 'Tools, AI, and systems powering the next wave of creativity and culture.'
  },
  {
    title: 'Culture',
    color: 'from-amber-400 to-orange-500',
    content: 'People, places, and ideas influencing the modern creative scene.'
  }
]

export default function FlipBook() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + 1) % pages.length)
  const prev = () => setIndex((i) => (i - 1 + pages.length) % pages.length)

  return (
    <section className="relative py-16 md:py-24 bg-slate-950">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">Latest Issue</h2>
          <div className="flex gap-2">
            <button onClick={prev} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ rotateY: -180, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 180, opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="w-full h-full [transform-style:preserve-3d] bg-gradient-to-br"
            >
              <div className={`w-full h-full p-8 md:p-12 text-white flex flex-col justify-end bg-gradient-to-br ${pages[index].color}`}>
                <div className="max-w-xl">
                  <p className="uppercase tracking-[0.2em] text-white/80 text-xs mb-2">Issue 04</p>
                  <h3 className="text-4xl md:text-5xl font-extrabold mb-4">{pages[index].title}</h3>
                  <p className="text-white/90 text-base md:text-lg">{pages[index].content}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
