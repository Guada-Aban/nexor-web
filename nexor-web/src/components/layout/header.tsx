'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Inicio', href: '/' },
  { label: 'Quiénes Somos', href: '/quienes-somos' },
  { label: 'Obras e Infraestructura', href: '/obras-e-infraestructura', color: 'hover:text-naranja', indicator: 'bg-naranja' },
  { label: 'Servicios Industriales', href: '/servicios-industriales', color: 'hover:text-green-400', indicator: 'bg-green-500', proximamente: true },
  { label: 'Consultoría Empresarial', href: '/consultoria-empresarial', color: 'hover:text-azul', indicator: 'bg-azul' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  if (typeof window !== 'undefined') {
    window.onscroll = () => setScrolled(window.scrollY > 20)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-nexor-dark/95 backdrop-blur-sm shadow-lg' : 'bg-nexor-dark'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

        <Link href="/" className="flex items-center">
         <img
          src="/images/logo_nexor.png"
         alt="Nexor Group"
        className="h-18 w-auto brightness-0 invert"
        />
          </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-4 py-2 text-sm font-medium text-white/70 transition-colors rounded-md hover:bg-white/5 ${item.color ?? 'hover:text-white'} group`}
            >
              {item.label}
              {item.proximamente && <span className="ml-1.5 text-[9px] text-green-400 font-semibold">PRÓX</span>}
              {item.indicator && <span className={`absolute bottom-1 left-4 right-4 h-[2px] ${item.indicator} scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />}
            </Link>
          ))}
        </nav>

        <Link
          href="/contacto"
          className="hidden lg:inline-flex items-center gap-2 bg-naranja hover:bg-naranja-deep text-white text-sm font-semibold px-6 py-2.5 transition-all hover:gap-3"
        >
          Contacto →
        </Link>

        <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-nexor-dark border-t border-white/10 px-6 py-4 flex flex-col gap-1">
          {[...NAV_ITEMS, { label: 'Contacto', href: '/contacto' }].map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="text-sm text-white/70 hover:text-white py-2 transition-colors">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}