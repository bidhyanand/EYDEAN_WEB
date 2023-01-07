import Image from "next/image";
import data from "./data/ourWorkData";

const Content = () => {
  return (
    <div
      className="
    px-10 md:px-7 lg:px-40 2xl:px-96
    "
    >
      {data.map((items, index) => {
        return (
          <div key={index}>
            <div className="py-0 md:py-20 lg:py-14 xl:py-20 ">
              <hr />
              <div
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 
        py-10 md:py-20 lg:py-14 2xl:py-20 "
              >
                <div
                  className="flex flex-col 
            gap-4 md:gap-4 lg:gap-4 2xl:gap-4
            "
                >
                  <div
                    className="flex 
            gap-4 md:gap-4 lg:gap-4 2xl:gap-4"
                  >
                    <div
                      className="text-2xl md:text-2xl lg:text-2xl 2xl:text-2xl
            font-medium md:font-medium lg:font-medium 2xl:font-medium"
                    >
                      {items.project}
                    </div>
                    <div
                      className="font-medium md:font-medium lg:font-medium 2xl:font-medium
            text-sm md:text-sm lg:text-sm 2xl:text-sm
            w-1/5 md:w-1/5 lg:w-1/5 2xl:w-1/5
            pt-3 md:pt-3 lg:pt-3 1xl:pt-3 "
                    >
                      <hr />
                    </div>
                  </div>

                  <div>@2022-2023</div>
                </div>

                <div
                  className="font-black
            text-4xl md:text-4xl lg:text-4xl 2xl:text-4xl
            py-10 md:py-0 lg:py-0 2xl:py-0 "
                >
                  {items.title}
                </div>

                <div
                  className="flex 
           px-0 md:px-20 lg:px-20 2xl:px-20
           gap-12 md:gap-12 lg:gap-12 2xl:gap-12 "
                >
                  <div
                    className="font-medium md:font-medium lg:font-medium 2xl:font-medium
            text-sm md:text-sm lg:text-sm 2xl:text-sm"
                  >
                    <div>{items.subtitle1}</div>
                    <div>{items.subtitle2}</div>
                    <div>{items.subtitle3}</div>
                    <div>{items.subtitle4}</div>
                  </div>
                  <div
                    className="font-medium md:font-medium lg:font-medium 2xl:font-medium
            text-sm md:text-sm lg:text-sm 2xl:text-sm"
                  >
                    <div>{items.subtitle5}</div>
                    <div>{items.subtitle6}</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="pb-20 md:pb-20 lg:pb-20 2xl:pb-20">
                <Image
                  src={items.image}
                  width={1190}
                  height={500}
                  alt={"image"}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
