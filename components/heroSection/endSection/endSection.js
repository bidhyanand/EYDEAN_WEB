import { GoPrimitiveDot } from "react-icons/go";

const EndSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center text-white 
    px-10 md:px-10 lg:px-40 2xl:px-96
    pb-10 md:pb-36 lg:pb-40 2xl:pb-64
    gap-10 md:gap-10 lg:gap-0 2xl:gap-40
    ">
        <div className="text-3xl md:text-6xl lg:text-5xl  2xl:text-6xl 
        text-center md:text-left lg:text-left  2xl:text-left
        px-5 md:px-0 lg:px-0  2xl:px-0
        font-black text-white leading-tight ">
            Lets craft your next business challenge todays
        </div>
        <div className="flex w-full  justify-center">
          <p className="text-xl md:text-3xl lg:text-3xl 2xl:text-3xl
          pb-20 md:pb-0 lg:pb-0 2xl:pb-0
          font-bold  text-white flex items-center flex-row">
            <GoPrimitiveDot fontSize={"40px"} />
            Start with us
          </p>
        </div>
        {/* <div className="text-xl  font-bold
         pt-20 md:pt-20 lg:pt-20 2xl:pt-20 
         flex md:hidden lg:hidden 2xl:hidden " >
          <button onClick={scrollToTop} >Back to top</button>
        </div> */}
        
    </div>
  );
};

export default EndSection;
