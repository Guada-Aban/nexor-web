import HeroConsultoria from '@/components/consultoria/HeroConsultoria'
import ParaQuienConsultoria from '@/components/consultoria/ParaQuienConsultoria'
import ServiciosConsultoria from '@/components/consultoria/ServiciosConsultoria'
import DiferenciadoresConsultoria from '@/components/consultoria/DiferenciadoresConsultoria'
import ModelosConsultoria from '@/components/consultoria/ModelosConsultoria'
import CTAConsultoria from '@/components/consultoria/CTAConsultoria'

export const metadata = {
  title: 'Consultoría Empresarial — Nexor Group',
  description: 'Asesoría legal, contable, laboral y estratégica para empresas del sector Oil & Gas y Minería.',
}

export default function ConsultoriaPage() {
  return (
    <>
      <HeroConsultoria />
      <ParaQuienConsultoria />
      <ServiciosConsultoria />
      <DiferenciadoresConsultoria />
      <ModelosConsultoria />
      <CTAConsultoria />
    </>
  )
}