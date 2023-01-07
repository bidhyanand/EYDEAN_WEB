import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../../styles/slick.module.css";

const SlickSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => <div className={styles.dotbars}></div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="flex flex-col justify-around items-center mt-28 mb-10">
      <div className="text-white py-14 w-3/5 text-lg lg:text-xl">
        <p className="w-full md:w-full lg:w-1/2 2xl:w-1/2 pl-0 2xl:pl-10 ">
          Automate your AI lifecycle with Adeyeltas SaaS platform. Build
          powerful models and increase the efficiency.
        </p>
      </div>
    </div>
  );
};

export default SlickSlide;
