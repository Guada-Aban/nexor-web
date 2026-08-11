export interface Unidad {
  nombre: string
  claim: string
  color: string
  colorClass: string
  slug: string
  proximamente?: boolean
}

export interface Servicio {
  titulo: string
  descripcion: string
  slug: string
  unidad: 'naranja' | 'azul' | 'verde'
}

export interface Caso {
  cliente: string
  sector: string
  ubicacion: string
  desafio: string
  ejecutado: string
  resultado: string
  confidencial?: boolean
}

export interface Pilar {
  titulo: string
  descripcion: string
  icono: string
}