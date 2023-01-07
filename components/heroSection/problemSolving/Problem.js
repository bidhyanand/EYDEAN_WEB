import data from "../data/problemSolving.json";
import Ellipse from "./ellipse";
const Problem = () => {
  return (
    <div
      className="flex flex-col md:flex-row lg:flex-row 2xl:flex-row
    
     text-white"
    >
      <div className="w-full md:w-full lg:w-full 2xl:w-full scroll lg:sticky h-full top-0 z-10">
        <Ellipse />
      </div>
      <div
        className="flex flex-col
      gap-10 md:gap-14 lg:gap-14 2xl:gap-14
       w-full md:w-4/5 lg:w-4/6 2xl:w-4/5
       py-10 md:py-72 lg:py-72 2xl:py-72  px-10 lg:px-0" 
      >
        <p className="text-xl font-medium text-gray-200">
          / How we solve problems
        </p>

        {data.problemSolving.map((data, index) => {
          return (
            <div
              className="flex flex-col items-start 
            gap-5 md:gap-5 lg:gap-14 2xl:gap-14
            
            
            "
              key={index}
            >
              <p
                className="text-3xl md:text-3xl lg:text-4xl
              w-full md:w-2/5 lg:w-3/4 2xl:w-2/5
              font-black lg:font-bold
              text-white-200 "
              >
                {data.title}
              </p>
              <p
                className="text-xl md:text-xl lg:text-xl 2xl:text-xl
               font-normal
               w-full md:w-2/5 lg:w-3/4 2xl:w-2/5
               pb-10 md:pb-10 lg:pb-64 2xl:pb-64
               text-gray-200"
              >
                {data.body}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Problem;
