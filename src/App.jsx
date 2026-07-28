import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import About from "./pages/About";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Projects from "./components/Projects";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Testimonial from "./components/Testimonial";
import Portfolio from "./pages/Portfolio";
import VideoSection from "./components/VideoSection";
import Awards from "./components/Awards";
import Blog from "./components/Blog";
import Instagram from "./components/Instagram";
import MapSection from "./components/MapSection";
import Faq from "./components/Faq";
import Newsletter from "./components/Newsletter";
import CTA from "./components/CTA";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import PropertyTypes from "./components/PropertyTypes";
import LuxuryBanner from "./components/LuxuryBanner";
import PropertyShowcase from "./components/PropertyShowcase";
import ScrollingText from "./components/ScrollingText";
import PropertyTabs from "./components/PropertyTabs";
import GradientCards from "./components/GradientCards";
import PlotProjects from "./components/PlotProjects";
import LandFeatures from "./components/LandFeatures";
import PlotLocations from "./components/PlotLocations";
import InvestmentBanner from "./components/InvestmentBanner";
import PlotGallery from "./components/PlotGallery";
import WhyInvest from "./components/WhyInvest";
import SiteVisit from "./components/SiteVisit";
import InvestmentSteps from "./components/InvestmentSteps";
import PropertyComparison from "./components/PropertyComparison";
import PlotHighlights from "./components/PlotHighlights";
import TrustedPartners from "./components/TrustedPartners";
import PlotFaq from "./components/PlotFaq";
import PlotAmenities from "./components/PlotAmenities";
import LocationAdvantages from "./components/LocationAdvantages";
import CallToAction from "./components/CallToAction";
import Newsletter1 from "./components/Newsletter1";
import FloatingContact from "./components/FloatingContact";
import BackToTop from "./components/BackToTop";
import Loader from "./components/Loader";
import Project from "./pages/Project";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#03142b]">
        <Header />

        <main>

      {/* HERO */}
      <div className="relative w-full h-screen rounded-b-[40px] overflow-hidden border-b border-white/10">


        <HeroSlider />

      </div>

      {/* ABOUT */}
      <About />

      {/* STATS */}
      <Stats />
    <Project/>

      {/* SERVICES */}
      <Services />

      {/* PROJECTS */}
      <Projects />

      {/* WHY CHOOSE */}
      <WhyChooseUs />

      <PropertyTypes/>

      <Experience />
{/* PLOT LOCATIONS */}
<PlotLocations />
{/* CALL TO ACTION */}
<CallToAction />
{/* LOADER */}
<Loader />

{/* FLOATING CONTACT */}
<FloatingContact />

{/* BACK TO TOP */}
<BackToTop />
{/* NEWSLETTER */}
<Newsletter1 />
{/* INVESTMENT BANNER */}
<InvestmentBanner />

{/* PLOT GALLERY */}
<PlotGallery />

{/* TRUSTED PARTNERS */}
<TrustedPartners />

{/* PLOT FAQ */}
<PlotFaq />

{/* WHY INVEST */}
<WhyInvest />

<LuxuryBanner/>

{/* SCROLLING TEXT */}
<ScrollingText />

{/* PROPERTY SHOWCASE */}
<PropertyShowcase />

{/* PROPERTY TABS */}
<PropertyTabs />

{/* GRADIENT CARDS */}
<GradientCards />

{/* PLOT PROJECTS */}
<PlotProjects />

{/* PROPERTY COMPARISON */}
<PropertyComparison />

{/* PLOT HIGHLIGHTS */}
<PlotHighlights />

{/* LAND FEATURES */}
<LandFeatures />

{/* SITE VISIT */}
<SiteVisit />

{/* INVESTMENT STEPS */}
<InvestmentSteps />

        {/* PROCESS */}
      <Process />

      {/* TESTIMONIAL */}
      <Testimonial />

      {/* PORTFOLIO */}
      <Portfolio />


      {/* VIDEO */}
      <VideoSection />

      {/* AWARDS */}
      <Awards />

      {/* BLOG */}
      <Blog />

      {/* INSTAGRAM */}
      <Instagram />

      {/* MAP */}
      <MapSection />

      {/* FAQ */}
      <Faq />

      {/* NEWSLETTER */}
      <Newsletter />

      {/* CTA */}
      <CTA />

      {/* PLOT AMENITIES */}
<PlotAmenities />

{/* LOCATION ADVANTAGES */}
<LocationAdvantages />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      </main>

        <Footer />
      </body>
    </html>
  );
}