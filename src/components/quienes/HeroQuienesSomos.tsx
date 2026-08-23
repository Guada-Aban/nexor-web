'use client'

import { motion } from 'framer-motion'

export default function HeroQuienesSomos() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img
          src="https://blanchedalmond-lark-179970.hostingersite.com/wp-content/uploads/2026/08/quienes-somos.jpg"
          alt="Quienes Somos"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-naranja via-azul to-green-700 z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-32 pt-40 w-full">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-naranja text-xs font-bold tracking-[0.3em] uppercase mb-6"
          >
            Nexor Group
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-5xl md:text-7xl font-bold leading-[1.02] mb-6"
          >
            Nuestra identidad: solidez y compromiso industrial
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/70 text-lg leading-relaxed mb-6 max-w-2xl"
          >
            Somos un grupo multidisciplinario de ingenieros, contadores y abogados
            con una trayectoria forjada en los yacimientos y plantas de procesamiento
            más exigentes. Nuestra experiencia no viene de los libros, sino de la
            ejecución real en campo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-3"
          >
            <div className="h-px w-12 bg-naranja" />
            <span className="text-naranja text-xs font-bold tracking-[0.3em] uppercase">
              Especialistas en sectores críticos
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}