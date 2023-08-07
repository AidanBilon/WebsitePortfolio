import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../../components/Navbar'
import Main from '../../components/Main'
import Link from 'next/link'
import About from '../../components/About'
import Projects from '../../components/Projects'
import Skills from '../../components/Skills'
import Contact from '../../components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aidan Bilon | Portfolio</title>
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
        <meta name="description" content="Aidan Bilon's Website Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}
