'use client'

import { motion } from 'framer-motion'
import { FaBullhorn, FaCode, FaLightbulb } from 'react-icons/fa'

const servicios = [
  {
    titulo: 'Marketing',
    descripcion:
      'Impulsamos tu marca con estrategias digitales innovadoras, SEO, campañas y redes sociales.',
    icono: <FaBullhorn className="text-4xl text-accent" />,
  },
  {
    titulo: 'Desarrollo',
    descripcion:
      'Creamos soluciones web a medida con tecnología de punta y diseño centrado en el usuario.',
    icono: <FaCode className="text-4xl text-accent" />,
  },
  {
    titulo: 'Consultoría',
    descripcion:
      'Te ayudamos a tomar decisiones estratégicas con una visión tecnológica y de negocio.',
    icono: <FaLightbulb className="text-4xl text-accent" />,
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-white text-[#16192f] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-gotham mb-4"
        >
          Nuestros Servicios
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 font-montserrat mb-12"
        >
          Combinamos creatividad, tecnología y estrategia para hacer crecer tu negocio.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-3">
          {servicios.map((servicio, i) => (
            <motion.div
              key={servicio.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#f9f9f9] p-6 rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col items-center"
            >
              <div className="mb-4">{servicio.icono}</div>
              <h3 className="text-xl font-semibold font-gotham mb-2">{servicio.titulo}</h3>
              <p className="text-gray-700 font-montserrat">{servicio.descripcion}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
