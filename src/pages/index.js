import Head from 'next/head'
import { Inter } from 'next/font/google'
import Main from '../../components/Main'
import About from '../../components/About'
import Projects from '../../components/Projects'
import Skills from '../../components/Skills'
import Contact from '../../components/Contact'
import Work from '../../components/Work'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aidan Bilon | Portfolio</title>
        <meta name="google-site-verification" content="6yYu_oEKHUsh1vqmX9DUtrEIWSYxPAfgmI46WYp8WDo" />
        <meta name="description" content="Aidan Bilon's Website Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Work />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}
