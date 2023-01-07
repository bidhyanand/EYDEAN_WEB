import SeoOptimization from "../reusableDesign/SeoOptimization";
import CareerDown from "./careerDown/careerDown";
import CareersTop from "./careersTop/CareersTop";

const CareersEydean = () => {
  return (
    <div>
      <SeoOptimization
        title={"Eydean | Careers"}
        contentDescription={
          "This is the carrers component of the eydean website in this component all the careers oppurtunity for placement in eydeans placed here and also the user can send theri cv to the eydean."
        }
        contentTitle={"Eydean - careers"}
      />
      <CareersTop />
      <CareerDown />
    </div>
  );
};

export default CareersEydean;
