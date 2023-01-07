import EndSection from "../../heroSection/endSection/endSection";
import Content from "../agriculture/Content";
import Insu from "../images/11_Insurances";

const Insurances = () => {
    const handleScroll = () => {
        window.scrollTo(100, 800);
      };
  return (
    <>
    <div
      className="flex flex-col    
      pb-28 md:pb-32 lg:pb-48 2xl:pb-32
      px-10 md:px-7 lg:px-40 2xl:px-96
      gap-14 md:gap-14 lg:gap-14 2xl:gap-14
      pt-20 md:pt-16 lg:pt-10 2xl:pt-16
      bg-black-200
    "
    >
      <div className="flex gap-4">
        <div>
          <Insu/>
        </div>
        <div className="flex gap-2 mt-3 ">
          <p
            className="
          text-base md:text-xl lg:text-xl 2xl:text-xl
         font-medium 
         text-gray-200
       place-items-center
         "
          >
            {" "}
            Industries{" "}
          </p>
          <p
            className="
          text-base md:text-xl lg:text-xl 2xl:text-xl
         font-medium 
         text-gray-200
       place-items-center
         "
          >
            {" "}
            /{" "}
          </p>

          <p
            className="
          text-base md:text-xl lg:text-xl 2xl:text-xl
         font-medium 
        text-white
       place-items-center
         "
          >
            {" "}
            Insurances{" "}
          </p>
        </div>
      </div>

      <div
        className="
        text-3xl md:text-5x1 lg:text-5xl  2xl:text-[3.75vw]
        w-[80vw] md:w-[80vw] lg:w-[45vw] 2xl:w-[40vw]
        font-bold md:font-bold lg:font-bold 2xl:font-bold 
        text-white

        "
      >
        Insurances Intelligence
      </div>
      <div>
        <p
          className="text-lg lg:text-xl lg:font-black w-full lg:w-4/5 sm:w-3/5 sm:text-xl font-bold cursor-pointer text-white "
          onClick={handleScroll}
        >
          Scroll Down
        </p>
      </div>
    </div>
    <Content/>
    <div className="bg-black-200 py-36 " >
        <EndSection/>
    </div>
    </>
  )
}

export default Insurances