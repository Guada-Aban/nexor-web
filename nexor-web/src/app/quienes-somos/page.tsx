import HeroQuienesSomos from '@/components/quienes/HeroQuienesSomos'
import LaEmpresa from '@/components/quienes/LaEmpresa'
import EquipoQuienes from '@/components/quienes/EquipoQuienes'
import SIGQuienes from '@/components/quienes/SIGQuienes'
import PoliticaHSE from '@/components/quienes/PoliticaHSE'
import CTAQuienes from '@/components/quienes/CTAQuienes'

export const metadata = {
  title: 'Quiénes Somos — Nexor Group',
  description: 'Grupo de servicios industriales con tres unidades coordinadas bajo una misma estructura, metodología y responsabilidad.',
}

export default function QuienesSomosPage() {
  return (
    <>
      <HeroQuienesSomos />
      <LaEmpresa />
      <EquipoQuienes />
      <SIGQuienes />
      <PoliticaHSE />
      <CTAQuienes />
    </>
  )
}