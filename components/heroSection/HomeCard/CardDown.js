import { GoPrimitiveDot } from "react-icons/go";

const CardDown = () => {
  return (
    <div
      className="  md:flex lg:flex xl:flex
    px-10 md:px-30 lg:px-40 2xl:px-96
    py-20 md:py:20 lg:py-60 2xl:py-96
    gap-0 md:gap-10 lg:gap-14 2xl:gap-40
    w-full 
    "
    >
      <div
        className="flex flex-col
      gap-10  md:gap-5 lg:gap-14 2xl:gap-14
      pb-10 md:pb-10 lg:pb-0 2xl:pb-0
       "
      >
        <p
          className="text-base md:text-xl lg:tet-xl 2xl:text-xl
         font-medium text-gray-200"
        >
          / About Us
        </p>
        <h2
          className="text-3xl md:text-4xl lg:text-4xl 2xl:text-4xl
         font-bold text-white 
         w-full md:w-full lg:w-full 2xl:w-full
         leading-tight  "
        >
          The next era of autonomy for a mission that matters
        </h2>
      </div>



      <div
        className="flex flex-col
      gap-10 md:gap-14 lg:gap-14 2xl:gap-14
       "
      >
        <p
          className="  
          text-2xl md:text-3xl  lg:text-3xl 2xl:text-3xl 
          font-bold 
        w-full md:w-full lg:w-3/5 2xl:w-3/4
        leading-snug text-white"
        >
          Changing industries one step at a time
        </p>
        <p
          className="
          text-xl md:text-2xl lg:text-2xl 2xl:text-2xl
         font-normal
         w-full md:w-full lg:w-2/3 2xl:w-5/6
         leading-normal text-gray-200"
        >
          We help any small- to mid-sized B2B companies build durable businesses
          that transcend external fluctuations.
        </p>
        <p className="text-xl font-normal  text-gray-200 flex items-center flex-row
        pb-10 md:pb-0 lg:pb-0 2xl:pb-0
        ">
          <GoPrimitiveDot fontSize={"40px"} />
          Know More.
        </p>
      </div>
    </div>
  );
};

export default CardDown;
