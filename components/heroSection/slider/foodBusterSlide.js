import Image from "next/image";
import MainView from "../../reusableDesign/MainView";

const FbSlide = () => {
  return (
    <div className="text-black-200 bg-yellow-100 position-relative h-[78vh] lg:h-[29.8vw] 2xl:h-[70vh]">
      <div className="text-black flex flex-col-reverse lg:flex-row lg:gap-20 gap-14">
        <div className="w-full lg:w-[35vw] 2xl:w-[40vw] pt-10 lg:pt-[5%] 2xl:pt-[5%]">
          <MainView
            title="Work 03 - FoodBuster"
            description="One stop solution for food and mart."
          />
        </div>
        <div
          className="w-[80vw] lg:w-[43.1vw] 2xl:w-[35%] h-[20vh]
          p-0 lg:p-[3.2vw] 2xl:p-0 -mt-5 lg:-mt-14 2xl:mt-0 -ml-20 lg:ml-0 rotate-[27deg] lg:rotate-0"
        >
          <Image
            src="https://res.cloudinary.com/dhxccll9e/image/upload/v1663930566/homePage/mainCard/FBhand_g212gt.png"
            width={1350}
            height={1120}
            alt={"maincard"}
          />
        </div>
      </div>
      <div className="lg:-mt-[21.5vw] 2xl:-mt-[15.4vw] -mt-[95vw] px-5 lg:px-20 2xl:px-32 
        opacity-100 lg:opacity-100 flex justify-end lg:justify-start">
        <Image
          src={
            "https://res.cloudinary.com/dhxccll9e/image/upload/v1663925894/homePage/mainCard/scroll2_a6aiio.svg"
          }
          width={20}
          height={200}
          alt={"scroll"}
        />
      </div>
    </div>
  );
};
export default FbSlide;
