import { FiArrowUpRight } from "react-icons/fi";

const ServingCompanies = () => {
  return (
    <div className="flex  justify-center py-20 gap-10 flex-col items-center my-10 px-5 lg:px-0 ">
      <div className="justify-center flex">
        <h1 className=" text-4xl lg:text-6xl 2xl:text-6xl text-center font-black justify-center 
          flex w-full lg:w-4/5 2xl:w-3/5 
          px-2 lg:px-20 2xl:px-20">
          Serving companies across the spectrum
        </h1>
      </div>
      <div className="flex flex-col md-flex-row lg:flex-row 2xl:flex-row gap-10  
            w-full md:w-full lg:w-4/5 2xl:w-3/5 mt-10 justify-center items-center">
        <div className="shadow-lg bg-black-100 p-12 md:p-12 lg:p-20 2xl:p-20 rounded-2xl relative 
            text-black-100 hover:text-white  lg:w-[120vh] lg:h-[55vh] 2xl:w-[140vh] 2xl:h-[50vh]">
          <p className="absolute w-4/5 justify-end flex -mt-10 font-normal">
            <FiArrowUpRight fontSize={"100px"} />
          </p>
          <h2 className="text-3xl font-black mt-20 w-full 2xl:w-1/2  text-white">
            Come work with us
          </h2>
          <p className="text-xl font-medium mt-10 text-white">
            Help us create economic access for enterpreneurs and enterprises all
            over the world.
          </p>
        </div>
        <div className="shadow-lg bg-black-100 p-12 md:p-12 lg:p-20 2xl:p-20 rounded-2xl relative text-black-100 
          hover:text-white lg:w-[120vh] 2xl:w-[140vh] lg:h-[55vh] 2xl:h-[50vh]">
          <p className="absolute w-4/5 justify-end flex -mt-10 font-normal">
            <FiArrowUpRight fontSize={"100px"} />
          </p>
          <h2 className="text-3xl font-black mt-24 w-full  2xl:w-1/2 text-white">
            Eydean and Sustainability
          </h2>
          <p className="text-xl font-medium mt-5 text-white">
            Anthropogenic climate change is acclerating. We are committed to
            mitigating our environmental impact.
          </p>
        </div>
      </div>

      <h1 className="text-2xl font-medium pt-20">
        Subscribe to Our Newsletter
      </h1>
      <input
        type="text"
        placeholder="Your@email.com"
        className="flex  text-2xl lg:text-6xl 2xl:text-6xl font-black bg-black-200 placeholder-gray-200 placeholder border-b-2 border-gray-200 py-2 pl-5 pr-2"
      />
      <div className="flex text-gray-400 gap-1 py-3">
        <p>I have read and accept the </p>
        <p className="text-white font-bold">Terms & Privacy.</p>
      </div>
    </div>
  );
};

export default ServingCompanies;
