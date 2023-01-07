import Link from "next/link";
import Data from "../../vacancy/data/vacancyData.json";
import Design from "./design";

const Technology = () => {
  return (
    <div className="text-white">
      <div className="text-cyan-100 font-black text-3xl md:text-4xl lg:text-4xl 2xl:text-4xl flex items-center justify-center pb-5">
        <p className=" w-full md:w-full lg:w-4/5 2xl:w-3/5 px-10 md:px-10 lg:px-0 2xl:px-0 lg:mr-1">
          Technology
        </p>
      </div>
      {Data.map((data, index) => {
        return (
          <>
            <Link
              href={ "/vacancy/"+ data.title}
              className={"py-2"}
              key={data.id}
            >
              <div>
                <Design
                  title={data.title}
                  domain={data.domain}
                  subTitle={data.time}
                />
              </div>
            </Link>
            <div className="flex justify-center px-10 lg:px-0">
              <hr className="border-gray-100 flex w-full md:w-full lg:w-4/5 2xl:w-3/5" />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Technology;
