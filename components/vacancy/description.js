import { BsDot } from "react-icons/bs";

const Description = ({ description, responsibility, qualifications }) => {
  return (
    <div className="flex flex-col text-white items-center py-20 bg-black-200">
      <div className="w-full md:w-full lg:w-4/5 2xl:w-3/5 flex flex-col px-10 md:px-10 lg:px-0 2xl:px-0 gap-8">
        <p className="text-3xl lg:text-4xl font-black">Job Descriptions</p>
        <div className="text-xl font-medium text-gray-200 w-full lg:w-1/2 2xl:w-1/2 pr-0 lg:pr-10">
          {description}
        </div>
      </div>
      <div className="w-full md:w-full lg:w-4/5 2xl:w-3/5 flex flex-col px-10 md:px-10 lg:px-0 2xl:px-0 gap-8 py-20">
        <p className="text-3xl lg:text-4xl font-black">Responsibilities</p>
        <div className="text-xl font-medium text-gray-200 w-full lg:w-1/2 2xl:w-1/2 flex">
          <p className="">
            <BsDot fontSize="30px" />
          </p>
          {responsibility}
        </div>
      </div>
      <div className="w-full md:w-full lg:w-4/5 2xl:w-3/5 flex flex-col px-10 md:px-10 lg:px-0 2xl:px-0 gap-8 py-10">
        <p className="text-3xl lg:text-4xl font-black">Qualifications</p>

        <div className="text-xl font-medium text-gray-200 w-full lg:w-1/2 2xl:w-1/2 flex">
          <p className="">
            <BsDot fontSize="30px" />
          </p>
          {qualifications}
        </div>
      </div>
    </div>
  );
};

export default Description;
