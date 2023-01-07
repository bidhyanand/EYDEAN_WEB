import Image from "next/image";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  return (
    <>
      <div className="hidden md:flex lg:flex-start ">
        <Image
          src={
            "https://res.cloudinary.com/dhxccll9e/image/upload/v1662527035/Logos/eydean_ipnnrk.svg"
          }
          height={"36px"}
          width={"156px"}
          alt="eydean"
          className="cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        />
      </div>
      <div
        className="flex justify-end 
        "
        onClick={() => {
          history.back();
        }}
      >
        <Image
          src="https://res.cloudinary.com/dhxccll9e/image/upload/v1662527035/Logos/close_vtovn1.svg"
          height={"136px"}
          width={"36px"}
          alt="close"
          className="cursor-pointer  "
        />
      </div>
    </>
  );
};

export default Header;
