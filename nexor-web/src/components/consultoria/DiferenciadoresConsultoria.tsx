'use client'

import { motion } from 'framer-motion'

const DIFERENCIADORES = [
  {
    titulo: 'Equipo Multidisciplinario',
    descripcion: 'Legales, contadores e ingenieros trabajando bajo una misma visión integral para su negocio.',
  },
  {
    titulo: 'Especialización Sectorial',
    descripcion: 'No somos generalistas. Conocemos las particularidades operativas de Oil & Gas y Minería desde adentro.',
  },
  {
    titulo: 'Pre-Calificación',
    descripcion: 'Dominio profundo de los requerimientos de las grandes operadoras para garantizar su contratación.',
  },
  {
    titulo: 'Respaldo Industrial',
    descripcion: 'Nuestra consultoría nace de la experiencia real gestionando el propio Nexor Group.',
  },
]

export default function DiferenciadoresConsultoria() {
  return (
    <section className="bg-nexor-dark py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="w-1 h-12 bg-azul mb-6" />
          <h2 className="text-white text-4xl md:text-5xl font-bold">
            Diferenciales Nexor
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/5">
          {DIFERENCIADORES.map((d, i) => (
            <motion.div
              key={d.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-nexor-dark hover:bg-azul/20 p-8 flex flex-col gap-3 transition-colors duration-300 cursor-default"
            >
              <p className="text-azul text-xs font-bold tracking-[0.2em] uppercase">
                0{i + 1}
              </p>
              <h3 className="text-white font-bold text-lg leading-snug">{d.titulo}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{d.descripcion}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}