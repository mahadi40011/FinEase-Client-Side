import { ShieldCheck } from "lucide-react";
import { useState } from "react";

const EmergencyFundCalc = () => {
  const [expense, setExpense] = useState("");
  const [months, setMonths] = useState(6);

  return (
    <div className="space-y-5 animate-in fade-in duration-500">
      <h3 className="text-xl sm:text-2xl font-bold flex items-center justify-center gap-2">
        <ShieldCheck className="text-sky-600" /> Emergency Fund
      </h3>
      <div>
        <label className="text-sm sm:text-base font-medium">
          Your Monthly Expense (৳)
        </label>
        <input
          type="number"
          placeholder="e.g. 2000"
          onChange={(e) => setExpense(e.target.value)}
          className="w-full px-4 py-3 mt-1 rounded-lg bg-app-100 focus:outline-none focus:ring-2 focus:ring-sky-700 text-natural text-lg font-inter font-medium"
        />
      </div>

      <div className="text-sm px-1">
        <label className="text-sm sm:text-base font-medium">
          Coverage: <b>{months} Months</b>
        </label>
        <input
          type="range"
          min="1"
          max="12"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
          className="range range-xs text-sky-700 mt-1 mb-5 w-full"
        />
      </div>

      <div className="bg-sky-700 text-white p-6 rounded-2xl text-center">
        <p className="text-sm uppercase tracking-widest opacity-90">
          Total Backup Recommended
        </p>
        <h2 className="text-3xl font-bold mt-2">
          ৳ {(expense * months).toFixed(2)}
        </h2>
      </div>
    </div>
  );
};

export default EmergencyFundCalc;
