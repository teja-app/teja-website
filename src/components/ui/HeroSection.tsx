import Link from "next/link";
import Image from "next/image";
import { AppleIcon } from "./AppleIcon";
import { AndroidIcon } from "./AndroidIcon";

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
