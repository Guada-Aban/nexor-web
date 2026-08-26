'use client'

export default function ClientesSection() {
  const clientes = [
    'Nabors International Argentina',
    'San Antonio Internacional',
    'Premix S.A.',
    'Transportes Andreu',
    'Transportes Tahan',
  ]

  // Duplicamos el array para que el marquee sea infinito sin saltos
  const clientesLoop = [...clientes, ...clientes]

  return (
    <section className="bg-white py-24 border-t border-nexor-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16">
          <p className="text-naranja text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Antecedentes
          </p>
          <h2 className="text-nexor-dark text-4xl md:text-5xl font-bold">
            Confiaron en nosotros las empresas<br className="hidden md:block" />
            que ponen la vara más alta.
          </h2>
        </div>
      </div>

      {/* Marquee — fuera del max-w para que ocupe todo el ancho */}
      <div className="relative">
        {/* Fades laterales para que no se corte abrupto */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-marquee">
          {clientesLoop.map((cliente, i) => (
            <div
              key={`${cliente}-${i}`}
              className="flex items-center justify-center px-12 py-8 flex-shrink-0 group cursor-default"
            >
              <p className="text-nexor-dark/30 group-hover:text-naranja text-xl font-bold text-center tracking-wide uppercase whitespace-nowrap transition-colors duration-300">
                {cliente}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <p className="text-nexor-dark/40 text-xs mt-10 text-center">
          Más de 10 años trabajando con operadoras y contratistas líderes del sector Oil & Gas y Minería.
        </p>
      </div>
    </section>
  )
}

