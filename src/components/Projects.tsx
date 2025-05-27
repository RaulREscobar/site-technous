'use client'

import { motion } from 'framer-motion'

const proyectos = [
  {
    titulo: 'Landing Page de Startup',
    descripcion: 'Diseño y desarrollo de una landing page moderna para una fintech en crecimiento.',
    imagen: '/projects/landing.jpeg',
  },
  {
    titulo: 'E-commerce de Moda',
    descripcion: 'Tienda online con pasarela de pagos, catálogo dinámico y diseño mobile-first.',
    imagen: '/projects/ecommerce.jpeg',
  },
  {
    titulo: 'Dashboard de Análisis',
    descripcion: 'Aplicación web con paneles de métricas para toma de decisiones empresariales.',
    imagen: '/projects/dashboard.jpeg',
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="bg-primary py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-gotham mb-4"
        >
          Proyectos Destacados
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-white font-montserrat mb-12"
        >
          Algunos de los trabajos que realizamos con pasión y tecnología.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {proyectos.map((proyecto, i) => (
            <motion.div
              key={proyecto.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold font-gotham mb-2">{proyecto.titulo}</h3>
                <p className="text-gray-700 font-montserrat text-sm">{proyecto.descripcion}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
