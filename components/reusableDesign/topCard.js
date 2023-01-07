const TopCard = ({ title, heading, content }) => {
    return (
      <>
        <div className="flex items-center gap-5 text-black-200">
          <div className="w-full flex flex-col gap-10">
            <p className="text-subText-100 font-medium text-2xl mb-4">/{title}</p>
            <p className="text-3xl md:text-5xl lg:text-6xl 2xl:text-6xl font-black mb-4 w-full lg:w-3/5">{heading}</p>
            <p className="font-semibold text-xl mb-10 w-full text-gray-200">{content}</p>
          </div>
        </div>
      </>
    );
  };
  
  export default TopCard;