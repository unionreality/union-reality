import Layout from "../components/Layout";

import PlotLocations from "../components/PlotLocations";
import PlotGallery from "../components/PlotGallery";
import PlotProjects from "../components/PlotProjects";
import LandFeatures from "../components/LandFeatures";
import PlotAmenities from "../components/PlotAmenities";
import LocationAdvantages from "../components/LocationAdvantages";
import PlotHighlight from "../components/PlotHighlights";

export default function ServicesPage() {
  return (
    <Layout>

      <section className="pt-[150px]">

<PlotLocations/>
<PlotHighlight/>

<PlotGallery/>
<PlotProjects/>
<LandFeatures/>
<PlotAmenities/>
<LocationAdvantages/>
      </section>

    </Layout>
  );
}