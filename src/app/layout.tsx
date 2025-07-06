import type React from "react";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from '@/context/ThemeContext'
import { LanguageProvider } from '@/context/LanguageContext'
import "@/styles/globals.css";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gonpinodj.netlify.app"),
  title: {
    template: "%s | DJ Gon Pino",
    default: "DJ Gon Pino - DJ Profesional Costa del Sol | Marbella | Estepona | Eventos y Fiestas",
  },
  description:
    "🎵 DJ profesional en Costa del Sol con +13 años de experiencia. Especializado en Tech House, Latin Tech, Afro House. Contratación DJ para eventos, fiestas, bodas en Marbella, Estepona. ¡Reserva ya!",
  keywords: [
    "DJ Costa del Sol",
    "DJ Marbella", 
    "DJ Estepona",
    "DJ España",
    "DJ profesional",
    "Tech House",
    "Latin Tech",
    "Afro House",
    "Deep Tech",
    "música electrónica",
    "DJ eventos",
    "DJ fiestas",
    "DJ bodas",
    "contratación DJ",
    "DJ Málaga",
    "DJ Andalucía",
    "productor musical",
    "DJ experiencia",
    "alquiler DJ",
    "reservar DJ",
    "DJ disponible",
    "DJ premium",
    "DJ exclusivo",
    "DJ corporativo",
    "DJ celebraciones",
    "DJ sonido",
    "DJ sets",
    "DJ shows",
    "DJ actuaciones",
    "DJ entretenimiento",
    "DJ ambiente",
    "DJ baile",
    "DJ terraza",
    "DJ playa",
    "pool party",
    "beach club",
    "rooftop",
    "DJ hotel",
    "DJ resort",
    "DJ villa",
    "DJ cumpleaños",
    "DJ aniversario",
    "DJ inauguración",
    "DJ lanzamiento",
    "DJ marca",
    "DJ empresa",
    "DJ local",
    "DJ zona Costa del Sol",
    "DJ región Marbella",
    "DJ Estepona profesional",
    "DJ cercano",
    "DJ recomendado",
    "DJ top",
    "DJ excelente",
    "DJ destacado",
    "DJ reconocido",
    "DJ famoso",
    "DJ popular",
    "música house",
    "música techno",
    "DJ verano",
    "DJ temporada",
    "DJ internacional",
    "DJ nacional",
    "DJ Fuengirola",
    "DJ Benalmádena",
    "DJ Torremolinos",
    "DJ Puerto Banús",
    "DJ Nueva Andalucía",
    "DJ San Pedro",
    "DJ Benahavís",
    "electronic music producer",
    "professional DJ Spain",
    "house music DJ",
    "techno DJ",
    "event DJ booking"
  ],
  authors: [{ name: "DJ Gon Pino" }],
  creator: "DJ Gon Pino",
  publisher: "DJ Gon Pino",
  applicationName: "DJ Gon Pino",
  alternates: {
    canonical: "https://gonpinodj.netlify.app",
    languages: {
      es: "https://gonpinodj.netlify.app/es",
      en: "https://gonpinodj.netlify.app/en",
      "x-default": "https://gonpinodj.netlify.app",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    url: "https://gonpinodj.netlify.app",
    siteName: "DJ Gon Pino",
    title: "🎵 DJ Gon Pino - DJ Profesional Costa del Sol | Contratación Eventos y Fiestas",
    description:
      "DJ profesional con +13 años de experiencia en Costa del Sol. Especializado en Tech House, Latin Tech, Afro House. Disponible para eventos, fiestas, bodas en Marbella, Estepona. ¡Contáctanos!",
    images: [
      {
        url: "/assets/about.webp",
        width: 1200,
        height: 630,
        alt: "DJ Gon Pino - DJ Profesional de Música Electrónica en Costa del Sol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DJ Gon Pino - DJ Profesional Costa del Sol | Eventos y Fiestas",
    description: "🎵 DJ profesional con +13 años de experiencia. Tech House, Latin Tech, Afro House. Disponible para eventos en Marbella, Estepona. ¡Reserva ya!",
    images: ["/assets/about.webp"],
    creator: "@gonpinoofficial",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "Next.js",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  category: "music",
  classification: "DJ Services",
  other: {
    "geo.region": "ES-AN",
    "geo.placename": "Costa del Sol, España", 
    "geo.position": "36.5;-4.9",
    "ICBM": "36.5, -4.9",
    "language": "Spanish",
    "distribution": "global",
    "rating": "general",
    "revisit-after": "7 days",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://api-v2.soundcloud.com" />
        <link
          rel="preload"
          href="/assets/about.webp"
          as="image"
          type="image/jpeg"
        />
        <link
          rel="preload"
          href="/assets/trimmedVideoDogor.mp4"
          as="video"
          type="video/mp4"
        />
        
        {/* Structured Data */}
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
              "image": "https://gonpinodj.netlify.app/assets/about.webp",
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
                  "addressCountry": "ES",
                  "addressLocality": "Costa del Sol"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "36.5",
                  "longitude": "-4.9"
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
                  "Fuengirola",
                  "Benalmádena",
                  "Torremolinos",
                  "Puerto Banús",
                  "Nueva Andalucía",
                  "San Pedro",
                  "Benahavís",
                  "Andalucía",
                  "España"
                ]
              }
            })
          }}
        />

        {/* Local Business Schema */}
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
              "image": "https://gonpinodj.netlify.app/assets/about.webp",
              "priceRange": "€€",
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
                }
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
              "serviceType": "DJ Services",
              "offers": {
                "@type": "Offer",
                "description": "Servicios profesionales de DJ para todo tipo de eventos"
              },
              "openingHours": "Mo-Su 00:00-23:59",
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
              }
            })
          }}
        />
      </head>
      <body className="antialiased bg-white dark:bg-black transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
} 