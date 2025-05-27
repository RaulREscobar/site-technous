// components/Hero.tsx
'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-primary text-white relative overflow-hidden px-6"
    >
      <div className="max-w-5xl w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight font-gotham"
        >
          Bienvenido a tech<span className='text-accent'>&#123;nous&#125;</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl font-montserrat text-gray-300"
        >
          Innovamos en Marketing, Desarrollo de Software y Consultoría estratégica.
        </motion.p>
        <motion.a
          href="#servicios"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="inline-block mt-10 px-8 py-3 rounded-full bg-[#ff707f] text-white text-lg font-semibold hover:bg-rose-400 transition"
        >
          Descubrí nuestros servicios
        </motion.a>
      </div>
    </section>
  )
}
