import Image from 'next/image';
import WhyTejaSection from '@/components/ui/WhyTejaSection';
import { bodyCss, headingFontCss, titleFontCss } from '@/components/css/fonts';
import FeaturesSection from '@/components/ui/FeaturesSection';
import Footer from '@/components/ui/FooterSection';

export const metadata = {
  title: 'Teja: a companion for emotional balance, mental wellness, and social connection',
  description: 'Discover a path to wellbeing with Teja custom-tailored journaling, mood monitoring, and self-improvement strategies, all designed to foster your psychological well-being and personal growth.',
}


export default function Home() {
  return (
    <>
      <div className="relative bg-white">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src={"/background.svg"} alt="Background" layout="fill" objectFit="cover" />
        </div>

        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Navigation */}
          <nav className="flex justify-between items-center p-4">
            <Image src={"/logo/color_horizontal.svg"} alt="Teja Logo" width={150} height={50} />
            {/* Navigation Links */}
            <div className={`hidden md:flex space-x-4 ${bodyCss.className}`} >
              <a href="/about" className="text-white font-semibold">About Us</a>
              <a href="#" className="text-white font-semibold">Help</a>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="flex-grow flex flex-col items-center justify-center text-center p-4">
            <h1 className={`text-6xl text-[#1f6079] font-bold mb-4 ${titleFontCss.className}`}>Peace, On Your Terms</h1>
            <p className="text-xl  text-[#1f6079] mb-8 ${headingFontCss.className}">Everyday Tools for Wellbeing</p>
            <a href="https://testflight.apple.com/join/w2vMOLFB" className="bg-black text-white font-semibold text-lg py-4 px-16 rounded-full hover:bg-white hover:text-black transition-colors shadow-lg">
              Download - Beta<br />
            </a>
            <span className="text-sm block mt-1">It's free, secure and no login required.</span>
          </div>
        </div>
      </div>
      <div className="relative bg-black">
        <WhyTejaSection />
      </div>
      <div className="relative">
        <FeaturesSection />
      </div>
      <div className="relative bg-black">
        <Footer/>
      </div>
    </>

  );
}