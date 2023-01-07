import Image from "next/image";
import Data from "../data/vison.json";

const Card = () => {
  return (
    <div className="flex flex-col text-white justify-center items-center py-20">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 gap-3 lg:gap-8 w-full md:w-full lg:w-4/5 2xl:w-3/5 px-10 md:px-3 lg:px-0 2xl:px-0">
        {Data.vision.map((data, index) => {
          return (
            <div
              className="flex flex-col items-center justify-center bg-black-100 h-[18vh] lg:h-[25vh] 2xl:h-[22vh] rounded-xl gap-5 lg:gap-3 2xl:gap-0 py-8 lg:py-0 lg:pt-8"
              key={index}
            >
              <div className="h-[7vh]">
                <Image src={data.images} width={32} height={32} alt={"image"} />
              </div>
              <div className="flex justify-center h-[10vh] 2xl:h-[8vh]">
                <p className="text-center px-3 lg:px-[3vw] 2xl:px-16 overflow-hidden text-sm lg:text-base">
                  {data.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pt-32 w-full md:w-full lg:w-4/5 2xl:w-3/5 flex flex-col gap-8 px-10 md:px-5 lg:px-0 2xl:px-0">
        <p className="font-black text-3xl md:text-3xl lg:text-4xl 2xl:text-4xl ">
          Our Current Offer
        </p>
        <p className="font-medium text-xl w-full md:w-4/5 lg:w-1/2 2xl:w-3/5 ">
          {`If our story excites you, hop on and let’s craft some sweet
          experiences together!`}
        </p>
      </div>
    </div>
  );
};

export default Card;
