import React from "react";
import Banner from "../../components/Home/Banner/Banner";
import Overview from "../../components/Home/Overview/Overview";
import BudgetingTips from "../../components/BudgetingTips/BudgetingTips";
import FinancialPlanning from "../../components/FinancialPlanning/FinancialPlanning";
import Features from "../../components/Home/Features/Features";

const Home = () => {
  return (
    <div className="container px-6 md:px-12 lg:px-20 py-10 space-y-20">
      <Banner />

      <Overview />

      <Features/>

      <BudgetingTips />

      <FinancialPlanning />
    </div>
  );
};

export default Home;
