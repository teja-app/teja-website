import Image from 'next/image';
import { bodyCss } from '@/components/css/fonts';
import Footer from '@/components/ui/FooterSection';
import './globals.css';
import Link from 'next/link';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <>
        <nav className="bg-white text-black flex justify-between items-center p-4">
        <Link href="/" className=" font-semibold"> <Image src={"/logo/color_horizontal.svg"} alt="Teja Logo" width={150} height={50} /> </Link>
          {/* Navigation Links */}
          <div className={`hidden md:flex space-x-4 ${bodyCss.className}`} >
            <Link href="/blog" className="font-semibold">Blog</Link>
            <Link href="/about" className=" font-semibold">About Us</Link>
          </div>
        </nav>
        <main className="bg-white text-black"> 
          {children}
        </main>
        <Footer/>
        </>
  )
}
