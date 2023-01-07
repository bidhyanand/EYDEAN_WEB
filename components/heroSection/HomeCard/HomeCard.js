import { useState } from "react";
import CardContent from "./CardContent";
import Data from "../data/cardData.json";
import ScrollTo from "react-scroll-into-view";

const HomeHero = () => {
  const [select, setSelect] = useState(true);

  return (
    <div
      className=" flex-col justify-center 
      px-0 md:px-10 lg:px-20 2xl:px-32
      hidden md:inline-block lg:inline-block 2xl:inline-block
      pt-20"
    >
      <div
        className="bg-black-100 
        flex flex-col items-center 
        rounded-3xl
        pt-0 md:pt-10 lg:pt-16 2xl-pt-16"
      >
        <ul
          className="flex justify-center
          gap-5 md:gap-10 lg:gap-10 2xl:gap-20 sticky top-0 bg-black-100 h-[12vh] items-center z-10"
        >
          <li
            className="text-cyan-100
            px-4 md:px-3 lg:px-4 2xl:px-4
            text-base md:text-lg lg:text-2xl 2xl:text-2xl
            font-black md:font-black lg:font-bold 2xl:font-bold cursor-pointer"
          >
            <div
              className={`${
                select == true ? "border-b-4 border-cyan-100" : "border-none"
              }`}
              onClick={() => {
                setSelect(true);
              }}
            >
              <ScrollTo selector="#adeyelta">Adeyelta</ScrollTo>
            </div>
          </li>
          <li
            className=" text-green-100 border-b-4 border-none 
            text-base md:text-lg lg:text-2xl xl:text-2xl
            font-normal md:font-bold lg:font-bold xl:font-bold cursor-pointer"
          >
            <div
              className={`${
                select === false ? "border-b-4 border-green-100" : "border-none"
              }`}
              onClick={() => {
                setSelect(false);
              }}
            >
              <ScrollTo selector="#thrunode">Thrunode ERP/CRM</ScrollTo>
            </div>
          </li>
          <li
            className=" text-yellow-200 border-b-4 border-none 
            font-black lg:font-bold
            text-2xl md:text-lg lg:text-2xl cursor-pointer"
          >
            <div
              className={`${
                select === "fleet"
                  ? "border-b-4 border-yellow-200"
                  : "border-none"
              }`}
              onClick={() => {
                setSelect("fleet");
              }}
            >
              <ScrollTo selector="#fleets"> Fleet/Logistics</ScrollTo>
            </div>
          </li>
          <li
            className=" text-gray-100 border-b-4 border-none 
            text-2xl md:text-lg lg:text-2xl 
            font-black lg:font-bold cursor-pointer items-center flex flex-col mt-8"
          >
            <div className="group">
              <p>Field Assist</p>
              <p className="invisible group-hover:visible text-white text-lg font-medium">
                Coming soon
              </p>
            </div>
          </li>
        </ul>
        {
          <div className="w-1/2 bg-black-100">
            {Data.cardData.map((data, index) => {
              return (
                <div key={index} id={data.name}>
                  <CardContent
                    key={index}
                    title={data.title}
                    description={data.description}
                    image={data.image}
                    data={data}
                    pid={data.pid}
                    // id={data.name}
                  />
                </div>
              );
            })}
          </div>
        }
      </div>
    </div>
  );
};

export default HomeHero;
