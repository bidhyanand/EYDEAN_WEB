import Domain from "../../components/vacancy/domain";
import Vacancy from "../../components/vacancy/vacancy";
import { useRouter } from "next/router";

const VacancyPage = () => {
  const router = useRouter();
  const param = router.query;
  console.log(param, "the vacancy data is");

  return (
    <div>
      <Domain />
      <Vacancy />
    </div>
  );
};

export default VacancyPage;




// import Domain from "../../components/vacancy/domain";
// import Vacancy from "../../components/vacancy/vacancy";
// import Data from "../../components/vacancy/data/vacancyData.json";
// import { useRouter } from "next/router";
// import Description from "../../components/vacancy/description";
// import EndSection from "../../components/heroSection/endSection/endSection";

// const VacancyPage = () => {
//   const router = useRouter();
//   const { param } = router.query;
//   console.log(param, "the data is");

//   return (
//     <div>
//       {Data.map((data, index) => {
//         console.log(data, "the vacancy data is");
//         return (
//           <div key={data.id}>
//             <Domain title={data.title} time={data.time} />
//             <Description
//               description={data.descriptions}
//               responsibility={data.responsibilities}
//               qualifications={data.qualifications}
//             />
//           </div>
//         );
//       })}
//       <div className="bg-black-200">
//         <EndSection />
//       </div>
//     </div>
//   );
// };

// export default VacancyPage;
