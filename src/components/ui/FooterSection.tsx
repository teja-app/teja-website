import { GithubOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Name */}
          <div className="mb-6 md:mb-0">
            {/* You can replace the div below with an Image tag if you have a logo image */}
            <div className="flex items-center justify-center mb-3">
              {/* Replace div with Image component if you have a logo */}
              <div className="logo-placeholder mr-2">
                <Image
                  src={"/logo/color_horizontal.svg"}
                  alt="Teja Logo"
                  width={100}
                  height={86}
                />
              </div>
            </div>
          </div>
          {/* Open Source Info */}
          <div className="text-center md:text-right mb-6 md:mb-0">
            <p className="text-sm text-gray-600 mb-2">Teja is open source</p>
            <Link
              href="https://github.com/teja-app/teja"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-950 hover:bg-gray-700"
            >
              <GithubOutlined className="mr-2" /> View on GitHub
            </Link>
          </div>
          {/* Link Sections */}
          <div className="grid grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="text-center md:text-left">
              <h6 className="font-semibold mb-3">Company</h6>
              <ul>
                <li className="mb-2">
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="https://apps.apple.com/us/app/teja-journal-selfcare/id6473733799"
                    className="hover:underline"
                  >
                    Download
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/blog" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:underline">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="text-center md:text-left">
              <h6 className="font-semibold mb-3">Community</h6>
              <ul>
                <li className="mb-2">
                  <Link
                    href="https://discord.gg/hK9yznQD9X"
                    className="hover:underline"
                  >
                    Discord
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="https://twitter.com/app_teja"
                    className="hover:underline"
                  >
                    Twitter
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="https://www.instagram.com/app.teja"
                    className="hover:underline"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="text-center md:text-left">
              <h6 className="font-semibold mb-3">Support</h6>
              <ul>
                <li className="mb-2">
                  <Link href="#" className="hover:underline">
                    Help Center
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Business
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
