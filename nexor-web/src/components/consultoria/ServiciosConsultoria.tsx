'use client'

import { motion } from 'framer-motion'
import { Scale, Calculator, Users, FileCheck, TrendingUp } from 'lucide-react'

const SERVICIOS = [
  {
    icono: Scale,
    titulo: 'Asesoría Legal y Compliance',
    descripcion: 'Gestión de riesgos contractuales, cumplimiento normativo y blindaje jurídico operativo.',
  },
  {
    icono: Calculator,
    titulo: 'Contable, Impositiva y Costos',
    descripcion: 'Optimización de carga tributaria y control de costos específicos de proyectos industriales.',
  },
  {
    icono: Users,
    titulo: 'Recursos Humanos y Derecho Laboral',
    descripcion: 'Gestión de talento especializado y resolución de conflictos de derecho laboral industrial.',
  },
  {
    icono: FileCheck,
    titulo: 'Sistemas de Gestión Documental',
    descripcion: 'Implementación de procesos ISO y gestión rigurosa de documentación técnica y administrativa.',
  },
  {
    icono: TrendingUp,
    titulo: 'Estrategia y Crecimiento Empresarial',
    descripcion: 'Consultoría estratégica para expansión de mercado y profesionalización de directorios.',
  },
]

export default function ServiciosConsultoria() {
  return (
    <section className="bg-nexor-cream py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-nexor-dark text-4xl md:text-5xl font-bold mb-4">
            Nuestros Pilares de Excelencia
          </h2>
          <div className="w-12 h-[3px] bg-azul mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-nexor-border">
          {SERVICIOS.map((s, i) => {
            const Icono = s.icono
            return (
              <motion.div
                key={s.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-white hover:bg-azul p-8 flex flex-col gap-4 transition-colors duration-300 cursor-default"
              >
                <div className="w-10 h-[3px] bg-azul group-hover:bg-white transition-colors duration-300" />
                <Icono size={26} className="text-azul group-hover:text-white transition-colors duration-300" />
                <h3 className="text-nexor-dark group-hover:text-white font-bold text-sm leading-snug transition-colors duration-300">
                  {s.titulo}
                </h3>
                <p className="text-nexor-dark/50 group-hover:text-white/80 text-xs leading-relaxed transition-colors duration-300">
                  {s.descripcion}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}