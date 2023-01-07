import HomeCard from "./HomeCard/HomeCard";
import Features from "./features/features";
import CardDown from "./HomeCard/CardDown";
import Problem from "./problemSolving/Problem";
import Clients from "./clients/clients";
import Main from "./accordian/main";
import EndSection from "./endSection/endSection";
import SeoOptimization from "../reusableDesign/SeoOptimization";
import Slides from "./carousel/carousel";
import CardSlide from "./HomeCard/mobileCard";
import { useEffect, useState } from "react";
import { useContext } from "react";
import HeaderContext from "../context/HeaderContext";
const HomePage = () => {
  const {slideIndex, setSlideIndex} = useContext(HeaderContext)
  
useEffect(() => {
  setSlideIndex(0)
},[0]);

  useEffect(() => {
    setSlideIndex(0);
  }, []);

  return (
    <>
      {slideIndex === 0 ? "black" : slideIndex === 1 ? "blue" : "orange"}
      <SeoOptimization
        title={"Eydean | Homepage"}
        contentDescription={
          "This is the homepage section of the eydean website all the main contents of the eydean, edyeans employee detail and its facilities are lies here."
        }
        contentTitle={"Homepage- Eydean Website"}
      />
      <div className="bg-black-200 text-white">
        <Slides setSlideIndex={setSlideIndex} />
        <HomeCard />
        <div className="block lg:hidden 2xl:hidden justify-center items-center px-3">
          <CardSlide />
        </div>
        <CardDown />
        <div className=" bg-white">
          <Features />
        </div>
        <div className=" bg-black-200">
          <Problem />
        </div>
        <div className=" bg-white">
          <Clients />
        </div>
        <Main />
        <EndSection />
      </div>
    </>
  );
};

export default HomePage;
