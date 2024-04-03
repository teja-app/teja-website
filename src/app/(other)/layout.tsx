import type { Metadata } from 'next';
import Image from 'next/image';
import { Lato } from 'next/font/google';
import Head from 'next/head';
import { bodyCss } from '@/components/css/fonts';
import Footer from '@/components/ui/FooterSection';
import Link from 'next/link';

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
    <html lang="en" className="bg-white text-black">
    <Head>
    <link rel="icon" href="/favicon.ico" sizes="any" />
    </Head>
      <body className={`bg-white text-black  ${lato.className}`}>
        <nav className="bg-white text-black flex justify-between items-center p-4">
        <Link href="/" className=" font-semibold"> <Image src={"/logo/color_horizontal.svg"} alt="Teja Logo" width={150} height={50} /> </Link>
          {/* Navigation Links */}
          <div className={`space-x-4 ${bodyCss.className}`} >
            <Link href="/about" className=" font-semibold">About Us</Link>
            <Link href="#" className=" font-semibold">Help</Link>
          </div>
        </nav>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
