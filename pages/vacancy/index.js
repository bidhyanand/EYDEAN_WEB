import Domain from "../../components/vacancy/domain";
import Vacancy from "../../components/vacancy/vacancy";
import Data from "../../components/vacancy/data/vacancyData.json";
import Description from "../../components/vacancy/description";
import EndSection from "../../components/heroSection/endSection/endSection";

const VacancyPage = () => {
  return (
    <div>
      {Data.map((data, index) => {
        console.log(data, "the vacancy data is");
        return (
          <div key={data.id}>
            <Domain title={data.title} time={data.time} />
            <Description
              description={data.descriptions}
              responsibility={data.responsibilities}
              qualifications={data.qualifications}
            />
          </div>
        );
      })}
      <div className="bg-black-200">
        <EndSection />
      </div>
    </div>
  );
};

export default VacancyPage;
