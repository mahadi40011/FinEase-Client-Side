import React, { useState } from "react";
import Heading from "../../components/Shared/Heading/Heading";
import { Landmark, PiggyBank, ShieldCheck } from "lucide-react";
import SavingsGoalCalc from "../../components/Calculator/SavingsGoalCalc";
import EMICalc from "../../components/Calculator/EMICalc";
import EmergencyFundCalc from "../../components/Calculator/EmergencyFundCalc";

const Calculator = () => {
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem("activeCalcTab") || "savings";
  });

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    localStorage.setItem("activeCalcTab", tabId);
  };

  return (
    <section className="container mx-auto text-natural px-4 pt-10 sm:pt-16 font-poppins ">
      <Heading
        title="Smart Planner"
        subtitle="Calculate your goals and loans with precision."
      />

      {/* Tab Switcher */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 pt-5">
        {[
          {
            id: "savings",
            label: "Savings Goal",
            icon: <PiggyBank size={20} />,
          },
          { id: "emi", label: "Loan EMI", icon: <Landmark size={20} /> },
          {
            id: "emergency",
            label: "Emergency Fund",
            icon: <ShieldCheck size={20} />,
          },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`btn btn-sm md:btn-md lg:btn-lg rounded-xl flex items-center gap-2 transition-all ${
              activeTab === tab.id
                ? "bg-sky-700 text-white border-none"
                : "bg-app-200 text-natural border-none hover:bg-gray-300 dark:hover:text-gray-700"
            }`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* Main Display Card */}
      <div className="max-w-xl mx-auto bg-app-200 p-6 md:p-10 rounded-3xl shadow-sm ">
        {activeTab === "savings" && <SavingsGoalCalc />}
        {activeTab === "emi" && <EMICalc />}
        {activeTab === "emergency" && <EmergencyFundCalc />}
      </div>
    </section>
  );
};

export default Calculator;
