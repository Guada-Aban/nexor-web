'use client'

import { useState } from 'react'
import SplashScreen from '@/components/layout/SplashScreen'
import HeroHome from '@/components/home/HeroHome'
import BajadaMarca from '@/components/home/BajadaMarca'
import UnidadesNegocio from '@/components/home/UnidadesNegocio'
import PilaresSection from '@/components/home/PilaresSection'
import SectoresSection from '@/components/home/SectoresSection'
import ClientesSection from '@/components/home/ClientesSection'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  const [splashDone, setSplashDone] = useState(false)

  return (
    <>
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}
      <HeroHome />
      <BajadaMarca />
      <UnidadesNegocio />
      <PilaresSection />
      <SectoresSection />
      <ClientesSection />
      <CTASection />
    </>
  )
}