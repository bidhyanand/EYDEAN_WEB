import Image from "next/image";
import React, { useState } from "react";
import data from "../data/accordian.json";
import AccordianDesign from "./AccordianDesign";

const Accordion = ({}) => {
  const [openId, setOpenId] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };
  const renderedItems = data.accordian.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <div key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <div key={index} className="">
            <AccordianDesign
              openId={openId}
              setOpenId={setOpenId}
              title={item.title}
              body={item.body}
              id={item.id}
            />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={"flex gap-8"}>
      <div className="cursor-pointer flex flex-col gap-10 md:gap-14 lg:gap-14 w-full">
        {renderedItems}
      </div>
      <div
        direction="up"
        className="w-full md:flex lg:flex 2xl:flex flex-row-reverse hidden lg:-mt-[21.4vw] 2xl:-mt-[16.07vw] "
      >
        <div>
          <Image
            src={`${data.accordian[activeIndex].image}`}
            width="600px"
            height="880px"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
