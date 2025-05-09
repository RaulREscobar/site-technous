'use client'

import { motion } from 'framer-motion'

export default function MissionVision() {
  return (
    <section id="mission-vision" className="bg-[#f9f9f9] py-20 px-6 text-[#16192f]">
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
            <h3 className="text-2xl font-semibold font-gotham mb-4 text-accent">Nuestra Misión</h3>
            <p className="text-gray-700 font-montserrat leading-relaxed">
            Impulsamos a las empresas mediante la transformación digital estratégica. Nos esforzamos por ofrecer soluciones de alto impacto en marketing, tecnología y consultoría que ayuden a nuestros clientes a crecer, adaptarse y liderar en sus sectores.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            <h3 className="text-2xl font-semibold font-gotham mb-4 text-accent">Nuestra Visión</h3>
            <p className="text-gray-700 font-montserrat leading-relaxed">
            Convertirnos en un referente en innovación digital en América Latina, construyendo conexiones significativas entre marcas y tecnología, y creando soluciones que hagan el futuro más accesible y eficiente.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
