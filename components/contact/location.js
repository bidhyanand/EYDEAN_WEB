import data from "./data/details.json";

const ContactLocation = () => {
  return (
    <div className="py-14">
      <p className="font-black text-3xl sm:text-4xl lg:text-4xl 2xl:text-4xl w-4/5 sm:w-4/5 lg:w-3/5 2xl:w-3/5">
        Were here for you. Say hello.
      </p>
      <div className="grid grid-cols-1 gap-12 py-16 md:py-28 lg:py-28 w-full sm:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3  ">
        {data.countries.map((data, index) => {
          return (
            <div key={index} className="flex flex-col gap-8 text-gray-200">
              <p className="font-black text-3xl text-black-200">
                {data.country}
              </p>
              <p className="w-full text-base font-medium">{data.no}</p>
              <p className="w-full text-base font-medium h-[7vh] overflow-hidden">{data.location}</p>
              <p className="w-full text-base font-medium text-black-200 cursor-pointer">Get direction</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactLocation;
