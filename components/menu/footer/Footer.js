import {  useRouter } from "next/router";

const Footer = ({ data }) => {
  const router = useRouter()
  console.log(data);
  return (
    <div className=" p-16 justify-between hidden md:flex lg:flex">
      <div className="flex flex-row gap-6 font-bold text-xs  text-white ">
        {data.socialMedia.map((data, index) => {
          return <div key={index} className="cursor-pointer"onClick={()=>{
            router.push(data.path)
          }} >
            
            {data.title}</div>;
        })}
      </div>
      <div className="flex flex-row gap-20 text-white  ">
        <div className="flex flex-col gap-1">
          {/* mapping of phone and email startted */}
          {data.footerInfo.map((info, index) => {
            return (
              <div className="text-subText" key={index}>
                <p className="text-gray-200">{info.email}</p>
                <p>{info.phone}</p>
              </div>
            );
          })}
        </div>
        {/* mapping of phone and email end */}

        <div className="flex flex-col gap-3 ">
          <div className="flex  gap-4">
            {/* mapping of country started */}
            {data.country.map((country, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    country === "Nepal" ? "text-white" : "text-gray-200"
                  } text-sm font-extrabold `}
                >
                  <p>{country}</p>
                </div>
              );
            })}
          </div>
          {/* mapping of country end */}

          {/* address section */}
          <div className="text-white">
            <p> {data.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
