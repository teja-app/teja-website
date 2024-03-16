import type { Metadata } from 'next';
import Image from 'next/image';
import { Lato } from 'next/font/google';
import Head from 'next/head';
import './globals.css';
import { bodyCss } from '@/components/css/fonts';
import Footer from '@/components/ui/FooterSection';

const lato = Lato({
  subsets: ['latin'],
  weight: '400'
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <>
        <nav className="bg-white text-black flex justify-between items-center p-4">
        <a href="/" className=" font-semibold"> <Image src={"/logo/color_horizontal.svg"} alt="Teja Logo" width={150} height={50} /> </a>
          {/* Navigation Links */}
          <div className={`hidden md:flex space-x-4 ${bodyCss.className}`} >
            <a href="/blog" className="font-semibold">Blog</a>
            <a href="/about" className=" font-semibold">About Us</a>
            <a href="#" className=" font-semibold">Help</a>
          </div>
        </nav>
        <main className="bg-white text-black"> 
          {children}
        </main>
        <Footer/>
        </>
  )
}
