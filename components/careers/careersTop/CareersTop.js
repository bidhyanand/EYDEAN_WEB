import careers from "../../careers//data/careers.json";
import CardDesign from "../../indusrties/body/CardDesign";
import Image from "next/image";
import CareerVideo from "../video/video";
import styles from "../../../styles/Layout.module.css";

const CareersTop = () => {
  return (
    <div className="flex flex-col justify-center items-center -mb-36 md:-mb-72 lg:-mb-72 2xl:-mb-72">
      <div className="flex flex-col-reverse md:flex-row lg:flex-row 2xl:flex-row w-full md:w-full lg:w-4/5 2xl:w-3/5 gap-10">
        <div className="text-black-200 px-10 md:px-10 lg:px-0 2xl:px-0 w-full">
          {careers.careers.map((data, index) => {
            return (
              <div key={index} className="w-full py-5">
                <CardDesign
                  title1={data.title1}
                  title2={data.title2}
                  titlee={data.titlee}
                  title3={data.title3}
                />
              </div>
            );
          })}
        </div>
        <div className="flex justify-end items-center px-28 py-3 -mt-32 lg:-mt-0 md:p-5 lg:p-0 2xl:p-0">
          <Image
            src="https://res.cloudinary.com/dhxccll9e/image/upload/v1662534002/careers/stairs_n60gkl.svg"
            alt="stairs"
            width={480}
            height={480}
          />
        </div>
      </div>
      <div className={styles.text}>
        <marquee
          width="100%"
          direction="left"
          height="100px"
          className="-mt-5 lg:mt-10 mb-5 lg:mb-16"
          // animation="marquee 0.1s linear infinite"
        >
          <div className="text-gray-500 text-9xl md:text-5xl lg:text-9xl 2xl:text-9xl font-black -pt-20 lg:-pt-0 float-left ">
            <span>Our People and Culture</span>
            <span>Our People and Culture</span>
          </div>
        </marquee>
      </div>
      <div className="w-full md:w-full lg:w-4/5 2xl:w-3/5 px-5 md:px-5 lg:px-0 2xl:px-0">
        <CareerVideo />
      </div>
    </div>
  );
};

export default CareersTop;
