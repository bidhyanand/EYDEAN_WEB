import React from "react";
import { FiPlayCircle } from "react-icons/fi";

const MainView = ({ title, description, subTitle, control, playButton }) => {
  return (
    <div
      className="flex flex-col    
      pb-28 md:pb-32 lg:pb-32 2xl:pb-32
      px-10 md:px-7 lg:px-40 2xl:px-96
      gap-14 md:gap-14 lg:gap-14 2xl:gap-14
      pt-20 md:pt-16 lg:pt-0 2xl:pt-16
    ">
      <div>
        <p
          className="
          text-base md:text-xl lg:text-xl 2xl:text-xl
         font-medium 
         text-gray-200
       place-items-center  w-[80vw] md:w-[80vw] lg:w-[30vw] 2xl:w-[30vw]
         ">
          {title}
        </p>
      </div>
      <div>
        <p
          className="
        text-3xl md:text-5xl lg:text-5xl  2xl:text-[3.75vw]
        w-[80vw] md:w-[80vw] lg:w-[33vw] 2xl:w-[37vw]
        font-bold md:font-bold lg:font-bold 2xl:font-bold
        text-black
        ">
          {description}
        </p>
      </div>
      <div
        className="
      flex flex-col md:justify-between lg:flex-row 2xl:flex-row
      gap-20 md:gap-0 lg:gap-0 2xl:gap-0 w-full"
      >
        <p
          className="text-xl md:text-xl lg:text-xl 2xl:text-xl
           text-gray-200 flex items-center flex-row
           gap-5 cursor-pointer hover:animate-bounce w-4/5 justify-start "
        >
          {playButton ? (
            <>
              <FiPlayCircle fontSize={"32px"} />
            </>
          ) : null}

          {subTitle}
        </p>
        {control ? (
          <>
            <div className="flex">
              <div>
                <p
                  className="text-xl 
         font-bold 
          text-white 
          flex items-center flex-row 
         px-5 md:px-0 lg:px-0 2xl:px-0
         cursor-pointer"
                >
                  Prev
                </p>
              </div>
              <div>
                <p
                  className="text-xl md:text-lg lg:text-xl 2xl:text-xl
         font-bold 
        // text-white 
          flex items-center flex-row 
         px-4 md:px-4 lg:px-5 2xl:px-5
          cursor-pointer"
                >
                  /
                </p>
              </div>
              <div>
                <p
                  className="text-xl
         font-bold 
          text-white
           flex items-center flex-row 
         px-4 md:px-0 lg:px-5 2xl:px-5
         cursor-pointer"
                >
                  Next
                </p>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default MainView;
