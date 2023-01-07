const Content = () => {
  return (
    <div
      className="flex flex-col    
      pb-28 md:pb-32 lg:pb-48 2xl:pb-32
      px-10 md:px-7 lg:px-40 2xl:px-96
      gap-14 md:gap-14 lg:gap-14 2xl:gap-14
      pt-20 md:pt-16 lg:pt-28 2xl:pt-16
    "
    >
      <div className="text-base font-normal w-[40vw] ">
        Eydean provides analytical and technical support in the field of
        agriculture based on resources and requirements. Our agricultural robots
        can perform essential farming activities like the planting of crops more
        often and more efficiently than human workers. We also hold a technical
        vision and deep-learning algorithms to process data captured by
        software-based technology to analyze land and crop health.
        <br />
        <br />
        Similarly, our machine learning models track and forecast different
        environmental influences on agricultural productivity are being
        developed such as weather changes.
      </div>

      <div
        className="
        text-3xl md:text-5x1 lg:text-5xl  2xl:text-[3.75vw]
        w-[80vw] md:w-[80vw] lg:w-[50vw] 2xl:w-[40vw]
        font-bold md:font-bold lg:font-bold 2xl:font-bold 
        "
      >
        {`How agriculture is evolving with Eydean’s innovation?`}
      </div>
      <div className="text-base font-normal w-[40vw] ">
        {` Eydean offers revolutionary and effective technology for agriculture
        around the globe i.e. AI technology in farming as more creative methods
        of farming are needed because of population growth and land scarcity. We
        are helping the agricultural sector to develop with the following
        assistance. The smart farming practices that are around the globe are
        waiting to be brought at our native land fingertip away, through
        Eydean's constant approaches in the field. Right now, we are :-`}
        <br />
        <br />
        Helping analyze agricultural data
        <br />
        <br />
        Helping to improve harvest quality and accuracy
        <br />
        <br />
        Tackling the labour challenge
      </div>
      <div>
        <p className="text-5xl font-bold ">We take pride in our</p>
        <br />
        <br />
        <p className="text-2xl font-semibold">
          Delivirances
          <br />
          <br />
          Optimization Efficiency
          <br />
          <br />
          Professional COnsultation
        </p>
      </div>
    </div>
  );
};

export default Content;
