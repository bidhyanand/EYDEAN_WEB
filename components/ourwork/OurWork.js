import EndSection from "../heroSection/endSection/endSection";
import MainView from "../reusableDesign/MainView";
import SeoOptimization from "../reusableDesign/SeoOptimization";
import Content from "./content/Content";

const OurWork = () => {
  return (
    <div className="bg-black-200 text-white ">
      <SeoOptimization
        title={"Eydean | Our Work"}
        contentDescription={
          "This is our work page of the  of the eydean website in this page all the details about the work done by the eydean for their clients."
        }
        contentTitle={"Eydean - OurWork"}
      />
      <MainView description="We do amazing things with amazing People." />
      <Content />
      <EndSection />
    </div>
  );
};

export default OurWork;
