import Image from "next/image";

const AccordianDesign = ({ title, body, id, openId, setOpenId }) => {
  const isOpen = openId === id;
  const handleOpen = () => {
    if (isOpen) {
      setOpenId(0);
    } else {
      setOpenId(id);
    }
  };
  return (
    <div className=" flex flex-col gap-14  text-white" onClick={handleOpen}>
      <div className="flex justify-between items-center">
        <h1
          className="text-2xl md:text-3xl lg:text-3xl xl:text-3xl 
          font-black"
        >
          {title}
        </h1>
        <span className="text-4xl font-normal" onClick={handleOpen}>
          <Image
            src={
              isOpen
                ? "https://res.cloudinary.com/dhxccll9e/image/upload/v1663057301/homePage/accordain/Vector_xbbphe.svg"
                : "https://res.cloudinary.com/dhxccll9e/image/upload/v1663057521/homePage/accordain/addsvg_t2ww7j.svg"
            }
            alt={"accord"}
            height={32}
            width={32}
          ></Image>
        </span>
      </div>
      {isOpen && (
        <div className="text-xl">
          <p
            className="text-black-600
          "
            onClick={handleOpen}
          >
            {" "}
            {body}
          </p>
        </div>
      )}
      <hr className="border-gray-100 " />
    </div>
  );
};

export default AccordianDesign;
