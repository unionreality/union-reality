import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useContact } from "../context/ContactContext";
import ContactForm from "./ContactForm";

export default function ContactModal() {
  const { isOpen, closeContactModal } = useContact();

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") closeContactModal();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, closeContactModal]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
      onClick={closeContactModal}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div
        className="relative z-10 w-full max-w-lg bg-[#07192f] border border-white/10 rounded-[35px] p-8 lg:p-10 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={closeContactModal}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 duration-300"
          aria-label="Close"
        >
          <FaTimes />
        </button>

        <h2 className="text-white text-3xl font-bold mb-2">Request A Callback</h2>
        <p className="text-gray-400 mb-8">
          Fill in your details and we will schedule your site visit.
        </p>

        <ContactForm submitLabel="Book Free Site Visit →" />
      </div>
    </div>
  );
}
