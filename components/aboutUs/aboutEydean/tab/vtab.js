import React, { useState } from "react";
import Data from "../../data/tabData.json";
import ScrollTo from "react-scroll-into-view";
import TabContentDesign from "./tabContentDesign";
import Scrollspy from "react-scrollspy";

const Vtab = ({}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openId, setOpenId] = useState(0);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = Data.tabData.map((data, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <div key={index} className=" flex-col justify-start">
        <div
          className="flex flex-col justify-start
          gap-5 md:gap-10 lg:gap-10 2xl:gap-14
          font-black"
        >
          <div className={`title ${active} gap-20 lg:gap-0`}>
            <div
              key={index}
              className={
                "text-gray-800 gap-0 lg:gap-0 py-10 lg:py-0 h-full text-2xl lg:text-4xl"
              }
            >
              <ScrollTo
                selector={`#${data.id}`}
                onClick={() => {
                  onTitleClick(index);
                }}
                className="w-full lg:w-1/2 cursor-pointer"
              >
                <Scrollspy
                  items={[data.id]}
                  currentClassName={"text-white scroll lg:sticky top-60 z-10"}
                >
                  <li href={`#${data.id}`} className="hidden lg:flex">
                    {data.name}
                  </li>
                  <p className="flex lg:hidden text-white">{data.name}</p>
                </Scrollspy>
              </ScrollTo>
              <div className="flex-col lg:hidden text-lg lg:text-4xl mt-5 lg:mt-0 text-gray-200">
                {data.contents.map((content, index) => {
                  return (
                    <div key={index} className="flex-col gap-0">
                      <div className="">
                        <TabContentDesign
                          title={content.title}
                          body={content.body}
                          openId={openId}
                          setOpenId={setOpenId}
                          id={content.id}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div
      className={
        "lg:flex px-10 lg:px-40 2xl:px-96 pb-16 py-0 lg:pb-[20vw] lg:pt-60"
      }
    >
      <div
        className="flex flex-col gap-10 lg:gap-14 
        w-full lg:w-3/5 scroll lg:sticky top-60 z-10 h-full"
      >
        {renderedItems}
      </div>
      <div className="flex-col gap-96 w-full lg:w-3/5 2xl:w-3/5 hidden lg:flex">
        {Data.tabData.map((data, index) => {
          return (
            <div
              key={index}
              className="w-full lg:w-[27vw] 2xl:w-[16vw] text-lg lg:text-xl pb-0 lg:pb-[100%] 2xl:pb-[100%]"
            >
              <div id={data.id}>
                {data.contents.map((content, cindex) => {
                  return (
                    <div key={cindex} className="relative top-60 scroll">
                      <TabContentDesign
                        title={content.title}
                        body={content.body}
                        openId={openId}
                        setOpenId={setOpenId}
                        id={content.id}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vtab;
