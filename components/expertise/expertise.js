import EndSection from "../heroSection/endSection/endSection";
import MainView from "../reusableDesign/MainView";
import DetailDesign from "./detailDesign";

const Expertise = () => {
  return (
    <div className="bg-black-200 text-white">
      <div className="w-full md:w-3/5  lg:w-[60vw] 2xl:w-[70vw] text-white pt-20 lg:pt-[2.4vw] 2xl:pt-0">
        <MainView
          title="Expertise"
          description="What Eydean has to offer"
          subTitle={
            "We offer automation and AI technology that changes business by redefining the way companies can succeed in their competitive market. "
          }
        />
      </div>
      <div className="bg-white text-black-200">
        <DetailDesign />
      </div>
      <div className="bg-black-200 pt-[27vw] flex items-center">
        <EndSection />
      </div>
    </div>
  );
};

export default Expertise;
