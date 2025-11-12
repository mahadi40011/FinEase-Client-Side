import React from 'react';

const FinancialPlanning = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row gap-10 justify-center items-center max-w-[1000px] mx-auto">
        <h2 className="text-2xl text-center font-semibold w-full ">
          Why Financial Planning Matters 🧭
        </h2>
        <p className="border w-full border-gray-100 p-8 rounded-2xl shadow-md leading-relaxed">
          Financial planning helps you stay prepared for both expected and
          unexpected events. It ensures stability, helps you achieve life goals,
          and gives you peace of mind knowing you are in control of your
          finances. Whether you’re saving for education, retirement, or your
          dream home — good planning makes all the difference.
        </p>
      </section>
    </div>
  );
};

export default FinancialPlanning;