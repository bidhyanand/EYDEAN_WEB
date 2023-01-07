import Image from "next/image";
import MainView from "../../reusableDesign/MainView";

const Agency = () => {
  return (
    <div className="text-white">
      <div className="pt-20 lg:pt-8 2xl:pt-2 w-full">
        <MainView
          title="/ Agency 01"
          description="Expert in intelligent products and various services"
        />
      </div>
      <div className="lg:-mt-[22vw] 2xl:-mt-[14.7vw] -mt-[69vw] px-5 lg:px-20 2xl:px-32
          opacity-100 lg:opacity-100 flex justify-end lg:justify-start" >
        <Image
          src={
            "https://res.cloudinary.com/dhxccll9e/image/upload/v1663933694/homePage/mainCard/Group_8_dzi6iw.svg"
          }
          width={20}
          height={200}
          alt={"image"}
        />
      </div>
    </div>
  );
};
export default Agency;
