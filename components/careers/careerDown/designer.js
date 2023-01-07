// import Link from "next/link";
import Link from "next/link";
import Data from "../data/designData.json";
import Design from "./design";

const Designer = () => {
  return (
    <div className="text-white pt-20">
      <div className="text-tomato-100 font-black text-3xl md:text-4xl lg:text-4xl 2xl:text-4xl flex items-center justify-center pb-5">
        <p className=" w-full md:w-full lg:w-4/5 2xl:w-3/5 px-10 md:px-10 lg:px-0 2xl:px-0 lg:mr-1">
          Design
        </p>
      </div>
      <div>
        {Data.design.map((data, index) => {
          return (
            <Link
              href={"/vacancy/" + data.title}
              className="text-white py-2"
              key={data.id}
            >
              <div>
                <Design
                  title={data.title}
                  domain={data.domain}
                  subTitle={data.time}
                />
                <div className="flex justify-center px-10 lg:px-0">
                  <hr className="border-gray-100 flex w-full md:w-full lg:w-4/5 2xl:w-3/5" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Designer;
