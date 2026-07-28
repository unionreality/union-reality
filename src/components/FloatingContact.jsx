import { useLocation } from "react-router-dom";
import { FaCalendarAlt, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { useContact } from "../context/ContactContext";

export default function FloatingContact() {
  const { pathname } = useLocation();
  const { openContactModal } = useContact();

  if (pathname === "/contact") return null;

  return (
    <div className="fixed bottom-8 right-8 z-[999] flex flex-col gap-5">
      <a
        href="https://wa.me/919901079241"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-full bg-[#25D366] text-white text-2xl flex items-center justify-center shadow-[0_0_40px_rgba(37,211,102,0.5)] hover:scale-110 duration-300"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      <a
        href="tel:+919901079241"
        className="w-16 h-16 rounded-full bg-[#d4a437] text-black text-2xl flex items-center justify-center shadow-[0_0_40px_rgba(212,164,55,0.5)] hover:scale-110 duration-300"
        aria-label="Call"
      >
        <FaPhoneAlt />
      </a>

      <button
        type="button"
        onClick={openContactModal}
        className="w-16 h-16 rounded-full bg-[#03142b] border border-[#d4a437] text-[#d4a437] text-2xl flex items-center justify-center shadow-[0_0_40px_rgba(212,164,55,0.3)] hover:scale-110 duration-300"
        aria-label="Book site visit"
      >
        <FaCalendarAlt />
      </button>
    </div>
  );
}
