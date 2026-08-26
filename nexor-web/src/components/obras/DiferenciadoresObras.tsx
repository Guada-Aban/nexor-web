'use client'

import { motion } from 'framer-motion'
import { Shield, MapPin, HardHat, Clock, FileCheck } from 'lucide-react'

const DIFERENCIADORES = [
  {
    icono: Shield,
    titulo: 'Flota Propia Certificada',
    descripcion: 'No subcontratamos. Ejecutamos con equipos propios garantizando costos, tiempos y estándares.',
  },
  {
    icono: MapPin,
    titulo: 'Trazabilidad Total GPS',
    descripcion: 'Monitoreo constante de cada unidad para auditorías HSE y control operativo 24/7.',
  },
  {
    icono: HardHat,
    titulo: 'Personal HSE Calificado',
    descripcion: 'Operadores con libreta sanitaria y cursos HSE vigentes para ingreso a yacimiento.',
  },
  {
    icono: Clock,
    titulo: '+10 Años de Antecedentes',
    descripcion: 'Trayectoria verificable con operadoras y contratistas líderes de Oil & Gas y Minería.',
  },
  {
    icono: FileCheck,
    titulo: 'SIG ISO 9001 · 14001 · 45001',
    descripcion: 'Procedimientos documentados, auditables y disponibles para cualquier proceso de precalificación.',
  },
]

export default function DiferenciadoresObras() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-naranja text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Nuestra Propuesta
            </p>
            <h2 className="text-nexor-dark text-4xl font-bold leading-tight mb-10">
              Diferenciadores de la Unidad
            </h2>

            <div className="flex flex-col gap-6">
              {DIFERENCIADORES.map((d, i) => {
                const Icono = d.icono
                return (
                  <motion.div
                    key={d.titulo}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-10 h-10 bg-naranja/10 flex items-center justify-center flex-shrink-0">
                      <Icono size={18} className="text-naranja" />
                    </div>
                    <div>
                      <h3 className="text-nexor-dark font-bold text-base mb-1">{d.titulo}</h3>
                      <p className="text-nexor-dark/60 text-sm leading-relaxed">{d.descripcion}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-2"
          >
            <div className="bg-nexor-dark p-8 flex flex-col justify-center">
              <p className="text-naranja text-4xl font-bold">+10</p>
              <p className="text-white/50 text-xs uppercase tracking-wider mt-2">Años de antecedentes</p>
            </div>
            <div className="bg-naranja p-8 flex flex-col justify-center">
              <p className="text-white text-2xl font-bold">SIG ISO</p>
              <p className="text-white/70 text-xs uppercase tracking-wider mt-2">9001 · 14001 · 45001</p>
            </div>
            <div className="col-span-2 bg-nexor-cream border border-nexor-border p-8">
              <p className="text-naranja text-xs font-bold tracking-widest uppercase mb-3">
                Compromiso con la Excelencia
              </p>
              <p className="text-nexor-dark/70 text-sm leading-relaxed">
                Nuestra gestión está diseñada para cumplir con las precalificaciones
                más exigentes de la industria petrolera y minera. Cada operación
                queda documentada y disponible para auditoría externa.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}