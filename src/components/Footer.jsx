import SubscribeForm from "./SubscribeForm";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { socialLinks } from "../config/socialLinks";

const iconMap = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  youtube: FaYoutube,
};

export default function Footer() {
  return (
    <footer className="relative bg-[#03142b] border-t border-white/10 px-6 lg:px-20 py-16 overflow-hidden">

      <div className="grid lg:grid-cols-4 gap-12">

        {/* LOGO */}
        <div>

          <div className="flex items-center gap-4">

            <div className="flex items-end gap-[5px]">

              <div className="w-[10px] h-[42px] rounded-sm bg-[#d4a437]"></div>

              <div className="w-[10px] h-[65px] rounded-sm bg-[#d4a437]"></div>

              <div className="w-[10px] h-[50px] rounded-sm bg-[#d4a437]"></div>

            </div>

            <div>

              <h1 className="text-white text-3xl font-extrabold leading-none">
                UNION
              </h1>

              <p className="text-white/70 text-[11px] tracking-[3px] mt-1">
                REALITY & CONSTRUCTION
              </p>

            </div>

          </div>

          <p className="text-gray-400 leading-8 mt-8">

            Premium real estate and luxury construction company creating iconic residential and commercial developments.

          </p>

        </div>

        {/* LINKS */}
        <div>

          <h2 className="text-white text-2xl font-semibold mb-6">
            Quick Links
          </h2>

          <ul className="space-y-4 text-gray-400">

            <li className="hover:text-[#d4a437] duration-300 cursor-pointer">
              Home
            </li>

            <li className="hover:text-[#d4a437] duration-300 cursor-pointer">
              About
            </li>

            <li className="hover:text-[#d4a437] duration-300 cursor-pointer">
              Services
            </li>

            <li className="hover:text-[#d4a437] duration-300 cursor-pointer">
              Projects
            </li>

          </ul>

        </div>

        {/* SERVICES */}
        <div>

          <h2 className="text-white text-2xl font-semibold mb-6">
            Services
          </h2>

          <ul className="space-y-4 text-gray-400">

            <li>Luxury Villas</li>

            <li>Apartment Projects</li>

            <li>Commercial Spaces</li>

            <li>Interior Design</li>

          </ul>

        </div>

        {/* NEWSLETTER */}
        <div>

          <h2 className="text-white text-2xl font-semibold mb-6">
            Newsletter
          </h2>

          <p className="text-gray-400 leading-8">
            Subscribe for latest updates and premium project launches.
          </p>

          <SubscribeForm
            layout="footer"
            submitLabel="Send"
            inputPlaceholder="Enter Email"
          />

          <div className="flex items-center gap-4 mt-6">
            {socialLinks.map(({ name, href, icon }) => {
              const Icon = iconMap[icon];
              return (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-11 h-11 rounded-full border border-white/10 bg-[#0b223f] text-gray-400 flex items-center justify-center text-lg hover:bg-[#d4a437] hover:text-black hover:border-[#d4a437] duration-300"
                >
                  <Icon />
                </a>
              );
            })}
          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500">

        © 2026 Union Reality & Construction. All Rights Reserved.

      </div>

    </footer>
  );
}