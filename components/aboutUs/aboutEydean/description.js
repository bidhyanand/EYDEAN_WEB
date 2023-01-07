import React from "react";
import MainView from "../../reusableDesign/MainView";
const description = () => {
  return (
    <div>
      <MainView
        title="/ About Eydean"
        description="We build, scale and fund digital product startups"
      />
      <div className="flex  justify-end ">
        <div
          className="
          w-full md:1/2 lg:w-3/5 2xl:w-2/3
        text-gray-200
          text-2xl
          px-10 md:px-7 lg:px-40 2xl:px-96
          pt-10 md:pt-10 lg:pt-20 2xl:py-10
        "
        >
          Eydean is a specialized global software company that addresses complex
          technology issues. We align strategy and implementation to help our
          customers reinforce their core technology, extend flexibility and
          build a smooth digital experience.
        </div>
      </div>
    </div>
  );
};

export default description;
