'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const navItems = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Sobre Nosotros', href: '#sobre' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#16192f]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="#hero" className="text-white text-xl font-bold font-gotham">
          tech<span className="text-[#ff707f]">&#123;nous&#125;</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-white font-montserrat hover:text-[#ff707f] transition"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white mb-1 origin-center"
          />
          <motion.div
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-white mb-1"
          />
          <motion.div
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#16192f] text-white absolute top-full left-0 w-full px-6 pb-6"
          >
            <ul className="flex flex-col gap-4 mt-4 font-montserrat">
              {navItems.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg hover:text-[#ff707f] transition"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
