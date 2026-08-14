import HeroObras from '@/components/obras/HeroObras'
import ServiciosObras from '@/components/obras/ServiciosObras'
import CapacidadObras from '@/components/obras/CapacidadObras'
import DiferenciadoresObras from '@/components/obras/DiferenciadoresObras'
import ClientesObras from '@/components/obras/ClientesObras'
import CTAObras from '@/components/obras/CTAObras'

export const metadata = {
  title: 'Obras e Infraestructura — Nexor Group',
  description: 'Movimiento de suelos, locaciones, obra civil industrial, transporte pesado y alquiler de maquinaria. Flota propia con trazabilidad GPS.',
}

export default function ObrasPage() {
  return (
    <>
      <HeroObras />
      <ServiciosObras />
      <CapacidadObras />
      <DiferenciadoresObras />
      <ClientesObras />
      <CTAObras />
    </>
  )
}