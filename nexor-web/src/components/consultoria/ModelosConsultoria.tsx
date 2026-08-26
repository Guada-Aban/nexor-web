'use client'

import { motion } from 'framer-motion'

const MODELOS = [
  {
    titulo: 'Abono Mensual',
    sub: 'Servicio Recurrente',
    descripcion: 'Gestión continua y outsourcing administrativo completo para empresas operativas.',
    cta: 'Servicio recurrente',
  },
  {
    titulo: 'Proyectos Puntuales',
    sub: 'Misión Crítica',
    descripcion: 'Intervenciones específicas: auditorías, certificaciones ISO, o blindaje contractual inicial.',
    cta: 'Misión crítica',
    highlight: true,
  },
  {
    titulo: 'Modelo Mixto',
    sub: 'Flexibilidad Total',
    descripcion: 'Estructura base de gestión mensual con escalabilidad para proyectos especiales de expansión.',
    cta: 'Flexibilidad total',
  },
]

export default function ModelosConsultoria() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-nexor-dark text-4xl font-bold mb-3">Modelos de Trabajo</h2>
          <p className="text-nexor-dark/50 text-sm">Flexibilidad adaptada a la etapa de madurez de su empresa.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MODELOS.map((m, i) => (
            <motion.div
              key={m.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`p-10 flex flex-col gap-4 border ${
                m.highlight
                  ? 'bg-nexor-dark border-nexor-dark'
                  : 'bg-white border-nexor-border hover:border-azul transition-colors'
              }`}
            >
              <div className={`w-10 h-[3px] ${m.highlight ? 'bg-azul' : 'bg-azul'}`} />
              <h3 className={`text-2xl font-bold ${m.highlight ? 'text-white' : 'text-nexor-dark'}`}>
                {m.titulo}
              </h3>
              <p className={`text-sm leading-relaxed flex-1 ${m.highlight ? 'text-white/60' : 'text-nexor-dark/60'}`}>
                {m.descripcion}
              </p>
              <span className={`text-xs font-bold tracking-widest uppercase ${m.highlight ? 'text-azul' : 'text-azul'}`}>
                {m.cta} →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}