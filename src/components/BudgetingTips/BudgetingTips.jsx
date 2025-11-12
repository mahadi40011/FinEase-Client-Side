import React from 'react';

const BudgetingTips = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row-reverse gap-10 justify-center items-center max-w-[1000px] mx-auto">
        <h2 className="text-2xl text-center font-semibold w-full">Budgeting Tips 💡</h2>
        <ul className="list-disc list-inside w-full space-y-2 border border-gray-100 shadow-sm p-8 rounded-2xl">
          <li>
            Track your expenses regularly to understand your spending habits.
          </li>
          <li>Set monthly saving goals and stick to them.</li>
          <li>Avoid unnecessary debt and spend within your means.</li>
          <li>Use digital tools to automate your budgeting process.</li>
        </ul>
      </section>
    </div>
  );
};

export default BudgetingTips;