'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="bg-white text-[#16192f] py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-gotham mb-6"
        >
          Contáctanos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 font-montserrat mb-10"
        >
          Nos encantaría conocer tu proyecto, tus ideas o simplemente saludarnos. Contáctanos para empezar algo grande.
        </motion.p>

        <form className="space-y-6 text-left font-montserrat">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-1">
              Nombre y Apellido
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-600 mb-1">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
            ></textarea>
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-accent hover:bg-[#ff5b6f] text-white font-semibold px-8 py-3 rounded-full transition"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
