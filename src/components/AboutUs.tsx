'use client'

import { motion } from 'framer-motion'

export default function AboutUs() {
  return (
    <section id="about" className="bg-white text-[#16192f] py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-gotham mb-6"
        >
          Sobre Nosotros
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 font-montserrat leading-relaxed"
        >
          En <span className="font-bold text-primary">tech&#123;<span className='text-accent'>nous</span>&#125;</span>, creemos en el poder de la innovación, la colaboración y la tecnología de vanguardia. Nuestro equipo reúne a especialistas en marketing, desarrollo de software y consultoría empresarial para ayudar a las empresas a crecer, adaptarse y prosperar en la era digital.
          <br className="hidden md:block" />
          <br />
          Abordamos cada proyecto con estrategia, creatividad y pasión, convirtiendo desafíos complejos en soluciones digitales elegantes.
        </motion.p>
      </div>
    </section>
  )
}
