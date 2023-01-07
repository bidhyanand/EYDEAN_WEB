import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div
        className=" flex flex-col-reverse md:flex-row lg:flex-row gap-10 sm:gap-0 lg;gap-0 bg-primaryOption text-white justify-between 
      mx-4 md:mx-20 lg:mx-20 xl:mx-20
       px-10 md:px-20 lg:px-20 xl:scroll-px-20
        rounded-t-3xl items-center py-2
         h-[25vh] 
      pt-60 md:pt-0 lg:pt-0 xl:pt-0
     
      "
      >
        <div className="py-5">
          <h4 className="text-sm  md:text-base lg:text-base xl:text-base ">
            Copyright 2022 eydean, inc.
          </h4>
        </div>
        <div className="inline-block md:hidden lg:inline-block ml-0 lg:-ml-24">
          <div>
            {router.asPath === "/" ? (
              <div className="flex flex-col gap-8 items-center">
                <p className=" text-2xl font-bold"> Next </p>
                <h4
                  className=" text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold cursor-pointer"
                  onClick={() => {
                    router.push("/industries");
                  }}
                >
                  Industries{" "}
                </h4>
              </div>
            ) : router.asPath === "/about" ? (
              <div className="flex flex-col gap-8 items-center">
                <p className=" text-2xl font-bold"> Next </p>
                <h4
                  className=" text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold cursor-pointer"
                  onClick={() => {
                    router.push("https://careers.eydean.com/");
                  }}
                >
                  Career{" "}
                </h4>
              </div>
            ) : router.asPath === "/industries/agriculture" ? (
              <div className="flex flex-col gap-8 items-center">
                <button className=" text-2xl font-normal ">
                  {" "}
                  {`Next > industries`}
                </button>
                <h4 className=" text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold cursor-pointer">
                  {" "}
                  Automobile{" "}
                </h4>
              </div>
            ) : (
              <div className="flex flex-col gap-8 items-center">
                <p className=" text-2xl font-bold "> Next </p>
                <h4
                  className=" text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold cursor-pointer"
                  onClick={() => {
                    router.push("/ourwork");
                  }}
                >
                  Our Work{" "}
                </h4>
              </div>
            )}
          </div>
        </div>
        <div
          className=" hidden md:inline-block lg:inline-block xl:inline-block
       
        "
        >
          <button className="text-xl" onClick={scrollToTop}>
            Back to top
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
