import { GoPrimitiveDot } from "react-icons/go";
import Accordion from "./Accordian";

const Main = () => {
  return (
      <div className="flex gap-10 md:gap-10 lg:gap-10  2xl:gap-40
      pb:20 md:pb-20 lg:pb-72 2xl:pb-72
      ">
        <div className="flex flex-col gap-10 md:gap-14 lg:gap-14
        w-full 
        pl-10 md:pl-10 lg:pl-40 2xl:pl-96
        pt-20 md:pt-10 lg:pt-56 2xl:pt-56
        px-10 md:px-0 lg:px-0  2xl:px-0
       
        ">
          <h2 className="text-xl  text-gray-200">
            / Featured Insights
          </h2>
          <Accordion  />
          <p className="text-xl font-normal  text-gray-200 flex items-center flex-row
          pb-40 md:pb-10 lg:pb-10 2xl:pb-10 w-full lg:w-1/2 
          ">
            <GoPrimitiveDot fontSize={"40px"} />
            Explore the Insights
          </p>
        </div>
      </div>
  );
};
export default Main;
