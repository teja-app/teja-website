import Image from 'next/image';
export default function Footer() {
    return (
      <footer className="bg-[#2F315F] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo and Name */}
            <div className="mb-6 md:mb-0">
              {/* You can replace the div below with an Image tag if you have a logo image */}
              <div className="flex items-center justify-center mb-3">
                {/* Replace div with Image component if you have a logo */}
                <div className="logo-placeholder mr-2">
                    <Image src={"/logo/white_vertical.svg"} alt="Teja Logo" width={75} height={86} />
                </div>
              </div>
            </div>
            {/* Link Sections */}
            <div className="grid grid-cols-3 gap-8">
              {/* Column 1 */}
              <div className="text-center md:text-left">
                <h6 className="font-semibold mb-3">Company</h6>
                <ul>
                  <li className="mb-2"><a href="/about" className="hover:underline">About Us</a></li>
                  <li className="mb-2"><a href="/download" className="hover:underline">Download</a></li>
                  <li className="mb-2"><a href="/blog" className="hover:underline">Blog</a></li>
                  <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
                  <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                </ul>
              </div>
              {/* Column 2 */}
              <div className="text-center md:text-left">
                <h6 className="font-semibold mb-3">Community</h6>
                <ul>
                  <li className="mb-2"><a href="https://discord.gg/hK9yznQD9X" className="hover:underline">Discord</a></li>
                  <li className="mb-2"><a href="https://twitter.com/app_teja" className="hover:underline">Twitter</a></li>
                  <li className="mb-2"><a href="https://www.instagram.com/app.teja" className="hover:underline">Instagram</a></li>
                </ul>
              </div>
              {/* Column 3 */}
              <div className="text-center md:text-left">
                <h6 className="font-semibold mb-3">Support</h6>
                <ul>
                  <li className="mb-2"><a href="#" className="hover:underline">Help Center</a></li>
                  <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
                  <li><a href="#" className="hover:underline">Business</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  