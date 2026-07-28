import Layout from "../components/Layout";
import HeroSlider from "../components/HeroSlider";
import PropertyTypes from "../components/PropertyTypes";
import Projects from "../components/Projects";
import WhyChooseUs from "../components/WhyChooseUs";
import PlotAmenities from "../components/PlotAmenities";
import InvestmentBanner from "../components/InvestmentBanner";
import LuxuryBanner from "../components/LuxuryBanner";
import Blog from "./Blog";
import CTA from "./CTA";
import GradientCards from"./GradientCards";
import PlotFaq from "./PlotFaq";
import PropertyComparasion from "./PropertyComparison";
import PropertyTabs from "./PropertyTabs";
import Scrolling from "./ScrollingText";
import Testimonial from "./Testimonial";
import Trusted from "./TrustedPartners";
import PropertyShowcase from "./PropertyShowcase";

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-screen">
        <HeroSlider />
      </div>
<Blog/>
<CTA/>
<GradientCards/>
<PropertyComparasion/>
<PropertyShowcase/>
<PropertyTabs/>
<Scrolling/>
<Testimonial/>
<Trusted/>

      {/* Sections */}
      <PropertyTypes />
      <Projects />
      <WhyChooseUs />
      <LuxuryBanner/>
      <PlotAmenities />
      <PlotFaq/>
<InvestmentBanner/>
    </Layout>
  );
}