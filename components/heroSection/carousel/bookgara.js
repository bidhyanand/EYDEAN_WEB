import MainView from "../../reusableDesign/MainView";

const BookgaraSlide = () => {
  return (
    <div className="bg-bookgara w-full bg-cover text-black-200 top-0 h-[50vh] lg:h-[100vh] mt-52 lg:-mt-28 2xl:-mt-40 ">
      <div className="pt-0 lg:pt-40 2xl:pt-80">
        <div className="position-relative pt-0 lg:pt-44">
          <MainView
            title={"Work 02 - Bookgara"}
            description="One app for everyday needs"
            control={false}
          />
        </div>
      </div>
    </div>
  );
};

export default BookgaraSlide;
