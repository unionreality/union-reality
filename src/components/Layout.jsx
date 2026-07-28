import Header from "./Header";
import Footer from "./Footer";
import FloatingContact from "./FloatingContact";
import BackToTop from "./BackToTop";
import ContactModal from "./ContactModal";

export default function Layout({ children }) {
  return (
    <main className="w-full min-h-screen bg-[#03142b] overflow-hidden">
      <Header />
      {children}
      <Footer />
      <FloatingContact />
      <ContactModal />
      <BackToTop />
    </main>
  );
}
