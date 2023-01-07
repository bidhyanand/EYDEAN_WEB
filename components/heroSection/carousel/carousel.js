import React, { createRef, useState } from "react";
import Slider from "react-slick";
import Agency from "../agency/agency";
import BgSlide from "../slider/BGslide";
import FbSlide from "../slider/foodBusterSlide";

const Slides = ({ setSlideIndex }) => {
  //creating the ref
  const customeSlider = createRef();

  // setting slider configurations
  const [sliderSettings, setSliderSettings] = useState({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 0,
    fade: true,
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
  });

  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };
  const handleChange = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="-mt-10 lg:-mt-10">
      <Slider
        afterChange={handleChange}
        {...sliderSettings}
        ref={customeSlider}
        className="flex text-white w-full lg:w-full"
      >
        <div>
          <Agency />
          <div
            className="text-white font-bold text-lg flex gap-5 justify-between
            items-center mt-2 lg:-mt-8 2xl:-mt-6 z-10 position-relative"
          >
            <div
              className="hidden lg:flex justify-start gap-5 w-[90vw] lg:w-[40vw] 2xl:w-[45vw] 
              px-10 lg:px-40 2xl:px-96 pb-20 lg:pb-0 mt-0 lg:mt-[0.3vw] 2xl:mt-[0.4vw] lg:ml-2 ml-0 2xl:ml-2 "
            >
              <button className="button" onClick={() => gotoPrev()}>
                Prev
              </button>
              <p>/</p>
              <button className="button" onClick={() => gotoNext()}>
                Next
              </button>
            </div>
          </div>
        </div>
        <div>
          <BgSlide />
          <div
            className="hidden lg:flex text-black-200 font-bold text-lg gap-5 justify-start items-center 
            z-10 position-relative -mt-0 lg:-mt-96 2xl:-mt-56"
          >
            <div
              className="flex justify-start gap-5 w-[30vw] lg:w-[30vw] 2xl:w-[40vw] 
              px-10 lg:px-36 2xl:px-96 -mt-52 lg:-mt-[23vw] 2xl:-mt-0 text-xl mr-5 lg:mr-0 z-10 lg:ml-4 ml-0 2xl:ml-0"
            >
              <button className="button" onClick={() => gotoPrev()}>
                Prev
              </button>
              <p>/</p>
              <button className="button" onClick={() => gotoNext()}>
                Next
              </button>
            </div>
          </div>
        </div>
        <div>
          <FbSlide />
          <div
            className="hidden lg:flex text-black-200 font-bold text-lg gap-5 justify-start items-center
              z-10 position-relative -mt-0 lg:-mt-[4.65vw] 2xl:-mt-28"
          >
            <div
              className="flex gap-5 w-[70vw] lg:w-[45vw] 2xl:w-[40vw] 
              px-10 lg:px-40 2xl:px-96 2xl:-mt-40 -mt-48 lg:-mt-24 text-xl"
            >
              <button className="button" onClick={() => gotoPrev()}>
                Prev
              </button>
              <p>/</p>
              <button className="button" onClick={() => gotoNext()}>
                Next
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default Slides;
