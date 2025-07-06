import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Basic SEO */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api-v2.soundcloud.com" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://gonpinodj.netlify.app" />
        
        {/* Hreflang for multilingual SEO */}
        <link rel="alternate" hrefLang="es" href="https://gonpinodj.comes" />
        <link rel="alternate" hrefLang="en" href="https://gonpinodj.comen" />
        <link rel="alternate" hrefLang="x-default" href="https://gonpinodj.netlify.app" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              "name": "Gon Pino DJ",
              "alternateName": "DJ Gon Pino",
              "description": "DJ y Productor de Música Electrónica en Costa del Sol, España. Especializado en Tech House, Latin Tech, Afro House y Deep Tech. Disponible para eventos, fiestas y contrataciones en Marbella, Estepona y toda la Costa del Sol.",
              "url": "https://gonpinodj.netlify.app",
              "image": "https://gonpinodj.comassets/imageAbout.jpg",
              "sameAs": [
                "https://instagram.com/gonpinoofficial",
                "https://youtube.com/@GonPinoOfficial",
                "https://soundcloud.com/djgonpino"
              ],
              "genre": ["Tech House", "Latin Tech", "Afro House", "Deep Tech", "Electronic Music"],
              "foundingDate": "2012",
              "foundingLocation": {
                "@type": "Place",
                "name": "Argentina"
              },
              "location": {
                "@type": "Place",
                "name": "Costa del Sol, España",
                "address": {
                  "@type": "PostalAddress",
                  "addressRegion": "Andalucía",
                  "addressCountry": "ES"
                }
              },
              "performer": {
                "@type": "Person",
                "name": "Gon Pino",
                "jobTitle": "DJ y Productor Musical",
                "description": "DJ profesional con más de 13 años de experiencia en la industria musical"
              },
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Servicios de DJ",
                  "description": "DJ profesional para eventos, fiestas, bodas y celebraciones en Costa del Sol"
                },
                "areaServed": [
                  "Marbella",
                  "Estepona",
                  "Costa del Sol",
                  "Málaga",
                  "Andalucía",
                  "España"
                ]
              }
            })
          }}
        />
        
        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Gon Pino DJ - Servicios de DJ Costa del Sol",
              "description": "DJ profesional en Costa del Sol. Contratación de DJ para eventos, fiestas y celebraciones en Marbella, Estepona y toda la Costa del Sol. Especializado en música electrónica, Tech House y Latin Tech.",
              "url": "https://gonpinodj.netlify.app",
              "telephone": "+34610988607",
              "image": "https://gonpinodj.comassets/imageAbout.jpg",
              "priceRange": "€€",
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Marbella"
                },
                {
                  "@type": "City", 
                  "name": "Estepona"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Costa del Sol"
                }
              ],
              "serviceType": "DJ Services",
              "offers": {
                "@type": "Offer",
                "description": "Servicios profesionales de DJ para todo tipo de eventos"
              }
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 