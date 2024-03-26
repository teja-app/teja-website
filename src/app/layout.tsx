import type { Metadata } from 'next'
import Script from 'next/script'
import { Lato } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const lato = Lato({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Teja: a companion for emotional balance, mental wellness, and social connection',
  description: 'Discover a path to wellbeing with Teja custom-tailored journaling, mood monitoring, and self-improvement strategies, all designed to foster your psychological well-being and personal growth.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
    <Head>
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <Script defer src="https://app.tinyanalytics.io/pixel/qsIk6nWpfQWKHXZg" />
    </Head>
      <body className={lato.className}>
        {children}
        </body>
    </html>
  )
}
