import HeroContacto from '@/components/contacto/HeroContacto'
import FormContacto from '@/components/contacto/FormContacto'

export const metadata = {
  title: 'Contacto — Nexor Group',
  description: 'Conversemos sobre tu próximo proyecto. Obras, servicios industriales y consultoría para Oil & Gas y Minería.',
}

export default function ContactoPage() {
  return (
    <>
      <HeroContacto />
      <FormContacto />
    </>
  )
}