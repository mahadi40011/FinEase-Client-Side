import React, { useState } from "react";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router";

const UpdateTransaction = () => {
  const transaction = useLoaderData();
  const axiosInstance = useAxios();
  const navigate = useNavigate();

  const [type, setType] = useState(transaction?.type || "");
  const [category, setCategory] = useState(transaction?.category || "");

  const incomeCategories = ["Salary", "Investments", "Gifts", "Other"];
  const expenseCategories = [
    "Food",
    "Travel",
    "Shopping",
    "Utilities",
    "Others",
  ];

  const handleUpdateTransaction = (e) => {
    e.preventDefault();

    const date = e.target.date.value;
    const amount = parseInt(e.target.amount.value);
    const description = e.target.description.value;

    const updatedTransaction = { type, category, date, amount, description };

    axiosInstance
      .patch(`/transaction/update/${transaction?._id}`, updatedTransaction)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Update Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`/details/${transaction?._id}`);
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Update Failed",
          text: err.message,
        });
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 shadow-lg rounded-2xl mt-10 border border-gray-100">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Update Transaction
      </h2>

      <form onSubmit={handleUpdateTransaction} className="space-y-6">
        {/* Type */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <label className="font-medium mb-2 md:mb-0">Type</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="Income"
                checked={type === "Income"}
                onChange={() => {
                  setType("Income");
                  setCategory("");
                }}
                className="radio radio-primary"
              />
              <span>Income</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="Expense"
                checked={type === "Expense"}
                onChange={() => {
                  setType("Expense");
                  setCategory("");
                }}
                className="radio radio-secondary"
              />
              <span>Expense</span>
            </label>
          </div>
        </div>

        {/* Category */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <label className="font-medium mb-2 md:mb-0">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="select select-bordered w-full md:w-2/3 border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-900"
          >
            <option value="" disabled>
              {type ? "Select Category" : "Select Type First"}
            </option>
            {type &&
              (type === "Income" ? incomeCategories : expenseCategories).map(
                (cat, i) => (
                  <option key={i} value={cat}>
                    {cat}
                  </option>
                )
              )}
          </select>
        </div>

        {/* Date */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <label className="font-medium w-40 mb-2 md:mb-0">Date:</label>
          <input
            defaultValue={transaction?.date}
            type="date"
            name="date"
            className="input input-bordered w-full md:w-2/3 border border-gray-300 focus:ring-2 focus:ring-sky-900"
          />
        </div>

        {/* Amount */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <label className="font-medium w-40 mb-2 md:mb-0">Amount:</label>
          <input
            defaultValue={transaction?.amount}
            type="number"
            name="amount"
            placeholder="Enter amount"
            className="input input-bordered w-full md:w-2/3 border border-gray-300 focus:ring-2 focus:ring-sky-900"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <label className="font-medium w-40 mb-2 md:mb-0">Description:</label>
          <input
            defaultValue={transaction?.description}
            type="text"
            name="description"
            placeholder="Short description"
            className="input input-bordered w-full md:w-2/3 border border-gray-300 focus:ring-2 focus:ring-sky-900"
          />
        </div>

        {/* Update Button */}
        <div className="text-end">
          <button
            type="submit"
            className="btn px-8 text-white font-semibold tracking-wide bg-sky-900"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTransaction;
