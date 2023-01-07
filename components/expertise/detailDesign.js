import Image from "next/image";
import Data from "./data/details.json";
import styles from '../../styles/Layout.module.css'

const DetailDesign = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full lg:w-4/5 2xl:w-3/5 px-10 lg:px-0 mt-20 lg:mt-40">
        {Data.map((data, index) => {
          return (
            <div key={index}>
              <div className="flex gap-10">
                <div className="h-[7vw]">
                  <Image
                    src={data.icon}
                    alt="data.title"
                    height={35}
                    width={35}
                  />
                </div>
                <div className="text-2xl lg:text-3xl font-black">
                  <p>{data.title}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {data.subtitle.map((subdata, index) => {
                  return (
                    <div key={index} className="flex flex-col gap-8 pb-20 lg:pb-40 mt-10 lg:mt-0">
                      <div>
                        <Image
                          src={subdata.image}
                          alt={subdata.title}
                          height={200}
                          width={380}
                        />
                      </div>
                      <div className="flex flex-col gap-8 px-16">
                        <p className="text-xl lg:text-2xl font-bold">
                          {subdata.title}
                        </p>
                        <div className={styles.textContent}>
                          <p className="text-base lg:text-xl font-medium text-gray-200 w-full md:w-1/2 lg:w-[22vw] 2xl:w-[18vw]">
                            {subdata.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailDesign;
