import Layout from "../components/Layout";

import SiteVisit from "../components/SiteVisit";
import MapSection from "../components/MapSection";
import Faq from "../components/Faq";
import Newsletter from "../components/Newsletter";

export default function ContactPage() {
  return (
    <Layout>

      <section className="pt-[150px]">

        <SiteVisit />

        <MapSection />

        <Faq />

        <Newsletter />

      </section>

    </Layout>
  );
}