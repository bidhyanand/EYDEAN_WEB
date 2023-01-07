import SeoOptimization from "../reusableDesign/SeoOptimization";

const AboutModal = ({ children }) => {
  return (
    <div className="main-container bg-black-200 text-white">
      <SeoOptimization
      title={"Eydean | About Us"}
      contentDescription={"This is the aboutUs component of the eydean website in this component all the details about the company , the employees of the company and the details about the team member,founderand CEO of the company"}
      contentTitle={"Eydean - AboutUs"}
      />
      <div className="content-container">{children}</div>
    </div>
  );
};

export default AboutModal;
