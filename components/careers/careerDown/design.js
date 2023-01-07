import { FiArrowUpRight } from "react-icons/fi";
import { BsDot } from "react-icons/bs";

const Design = ({ title, subTitle, domain }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full md:w-full lg:w-4/5 2xl:w-3/5 flex flex-col px-10 md:px-5 lg:px-0 2xl:px-0 gap-5 lg:text-gray-200 hover:text-white hover:text-opacity-100 ">
        <div className="flex flex-row justify-between cursor-pointer">
          <div className="py-8 flex flex-col gap-4">
            <p className="font-bold text-xl md:text-2xl lg:text-2xl 2xl:text-2xl">
              {title}
            </p>
            <div className="flex text-gray-200 font-semibold text-base items-center">
              {domain}
              <BsDot />
              {subTitle}
            </div>
          </div>
          <div className="flex items-center text-xl font-bold gap-8">
            <p className="hidden hover:flex">Apply</p>
            <FiArrowUpRight fontSize="45px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
