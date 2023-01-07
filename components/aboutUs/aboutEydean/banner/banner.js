import Image from "next/image";
import styles from "../../../../styles/Layout.module.css";
import MainView from "../../../reusableDesign/MainView";

const AboutBanner = () => {
  return (
    <div className=" px-5 lg:px-32 2xl:px-32 py-10 mt-5 w-[98.5vw] relative  ">
      <Image
        src="https://res.cloudinary.com/dhxccll9e/image/upload/v1662538865/aboutUs/banners/teamEydean_zsgxla.png"
        width={1660}
        height={810}
        alt="image"
      />
      <div className="absolute top-10 left-0 lg:left-5 lg:top-40 2xl:top-40 2xl:left-0 
        w-[70vw] lg:w-full h-[30vh] lg:h-full opacity-100 flex items-center">
        <MainView
          title="/ Meet our team"
          description="Not just a team but a big family."
        />
      </div>
      <div className="lg:absolute right-2 b-0 lg:-bottom-14 w-1/2  justify-center flex mt-10 lg:mt-0">
        <Image
          src="https://res.cloudinary.com/dhxccll9e/image/upload/v1662536560/aboutUs/banners/discover_a7fvz5.svg"
          width={258}
          height={200}
          alt="image"
          className={styles.spin}
        />
      </div>
    </div>
  );
};

export default AboutBanner;
