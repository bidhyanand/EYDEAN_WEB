import Image from "next/image";
import { useRouter } from "next/router";
import content from "./content.json";
const Content = () => {
  const router = useRouter();
  return (
    <div className=" bg-black-200 text-subText-100 ">
      <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center ">
        {content.contents.map((items, index) => {
          return (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? "bg-black-300 " : "bg-black-100 "
              } flex justify-around h-[25vh] px-2`}
              onClick={() => {
                router.push(items.path);
              }}
            >
              <p className="flex items-end pb-10 cursor-pointer  ">
                {items.title}
              </p>
              <div className="flex items-end pb-5">
                <Image
                  src={items.image}
                  alt="industries"
                  width={80}
                  height={80}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
