const CareerVideo = () => {
  return (
    <div className="bg-black-100 rounded-xl h-[27vh] md:h-[40vh] lg:h-[70vh] 2xl:h-[60vh] my-20 lg:my-20">
      <iframe
        className="w-full h-full rounded-xl"
        src="https://www.youtube-nocookie.com/embed/FMrtSHAAPhM"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default CareerVideo;
