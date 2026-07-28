import { createContext, useContext, useState, useCallback } from "react";

const ContactContext = createContext(null);

export function ContactProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openContactModal = useCallback(() => setIsOpen(true), []);
  const closeContactModal = useCallback(() => setIsOpen(false), []);

  return (
    <ContactContext.Provider
      value={{ isOpen, openContactModal, closeContactModal }}
    >
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContact must be used within ContactProvider");
  }
  return context;
}
