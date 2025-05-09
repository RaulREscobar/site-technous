'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSwipeable } from 'react-swipeable'

const testimonios = [
  {
    nombre: 'Mariana Gómez',
    cargo: 'CMO en StartUpX',
    mensaje: 'Trabajar con tech{nous} fue clave para lograr una presencia digital sólida. Creativos, comprometidos y rápidos.',
    foto: '/testimonials/mariana.jpeg',
  },
  {
    nombre: 'Lucas Torres',
    cargo: 'CEO en DevSolutions',
    mensaje: 'Nos ayudaron a optimizar nuestro sistema interno con tecnología moderna y una interfaz muy amigable.',
    foto: '/testimonials/lucas.jpeg',
  },
  {
    nombre: 'Julieta Vargas',
    cargo: 'Consultora Independiente',
    mensaje: 'Excelente acompañamiento estratégico. tech{nous} aportó visión y claridad en cada etapa del proyecto.',
    foto: '/testimonials/julieta.jpeg',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  // Autoplay cada 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonios.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex((index + 1) % testimonios.length),
    onSwipedRight: () => setIndex((index - 1 + testimonios.length) % testimonios.length),
    preventScrollOnSwipe: true,
    trackMouse: true,
  })

  return (
    <section id="testimonios" className="bg-white py-20 px-6 text-[#16192f]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-gotham mb-8"
        >
          Lo que dicen de nosotros
        </motion.h2>

        <div {...handlers} className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="bg-[#f9f9f9] rounded-2xl p-8 shadow-lg font-montserrat"
            >
              <img
                src={testimonios[index].foto}
                alt={testimonios[index].nombre}
                className="w-16 h-16 mx-auto rounded-full mb-4 object-cover"
              />
              <p className="text-gray-700 italic mb-4">“{testimonios[index].mensaje}”</p>
              <h4 className="text-lg font-semibold">{testimonios[index].nombre}</h4>
              <span className="text-sm text-gray-500">{testimonios[index].cargo}</span>
            </motion.div>
          </AnimatePresence>

          {/* Botones */}
          <div className="flex justify-center gap-4 mt-6">
            {testimonios.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === index ? 'bg-accent' : 'bg-gray-300'
                } transition`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
