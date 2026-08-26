import HeroServicios from '@/components/servicios/HeroServicios'
import PilaresServicios from '@/components/servicios/PilaresServicios'
import FormularioServicios from '@/components/servicios/FormularioServicios'

export const metadata = {
  title: 'Servicios Industriales — Nexor Group',
  description: 'La nueva unidad de servicios industriales de Nexor Group. Registrá tu interés y sé el primero en conocer nuestra propuesta.',
}

export default function ServiciosIndustrialesPage() {
  return (
    <>
      <HeroServicios />
      <PilaresServicios />
      <FormularioServicios />
    </>
  )
}