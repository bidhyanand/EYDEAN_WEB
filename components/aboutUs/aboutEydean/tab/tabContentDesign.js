import Image from "next/image";

const TabContentDesign = ({ title, body, id, openId, setOpenId }) => {
  const isOpen = openId === id;
  const handleOpen = () => {
    if (isOpen) {
      setOpenId(0);
    } else {
      setOpenId(id);
    }
  };
  return (
    <div className=" flex flex-col gap-8 pb-10" onClick={handleOpen}>
      <div className="flex justify-between items-center">
        <h1 className="">{title}</h1>
        <span className="text-xl font-normal" onClick={handleOpen}>
          <Image
            src={
              isOpen
                ? "https://res.cloudinary.com/dhxccll9e/image/upload/v1663057301/homePage/accordain/Vector_xbbphe.svg"
                : "https://res.cloudinary.com/dhxccll9e/image/upload/v1663057521/homePage/accordain/addsvg_t2ww7j.svg"
            }
            alt={"accord"}
            height={22}
            width={22}
          ></Image>
        </span>
      </div>
      {isOpen && (
        <div className="">
          <p className="text-gray-700" onClick={handleOpen}>
            {body}
          </p>
        </div>
      )}
    </div>
  );
};

export default TabContentDesign;
