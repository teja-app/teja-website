import Image from 'next/image';
import WhyTejaSection from '@/components/ui/WhyTejaSection';
import { bodyCss, headingFontCss, titleFontCss } from '@/components/css/fonts';
import FeaturesSection from '@/components/ui/FeaturesSection';
import Footer from '@/components/ui/FooterSection';
import HeroSection from '@/components/ui/HeroSection';
import Link from 'next/link';

export const metadata = {
  title: 'Teja: a companion for emotional balance, mental wellness, and social connection',
  description: 'Discover a path to wellbeing with Teja custom-tailored journaling, mood monitoring, and self-improvement strategies, all designed to foster your psychological well-being and personal growth.',
}


export default function Home() {
  return (
    <>
      <div className="relative bg-white text-black">
        {/* Background Image */}

        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Navigation */}
          <nav className="flex justify-between items-center p-4">
            <Image src={"/logo/color_horizontal.svg"} alt="Teja Logo" width={150} height={50} />
            {/* Navigation Links */}
            <div className={`hidden md:flex space-x-4 ${bodyCss.className}`} >
              <Link href="/blog/" className="font-semibold">Blog</Link>
              <Link href="/about/" className="font-semibold">About Us</Link>
            </div>
          </nav>
          <HeroSection />
        </div>
      </div>
      <div className="relative bg-white text-black">
        <WhyTejaSection />
      </div>
      <div className="relative bg-white text-black">
        <FeaturesSection />
      </div>
      <div className="relative bg-white text-black">
        <Footer/>
      </div>
    </>

  );
}