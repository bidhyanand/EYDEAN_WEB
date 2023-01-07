import React from "react";
import MainView from "../../reusableDesign/MainView";

const FoodBusterSlide = () => {
  return (
    <div className="bg-foodbuster w-full z-10 bg-cover text-black-200 h-[100vh] lg:h-[100vh] mt-52 lg:-mt-28 2xl:-mt-40">
      <div className="pt-0 lg:pt-40 2xl:pt-80">
        <div className="position-relative pt-0 lg:pt-44">
          <MainView
            title={"Work 03 - FoodBuster"}
            description="One stop solution for food and mart."
            control={false}
          />
        </div>
      </div>
    </div>
  );
};

export default FoodBusterSlide;
