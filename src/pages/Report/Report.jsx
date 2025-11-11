import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Report = () => {
  const axiosInstance = useAxios();
  const { user } = useAuth();
  const [transactions, setTransactions] = useState([]);
  const [loadingDB, setLoadingDB] = useState(true);

  useEffect(() => {
    axiosInstance.get(`/my-transactions?email=${user?.email}`).then((res) => {
      setTransactions(res.data);
      setLoadingDB(false);
    });
  }, [axiosInstance, user]);

  if (loadingDB) return <LoadingSpinner />;

  // সমস্ত মাস (January → December)
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // মাসভিত্তিক income-expense হিসাব করা
  const processData = (data) => {
    // শুরুতে ১২ মাসের খালি ডেটা তৈরি
    const monthly = months.map((month) => ({
      month,
      income: 0,
      expense: 0,
    }));

    // ডেটা থেকে প্রতিটি ট্রান্স্যাকশন যোগ করা
    data.forEach((item) => {
      const monthIndex = new Date(item.date).getMonth();
      if (item.type === "Income") monthly[monthIndex].income += item.amount;
      else if (item.type === "Expense")
        monthly[monthIndex].expense += item.amount;
    });

    return monthly;
  };

  const chartData = processData(transactions);

  return (
    <div className="max-w-5xl mx-auto mt-12 p-10 bg-linear-to-br from-white to-blue-50 rounded-3xl shadow-lg border border-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Monthly Income vs Expense (2025)
      </h2>

      <ResponsiveContainer width="100%" height={420}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 15, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis dataKey="month" tick={{ fill: "#374151", fontSize: 12 }} />
          <YAxis
            tick={{ fill: "#374151", fontSize: 12 }}
            tickFormatter={(value) => `৳${value.toLocaleString()}`}
          />
          <Tooltip
            formatter={(value) => [`৳${value.toLocaleString()}`, "Amount"]}
            labelStyle={{ color: "#111827", fontWeight: "600" }}
            contentStyle={{
              backgroundColor: "#F9FAFB",
              borderRadius: "10px",
              border: "1px solid #E5E7EB",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          />
          <Legend verticalAlign="top" height={36} />
          <Bar
            dataKey="income"
            fill="#10B981"
            name="Income"
            radius={[8, 8, 0, 0]}
            barSize={35}
          />
          <Bar
            dataKey="expense"
            fill="#EF4444"
            name="Expense"
            radius={[8, 8, 0, 0]}
            barSize={35}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Report;
