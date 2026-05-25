import '../styles/globals.css'
import Navbar from '../../components/Navbar'
import Script from 'next/script'

function App({ Component, pageProps }) {
  return <>
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-TTJH9QH72C" />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-TTJH9QH72C');
      `}
    </Script>
    <Navbar />
    <Component {...pageProps} />
  </>
}

export default App