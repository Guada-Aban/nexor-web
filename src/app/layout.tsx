import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Nexor Group — Obras, Servicios Industriales y Consultoría',
  description:
    'Grupo de servicios industriales especializado en Oil & Gas y Minería. Obras e infraestructura, servicios industriales y consultoría empresarial bajo una misma estructura.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('load', function() {
              var loader = document.getElementById('page-loader');
              if (loader) {
                loader.style.opacity = '0';
                setTimeout(function() { loader.style.display = 'none'; }, 300);
              }
            });
          `
        }} />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased min-h-screen flex flex-col`}>
        <div id="page-loader" className="fixed inset-0 bg-black z-[200] transition-opacity duration-300" />
        <Header />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}