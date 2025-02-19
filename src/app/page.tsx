import Image from "next/image";
import { bodyCss } from "@/components/css/fonts";
import ToolKitSection from "@/components/ui/ToolKitSection";
import Footer from "@/components/ui/FooterSection";
import HeroSection from "@/components/ui/HeroSection";
import Link from "next/link";
import PrivacySection from "@/components/ui/PrivacySection";
import UniqueFeatures from "@/components/ui/UniqueFeatures";

export const metadata = {
  title:
    "Teja: a companion for emotional balance, mental wellness, and social connection",
  description:
    "Discover a path to wellbeing with Teja custom-tailored journaling, mood monitoring, and self-improvement strategies, all designed to foster your psychological well-being and personal growth.",
};

export default function Home() {
  return (
    <>
      <header className="relative bg-white text-black">
        {/* Background Image */}
        <div className="relative z-10 flex flex-col">
          {/* Navigation */}
          <nav
            className="flex justify-between items-center p-4"
            aria-label="Main Navigation"
          >
            <Link href="/" aria-label="Teja Home">
              <Image
                src="/logo/color_horizontal.svg"
                alt="Teja Logo"
                width={150}
                height={50}
              />
            </Link>
            {/* Navigation Links */}
            <div className={`space-x-4 ${bodyCss.className}`}>
              <Link
                href="/blog/"
                className="font-semibold"
                aria-label="Navigate to Blog"
              >
                Blog
              </Link>
              <Link
                href="/about/"
                className="font-semibold"
                aria-label="Navigate to About Us"
              >
                About Us
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div className="relative my-16">
          <HeroSection />
        </div>
        <div className="relative my-32">
          <UniqueFeatures />
        </div>
        {/* <div className="relative my-32">
          <WhyTejaSection />
        </div> */}
        <div className="relative my-32">
          <PrivacySection />
        </div>
        <div className="relative my-32">
          <ToolKitSection />
        </div>
      </main>
      <footer>
        <div className="relative my-32">
          <Footer />
        </div>
      </footer>
    </>
  );
}
