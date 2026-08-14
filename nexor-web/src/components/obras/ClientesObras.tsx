'use client'

import { motion } from 'framer-motion'

const CLIENTES = ['NABORS', 'San Antonio', 'AESA', 'PREMIX', 'TAHAN']

export default function ClientesObras() {
  return (
    <section className="bg-nexor-cream py-16 border-t border-nexor-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-nexor-dark/40 text-xs tracking-[0.4em] uppercase text-center mb-10"
        >
          Empresas que confían en nuestra ejecución
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-12">
          {CLIENTES.map((c, i) => (
            <motion.p
              key={c}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-nexor-dark/30 hover:text-naranja text-xl font-bold tracking-widest uppercase transition-colors duration-300 cursor-default"
            >
              {c}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}