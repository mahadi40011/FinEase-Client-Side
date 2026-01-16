import React from "react";

const Heading = ({title, subtitle}) => {
  return (
    <div className="mb-2 sm:mb-4 lg:mb-6 text-center ">
      <h2 className="text-3xl md:text-4xl font-semibold font-poppins text-natural">
        {title}
      </h2>
      <p className="text-natural font-poppins mt-1 font-medium">
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
