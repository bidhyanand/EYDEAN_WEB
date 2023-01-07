import Image from "next/image";
// import ellipse from '../../../public/ellipse.svg'

const Ellipse = () => {
  return (
    <div>
      <div className="flex  ">
        <Image
          src={
            "https://res.cloudinary.com/dhxccll9e/image/upload/v1666072723/homePage/heroSection/Group_120_prwzcd.svg"
          }
          height={1242}
          width={1308}
          alt="circle"
        />
      </div>
    </div>
  );
};

export default Ellipse;
