import React, { useEffect, useState } from "react";
import { FaWallet, FaArrowDown, FaArrowUp } from "react-icons/fa";
import useAxios from "../../../hooks/useAxios";
import useAuth from "../../../hooks/useAuth";

const Overview = () => {
  const axiosInstance = useAxios();
  const { user, loading } = useAuth();
  const [overview, setOverview] = useState({});
  const [loadingDB, setLoadingDB] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    axiosInstance
      .get(`/my-overview?email=${user.email}`)
      .then(({ data }) => {
        const calculated = data.reduce(
          (acc, { type, amount }) => {
            const key = type.toLowerCase();
            if (acc[key] !== undefined) acc[key] += amount;
            acc.balance = acc.income - acc.expense;
            return acc;
          },
          { balance: 0, income: 0, expense: 0 }
        );

        setOverview(calculated);
        setLoadingDB(false);
      })
      .catch((err) => console.error("Error fetching overview:", err));
  }, [axiosInstance, user?.email]);

  return (
    <section className="font-inter text-natural">
      <div className="text-center font-poppins mb-8">
        <h2 className="text-2xl  font-semibold">Financial Overview</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm md:text-base">
          "Keep track of your money so your money can take care of you."
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Total Balance */}
        <div className="bg-app-200 shadow-md rounded-2xl p-8 hover:shadow-lg transition">
          <FaWallet className="text-3xl text-blue-600 mx-auto mb-3" />
          <h3 className="text-lg font-medium ">Total Balance</h3>
          {loading && loadingDB ? (
            <span className="loading loading-dots loading-xl"></span>
          ) : (
            <p className="text-2xl font-bold  mt-1">
              ৳ {overview?.balance?.toLocaleString()}
            </p>
          )}
        </div>

        {/* Income */}
        <div className="bg-app-200 shadow-md rounded-2xl p-8 hover:shadow-lg transition">
          <FaArrowUp className="text-3xl text-green-600 mx-auto mb-3" />
          <h3 className="text-lg font-medium ">Total Income</h3>
          {loading && loadingDB ? (
            <span className="loading loading-dots loading-xl"></span>
          ) : (
            <p className="text-2xl font-bold  mt-1">
              ৳ {overview?.income?.toLocaleString()}
            </p>
          )}
        </div>

        {/* Expense */}
        <div className="bg-app-200 shadow-md rounded-2xl p-8 hover:shadow-lg transition">
          <FaArrowDown className="text-3xl text-red-600 mx-auto mb-3" />
          <h3 className="text-lg font-medium ">Total Expense</h3>
          {loading && loadingDB ? (
            <span className="loading loading-dots loading-xl"></span>
          ) : (
            <p className="text-2xl font-bold  mt-1">
              ৳ {overview?.expense?.toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Overview;
