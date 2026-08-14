'use client'

import { Layers, Target, Truck, FileCheck, TrendingUp } from 'lucide-react'

const PILARES = [
  {
    numero: '01',
    icono: Layers,
    titulo: 'Tres unidades bajo una misma estructura',
    descripcion:
      'Obra, servicios industriales y consultoría empresarial integrados. Un solo interlocutor, un solo presupuesto, una sola metodología compartida.',
  },
  {
    numero: '02',
    icono: Target,
    titulo: 'Especializados en Oil & Gas y Minería',
    descripcion:
      'Conocemos los códigos de la industria: precalificaciones, RePro, exigencias HSE, vocabulario operativo. No tenemos que aprender el negocio del cliente.',
  },
  {
    numero: '03',
    icono: Truck,
    titulo: 'Equipos propios, ejecución directa',
    descripcion:
      'Flota de transporte, maquinaria pesada y profesionales en relación directa con el grupo. No somos un broker que terceriza lo que vende.',
  },
  {
    numero: '04',
    icono: FileCheck,
    titulo: 'Metodología documentada y trazable',
    descripcion:
      'Operamos bajo sistema integrado de gestión alineado a ISO 9001, 14001 y 45001. Cada servicio queda documentado y disponible para auditoría externa.',
  },
  {
    numero: '05',
    icono: TrendingUp,
    titulo: 'Estructura pensada para escalar',
    descripcion:
      'Modelos comerciales flexibles, tiempos de respuesta cortos y capacidad de adaptarnos al ritmo de cada operación, sin la rigidez de las grandes consultoras.',
  },
]

export default function PilaresSection() {
  return (
    <section className="bg-nexor-dark py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-naranja text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              ¿Por qué Nexor?
            </p>
            <h2 className="text-white text-4xl md:text-5xl font-bold">
              Cinco pilares que<br />nos diferencian.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {PILARES.map((pilar) => {
            const Icono = pilar.icono
            return (
              <div
                key={pilar.numero}
                className="group relative bg-nexor-dark hover:bg-naranja p-8 flex flex-col gap-4 transition-colors duration-400 cursor-default overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <Icono
                    size={28}
                    className="text-naranja group-hover:text-white transition-colors duration-300"
                  />
                  <span className="text-white/20 group-hover:text-white/30 text-3xl font-bold transition-colors duration-300">
                    {pilar.numero}
                  </span>
                </div>

                <h3 className="text-white text-lg font-semibold leading-snug transition-colors duration-300">
                  {pilar.titulo}
                </h3>

                <p className="text-white/50 group-hover:text-white/85 text-sm leading-relaxed transition-colors duration-300">
                  {pilar.descripcion}
                </p>

                {/* Línea decorativa que crece desde abajo */}
                <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-0 group-hover:w-full transition-all duration-500" />
              </div>
            )
          })}

          {/* Celda de cierre con el claim — visible solo en desktop con 3 columnas */}
          <div className="bg-naranja-deep p-8 flex flex-col justify-end hidden lg:flex">
            <p className="text-white text-xl font-bold leading-snug">
              Construimos, operamos y gestionamos para la industria.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}