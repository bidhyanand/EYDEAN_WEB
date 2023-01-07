import EndSection from "../heroSection/endSection/endSection";
import SeoOptimization from "../reusableDesign/SeoOptimization";
import ContactTab from "./contactTab";
import ContactLocation from "./location";

const Contact = () => {
  const handleScroll = () => {
    window.scrollTo(100, 800);
  };

  return (
    <>
      <SeoOptimization
        title={"Eydean | Contact"}
        contentDescription={
          "This the contact page of the eydean in this page you can contact about the administrator of the eydean as well as you can request the proposal to the company"
        }
        contentTitle={"Eydeab - Contact"}
      />
      <div className="flex text-xl flex-col items-center justify-center">
        <div className="flex flex-col items-start gap-5 px-5 w-full sm:w-full lg:w-4/5 2xl:w-3/5">
          <div className="flex flex-col gap-10 mt-10">
            <p className="text-gray-200 font-medium text-base sm:text-2xl lg:text-2xl 2xl:text-2xl">
              / Contact Us
            </p>
            <p className="text-4xl lg:text-6xl lg:font-black w-full sm:w-4/5 lg:w-3/5 2xl:w-3/5 sm:text-5xl font-bold 2xl:text-6xl">
              Turn your ideas into digital products.
            </p>
            <p
              className="text-lg lg:text-xl lg:font-black w-full lg:w-4/5 sm:w-3/5 sm:text-xl font-bold cursor-pointer"
              onClick={handleScroll}
            >
              Scroll Down
            </p>
          </div>
          <div className="w-full flex items-end lg:justify-end justify-center">
            <div className="flex flex-col justify-start gap-10 w-full md:w-full lg:w-3/5 2xl:w-1/2 my-10 lg:my-20 sm:my-16 py-10 lg:py-20 text-gray-200 lg:justify-end">
              <ContactTab />
            </div>
          </div>
        </div>
        <div></div>
        <div className="flex flex-col items-start gap-5 px-5 w-full md:w-full lg:w-4/5 2xl:w-3/5">
          <ContactLocation />
        </div>
        <div className="bg-black-200 pt-20 md:pt-32 lg:pt-60 2xl:pt-60">
          <EndSection />
        </div>
      </div>
    </>
  );
};

export default Contact;
