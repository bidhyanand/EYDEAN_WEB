import { FaCircle } from "react-icons/fa";
import Footer from "./footer/Footer";
import Header from "../../components/menu/header/Header";
import menuData from "../menu/data/menuData.json";
import Link from "next/link";
import mobileData from "../menu/data/mobileData.json";
import SeoOptimization from "../reusableDesign/SeoOptimization";
import { useRouter } from "next/router";

const MenuContent = () => {
  const router = useRouter();
  return (
    <>
      <SeoOptimization
        title={"EYDEAN | MENU"}
        contentDescription={
          "This menu page will describe about the on going works, produucts ,insights and the details about the company"
        }
        contentTitle={"Eydean - Menu"}
      />
      {/* main div for component */}
      <div className="p-10 md:p-20 lg:p-20    ">
        {/* header secttion */}
        <Header />
        {/* content div for menu content */}
        <div className=" p-0 md:p-20 lg:p-20">
          <div className="grid gap-x-4  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
            <div
              className=" text-white flex flex-col   
             gap-5 md:gap-16 lg:gap-24
             ml-0 md:ml-12 lg:ml-12
             mt-[-24px] md:mt-[24px] lg:mt-[0] justify-center
             "
            >
              {/* mapping menu main header */}
              {menuData.header.map((data, index) => {
                return (
                  <div
                    key={index}
                    className=" text-3xl font-extrabold cursor-pointer "
                    onClick={() => {
                      router.push(data.path);
                    }}
                  >
                    {data.title}{" "}
                    {data.title === "Products" ? (
                      <sup className="text-sm font-medium ">04</sup>
                    ) : null}
                  </div>
                );
              })}
            </div>
            <div
              className=" text-white  flex-col 
            inline-flex md:hidden lg:hidden-400 
            pt-28
            gap-10
          
             "
            >
              {/* mapping menu main header */}
              {mobileData.features.map((data, index) => {
                return (
                  <div key={index} className=" text-2xl font-normal">
                    {data.title}{" "}
                    {data.title === "Expertise" ? (
                      <sup className="text-sm font-medium  ">15+</sup>
                    ) : null}
                    {data.title === "Industries" ? (
                      <sup className="text-sm font-medium  ">17+</sup>
                    ) : null}
                    {data.title === "Brands" ? (
                      <sup className="text-sm font-medium  ">30+</sup>
                    ) : null}
                    {data.title === "Careers" ? (
                      <sup className="text-sm font-medium  ">04+</sup>
                    ) : null}
                    <hr />
                  </div>
                );
              })}
            </div>

            <div className="hidden md:inline-block lg:inline-block ">
              <div className="flex flex-row justify-around text-white ">
                <div>
                  <p
                    className="text-xl font-extrabold  text-white cursor-pointer"
                    onClick={() => {
                      router.push("/expertise");
                    }}
                  >
                    {/* mapping expertise and its sub header started */}
                    {menuData.expertise.title}
                    <sup className="text-sm font-medium ">15+</sup>
                  </p>
                  <div className="flex flex-col gap-7 pt-5 text-sm font-medium text-subText text-gray-200 ">
                    {menuData.expertise.data.map((data, index) => {
                      return <div key={index}>{data.title}</div>;
                    })}
                  </div>
                </div>
                {/* mapping expertise and its sub header end */}

                {/* mapping industries and its sub header started */}
                <div className="">
                  <p
                    className="text-xl font-extrabold  text-white  cursor-pointer "
                    onClick={() => {
                      router.push("/industries");
                    }}
                  >
                    {menuData.Industries.title}{" "}
                    <sup className="text-sm font-medium">17+</sup>{" "}
                  </p>
                  <div className="flex flex-col gap-7 pt-5 text-sm font-medium  text-subText text-gray-200">
                    {menuData.Industries.data.map((data, index) => {
                      return <div key={index}>{data.title}</div>;
                    })}
                  </div>
                </div>
              </div>
              {/* mapping industries and its sub header ended */}

              <div className="text-white ml-7 hidden md:flex lg:flex ">
                <br />

                <div className="flex flex-row justify-between mt-4  w-4/5  ">
                  <div className="w-5 font-extrabold flex flex-row gap-2 ">
                    <p>Brands</p>
                    <sup className=" font-medium mt-2 ">30+</sup>
                  </div>
                  <div className="w-5 font-extrabold flex flex-row gap-2 cursor-pointer">
                    <div
                      onClick={() => {
                        router.push("https://careers.eydean.com");
                      }}
                    >
                      <p>Carrers</p>
                    </div>

                    <sup className=" font-medium mt-2 ">04+</sup>
                  </div>
                  <div className="  underline font-extrabold cursor-pointer">
                    <Link href="/contact">
                      <p>Contact Us</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden nd:flex lg:flex  flex-col pl-10 pt-6 gap-5 text-white ">
              <div className="text-xl font-extrabold ">
                <p>Have an idea?</p>
              </div>
              <div className="text-4xl font-black hidden nd:flex lg:flex ">
                <p>Lets craft your next business challenge today</p>
              </div>
              <div className="hidden nd:flex lg:flex  flex-row gap-2">
                <div className="pt-2">
                  <p>
                    <FaCircle />
                  </p>
                </div>
                <div className="text-xl font-medium hidden nd:flex lg:flex  ">
                  <p>Lets get started</p>
                </div>
              </div>
            </div>
          </div>

          {/* content div for menu end here */}
        </div>
        <div>
          <hr />
        </div>

        {/* main div end here */}

        <Footer data={menuData.footer} />
      </div>
    </>
  );
};

export default MenuContent;
