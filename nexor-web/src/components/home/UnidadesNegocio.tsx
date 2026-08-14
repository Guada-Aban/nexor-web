'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const UNIDADES = [
  {
    id: 'naranja',
    nombre: 'Obras e Infraestructura',
    claim: 'Donde la industria se construye.',
    descripcion:
      'Movimiento de suelos, locaciones, obra civil industrial, transporte pesado y alquiler de maquinaria.',
    detalle: 'Flota propia · Operadores calificados · Trazabilidad GPS 100%',
    bg: 'bg-naranja',
    text: 'text-naranja',
    href: '/obras-e-infraestructura',
    numero: '01',
  },
  {
    id: 'azul',
    nombre: 'Consultoría Empresarial',
    claim: 'Estructura profesional para crecer en la industria.',
    descripcion:
      'Asesoría legal, contable, laboral, sistemas de gestión y estrategia empresarial.',
    detalle: 'Equipo multidisciplinario · Especializado en Oil & Gas y Minería',
    bg: 'bg-azul',
    text: 'text-azul',
    href: '/consultoria-empresarial',
    numero: '02',
  },
  {
    id: 'verde',
    nombre: 'Servicios Industriales',
    claim: 'Próximamente.',
    descripcion: 'La tercera unidad de negocio de Nexor Group está en desarrollo.',
    detalle: 'Registrá tu interés y te contactamos cuando esté operativa',
    bg: 'bg-green-700',
    text: 'text-green-700',
    href: '/servicios-industriales',
    numero: '03',
    proximamente: true,
  },
]

export default function UnidadesNegocio() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section className="bg-nexor-cream py-24">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="text-naranja text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              Nuestras unidades
            </p>
            <h2 className="text-nexor-dark text-4xl md:text-5xl font-bold">
              Soluciones Especializadas<br />
            </h2>
          </div>
          <p className="text-nexor-dark/50 text-sm max-w-xs">
            Sinergia estratégica entre construcción, gestión y servicios operativos
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row gap-1 h-auto md:h-[480px]"
        >
          {UNIDADES.map((u) => {
            const isActive = active === u.id
            return (
              <Link
                key={u.id}
                href={u.href}
                onMouseEnter={() => setActive(u.id)}
                onMouseLeave={() => setActive(null)}
                className={`group relative overflow-hidden flex flex-col justify-between p-8 transition-all duration-500 ease-out
                  ${isActive ? 'md:flex-[2.2] bg-nexor-dark' : 'md:flex-1 bg-white'}
                  ${u.proximamente && !isActive ? 'opacity-80' : ''}
                  min-h-[180px] md:min-h-0
                `}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${u.bg}`} />

                <div className="flex items-start justify-between">
                  <span
                    className={`text-5xl font-bold transition-colors duration-500 ${
                      isActive ? 'text-white/10' : 'text-nexor-dark/10'
                    }`}
                  >
                    {u.numero}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className={`transition-all duration-300 ${
                      isActive ? 'text-white opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                    }`}
                  />
                </div>

                <div>
                  {u.proximamente && (
                    <span
                      className={`inline-block text-[10px] font-bold uppercase tracking-widest mb-3 px-2 py-1 border ${
                        isActive ? 'text-green-400 border-green-400' : 'text-green-700 border-green-700'
                      }`}
                    >
                      Próximamente
                    </span>
                  )}

                  <h3
                    className={`font-bold leading-tight transition-all duration-500 ${
                      isActive ? 'text-white text-3xl mb-3' : 'text-nexor-dark text-xl mb-2'
                    }`}
                  >
                    {u.nombre}
                  </h3>

                  <p
                    className={`text-sm font-semibold italic mb-3 ${u.text} ${
                      isActive ? 'opacity-100' : 'opacity-90'
                    }`}
                  >
                    {u.claim}
                  </p>

                  <p
                    className={`text-sm leading-relaxed transition-all duration-500 overflow-hidden ${
                      isActive
                        ? 'text-white/70 max-h-32 opacity-100'
                        : 'text-nexor-dark/50 max-h-0 opacity-0'
                    }`}
                  >
                    {u.descripcion}
                  </p>

                  {isActive && (
                    <p className="text-white/40 text-xs mt-4 tracking-wide">
                      {u.detalle}
                    </p>
                  )}
                </div>
              </Link>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}