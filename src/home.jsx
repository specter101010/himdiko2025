import { useState, useEffect } from 'react'
import Header from './header/header'
import HeroBeranda from './hero beranda/hero'
import VisiMisi from './visi misi/visiMisi'
import KegiatanTerkini from './kegiatan terkini/terkini'
import Kepengurusan from './kepengurusan/kepengurusan'
import Footer from './footer/footer'

function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [hasScrolled, setHasScrolled] = useState(false) // untuk mencegah scroll berkali-kali

  // ⏳ 1. Preload asset (gambar)
  useEffect(() => {
    const loadAssets = async () => {
      await Promise.all([
        preloadImage('assets/lanyard card/yaysir masyal.png'),
        // tambahkan gambar lain jika perlu
      ])
      setIsLoading(false)
    }

    loadAssets()
  }, [])

  // 🎯 2. Scroll ke #hash setelah render (baik dengan/atau tanpa loading)
  useEffect(() => {
    if (!isLoading && !hasScrolled) {
      const hash = window.location.hash
      if (hash) {
        const el = document.querySelector(hash)
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' })
            setHasScrolled(true)
          }, 300) // kasih delay biar semua komponen render
        }
      }
    }
  }, [isLoading, hasScrolled])

  const preloadImage = (src) => {
    return new Promise((resolve) => {
      const img = new Image()
      img.src = src
      img.onload = resolve
    })
  }

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center bg-white">
        <p className="text-lg font-semibold animate-pulse">Loading...</p>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <HeroBeranda />
      <VisiMisi />
      <KegiatanTerkini />
      <Kepengurusan />
      <Footer />
    </div>
  )
}

export default Home
