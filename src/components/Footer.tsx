'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#16192f] text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Nombre y breve descripción */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold font-gotham text-white mb-4">
            tech<span className='text-accent'>&#123;nous&#125;</span>
          </h3>
          <p className="text-gray-400 font-montserrat">
            Transformamos ideas en soluciones digitales que impulsan el futuro.
          </p>
        </motion.div>

        {/* Navegación rápida */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-semibold font-gotham text-white mb-4">
            Navegación
          </h4>
          <ul className="space-y-2 font-montserrat">
            <li><Link href="#services" className="hover:text-accent transition">Servicios</Link></li>
            <li><Link href="#projects" className="hover:text-accent transition">Proyectos</Link></li>
            <li><Link href="#about" className="hover:text-accent transition">Sobre nosotros</Link></li>
            <li><Link href="#contact" className="hover:text-accent transition">Contacto</Link></li>
          </ul>
        </motion.div>

        {/* Redes sociales */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-semibold font-gotham text-white mb-4">
            Seguinos
          </h4>
          <div className="flex justify-center md:justify-start gap-6 text-2xl">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
              <FaLinkedin />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
              <FaTwitter />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Créditos */}
      <div className="text-center text-gray-500 text-sm mt-10 font-montserrat">
        © {new Date().getFullYear()} tech<span className='text-accent'>&#123;nous&#125;</span>. Todos los derechos reservados.
      </div>
    </footer>
  )
}
