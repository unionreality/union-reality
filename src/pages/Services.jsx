import Layout from "../components/Layout";

import Services from "../components/Services";
import LandFeatures from "../components/LandFeatures";
import InvestmentSteps from "../components/InvestmentSteps";
import SiteVisit from "../components/SiteVisit";

export default function ServicesPage() {
  return (
    <Layout>

      <section className="pt-[150px]">

        <Services />

        <LandFeatures />

        <InvestmentSteps />

        <SiteVisit />

      </section>

    </Layout>
  );
}