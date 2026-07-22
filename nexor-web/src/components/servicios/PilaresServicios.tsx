'use client'

import { motion } from 'framer-motion'
import { Wrench, Building2, Shield, Truck, Network } from 'lucide-react'

const PILARES = [
  {
    icono: Wrench,
    titulo: 'Mantenimiento Industrial',
    descripcion: 'Programas predictivos y preventivos para plantas de procesamiento y terminales.',
    fecha: 'Q3 2024',
  },
  {
    icono: Building2,
    titulo: 'Facility Management',
    descripcion: 'Gestión integral de campamentos mineros e infraestructuras de soporte.',
    fecha: 'Q3 2024',
  },
  {
    icono: Shield,
    titulo: 'Soporte Técnico',
    descripcion: 'Asistencia especializada in-situ y servicios de parada de planta crítica.',
    fecha: 'Q4 2024',
  },
  {
    icono: Network,
    titulo: 'Integridad de Activos',
    descripcion: 'Ensayos no destructivos y certificación de cumplimiento normativo.',
    fecha: 'Q4 2024',
  },
  {
    icono: Truck,
    titulo: 'Logística Técnica',
    descripcion: 'Gestión de suministros industriales y repuestos críticos para operación.',
    fecha: 'Q1 2025',
  },
]

export default function PilaresServicios() {
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
          <h2 className="text-nexor-dark text-4xl font-bold mb-3">
            Pilares de Servicio
          </h2>
          <p className="text-nexor-dark/40 text-xs tracking-[0.3em] uppercase">
            Capacidades técnicas en fase de despliegue
          </p>
          <div className="w-12 h-[3px] bg-green-700 mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-nexor-border">
          {PILARES.map((p, i) => {
            const Icono = p.icono
            return (
              <motion.div
                key={p.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-white hover:bg-green-700 p-8 flex flex-col gap-4 transition-colors duration-300 cursor-default"
              >
                <Icono size={26} className="text-green-700 group-hover:text-white transition-colors duration-300" />
                <h3 className="text-nexor-dark group-hover:text-white font-bold text-sm leading-snug transition-colors duration-300">
                  {p.titulo}
                </h3>
                <p className="text-nexor-dark/50 group-hover:text-white/80 text-xs leading-relaxed transition-colors duration-300 flex-1">
                  {p.descripcion}
                </p>
                <span className="text-green-700 group-hover:text-green-300 text-[10px] font-bold tracking-widest transition-colors duration-300">
                  ● {p.fecha}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}