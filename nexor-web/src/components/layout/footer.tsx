import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-nexor-dark text-white/60 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Marca */}
        <div className="flex flex-col gap-3">
          <span className="text-white font-bold text-lg tracking-widest uppercase">NEXOR GROUP</span>
          <p className="text-sm leading-relaxed">
            Obras e Infraestructura · Servicios Industriales · Consultoría Empresarial
          </p>
          <p className="text-xs text-white/40">
            Construimos, operamos y gestionamos para la industria.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2">
          <span className="text-white text-sm font-semibold mb-1 uppercase tracking-wider">Sitio</span>
          {[
            { label: 'Quiénes Somos', href: '/quienes-somos' },
            { label: 'Obras e Infraestructura', href: '/obras-e-infraestructura' },
            { label: 'Servicios Industriales', href: '/servicios-industriales' },
            { label: 'Consultoría Empresarial', href: '/consultoria-empresarial' },
            { label: 'Clientes y Antecedentes', href: '/clientes-y-antecedentes' },
            { label: 'Contacto', href: '/contacto' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contacto */}
        <div className="flex flex-col gap-2">
          <span className="text-white text-sm font-semibold mb-1 uppercase tracking-wider">Contacto</span>
          <p className="text-sm">Mendoza · Argentina</p>
          <p className="text-sm">Oil & Gas · Minería</p>
          <Link
            href="/contacto"
            className="mt-3 inline-flex items-center justify-center bg-naranja hover:bg-naranja-deep text-white text-sm font-semibold px-5 py-2 transition-colors w-fit"
          >
            Conversemos
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} Nexor Group · ALIAN S.A.S. · CUIT 30-71890248-3
        </p>
        <p className="text-xs text-white/30">Malargüe · Mendoza · Argentina</p>
      </div>
    </footer>
  )
}