'use client'

import { Header } from '@/components/Header'
import { Biography } from '@/components/Biography'
import { Contact } from '@/components/Contact'
import { HeroVideo } from '@/components/HeroVideo'
import SoundCloudPlayer from '@/components/NewMusic'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Header />
      <div id="hero">
        <HeroVideo name="Gon Pino" />
      </div>
      <div id="biography">
        <Biography image="/assets/about.webp" />
      </div>
      <div id="music-player">
        <SoundCloudPlayer />
      </div>
      <div id="contact">
        <Contact
          phone="34610988607"
          instagram="gonpinoofficial"
          youtube="@GonPinoOfficial"
          spotify="https://soundcloud.com/djgonpino"
        />
      </div>
    </div>
  )
} 