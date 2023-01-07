import Image from "next/image";

const Founder = () => {
  return (
    <div
      className="flex 
     justify-center"
    >
      <div
        className="flex 
        flex-col md:flex-row lg:flex-row 2xl:flex-row
        py-20
        items-start justify-around gap-5 w-full lg:w-4/5 2xl:w-3/5"
      >
        <Image
          src="https://res.cloudinary.com/dhxccll9e/image/upload/v1662538763/aboutUs/ceoCard/ceo_quha8p.png"
          alt="image"
          width={460}
          height={600}
        />
        <div className="flex flex-col gap-10 w-full md:w-full lg:w-3/5 2xl:w-4/5 px-5 lg:px-0 2xl:px-16 py-20 ">
          <p
            className="text-2xl lg:text-3xl font-bold text-white 
            px-5 lg:px-[3vw] 2xl:px-5"
          >
            We are constantly searching for novelties for the footwear world,
            offering our knowledge to extreme processes and level-up the
            technical level of the materials we use.
          </p>
          <p
            className="text-xl font-medium text-gray-200 
            w-full md:w-full lg:w-[full] 2xl:w-4/5 px-5 lg:px-[3vw] 2xl:px-5"
          >
            Artificial Intelligence, Blockchain, DApp, Digital health,Mechanical
            designing and Telecommunication.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founder;
