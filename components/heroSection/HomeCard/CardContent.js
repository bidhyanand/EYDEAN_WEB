import Image from "next/image";
import { GoPrimitiveDot } from "react-icons/go";

const CardContent = ({ image, title, description, pid }) => {
  return (
    <div
      className="flex flex-col text-xl text-white  justify-center items-center
      pt-36 md:pt-20 lg:pt-20 2xl:lg-pt-36"
    >
      <div className="flex flex-col items-start gap-3 scroll top-5 relative">
        <Image src={image} alt={title} width={275} height={240} />
        <div
          className="flex flex-col items-start 
            gap-0 md:gap-8 lg:gap-12 2xl:gap-12
             pl-6 md:pl-28 lg:pl-60 2xl:pl-80
             w-full md:w-full lg:w-full
             pt-10 md:pt-10 lg:pt-0
             "
        >
          <p className="text-lg bg: font-medium text-gray-200">
            / Products {pid}
          </p>
          <p
            className={`${
              title === "Adeyelta"
                ? "text-cyan-100"
                : title === "Thrunode ERP/CRM"
                ? "text-green-100"
                : title === "Fleet/Logistics"
                ? "text-yellow-200"
                : "text-gray-100"
            } 
                text-2xl md:text-xl lg:text-4xl
                font-bold  `}
          >
            {title}
          </p>
          <p
            className="text-xl md:text-lg lg:text-xl 2xl:text-2xl
                w-full md:w-full lg:w-full 2xl:w-full
                lg:leading-relaxed
                text-gray-200
              "
          >
            {description}
          </p>
          <p
            className="text-xl md:text-base lg:text-xl
              font-normal  text-gray-200 flex items-center flex-row
              pb-20 md:pb-40 lg:pb-24"
          >
            <GoPrimitiveDot
              fontSize={"40px"}
              className="scale-100 hover:scale-x-105"
            />
            Get to know us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
