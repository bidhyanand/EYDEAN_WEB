import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import TopCard from "../reusableDesign/topCard";
import Data from '../careers/data/techData.json'

const Domain = ({title, time}) => {
  return (
    <div className="flex flex-col justify-center items-center mt-3 lg:mt-5 2xl:mt-20 mb-40">
      <div className="flex flex-col md:flex-row lg:flex-row 2xl:flex-row w-full md:w-full lg:w-4/5 2xl:w-3/5 gap-10">
        <div className="text-black-200 px-10 md:px-10 lg:px-0 2xl:px-0 w-full">
          <div className="w-full md:w-full lg:w-4/5 2xl:w-4/5 text-gray-200">
            <TopCard
              title={"Technology"}
              heading={title}
              content={time}
            />
          </div>
          <div className="text-gray-700 gap-3 grid grid-cols-3 lg:grid-cols-5 pr-5 py-8 w-full lg:w-[37vw] 2xl:w-full">
            <p className="border-gray-700 border-2 border-opacity-30 rounded-xl p-2 flex items-center justify-center">
              React
            </p>
            <p className="border-gray-700 border-2 rounded-xl p-2 border-opacity-30 flex items-center justify-center">
              Next Js
            </p>
            <p className="border-gray-700 border-2 rounded-xl p-2 border-opacity-30 flex items-center justify-center">
              Figma
            </p>
            <p className="border-gray-700 border-2 rounded-xl p-2 border-opacity-30 flex items-center justify-center">
              SASS
            </p>
            <p className="border-gray-700 border-2 rounded-xl p-2 border-opacity-30 flex items-center justify-center">
              JavaScript
            </p>
          </div>
        </div>
        <div className="">
          <div
            className="flex justify-center items-center p-20 md:p-5 lg:p-0 2xl:p-0 
            h-[30vh] lg:h-[35vh] 2xl:h-[30vh] bg-gray-400 rounded-xl mt-3 lg:mt-[27%] w-full md:w-full lg:w-[25%] 2xl:w-[25%] 
            flex-col scroll lg:fixed -top-0 right-0 lg:right-40 lg:-top-16"
          >
            <div className="flex justify-center items-center bg-black-200 text-white 
              w-full lg:w-4/5 2xl:w-4/5 rounded-xl h-[10vh] text-xl 
              font-normal gap-2 mt-16 py-3 cursor-pointer">
              Apply for this job
              <FiArrowUpRight fontSize={"35px"} />
            </div>
            <p className="text-base font-medium text-gray-200 pt-3 mt-5">
              Share this Job Opening
            </p>
            <div className="flex gap-5 text-gray-700 bg text-2xl pt-5 pb-16">
              <FaFacebookF
                className="bg-white rounded-full p-2 cursor-pointer"
                fontSize={"30px"}
              />
              <AiFillInstagram
                className="bg-white rounded-full p-2 cursor-pointer"
                fontSize={"30px"}
              />
              <BsTwitter
                className="bg-white rounded-full p-2 cursor-pointer"
                fontSize={"30px"}
              />
              <FaLinkedinIn
                className="bg-white rounded-full p-2 cursor-pointer"
                fontSize={"30px"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domain;
