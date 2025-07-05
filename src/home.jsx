import { useState, useEffect } from 'react'
import Header from './header/header'
import HeroBeranda from './hero beranda/hero'
import VisiMisi from './visi misi/visiMisi'
import KegiatanTerkini from './kegiatan terkini/terkini'
import Kepengurusan from './kepengurusan/kepengurusan'
import Footer from './footer/footer'


function Home() {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      const loadAssets = async () => {
        // Tunggu gambar-gambar dan font selesai diload
        await Promise.all([
          preloadImage('assets/lanyard card/yaysir masyal.png'),
          // tambahkan gambar lain jika ada
        ])
        setIsLoading(false)
      }
  
      loadAssets()
    }, [])
  
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
            <KegiatanTerkini/>
            <Kepengurusan />
            <Footer/>
      </div>
    );
  }
  
  export default Home;