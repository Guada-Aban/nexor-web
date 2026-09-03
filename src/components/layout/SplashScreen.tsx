'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const UNIDADES = [
  {
    nombre: 'Nexor Obras',
    sub: 'Obras e Infraestructura',
    color: '#F57828',
    href: '/obras-e-infraestructura',
    logo: '/images/n-naranja-logo.png',
    logoGrande: '/images/n-naranja.png',
  },
  {
    nombre: 'Nexor Consultoría',
    sub: 'Ingeniería y Consultoría',
    color: '#2D73B5',
    href: '/consultoria-empresarial',
    logo: '/images/n-azul-logo.png',
    logoGrande: '/images/n-azul.png',
  },
  {
    nombre: 'Nexor Servicios',
    sub: 'Servicios Industriales',
    color: '#4A7C59',
    href: '/servicios-industriales',
    logo: '/images/n-verde-logo.png',
    logoGrande: '/images/n-verde.png',
  },
]

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'logo' | 'units' | 'exit'>('logo')
  const [hovered, setHovered] = useState<string | null>(null)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('units'), 1800)
    const t2 = setTimeout(() => setPhase('exit'), 30000)
    const t3 = setTimeout(() => onComplete(), 30000)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          key="splash"
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center gap-10 overflow-hidden"
        >
          {/* Líneas de fondo */}
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

          {/* Logo principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-5 relative z-10"
          >
            <img
              src="/images/logo_nexor.png"
              alt="Nexor Group"
              className="w-[360px] max-w-[72vw] h-auto brightness-0 invert"
            />
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
            animate={phase === 'units' ? { scaleY: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'top' }}
            className="w-px h-10 bg-gradient-to-b from-transparent via-white/30 to-transparent relative z-10"
          />

          {/* Instrucción */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={phase === 'units' ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/30 text-[10px] tracking-[0.5em] uppercase relative z-10 -mb-6"
          >
            Seleccioná tu unidad
          </motion.p>

          {/* Tres unidades clickeables */}
          <div className="flex flex-row items-start justify-center gap-10 md:gap-24 relative z-10">
            {UNIDADES.map((u, i) => (
              <motion.div
                key={u.nombre}
                initial={{ opacity: 0, y: 24, scale: 0.9 }}
                animate={phase === 'units' ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center gap-4"
              >
                <Link
                  href={u.href}
                  onMouseEnter={() => setHovered(u.nombre)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => onComplete()}
                  className="flex flex-col items-center gap-4"
                >
                  <motion.div
                    animate={{
                      filter: hovered === u.nombre
                        ? `drop-shadow(0 0 20px ${u.color}99)`
                        : [
                            `drop-shadow(0 0 0px ${u.color}00)`,
                            `drop-shadow(0 0 12px ${u.color}60)`,
                            `drop-shadow(0 0 0px ${u.color}00)`,
                          ],
                      scale: hovered === u.nombre ? 1.12 : 1,
                    }}
                    transition={
                      hovered === u.nombre
                        ? { duration: 0.2 }
                        : { duration: 2, delay: 0.8 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }
                    }
                    className="cursor-pointer"
                  >
                    {u.logoGrande ? (
                      <img
                        src={u.logoGrande}
                        alt={u.nombre}
                        className="w-24 h-24 object-contain"
                      />
                    ) : (
                      <div
                        className="w-24 h-24 flex items-center justify-center font-black text-3xl text-white"
                        style={{ backgroundColor: u.color }}
                      >
                        N
                      </div>
                    )}
                  </motion.div>

                  {u.logo ? (
                    <img
                      src={u.logo}
                      alt={u.nombre}
                      className="h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <div className="text-center">
                      <p className="text-white text-[11px] font-bold tracking-widest uppercase leading-tight">
                        {u.nombre}
                      </p>
                      <p className="text-white/40 text-[10px] tracking-wide mt-1 leading-tight">
                        {u.sub}
                      </p>
                    </div>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={phase === 'units' ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/20 text-[10px] tracking-[0.5em] uppercase relative z-10"
          >
            Construimos · Operamos · Gestionamos
          </motion.p>

          {/* Botón ver sitio */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={phase === 'units' ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="relative z-10"
          >
            <Link
              href="/"
              onClick={() => onComplete()}
              className="group inline-flex items-center gap-3 border border-white/20 hover:border-white/60 bg-white/5 hover:bg-white/10 text-white/50 hover:text-white px-8 py-3 transition-all duration-300"
            >
              <span className="text-[11px] tracking-[0.3em] uppercase font-semibold">
                Ver sitio completo
              </span>
              <span className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                →
              </span>
            </Link>
          </motion.div>

          {/* Barra de progreso */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 28, ease: 'linear' }}
            style={{ transformOrigin: 'left' }}
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-naranja via-azul to-green-600 opacity-40"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
