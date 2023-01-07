import EndSection from "../../heroSection/endSection/endSection";
import AboutModal from "../aboutUs";
import AboutBanner from "./banner/banner";
import SlickSlide from "./carousel/slickSlide";
import Description from "./description";
import Founder from "./founder/founder";
import ServingCompanies from "./servingCompanies/company";
import Stats from "./statCard/stats";
import Vtab from "./tab/vtab";

const Eydean = () => {
  return (
    <AboutModal>
      <Description />
      <Stats />
      {/* <Founder /> */}
      <Vtab />
      <AboutBanner />
      <div>
        <SlickSlide />
      </div>
      <ServingCompanies />

      <div className=" pt-10 lg:pt-40">
        <EndSection />
      </div>
    </AboutModal>
  );
};

export default Eydean;
