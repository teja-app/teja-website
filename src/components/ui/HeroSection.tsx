import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row text-center">
      <div className="lg:w-4/6 w-full flex flex-col justify-center">
        <h1 className="text-4xl text-[#1f6079] font-bold mb-4">
          Journaling for daily peace and drive.
        </h1>
        <p className="text-lg lg:text-xl text-[#1f6079] mb-8">
          Revolutionizing Mental Wellness
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
          <Link
            href="https://apps.apple.com/us/app/teja-journal-selfcare/id6473733799"
            className="bg-black text-white font-semibold text-lg py-3 px-6 rounded-full hover:bg-white hover:text-black transition-colors shadow-lg flex items-center justify-center w-64 sm:w-auto"
          >
            <AppleIcon className="w-6 h-6 mr-2" />
            Download for iOS
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=app.teja.app"
            className="bg-black text-white font-semibold text-lg py-3 px-6 rounded-full hover:bg-white hover:text-black transition-colors shadow-lg flex items-center justify-center w-64 sm:w-auto"
          >
            <AndroidIcon className="w-6 h-6 mr-2" />
            Download for Android
          </Link>
        </div>
        <span className="text-xs lg:text-sm mt-1">
          It's free, secure, anonymous and no login required.
        </span>
      </div>
      <div className="lg:w-2/6 w-full relative mt-8 lg:mt-0">
        <Image
          src="/womenJournalingTeja.jpg"
          width={450}
          height={450}
          alt="Woman with a journal"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 384 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
      />
    </svg>
  );
}

function AndroidIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 576 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"
      />
    </svg>
  );
}
