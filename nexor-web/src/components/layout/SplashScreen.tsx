'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const UNIDADES = [
  {
    nombre: 'Nexor Obras',
    sub: 'Obras e Infraestructura',
    color: '#F57828',
    href: '/obras-e-infraestructura',
  },
  {
    nombre: 'Nexor Consultoría',
    sub: 'Ingeniería y Consultoría',
    color: '#2D73B5',
    href: '/consultoria-empresarial',
  },
  {
    nombre: 'Nexor Servicios',
    sub: 'Servicios Industriales',
    color: '#4A7C59',
    href: '/servicios-industriales',
  },
]

export default function SplashScreen() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center gap-10 overflow-hidden"
    >
      {/* Líneas de fondo decorativas */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.03, x: 0 }}
          transition={{ duration: 1.5, delay: i * 0.2, ease: 'easeOut' }}
          className="absolute h-px bg-white"
          style={{ top: `${15 + i * 18}%`, left: 0, right: 0 }}
        />
      ))}

      {/* Círculo pulsante */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: [1, 1.15, 1] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.6 },
          scale: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 },
        }}
        className="absolute w-[600px] h-[600px] rounded-full border border-white/10"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-5 relative z-10"
      >
        <motion.img
          src="/images/logo_nexor.png"
          alt="Nexor Group"
          className="w-[360px] max-w-[72vw] h-auto brightness-0 invert"
          animate={{ filter: ['brightness(0) invert(1) opacity(0.9)', 'brightness(0) invert(1) opacity(1)', 'brightness(0) invert(1) opacity(0.9)'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Líneas de color */}
        <div className="flex gap-2">
          {['#F57828', '#2D73B5', '#4A7C59'].map((c, i) => (
            <motion.div
              key={c}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{ backgroundColor: c, transformOrigin: 'left' }}
              className="h-[3px] w-16"
            />
          ))}
        </div>
      </motion.div>

      {/* Divisor */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'top' }}
        className="w-px h-10 bg-gradient-to-b from-transparent via-white/30 to-transparent relative z-10"
      />

      {/* Instrucción */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="text-white/30 text-[10px] tracking-[0.5em] uppercase relative z-10"
      >
        Seleccioná tu unidad
      </motion.p>

      {/* Tres unidades clickeables */}
      <motion.div
        className="flex flex-row items-start justify-center gap-10 md:gap-20 relative z-10"
      >
        {UNIDADES.map((u, i) => (
          <motion.div
            key={u.nombre}
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 1.3 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-3 w-28"
          >
            <Link
              href={u.href}
              onMouseEnter={() => setHovered(u.nombre)}
              onMouseLeave={() => setHovered(null)}
            >
              <motion.div
                animate={{
                  boxShadow: hovered === u.nombre
                    ? `0 0 30px ${u.color}90`
                    : [`0 0 0px ${u.color}00`, `0 0 20px ${u.color}60`, `0 0 0px ${u.color}00`],
                  scale: hovered === u.nombre ? 1.12 : 1,
                }}
                transition={
                  hovered === u.nombre
                    ? { duration: 0.2 }
                    : { duration: 2, delay: 0.8 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }
                }
                className="w-16 h-16 flex items-center justify-center font-black text-2xl text-white cursor-pointer"
                style={{ backgroundColor: u.color }}
              >
                N
              </motion.div>
            </Link>

            <div className="text-center">
              <p className="text-white text-[11px] font-bold tracking-widest uppercase leading-tight">
                {u.nombre}
              </p>
              <p className="text-white/40 text-[10px] tracking-wide mt-1 leading-tight">
                {u.sub}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="text-white/20 text-[10px] tracking-[0.5em] uppercase relative z-10"
      >
        Construimos · Operamos · Gestionamos
      </motion.p>
    </motion.div>
  )
}