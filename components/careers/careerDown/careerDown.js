import EndSection from "../../heroSection/endSection/endSection";
import Vision from "../vison/Vision";
import Technology from "./technology";
import Designer from './designer'
import Card from "./visionCard";

const CareerDown = () => {
  return (
    <div className="bg-black-200 py-20 flex flex-col justify-center items-center w-full">
      <div className="w-full">
        <Vision />
      </div>
      <div className="w-full">
        <Card />
      </div>
      <div className="w-full">
        <Technology />
      </div>
      <div className="w-full">
        <Designer />
      </div>
      <div className="w-full pt-44 lg:pt-80 2xl:pt-96">
        <EndSection />
      </div>
    </div>
  );
};

export default CareerDown;
