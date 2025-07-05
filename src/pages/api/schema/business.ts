import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gonpinodj.netlify.app'
  
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Gon Pino DJ",
    "alternateName": "DJ Gon Pino",
    "description": "DJ profesional y productor de música electrónica en Costa del Sol, España. Especializado en Tech House, Latin Tech, Afro House y Deep Tech para eventos, fiestas y celebraciones.",
    "url": baseUrl,
    "telephone": "+34610988607",
    "email": "booking@gonpinodj.com",
    "image": [
      `${baseUrl}/assets/imageAbout.jpg`,
      `${baseUrl}/logo.png`
    ],
    "logo": `${baseUrl}/logo.png`,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ES",
      "addressRegion": "Andalucía",
      "addressLocality": "Costa del Sol"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.5,
      "longitude": -4.9
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Marbella",
        "sameAs": "https://en.wikipedia.org/wiki/Marbella"
      },
      {
        "@type": "City",
        "name": "Estepona",
        "sameAs": "https://en.wikipedia.org/wiki/Estepona"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Costa del Sol",
        "sameAs": "https://en.wikipedia.org/wiki/Costa_del_Sol"
      },
      {
        "@type": "City",
        "name": "Fuengirola"
      },
      {
        "@type": "City",
        "name": "Benalmádena"
      },
      {
        "@type": "City",
        "name": "Torremolinos"
      },
      {
        "@type": "Place",
        "name": "Puerto Banús"
      }
    ],
    "serviceType": "Entertainment Services",
    "priceRange": "€€",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50",
      "bestRating": "5"
    },
    "sameAs": [
      "https://instagram.com/gonpinoofficial",
      "https://youtube.com/@GonPinoOfficial",
      "https://soundcloud.com/djgonpino"
    ],
    "openingHours": [
      "Mo-Su 00:00-23:59"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de DJ",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DJ para Eventos Corporativos",
            "description": "Servicios profesionales de DJ para eventos corporativos, lanzamientos y presentaciones"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DJ para Bodas",
            "description": "Música especializada para bodas y celebraciones románticas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DJ para Fiestas Privadas",
            "description": "Entretenimiento musical para fiestas privadas y celebraciones"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DJ para Clubs y Discotecas",
            "description": "Sets profesionales para clubs, discotecas y venues nocturnos"
          }
        }
      ]
    },
    "knowsAbout": [
      "Tech House",
      "Latin Tech", 
      "Afro House",
      "Deep Tech",
      "Electronic Music",
      "House Music",
      "Techno Music",
      "DJ Mixing",
      "Music Production"
    ]
  }

  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Cache-Control', 'public, s-maxage=86400')
  res.status(200).json(businessSchema)
} 