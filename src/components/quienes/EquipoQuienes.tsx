'use client'

import { motion } from 'framer-motion'
import { HardHat, Scale, BarChart3 } from 'lucide-react'

const AREAS = [
  {
    icono: HardHat,
    titulo: 'Ingeniería y Operaciones',
    descripcion: 'Ingenieros con experiencia en diseño, monitoreo y mantenimiento de plantas de procesamiento y obras, enfocados en la eficiencia operativa y la seguridad de activos.',
    color: 'text-naranja',
    bg: 'bg-naranja/10',
  },
  {
    icono: Scale,
    titulo: 'Marco Legal y Regulatorio',
    descripcion: 'Abogados especializados en derecho minero, energético y ambiental, garantizando el cumplimiento normativo más riguroso en cada jurisdicción de operación.',
    color: 'text-azul',
    bg: 'bg-azul/10',
  },
  {
    icono: BarChart3,
    titulo: 'Gestión Económica',
    descripcion: 'Contadores y analistas financieros con expertise en grandes proyectos industriales. Gestión de capital de trabajo (CAPEX) y costos operativos (OPEX) en entornos volátiles.',
    color: 'text-green-700',
    bg: 'bg-green-700/10',
  },
]

export default function EquipoQuienes() {
  return (
    <section className="bg-nexor-dark py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-white text-4xl font-bold mb-3">
            Equipo y Profesionales
          </h2>
          <p className="text-white/40 text-sm max-w-xl mx-auto">
            Una sinergia de talentos provenientes de las compañías líderes
            del sector energético y minero global.
          </p>
          <div className="w-12 h-[3px] bg-naranja mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {AREAS.map((area, i) => {
            const Icono = area.icono
            return (
              <motion.div
                key={area.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="bg-nexor-dark p-10 flex flex-col gap-5"
              >
                <div className={`w-12 h-12 ${area.bg} flex items-center justify-center`}>
                  <Icono size={22} className={area.color} />
                </div>
                <h3 className={`font-bold text-lg ${area.color}`}>{area.titulo}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{area.descripcion}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}