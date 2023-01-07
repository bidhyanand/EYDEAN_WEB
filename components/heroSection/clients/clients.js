import Image from "next/image";
import { GoPrimitiveDot } from "react-icons/go";
import Carousel from "./carousel/carousel";
import data from "../data/clients.json";

const Clients = () => {
  return (
    <div
      className="flex flex-col items-center justify-center
    px-10  md:px-6 lg:px-40 2xl:px-96
    py-10  md:py-10 lg:py-40 2xl:py-60
     
     text-black"
    >
      <div className="flex flex-col justify-center">
        <div
          className="flex flex-col 
        gap-10 md:gap-14 lg:gap-14 2xl:gap-14
        pt-10 md:pt-10 lg:pt-0 2xl:pt-0
        "
        >
          <p className="text-xl font-medium text-gray-200">
            / Clients who have trusted
          </p>
          <h2
            className="text-3xl md:text-3xl lg:text-4xl 2xl:text-4xl
          w-full md:w-2/3 lg:w-2/3 2xl:w-2/3
          pb-20 md:pb-0 lg:pb-0 2xl:pb-0
          font-bold text-black-200
          "
          >
            We make waves with fast moving & fluid brands.
          </h2>
        </div>
        <div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-4 
        py:10 md:py-10 lg:py-14 2xl:py-14 items-center"
        >
          {data.clients.map((data, index) => {
            return (
              <div
                className={`flex  h-[20vh] 
                items-center justify-center
                border ${index <= 3 ? "border-t-0 border-b-0" : "border-b-0"}
                ${index % 2 === 0 ? "" : "border-l-0 border-r-0"}
                ${index === 0 || index === 4 ? "border-l-0" : ""} 
                               
                 `}
                key={index}
              >
                <Image
                  src={data.logo}
                  alt={data.title}
                  width={130}
                  height={80}
                />
              </div>
            );
          })}
        </div>
        <p
          className="text-xl font-normal  text-gray-200 flex items-center flex-row 
        pt-10 md:pt-0  lg:pt-0 2xl:pt-0
        pb-10 md:pb-0  lg:pb-0 2xl:pb-0
        "
        >
          <GoPrimitiveDot fontSize={"40px"} />
          View all brands.
        </p>
        {/* <div className="flex md:inline-block lg:inline-block xl:inline-block">
          <Carousel />
        </div> */}
      </div>
    </div>
  );
};

export default Clients;
