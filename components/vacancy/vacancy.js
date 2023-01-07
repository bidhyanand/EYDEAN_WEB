import EndSection from "../heroSection/endSection/endSection";
import Description from "./description";

const Vacancy = () => {
  return (
    <div className="bg-black-200 text-white">
      <div>
        <Description />
      </div>
      <div className="w-full pt-20 lg:pt-44 px-0 lg:px-0">
        <EndSection />
      </div>
    </div>
  );
};

export default Vacancy;
