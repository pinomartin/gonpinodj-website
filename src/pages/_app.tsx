import { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from '@/context/ThemeContext'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import '@/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <ThemeProvider>
      {gaId && <GoogleAnalytics gaId={gaId} />}
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp) 