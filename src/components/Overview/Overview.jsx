import React, { useEffect, useState } from "react";
import { FaWallet, FaArrowDown, FaArrowUp } from "react-icons/fa";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Overview = () => {
  const axiosInstance = useAxios();
  const { user, loading } = useAuth();
  const [overview, setOverview] = useState({});
  const [loadingDB, setLoadingDB] = useState(true);

  useEffect(() => {
    axiosInstance.get(`/my-overview?email=${user?.email}`).then((res) => {
      const data = res.data;

      const calculated = data.reduce(
        (acc, item) => {
          if (item.type.toLowerCase() === "income") {
            acc.income += item.amount;
          } else if (item.type.toLowerCase() === "expense") {
            acc.expense += item.amount;
          }
          acc.balance = acc.income - acc.expense;
          return acc;
        },
        { balance: 0, income: 0, expense: 0 }
      );

      setOverview(calculated);
      setLoadingDB(false);
    });
  }, [axiosInstance, user]);

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <section>
        <h2 className="text-2xl font-semibold text-center mb-8">
          Financial Overview
        </h2>
        {loadingDB ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Total Balance */}
            <div className="border border-gray-100 shadow-md rounded-2xl p-8 hover:shadow-lg transition">
              <FaWallet className="text-3xl text-blue-600 mx-auto mb-3" />
              <h3 className="text-lg font-medium ">Total Balance</h3>
              <p className="text-2xl font-bold  mt-1">
                ৳ {overview?.balance.toLocaleString()}
              </p>
            </div>

            {/* Income */}
            <div className="border border-gray-100 shadow-md rounded-2xl p-8 hover:shadow-lg transition">
              <FaArrowUp className="text-3xl text-green-600 mx-auto mb-3" />
              <h3 className="text-lg font-medium ">Total Income</h3>
              <p className="text-2xl font-bold  mt-1">
                ৳ {overview?.income.toLocaleString()}
              </p>
            </div>

            {/* Expense */}
            <div className="border border-gray-100 shadow-md rounded-2xl p-8 hover:shadow-lg transition">
              <FaArrowDown className="text-3xl text-red-600 mx-auto mb-3" />
              <h3 className="text-lg font-medium ">Total Expense</h3>
              <p className="text-2xl font-bold  mt-1">
                ৳ {overview?.expense.toLocaleString()}
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Overview;
