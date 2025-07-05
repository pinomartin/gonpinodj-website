import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

interface SEOSchemaProps {
  type?: 'home' | 'events' | 'services'
  title?: string
  description?: string
  image?: string
}

export const SEOSchema = ({ 
  type = 'home', 
  title, 
  description, 
  image = '/assets/imageAbout.jpg' 
}: SEOSchemaProps) => {
  const router = useRouter()
  const { t } = useTranslation('common')
  const { locale } = router
  
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gonpinodj.netlify.app'
  const currentUrl = `${siteUrl}${router.asPath}`
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": "Gon Pino DJ",
    "alternateName": "DJ Gon Pino",
    "description": locale === 'es' 
      ? "DJ y Productor de Música Electrónica en Costa del Sol, España. Especializado en Tech House, Latin Tech, Afro House y Deep Tech."
      : "Electronic Music DJ and Producer in Costa del Sol, Spain. Specialized in Tech House, Latin Tech, Afro House and Deep Tech.",
    "url": siteUrl,
    "image": `${siteUrl}${image}`,
    "sameAs": [
      "https://instagram.com/gonpinoofficial",
      "https://youtube.com/@GonPinoOfficial",
      "https://soundcloud.com/djgonpino"
    ],
    "genre": ["Tech House", "Latin Tech", "Afro House", "Deep Tech", "Electronic Music"],
    "foundingDate": "2012",
    "location": {
      "@type": "Place",
      "name": "Costa del Sol, España",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Andalucía",
        "addressCountry": "ES",
        "addressLocality": "Costa del Sol"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "36.5",
        "longitude": "-4.9"
      }
    },
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": locale === 'es' ? "Servicios de DJ Profesional" : "Professional DJ Services",
        "description": locale === 'es' 
          ? "Servicios profesionales de DJ para eventos, fiestas, bodas y celebraciones"
          : "Professional DJ services for events, parties, weddings and celebrations"
      },
      "areaServed": [
        "Marbella", "Estepona", "Costa del Sol", "Málaga", "Fuengirola", 
        "Benalmádena", "Torremolinos", "Puerto Banús", "Nueva Andalucía"
      ]
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Gon Pino DJ - Servicios de DJ Costa del Sol",
    "description": locale === 'es'
      ? "DJ profesional en Costa del Sol. Especializado en música electrónica para eventos y celebraciones."
      : "Professional DJ in Costa del Sol. Specialized in electronic music for events and celebrations.",
    "url": siteUrl,
    "telephone": "+34610988607",
    "image": `${siteUrl}${image}`,
    "priceRange": "€€",
    "areaServed": [
      { "@type": "City", "name": "Marbella" },
      { "@type": "City", "name": "Estepona" },
      { "@type": "AdministrativeArea", "name": "Costa del Sol" }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Andalucía",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates", 
      "latitude": "36.5",
      "longitude": "-4.9"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "serviceType": "DJ Services"
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
    </Head>
  )
} 