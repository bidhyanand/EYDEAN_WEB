import React, { useState } from "react";
import TabContent from "./tabContent";

const VerticalTabs = () => {
  const [select, setSelect] = useState(true);

  return (
    <div
      className=" flex-col justify-start 
      px-0 md:px-10 lg:px-40 2xl:px-96 pt-60 pb-60"
    >
      <div
        className="
        flex justify-between"
      >
        <ul
          id="tabs"
          className="flex flex-col justify-start
          gap-5 md:gap-10 lg:gap-10 2xl:gap-14 sticky top-60 items-start z-10
          px-4 md:px-3 lg:px-4 2xl:px-4 h-[40vh]
          text-2xl md:text-2xl lg:text-4xl
          font-black cursor-pointer"
        >
          <li>
            <div
              id="mission"
              className={`${select == true ? "text-white" : "text-gray-800"}`}
              onClick={() => {
                setSelect(true);
                window.scroll(0, 2585);
              }}
            >
              Mission
            </div>
          </li>
          <li>
            <div
              className={`${select === false ? "text-white" : "text-gray-800"}`}
              onClick={() => {
                window.scroll(0, 3170);
                setSelect(false);
              }}
            >
              Potential
            </div>
          </li>
          <li>
            <div
              className={`${
                select === "fleet" ? "text-white" : "text-gray-800"
              }`}
              onClick={() => {
                setSelect("fleet");
                window.scroll(0, 3720);
              }}
            >
              We stand for
            </div>
          </li>
          <li>
            <div
              className={`${select == "sol" ? "text-white" : "text-gray-800"}`}
              onClick={() => {
                setSelect("sol");
                window.scroll(0, 4220);
              }}
            >
              Solution
            </div>
          </li>
        </ul>
        <div className="w-1/2">
          <TabContent />
        </div>
      </div>
    </div>
  );
};

export default VerticalTabs;
