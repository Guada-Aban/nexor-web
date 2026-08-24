'use client'

import { motion } from 'framer-motion'
import { Mountain, MapPin, Building2, Truck, Wrench } from 'lucide-react'

const SERVICIOS = [
  {
    icono: Mountain,
    titulo: 'Movimiento de Suelos',
    descripcion: 'Excavación, relleno y compactación. Nivelación de terrenos. Recuperación, restitución y abandono de suelos a gran escala con maquinaria pesada propia.',
  },
  {
    icono: MapPin,
    titulo: 'Locaciones y Caminos',
    descripcion: 'Construcción y mantenimiento de locaciones de pozos. Apertura, reacondicionamiento y mantenimiento de caminos mineros, picadas y accesos a yacimiento.',
  },
  {
    icono: Building2,
    titulo: 'Obra Civil Industrial',
    descripcion: 'Hormigón armado para bases, plateas y pavimentos. Mampostería y obra seca para oficinas, casillas y depósitos. Mantenimiento civil de plantas y campamentos.',
  },
  {
    icono: Truck,
    titulo: 'Transporte Pesado',
    descripcion: 'Transporte de cargas convencionales y pesadas. Carretones hasta 70 TN y rolo petrolero. Logística operativa en yacimiento.',
  },
  {
    icono: Wrench,
    titulo: 'Alquiler de Maquinaria',
    descripcion: 'Retroexcavadoras, motoniveladoras, cargadoras, excavadoras y rodillos. Equipo más operador habilitado bajo sistema integrado de gestión.',
  },
]

export default function ServiciosObras() {
  return (
    <section id="servicios" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-naranja text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Expertise Técnico
          </p>
          <h2 className="text-nexor-dark text-4xl md:text-5xl font-bold">
            Portafolio de Servicios
          </h2>
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
                className="group bg-white hover:bg-naranja p-8 flex flex-col gap-4 transition-colors duration-300 cursor-default"
              >
                <div className="w-10 h-[3px] bg-naranja group-hover:bg-white transition-colors duration-300" />
                <Icono size={28} className="text-naranja group-hover:text-white transition-colors duration-300" />
                <h3 className="text-nexor-dark group-hover:text-white font-bold text-base leading-snug transition-colors duration-300">
                  {s.titulo}
                </h3>
                <p className="text-nexor-dark/50 group-hover:text-white/80 text-sm leading-relaxed transition-colors duration-300">
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