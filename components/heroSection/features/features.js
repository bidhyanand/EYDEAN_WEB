import Image from "next/image";
import { useRouter } from "next/router";
import data from "../data/features.json";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";

const Features = () => {
  // const [ref, inView] = useInView({ threshold: 0.1 });
  // const animationX = useAnimation();
  // const animationY = useAnimation();
  // const animationZ = useAnimation();
  // const pathAnimation = useAnimation();

  // useEffect(() => {
  //   if (inView) {
  //     animationX.start({
  //       x: 0,
  //       opacity: 1,
  //       transition: { type: "fade", duration: 1 },
  //     });
  //     animationY.start({
  //       y: 0,
  //       opacity: 1,
  //       transition: { type: "fade", duration: 1 },
  //     });
  //     animationZ.start({
  //       z: 0,
  //       opacity: 1,
  //       transition: { type: "fade", duration: 1 },
  //     });
  //     pathAnimation.start({
  //       pathLength: 1,
  //       opacity: 1,
  //       transition: { ease: "easeInOut", duration: 2 },
  //     });
  //   }

  //   if (!inView) {
  //     animationX.start({
  //       x: "-30px",
  //       opacity: 0,
  //     });
  //     animationY.start({
  //       y: "-30px",
  //       opacity: 0,
  //       hover: {
  //         scale: 1.5,
  //         transition: {type:'easeInOut', duration: 0.3 },
  //       },
  //     });
  //     animationZ.start({
  //       z: "-30px",
  //       opacity: 0,
  //     });
  //     pathAnimation.start({
  //       pathLength: 0,
  //       opacity: 0,
  //     });
  //   }
  // }, [inView]);
  const router = useRouter();

  return (
    <div
      className="flex flex-col md:flex-row lg:flex-row xl:flex-row
      px-10 md:px-7 lg:px-40 2xl:px-96
      py-20 md:py:10 lg:py-40 2xl:py-72
      gap-10 md:gap-10 lg:gap-14 2xl:gap-0
      text-black"
      // ref={ref}
    >
      <div
        // animate={pathAnimation}
        className="flex flex-col 
        gap-10 md:gap-10 lg:gap-14 2xl:gap-14 
        w-full text-black-200"
      >
        <p
          className="text-xl md:text-xl lg:text-xl 2xl:text-xl
          font-medium text-gray-200"
        >
          / Expertises
        </p>
        <h2
          className="text-3xl md:text-3xl lg:text-4xl 2xl:text-3xl 
        w-full md:w-1/2 lg:w-full 2xl:w-1/2
         font-bold text-black  leading-tight"
        >
          Our Expertise for Your Growth
        </h2>
        <p
          className="text-xl md:text-xl lg:text-xl 2xl:text-2xl
         font-medium text-black
          w-full md:w-full lg:w-full 2xl:w-3/5
           leading-snug "
        >
          We provide our client with AI tethat includes insights from our
          research.
        </p>
      </div>
      <div
        // animate={pathAnimation}
        className="flex flex-col 
        w-full md:w-full lg:w-full 2xl:w-full
        px-0 md:px-0 lg:px-0 2xl:px-0"
      >
        {data.features.map((data, index) => {
          return (
            <div
              className="flex  items-start 
              gap-10 md:gap-14 lg:gap-14 2xl:gap-14 "
              key={index}
            >
              <div
                // animate={animationY}
                className="h-8 w-8 md:w-16 md:h-16 relative"
              >
                <Image src={data.icon} alt={data.title} layout="fill" />
              </div>
              <div
                className="flex flex-col  flex-1
                pt-2 gap-5"
              >
                <p
                  className="text-xl md:text-3xl lg:text-2xl 2xl:text-3xl 
                font-black text-black-200 w-full md:w-min lg:w-full 2xl:w-max "
                >
                  {data.title}
                </p>
                <div
                  className="font-normal 
                  text-xl md:text-xl lg:text-xl 2xl:text-xl
                  space-y-4
                text-gray-200 cursor-pointer pb-6 w-min md:w-max lg:w-full 2xl:w-max"
                >
                  <p
                    onClick={() => {
                      router.push("/expertise");
                      window.scrollTo(100, 800);
                    }}
                  >
                    {data.features1}
                  </p>

                  <p
                    onClick={() => {
                      router.push("/expertise");
                    }}
                  >
                    {data.features2}
                  </p>

                  <p
                    onClick={() => {
                      router.push("/expertise");
                    }}
                  >
                    {data.features3}
                  </p>

                  <p
                    onClick={() => {
                      router.push("/expertise");
                    }}
                  >
                    {data.features4}
                  </p>

                  <p
                    onClick={() => {
                      router.push("/expertise");
                    }}
                  >
                    {data.features5}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
