import React from "react";
import { useLoaderData } from "react-router";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import {
  ArrowUpCircle,
  ArrowDownCircle,
  Calendar,
  Tag,
} from "lucide-react";

const TransactionDetails = () => {
  const transaction = useLoaderData();

  if (!transaction) return <LoadingSpinner />;

  return (
    <div className="max-w-3xl mx-auto mt-12 p-8 bg-linear-to-br from-white to-gray-50 shadow-xl rounded-3xl border border-gray-200">
      <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
        Transaction Details
      </h2>

      <div className="space-y-6">
        <div className="flex flex-col space-y-6 bg-gray-100 p-4 w-full rounded-xl border border-gray-100">
          {/* Type */}
          <div className="flex justify-between items-center">
            <span className="text-gray-700 text-xl font-semibold flex items-center gap-2">
              {transaction.type === "Income" ? (
                <ArrowUpCircle className="text-green-500" size={22} />
              ) : (
                <ArrowDownCircle className="text-red-500" size={22} />
              )}
              Type
            </span>
            <span
              className={`mt-1 px-4 py-1.5 rounded-full font-semibold text-white shadow-sm ${
                transaction.type === "Income" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {transaction.type}
            </span>
          </div>

          {/* Date */}
          <div className="flex justify-between items-center">
            <span className="text-gray-500 font-medium flex items-center gap-2">
              <Calendar size={18} className="text-blue-500" />
              Date
            </span>
            <span className="text-gray-800 font-semibold">
              {transaction.date}
            </span>
          </div>

          {/* Category */}
          <div className="flex justify-between items-center">
            <span className="text-gray-500 font-medium flex items-center gap-2">
              <Tag size={18} className="text-yellow-500" />
              Category
            </span>
            <span className="text-gray-800 font-semibold">
              {transaction.category}
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          {/* Amount */}
          <div className="flex flex-col bg-gray-100 p-4 w-full rounded-xl border border-gray-100">
            <span className="text-gray-500 font-medium mb-1">Amount</span>
            <span
              className={`text-2xl font-bold ${
                transaction.type === "Income"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {transaction.amount} TK
            </span>
          </div>

          {/* Total of category */}
          <div className="flex flex-col items-start p-4 w-full bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
            <span className="text-gray-500 font-medium">
              Total Amount of this category
            </span>
            <span className="mt-1 text-gray-900 font-bold text-lg">
              $12,500 demo
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
          <span className="text-gray-500 font-medium">Description</span>
          <p className="mt-1 text-gray-700 leading-relaxed">
            {transaction.description || "No description provided."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
