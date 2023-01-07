import Image from "next/image";
import MainView from "../../reusableDesign/MainView";

const BgSlide = () => {
  return (
    <div className="text-black-200 bg-cyan-200 position-relative h-[80vh] lg:h-[60vw] 2xl:h-[72vh]">
      <div className="text-black flex flex-col-reverse lg:flex-row gap-10">
        <div className="w-full lg:w-[45vw] 2xl:w-[40vw] pt-2 lg:pt-[5%] 2xl:pt-[5%]">
          <MainView
            title="Work 02 - Bookgara"
            description="One app for everyday needs"
          />
        </div>
        <div className="mr-20 lg:mr-20 2xl:mr-0 mt-2 lg:mt-0">
          <Image
            src="https://res.cloudinary.com/dhxccll9e/image/upload/v1663926708/homePage/mainCard/bookgaraImage_gcfyk7.svg"
            width={950}
            height={500}
            alt={"bookgara"}
          />
        </div>
      </div>
      <div
        className="lg:-mt-[21.5vw] 2xl:-mt-[15.4vw] -mt-[95vw] px-5 lg:px-20 2xl:px-32 
          opacity-100 lg:opacity-100 flex justify-end lg:justify-start"
      >
        <Image
          src={
            "https://res.cloudinary.com/dhxccll9e/image/upload/v1663925894/homePage/mainCard/scroll2_a6aiio.svg"
          }
          width={20}
          height={200}
          alt={"foodbuster"}
        />
      </div>
    </div>
  );
};
export default BgSlide;
