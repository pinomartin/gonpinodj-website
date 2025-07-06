import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Header } from '@/components/Header'
import { Biography } from '@/components/Biography'
import { Contact } from '@/components/Contact'
import { HeroVideo } from '@/components/HeroVideo'
import SoundCloudPlayer from '@/components/NewMusic'

// Fallback translations for static export
const fallbackTranslations = {
  en: {
    seo: {
      title: "DJ Gon Pino - Professional DJ Costa del Sol | Marbella | Estepona | Events & Parties",
      description: "🎵 Professional DJ in Costa del Sol with +13 years experience. Specialized in Tech House, Latin Tech, Afro House. DJ booking for events, parties, weddings in Marbella, Estepona. Book now!",
      keywords: "DJ Costa del Sol, DJ Marbella, DJ Estepona, DJ Spain, professional DJ, Tech House, Latin Tech, Afro House, Deep Tech, electronic music, DJ events, DJ parties, DJ weddings, DJ booking",
      ogTitle: "🎵 DJ Gon Pino - Professional DJ Costa del Sol | Events & Parties Booking",
      ogDescription: "Professional DJ with +13 years experience in Costa del Sol. Specialized in Tech House, Latin Tech, Afro House. Available for events, parties, weddings in Marbella, Estepona. Contact us!",
      ogImageAlt: "DJ Gon Pino - Professional Electronic Music DJ in Costa del Sol",
      twitterTitle: "DJ Gon Pino - Professional DJ Costa del Sol | Events & Parties",
      twitterDescription: "🎵 Professional DJ with +13 years experience. Tech House, Latin Tech, Afro House. Available for events in Marbella, Estepona. Book now!",
      eventName: "Professional DJ Services - Gon Pino",
      eventDescription: "Professional DJ booking for events, parties, weddings and celebrations in Costa del Sol. Specialized in electronic music, Tech House, Latin Tech and Afro House."
    },
    meta: {
      subtitle: "Electronic Music Artist & Producer"
    },
    biography: {
      myStory: {
        content: "Since my beginnings in 2012, I have accumulated over 13 years of experience in the music industry, performing at renowned clubs across Argentina, Spain, and Italy. Some of these venues include Basement Club, Moondance, Icon Club, La Sospechosa Madrid, and El Sótano. My passion for electronic music has led me to be recognized as one of the most outstanding DJs in Costa del Sol, offering unique sets that combine the best house music with innovative Latin sounds."
      }
    }
  },
  es: {
    seo: {
      title: "DJ Gon Pino - DJ Profesional Costa del Sol | Marbella | Estepona | Eventos y Fiestas",
      description: "🎵 DJ profesional en Costa del Sol con +13 años de experiencia. Especializado en Tech House, Latin Tech, Afro House. Contratación DJ para eventos, fiestas, bodas en Marbella, Estepona. ¡Reserva ya!",
      keywords: "DJ Costa del Sol, DJ Marbella, DJ Estepona, DJ España, DJ profesional, Tech House, Latin Tech, Afro House, Deep Tech, música electrónica, DJ eventos, DJ fiestas, DJ bodas, contratación DJ",
      ogTitle: "🎵 DJ Gon Pino - DJ Profesional Costa del Sol | Contratación Eventos y Fiestas",
      ogDescription: "DJ profesional con +13 años de experiencia en Costa del Sol. Especializado en Tech House, Latin Tech, Afro House. Disponible para eventos, fiestas, bodas en Marbella, Estepona. ¡Contáctanos!",
      ogImageAlt: "DJ Gon Pino - DJ Profesional de Música Electrónica en Costa del Sol",
      twitterTitle: "DJ Gon Pino - DJ Profesional Costa del Sol | Eventos y Fiestas",
      twitterDescription: "🎵 DJ profesional con +13 años de experiencia. Tech House, Latin Tech, Afro House. Disponible para eventos en Marbella, Estepona. ¡Reserva ya!",
      eventName: "Servicios de DJ Profesional - Gon Pino",
      eventDescription: "Contratación de DJ profesional para eventos, fiestas, bodas y celebraciones en Costa del Sol. Especializado en música electrónica, Tech House, Latin Tech y Afro House."
    },
    meta: {
      subtitle: "DJ y Productor de Música Electrónica"
    },
    biography: {
      myStory: {
        content: "Desde mis inicios en 2012, he acumulado más de 13 años de experiencia en la industria musical, actuando en reconocidos clubes de Argentina, España e Italia. Algunos de estos incluyen Basement Club, Moondance, Icon Club, La Sospechosa Madrid y El Sótano. Mi pasión por la música electrónica me ha llevado a ser reconocido como uno de los DJs más destacados de la Costa del Sol, ofreciendo sets únicos que combinan la mejor música house con sonidos latinos innovadores."
      }
    }
  }
}

export default function Home() {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  
  // Use fallback translations for static export
  const isStaticExport = process.env.NODE_ENV === 'production'
  const translations = isStaticExport ? fallbackTranslations[locale as keyof typeof fallbackTranslations] || fallbackTranslations.es : null

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gonpinodj.netlify.app'
  const currentUrl = `${siteUrl}${router.asPath}`
  
  const getTranslation = (key: string) => {
    if (isStaticExport && translations) {
      const keys = key.split('.')
      let value: any = translations
      for (const k of keys) {
        value = value?.[k]
      }
      return value || key
    }
    return t(key)
  }
  
  return (
    <>
      <Head>
        <title>{getTranslation('seo.title')}</title>
        <meta name="description" content={getTranslation('seo.description')} />
        <meta name="keywords" content={getTranslation('seo.keywords')} />
        <meta name="author" content="Gon Pino DJ" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Open Graph */}
        <meta property="og:title" content={getTranslation('seo.ogTitle')} />
        <meta property="og:description" content={getTranslation('seo.ogDescription')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={`${siteUrl}/assets/imageAbout.jpg`} />
        <meta property="og:image:alt" content={getTranslation('seo.ogImageAlt')} />
        <meta property="og:site_name" content="Gon Pino DJ" />
        <meta property="og:locale" content={locale === 'es' ? 'es_ES' : 'en_US'} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={getTranslation('seo.twitterTitle')} />
        <meta name="twitter:description" content={getTranslation('seo.twitterDescription')} />
        <meta name="twitter:image" content={`${siteUrl}/assets/imageAbout.jpg`} />
        
        {/* Local SEO */}
        <meta name="geo.region" content="ES-AN" />
        <meta name="geo.placename" content="Costa del Sol, España" />
        <meta name="geo.position" content="36.5;-4.9" />
        <meta name="ICBM" content="36.5, -4.9" />
        
        {/* Additional SEO */}
        <meta name="language" content={locale === 'es' ? 'Spanish' : 'English'} />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        
        {/* JSON-LD for Events */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": getTranslation('seo.eventName'),
              "description": getTranslation('seo.eventDescription'),
              "image": `${siteUrl}/assets/imageAbout.jpg`,
              "performer": {
                "@type": "MusicGroup",
                "name": "Gon Pino DJ"
              },
              "location": {
                "@type": "Place",
                "name": "Costa del Sol",
                "address": {
                  "@type": "PostalAddress",
                  "addressRegion": "Andalucía",
                  "addressCountry": "ES"
                }
              },
              "offers": {
                "@type": "Offer",
                "url": currentUrl,
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <Header />
        <div id="hero">
          <HeroVideo subtitle={getTranslation('meta.subtitle')} name="Gon Pino" />
        </div>
        <div id="biography">
          <Biography 
            content={getTranslation('biography.myStory.content')} 
            image="/assets/imageAbout.jpg" 
          />
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
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  try {
    return {
      props: {
        ...(await serverSideTranslations(locale ?? 'en', ['common'])),
      },
    }
  } catch (error) {
    // Fallback for static export
    return {
      props: {},
    }
  }
} 