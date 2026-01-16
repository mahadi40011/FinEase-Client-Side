import { Landmark } from "lucide-react";
import { useState } from "react";

const EMICalc = () => {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");

  const calculateEMI = () => {
    if (!amount || !rate || !time) return "0.00";
    const r = rate / 12 / 100;
    const n = time; 
    const emi = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return isFinite(emi) ? emi.toFixed(2) : "0.00";
  };

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      <h3 className="text-xl sm:text-2xl font-bold flex items-center justify-center gap-2">
        <Landmark className="text-sky-600" /> Loan EMI
      </h3>
      <div className="grid grid-cols-1 gap-3">
        <div>
          <label className="text-sm sm:text-base font-medium">
            Loan Amount (৳)
          </label>
          <input
            type="number"
            placeholder="e.g. 100000"
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-3 mt-1 rounded-lg bg-app-100 focus:outline-none focus:ring-2 focus:ring-sky-700 text-natural text-lg font-inter font-medium"
          />
        </div>
        <div>
          <label className="text-sm sm:text-base font-medium">
            Annual Interest Rate (%)
          </label>
          <input
            type="number"
            placeholder="e.g. 5"
            onChange={(e) => setRate(e.target.value)}
            className="w-full px-4 py-3 mt-1 rounded-lg bg-app-100 focus:outline-none focus:ring-2 focus:ring-sky-700 text-natural text-lg font-inter font-medium"
          />
        </div>
        <div>
          <label className="text-sm sm:text-base font-medium">
            Period (Months)
          </label>
          <input
            type="number"
            placeholder="e.g. 12"
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-4 py-3 mt-1 rounded-lg bg-app-100 focus:outline-none focus:ring-2 focus:ring-sky-700 text-natural text-lg font-inter font-medium"
          />
        </div>
      </div>

      <div className="bg-sky-700 text-white p-6 rounded-2xl text-center">
        <p className="text-sm uppercase tracking-widest opacity-90">
          Estimated Monthly EMI
        </p>
        <h2 className="text-3xl font-bold mt-2">৳ {calculateEMI()}</h2>
      </div>
    </div>
  );
};

export default EMICalc;
