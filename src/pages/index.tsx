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

export default function Home() {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router

  const siteUrl = 'https://gonpinodj.netlify.app'
  const currentUrl = `${siteUrl}${router.asPath}`
  
  return (
    <>
      <Head>
        <title>{t('seo.title')}</title>
        <meta name="description" content={t('seo.description')} />
        <meta name="keywords" content={t('seo.keywords')} />
        <meta name="author" content="Gon Pino DJ" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Open Graph */}
        <meta property="og:title" content={t('seo.ogTitle')} />
        <meta property="og:description" content={t('seo.ogDescription')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={`${siteUrl}/assets/imageAbout.jpg`} />
        <meta property="og:image:alt" content={t('seo.ogImageAlt')} />
        <meta property="og:site_name" content="Gon Pino DJ" />
        <meta property="og:locale" content={locale === 'es' ? 'es_ES' : 'en_US'} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('seo.twitterTitle')} />
        <meta name="twitter:description" content={t('seo.twitterDescription')} />
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
              "name": t('seo.eventName'),
              "description": t('seo.eventDescription'),
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
          <HeroVideo subtitle={t('meta.subtitle')} name="Gon Pino" />
        </div>
        <div id="biography">
          <Biography 
            content={t('biography.myStory.content')} 
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
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  }
} 