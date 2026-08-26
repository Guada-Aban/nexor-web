'use client'

import { useEffect } from 'react'

export default function PageLoader() {
  useEffect(() => {
    const loader = document.getElementById('page-loader')
    if (loader) {
      loader.style.opacity = '0'
      setTimeout(() => {
        loader.style.display = 'none'
      }, 300)
    }
  }, [])

  return null
}