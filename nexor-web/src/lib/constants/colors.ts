export const COLORS = {
  nexorDark: '#434041',
  nexorCream: '#FAF6F2',
  nexorBorder: '#EFE2D4',
  naranja: '#F57828',
  naranjaDeep: '#C44218',
  naranjaAccent: '#F79426',
  naranjaRed: '#EF382C',
  azul: '#2D73B5',
} as const

export const UNIDADES = {
  naranja: {
    nombre: 'Obras e Infraestructura',
    claim: 'Donde la industria se construye.',
    color: COLORS.naranja,
    colorClass: 'naranja',
    slug: 'obras-e-infraestructura',
  },
  azul: {
    nombre: 'Consultoría Empresarial',
    claim: 'Estructura profesional para crecer en la industria.',
    color: COLORS.azul,
    colorClass: 'azul',
    slug: 'consultoria-empresarial',
  },
  verde: {
    nombre: 'Servicios Industriales',
    claim: 'Próximamente.',
    color: '#4A7C59',
    colorClass: 'green-700',
    slug: 'servicios-industriales',
    proximamente: true,
  },
} as const