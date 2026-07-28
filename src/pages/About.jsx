import Layout from "../components/Layout";
import Stats from "../components/Stats";
import Experience from "../components/Experience";
import Awards from "../components/Awards";
import WhyInvest from "../components/WhyInvest";
import WhyChooseUs from "../components/WhyChooseUs";
import TrustedPartners from "../components/TrustedPartners";
export default function AboutPage() {
  return (
    <Layout>

      <section className="pt-[150px]">

        <Experience />

        <WhyInvest />

  <WhyChooseUs/>

       <TrustedPartners/>

        <Awards />
      <Stats />
      </section>

    </Layout>
  );
}