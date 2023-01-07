import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { MdOutlineWorkOutline } from "react-icons/md";
import HeaderContext from "../context/HeaderContext";
import Eydean from "./images/Eydean";
import EydeanBlack from "./images/EydeanBlack";
import MenuBlack from "./images/MenuBlack";
import { MenuImage } from "./images/MenuImage";

const Header = () => {
  // const [scrollDown, setScrollDown] = useState(0);
  // const [showHeader, setShowHeader] = useState(true);
  // const handleScroll = () => {
  //   const val = window.scrollY;
  //   console.log(val, "her");
  //   if (val <= scrollDown ) {
  //     setShowHeader(true);
  //   }
  //   else if (val <= 235 ){
  //     setShowHeader(true);
  //   }
  //   else {
  //     setShowHeader(false);
  //   }
  //   setScrollDown(val);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const { slideIndex } = useContext(HeaderContext);
  const router = useRouter();
  const style = {
    color:
      router.asPath === "/"
        ? slideIndex === 0
          ? "white"
          : slideIndex === 1
          ? "black"
          : "black"
        : router.asPath === "/about"
        ? "white"
        : router.asPath === "/expertise"
        ? "white"
        : router.asPath === "/industries/agriculture"
        ? "white"
        : router.asPath === "/industries/automotive"
        ? "white"
        : router.asPath === "/industries/communication"
        ? "white"
        : router.asPath === "/industries/education"
        ? "white"
        : router.asPath === "/industries/financial%service"
        ? "white"
        : router.asPath === "/industries/health%care"
        ? "white"
        : router.asPath === "/industries/high%technology"
        ? "white"
        : router.asPath === "/industries/industry%4.0"
        ? "white"
        : router.asPath === "/industries/industrial%manufacture"
        ? "white"
        : router.asPath === "/industries/information%services"
        ? "white"
        : router.asPath === "/industries/insurances"
        ? "white"
        : router.asPath === "/industries/logistic%distribution"
        ? "white"
        : router.asPath === "/industries/sustainable%industry"
        ? "white"
        : router.asPath === "/industries/public%sector"
        ? "white"
        : router.asPath === "/industries/retail"
        ? "white"
        : router.asPath === "/industries/travel%hospitality"
        ? "white"
        : router.asPath === "/ourwork"
        ? "white"
        : "black",
    backgroundColor:
      router.asPath === "/"
        ? slideIndex === 0
          ? "black"
          : slideIndex === 1
          ? "#E3F2FE"
          : "#FFF3C4"
        : router.asPath === "/about"
        ? "black"
        : router.asPath === "/expertise"
        ? "black"
        : router.asPath === "/industries/agriculture"
        ? "black"
        : router.asPath === "/industries/automotive"
        ? "black"
        : router.asPath === "/industries/communication"
        ? "black"
        : router.asPath === "/industries/education"
        ? "black"
        : router.asPath === "/industries/financial%service"
        ? "black"
        : router.asPath === "/industries/health%care"
        ? "black"
        : router.asPath === "/industries/high%technology"
        ? "black"
        : router.asPath === "/industries/industry%4.0"
        ? "black"
        : router.asPath === "/industries/industrial%manufacture"
        ? "black"
        : router.asPath === "/industries/information%services"
        ? "black"
        : router.asPath === "/industries/insurances"
        ? "black"
        : router.asPath === "/industries/logistic%distribution"
        ? "black"
        : router.asPath === "/industries/sustainable%industry"
        ? "black"
        : router.asPath === "/industries/public%sector"
        ? "black"
        : router.asPath === "/industries/retail"
        ? "black"
        : router.asPath === "/industries/travel%hospitality"
        ? "black"
        : router.asPath === "/ourwork"
        ? "black"
        : "white",
  };

  return (
    <div
      className="flex justify-between items-start
      p-10 md:p-10 lg:p-20 2xl:p-32  
      px-5 md:px- lg:px-20 2xl:px-32 z-10 h-[27vh] lg:h-[43vh]
      relative"
      style={style}
    >
      {/* {showHeader ? "SHow header" : "Hide header"} */}

      <div className="hidden  md:hidden lg:inline-block 2xl:inline-block ">
        <div
          className="flex items-center
        gap-x-6 md:gap-x-6 lg:gap-x-6 2xl:gap-x-9 
        cursor-pointer"
        >
          <h1
            className="text-xl  md:text-xl lg:text-xl 2xl:text-xl
              font-bold"
            onClick={() => {
              router.push("/about");
            }}
          >
            About Us
          </h1>

          <h1
            className="text-xl md:text-xl lg:text-xl 2xl:text-xl
            font-bold"
            onClick={() => {
              router.push("/industries");
            }}
          >
            Products
          </h1>
        </div>
      </div>

      <div
        className="cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
        style={style}
      >
        <div>
          {router.asPath === "/" ? (
            slideIndex === 0 ? (
              <Eydean />
            ) : (
              <EydeanBlack />
            )
          ) : router.asPath === "/about" ? (
            <Eydean />
          ) : router.asPath === "/industries/agriculture" ? (
            <Eydean />
          ) : router.asPath === "/industries/automotive" ? (
            <Eydean />
          ) : router.asPath === "/industries/communication" ? (
            <Eydean />
          ) : router.asPath === "/industries/education" ? (
            <Eydean />
          ) : router.asPath === "/expertise" ? (
            <Eydean />
          ) : router.asPath === "/ourwork" ? (
            <Eydean />
          ) : router.asPath === "/industries/financial%service" ? (
            <Eydean />
          ) : router.asPath === "/industries/health%care" ? (
            <Eydean />
          ) : router.asPath === "/industries/high%technology" ? (
            <Eydean />
          ) : router.asPath === "/industries/industry%4.0" ? (
            <Eydean />
          ) : router.asPath === "/industries/industrial%manufacture" ? (
            <Eydean />
          ) : router.asPath === "/industries/information%services" ? (
            <Eydean />
          ) : router.asPath === "/industries/insurances" ? (
            <Eydean />
          ) : router.asPath === "/industries/logistic%distribution" ? (
            <Eydean />
          ) : router.asPath === "/industries/sustainable%industry" ? (
            <Eydean />
          ) : router.asPath === "/industries/public%sector" ? (
            <Eydean />
          ) : router.asPath === "/industries/retail" ? (
            <Eydean />
          ) : router.asPath === "/industries/travel%hospitality" ? (
            <Eydean />
          ) : (
            <EydeanBlack />
          )}
        </div>
      </div>
      <div
        className="flex items-start text-white 
        gap-x-10 md:gap-x-10 lg:gap-x-10 2xl:gap-x-10
        cursor-pointer"
      >
        <button
          className={
            router.asPath === "/"
              ? "text-white bg-primaryOption rounded-md flex items-center text-base gap-x-2 invisible md:invisible lg:visible 2xl:visible p-5 md:p-5 lg:p-5 2xl:p-5 border-r-10 md:border-r-10 lg:border-r-10 2xl:border-r-10"
              : "bg-none rounded-md flex items-center text-base gap-x-2 invisible md:invisible lg:visible 2xl:visible p-5 md:p-5 lg:p-5 2xl:p-5 border-r-10 md:border-r-10 lg:border-r-10 2xl:border-r-10"
          }
          onClick={() => {
            router.push("https://careers.eydean.com");
          }}
        >
          <div
            className={
              router.asPath === "/" ? "flex gap-3 opacity-100" : "opacity-0"
            }
          >
            <MdOutlineWorkOutline size={"20"} />
            {"WE'RE HIRING"}
          </div>
        </button>

        <div
          className="pt-5"
          onClick={() => {
            router.push("/menu");
          }}
        >
          <div>
            {router.asPath === "/" ? (
              slideIndex === 0 ? (
                <MenuImage />
              ) : (
                <MenuBlack />
              )
            ) : router.asPath === "/about" ? (
              <MenuImage />
            ) : router.asPath === "/industries/agriculture" ? (
              <MenuImage />
            ) : router.asPath === "/industries/automotive" ? (
              <MenuImage />
            ) : router.asPath === "/industries/communication" ? (
              <MenuImage />
            ) : router.asPath === "/industries/education" ? (
              <MenuImage />
            ) : router.asPath === "/expertise" ? (
              <MenuImage />
            ) : router.asPath === "/ourwork" ? (
              <MenuImage />
            ) : router.asPath === "/industries/financial%service" ? (
              <MenuImage />
            ) : router.asPath === "/industries/health%care" ? (
              <MenuImage />
            ) : router.asPath === "/industries/high%technology" ? (
              <MenuImage />
            ) : router.asPath === "/industries/industry%4.0" ? (
              <MenuImage />
            ) : router.asPath === "/industries/industrial%manufacture" ? (
              <MenuImage />
            ) : router.asPath === "/industries/information%services" ? (
              <MenuImage />
            ) : router.asPath === "/industries/insurances" ? (
              <MenuImage />
            ) : router.asPath === "/industries/logistic%distribution" ? (
              <MenuImage />
            ) : router.asPath === "/industries/sustainable%industry" ? (
              <MenuImage />
            ) : router.asPath === "/industries/public%sector" ? (
              <MenuImage />
            ) : router.asPath === "/industries/retail" ? (
              <MenuImage />
            ) : router.asPath === "/industries/travel%hospitality" ? (
              <MenuImage />
            ) : (
              <MenuBlack />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
