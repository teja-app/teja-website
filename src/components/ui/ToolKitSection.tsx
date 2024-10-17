import Link from "next/link";
import { AppleIcon } from "./AppleIcon";
import { AndroidIcon } from "./AndroidIcon";

const toolkitList = [
  "Positive Psychology",
  "Gratitude Journal",
  "Morning Inspiration",
  "Evening Introspection",
  "Internal Family Systems",
  "CBT Journal",
  "Acceptance & Commitment",
  "Dream Journal",
  "Nervous System Rebalancing",
  "Managing Conflict",
  "Reframing Negative Thoughts",
  "Conversation Preparation",
];

export default function ToolKitSection() {
  return (
    <div className="relative bg-cover bg-center">
      <div className="relative py-20">
        {/* You would set the background image in the parent container of this component */}
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">
              Toolkit for mental wellbeing
            </h2>
            <p className="text-xl mb-6">
              Mindfully Crafted for Modern Wellbeing
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-10 mb-20">
            {/* List of Features */}
            {toolkitList.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex items-center justify-center border-2 border-white rounded-full mb-2">
                  <span className="text-sm font-semibold">{feature}</span>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-xl text-center max-w-3xl mx-auto mb-16 py-10">
            500+ parameters diagonsed on every input
          </h3>

          <p className="text-center max-w-3xl mx-auto mb-16 py-10">
            "At Teja, we believe in the power of science to enhance personal
            wellness. Each feature is meticulously designed with evidence-based
            methods, ensuring that your journey to peace and balance is
            supported by the latest research in psychological health and
            well-being. Our team blends scientific insights with innovative
            technology to create tools that adapt to your unique rhythm, helping
            you find harmony in the modern world."
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
          <div className="mb-20"></div>
          <div className="mb-20"></div>
          <div className="mb-20"></div>
        </div>
      </div>
    </div>
  );
}
