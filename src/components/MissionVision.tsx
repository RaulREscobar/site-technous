'use client'

import { motion } from 'framer-motion'

export default function MissionVision() {
  return (
    <section id="mission-vision" className="bg-[#f9f9f9] py-20 px-6 text-primary">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-gotham mb-12"
        >
         Mision y Vision
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            <h3 className="text-2xl font-semibold font-gotham mb-4 text-accent">Misión</h3>
            <p className="text-gray-700 font-montserrat leading-relaxed">
             Tech nous, es una empresa que ofrece servicios de marketing digital, diseño gráfico, y software, a través de consultorías o entregando servicios de valor agregado.

            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            <h3 className="text-2xl font-semibold font-gotham mb-4 text-accent">Visión</h3>
            <p className="text-gray-700 font-montserrat leading-relaxed">
             Consolidar la marca en Argentina y Latam a través de un <b>lenguaje comunicacional cercano,</b> pero a su vez <b>reflejando experiencia, innovación y confianza.</b>

            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
