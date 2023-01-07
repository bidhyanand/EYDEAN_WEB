import { Box } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import data from "../../data/carousel.json";

export default function Carousel({}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide =
      currentSlide === data.carousel.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide =
      currentSlide === 0 ? data.carousel.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };
  return (
    <div
      className="relative 
    py-0 md:py-5 lg:py:0 xl:py-5
     rounded-full  justify-center items-center mt-20">
      <Box
        className=" flex relative m-auto justify-around h-[42vh] w-[42vh] lg:h-[65vh] lg:w-[65vh] flex-col"
        sx={{
          borderRadius: "50%",
          border: "20px solid #F4F5FA",
        }}>
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative flex mt-3 justify-center"
        >
          {data.carousel.map((data, index) => {
            if (index === currentSlide) {
              return (
                <div
                  className="relative flex items-center flex-col justify-around"
                  key={index}
                >
                  <Box
                    className="flex items-center justify-center 
                     ml-60 md:ml-96 lg:ml-[22vw]  2xl:ml-[25vw]] 
                     bg-white h-[11vh] w-[11vh] lg:h-[15vh] lg:w-[15vh]"
                    sx={{
                      borderRadius: "50%",
                      border: "15px solid #F4F5FA",
                      padding: "2%",
                    }}
                  >
                    <Image
                      src={data.src}
                      alt="rviewer"
                      width={80}
                      height={80}
                    />
                  </Box>
                  <div
                    className="border-full border-slate-700 flex gap-5 lg:gap-14
                    items-center flex-col w-3/4 px-5 rounded-full text-center h-[20vh] lg:h-[30vh]"
                  >
                    <div
                      className="w-full lg:w-full 2xl:w-4/5 h-[10vh] lg:h-[17vh] text-black-200 
                      mt-0 lg:mt-0 2xl:mt-5 overflow-ellipsis text-sm lg:text-base"
                    >
                      {data.body}
                    </div>
                    <div className="text-gray-200 h-[5vh] lg:h-[10vh] text-xs lg:text-base mt-8 lg:-mt-5">
                      <p>{data.name} at</p>
                      <p>{data.org}</p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </Swipe>
        <div className="relative flex justify-center p-2">
          {data.carousel.map((item, index) => {
            return (
              <div
                className={
                  index === currentSlide
                    ? "h-3 w-3 bg-gray-700 rounded-full mx-2 mb-5 cursor-pointer"
                    : "h-3 w-3 bg-gray-300 rounded-full mx-2 mb-5 cursor-pointer"
                }
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                }}
              ></div>
            );
          })}
        </div>
      </Box>
    </div>
  );
}
