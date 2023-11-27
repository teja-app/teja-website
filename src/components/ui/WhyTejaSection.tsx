import { bodyCss, headingFontCss, titleFontCss } from '@/components/css/fonts';

export default function WhyTejaSection() {
  return (
    <div className="relative bg-[#1f6079] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className={`text-4xl font-bold mb-3 ${titleFontCss.className}`}>Why Choose Teja?</h2>
          <p className={`text-xl ${bodyCss.className}`}>At Teja, we believe in making emotional wellness a natural part of everyday life, offering personalized experiences that resonate with each individual.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 flex flex-wrap justify-center gap-20 mb-20">
          {/* Problem */}
          <div className="flex flex-col items-center max-w-md mx-auto">
            <h3 className={`text-xl font-semibold mb-4 ${headingFontCss.className}`}>The Challenge</h3>
            <p className={bodyCss.className}>"In an era where life's pressures are ever-present, we noticed a crucial need for a more empathetic and holistic approach to emotional health and well-being."</p>
          </div>
          {/* Inspiration */}
          <div className="flex flex-col items-center max-w-md mx-auto">
            <h3 className={`text-xl font-semibold mb-4 ${headingFontCss.className}`}>Our Inspiration</h3>
            <p className={bodyCss.className}>"Motivated by the profound impact of mindful living and the importance of a nurturing community, we embarked on creating a unique platform."</p>
          </div>
          {/* Vision */}
          <div className="flex flex-col items-center max-w-md mx-auto">
            <h3 className={`text-xl font-semibold mb-4 ${headingFontCss.className}`}>Our Vision</h3>
            <p className={bodyCss.className}>"We envision a world where everyone has access to the resources they need to flourish emotionally, mentally, and spiritually."</p>
          </div>
          {/* Solution */}
          <div className="flex flex-col items-center max-w-md mx-auto">
            <h3 className={`text-xl font-semibold mb-4 ${headingFontCss.className}`}>Our Solution</h3>
            <p className={bodyCss.className}>"Teja is our commitment to this ideal, offering customized tools and support to guide individuals on their personal path to emotional wellness."</p>
          </div>
        </div>
      </div>
    </div>
  );
}
