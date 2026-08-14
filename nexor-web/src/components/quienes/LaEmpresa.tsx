'use client'

import { motion } from 'framer-motion'

export default function LaEmpresa() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-naranja text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Trayectoria y Origen
            </p>
            <h2 className="text-nexor-dark text-4xl font-bold mb-8">La Empresa</h2>

            <p className="text-nexor-dark/70 text-base leading-relaxed mb-6">
              Nexor Group nace de la necesidad de integrar servicios técnicos
              especializados para la industria del Oil & Gas y la Minería bajo
              un estándar de ejecución que prioriza la operatividad real sobre
              la burocracia corporativa.
            </p>

            {/* Cita destacada */}
            <blockquote className="border-l-4 border-naranja pl-6 py-2 my-8">
              <p className="text-nexor-dark text-lg font-semibold italic leading-relaxed">
                "Nuestra cultura es netamente industrial, no corporativa.
                Entendemos el lenguaje del campo, el rigor del turno
                y la urgencia de la producción."
              </p>
              <footer className="text-nexor-dark/40 text-xs mt-3 uppercase tracking-wider">
                — Gerencia General, Nexor Group
              </footer>
            </blockquote>

            <p className="text-nexor-dark/70 text-base leading-relaxed">
              Entendemos que cada minuto de parada de planta tiene un costo
              crítico. Por eso construimos una estructura capaz de gestionar
              proyectos complejos de infraestructura, mantenimiento y consultoría
              con la agilidad que el sector demanda.
            </p>
          </motion.div>

          {/* Imagen + badge */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="w-full aspect-[3/4] bg-stone-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-stone-300 to-stone-500 flex items-center justify-center">
                <span className="text-stone-500 text-sm tracking-widest uppercase">
                  Foto profesional en campo
                </span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-naranja text-white px-6 py-4">
              <p className="text-3xl font-bold">+10</p>
              <p className="text-white/80 text-xs uppercase tracking-wider">
                Años de experiencia operativa
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}