import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { GoPrimitiveDot } from "react-icons/go";
import data from "../../heroSection/data/cardData.json";
import styles from "../../../styles/slick.module.css";

const CardSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => <div className={styles.dotbars}></div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider
      {...settings}
      className=" flex w-full bg-black-100 rounded-xl pt-0 pb-5"
    >
      {data.cardData.map((data, index) => {
        return (
          <div className="flex flex-col items-center" key={index}>
            <div className="flex justify-center p-16">
              <Image
                src={data.image}
                alt={data.title}
                width={275}
                height={240}
              />
            </div>
            <div className="flex flex-col items-start w-11/12 pt-5 md:pt-10 lg:pt-20 gap-6 px-8">
              <p className="text-lg bg: font-medium text-gray-200">
                / Products {data.id}
              </p>
              <p
                className={`${
                  data.title === "Adeyelta"
                    ? "text-cyan-100"
                    : "text-tomato-100"
                } 
                text-2xl md:text-xl lg:text-4xl
                font-bold  `}
              >
                {data.title}
              </p>
              <p
                className="text-xl md:text-lg lg:text-xl 2xl:text-2xl w-full md:w-full lg:w-full 2xl:w-1/2 lg:leading-relaxed
                text-white font-normal"
              >
                {data.description}
              </p>
              <div
                className="text-xl md:text-base lg:text-xl
                font-normal  text-gray-200 flex items-center
                pb-5 md:pb-40 lg:pb-48
              "
              >
                <p className="flex items-center justify-center">
                  <GoPrimitiveDot fontSize={"40px"} />
                </p>
                <p>Get to know us.</p>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default CardSlide;
