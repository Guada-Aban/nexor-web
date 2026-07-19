'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'scale'
  className?: string
}

export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: RevealProps) {
  const variants = {
    up: { y: 50, x: 0, scale: 1 },
    left: { y: 0, x: -60, scale: 1 },
    right: { y: 0, x: 60, scale: 1 },
    scale: { y: 0, x: 0, scale: 0.9 },
  }[direction]

  return (
    <motion.div
      initial={{ opacity: 0, ...variants }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const }}
      className={className}
    >
      {children}
    </motion.div>
  )
}