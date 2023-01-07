import Content from "./content/Content";
import MainView from "../reusableDesign/MainView";
import SeoOptimization from "../reusableDesign/SeoOptimization";

const Industries = () => {
  return (
    <>
      <SeoOptimization
        title={"EYDEAN | INDUSTRIES"}
        contentDescription={
          "This is the industries section of the website in the page all the eydean features and support for the community and nation is fuilfilled by the eydean team"
        }
        contentTitle={"Eydean - Industries"}
      />
      <div className="">
        <MainView
          title="/ How we work"
          description="Enterprise AI Solutions Transforming Industries"
          // subTitle="Request a demo"
        />
        <Content />
      </div>
    </>
  );
};

export default Industries;
