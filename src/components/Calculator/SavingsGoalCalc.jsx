import { PiggyBank } from "lucide-react";
import { useState } from "react";

const SavingsGoalCalc = () => {
  const [goal, setGoal] = useState("");
  const [months, setMonths] = useState("");
  const result =
    goal && months && months > 0 ? (goal / months).toFixed(2) : "0.00";

  return (
    <div className="space-y-5 animate-in fade-in duration-500 font-poppins text-natural">
      <h3 className="text-xl sm:text-2xl font-bold flex items-center justify-center gap-2">
        <PiggyBank className="text-sky-600" /> Savings Goal
      </h3>
      <div className="space-y-4">
        <div>
          <label className="text-sm sm:text-base font-medium">
            Target Amount (৳)
          </label>
          <input
            type="number"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full px-4 py-3 mt-1 rounded-lg bg-app-100 focus:outline-none focus:ring-2 focus:ring-sky-700 text-natural text-lg font-inter font-medium"
            placeholder="e.g. 100000"
          />
        </div>
        <div>
          <label className="text-sm sm:text-base font-medium">Within (Months)</label>
          <input
            type="number"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            className="w-full px-4 py-3 mt-1 rounded-lg bg-app-100 focus:outline-none focus:ring-2 focus:ring-sky-700 text-natural text-lg font-inter font-medium"
            placeholder="e.g. 12"
          />
        </div>
      </div>
      <div className="bg-sky-700 text-white p-6 rounded-2xl text-center">
        <p className="text-sm uppercase tracking-widest opacity-90">
          Monthly Savings Needed
        </p>
        <h2 className="text-3xl font-bold mt-2">৳ {result}</h2>
      </div>
    </div>
  );
};

export default SavingsGoalCalc;
