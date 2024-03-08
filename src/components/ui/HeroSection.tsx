export default function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen text-center">

      {/* Left column for the background pattern and hero image */}
      <div className="lg:w-3/5 w-full relative overflow-hidden">
        {/* Background pattern */}
        <img src="/heroPattern.svg" alt="Background pattern" className="absolute inset-0 w-full h-full object-cover" />
        
        {/* Hero image */}
        {/* Adjust width and height as needed, this is just an example */}
        <img 
          src="/heroImage.png" 
          alt="Hero" 
          className="relative lg:absolute lg:inset-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2" 
          style={{ maxHeight: '728px' }} // Override the max-height inline for greater specificity
        />      </div>

      {/* Right column for text with added padding */}
      <div className="lg:w-2/5 w-full flex flex-col justify-center p-8 lg:p-16">
        <h1 className="text-4xl lg:text-6xl text-[#1f6079] font-bold mb-4">
         Revolutionizing Mental Wellness
        </h1>
        <p className="text-lg lg:text-xl text-[#1f6079] mb-8">
          A New Approach to Brain Health
        </p>
        <a 
          href="https://testflight.apple.com/join/w2vMOLFB" 
          className="bg-black text-white font-semibold text-lg py-3 lg:py-4 px-10 lg:px-16 rounded-full hover:bg-white hover:text-black transition-colors shadow-lg"
        >
          Download - Beta<br />
        </a>
        <span className="text-xs lg:text-sm mt-1">
          It's free, secure, data on device and no login required.
        </span>
      </div>

    </div>
  );
}
