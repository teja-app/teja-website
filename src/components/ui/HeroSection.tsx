import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen text-center">
      <div className="lg:w-4/6 w-full flex flex-col justify-center">
        <h1 className="text-4xl text-[#1f6079] font-bold mb-4">
          Journaling for daily peace and drive.
        </h1>
        <p className="text-lg lg:text-xl text-[#1f6079] mb-8">
          Revolutionizing Mental Wellness
        </p>
        <Link
          href="https://apps.apple.com/us/app/teja-journal-selfcare/id6473733799"
          className="bg-black text-white font-semibold text-lg py-3 lg:py-4 px-10 lg:px-16 rounded-full hover:bg-white hover:text-black transition-colors shadow-lg"
          style={{
            margin: '40px 20%',
          }}
        >
          Download<br />
        </Link>
        <span className="text-xs lg:text-sm mt-1">
          It's free, secure, data on device and no login required.
        </span>
      </div>
      {/* Left column for the background pattern and hero image */}
      <div className="lg:w-2/6 w-full relative">
        {/* Background pattern */}
        <img src="/heroPattern.svg" alt="Background pattern" className="absolute inset-0 w-full h-full object-cover" />
      </div>


    </div>
  );
}
