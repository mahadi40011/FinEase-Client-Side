import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[88vh] bg-white">
      <div className="relative w-24 h-24 flex justify-center items-center">
        <div className="absolute w-6 h-6 bg-sky-500 rounded-full animate-ping"></div>
        <div className="absolute w-24 h-24 border-4 border-sky-400 border-dashed rounded-full animate-spin [animation-duration:2s]"></div>
        <div className="absolute w-16 h-16 border-4 border-purple-500 border-dashed rounded-full animate-spin [animation-duration:3s]"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
