const CardDesign = ({ title1, title2, title3, titlee }) => {
  return (
    <>
      <div className="flex items-center gap-5 text-black-200">
        <div className="w-full ">
          <p className="text-subText-100 font-medium text-2xl mb-0 lg:mb-4">{title1}</p>
          <p className="text-3xl md:text-5xl lg:text-5xl 2xl:text-6xl font-black w-4/5 lg:w-[35vw] 2xl:w-2/3">
            {title2}
          </p>
          <p className="text-3xl md:text-5xl lg:text-5xl 2xl:text-6xl font-black w-full lg:w-4/5 bg-black-100 text-white -mt-12 lg:-mt-14">
            {titlee}
          </p>
          <p className="font-medium lg:font-semibold text-xl mb-16 w-full lg:w-3/5 ">{title3}</p>
        </div>
      </div>
    </>
  );
};

export default CardDesign;
