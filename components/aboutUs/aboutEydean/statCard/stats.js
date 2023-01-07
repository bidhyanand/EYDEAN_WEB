import data from "../../data/statCard.json";
import styles from "../../../../styles/Layout.module.css";

const Stats = () => {
  return (
    <div className="flex justify-center py-5">
      <div
        className="grid grid-cols-2 
      py-20 md:py-20 lg:py-32 2xl:py-20
      w-full lg:w-4/5 2xl:w-3/5
      px-10 lg:px-0
      gap-5 lg:gap-32"
      >
        {data.statCard.map((item, index) => {
          return (
            <div key={index}>
              <div
                className="flex flex-col md:flex-row lg:flex-row 2xl:flex-row  
                gap-5 lg:gap-0  2xl:gap-0 
                py-10 md:py-10 lg:py-0 2xl:py-10"
              >
                <div className={styles.textAbout}>
                  <p
                    className="text-white-200 font-black 
                    text-4xl md:text-2xl lg:text-6xl 2xl:text-6xl w-1/2 md:w-1/2 lg:w-1/2"
                  >
                    {item.stat}+
                  </p>
                </div>

                <h1
                  className="text-base md:text-2xl lg:text-3xl 2xl:text-3xl
                  font-medium w-4/5 lg:w-[23vw] 2xl:w-full ml-0 lg:-ml-40 2xl:-ml-20"
                >
                  {item.title}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
