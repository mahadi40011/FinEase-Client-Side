import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";

const AddTransaction = () => {
  const { user, loading } = useAuth();
  const axiosInstance = useAxios();
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");

  if (loading) return <LoadingSpinner />;

  const incomeCategories = ["Salary", "Investments", "Gifts", "Other"];
  const expenseCategories = [
    "Food",
    "Travel",
    "Shopping",
    "Utilities",
    "Others",
  ];

  const handleAddTransaction = (e) => {
    e.preventDefault();

    const name = user?.displayName;
    const email = user?.email;
    const date = e.target.date.value;
    const amount = parseInt(e.target.amount.value);
    const description = e.target.description.value;

    const newTransaction = {
      type,
      category,
      name,
      email,
      date,
      amount,
      description,
    };

    axiosInstance.post("/add-transaction", newTransaction).then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Transaction Added Successful",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 shadow-lg rounded-2xl mt-10 border border-gray-100">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Add New Transaction
      </h2>

      <form onSubmit={handleAddTransaction} className="space-y-6">
        {/* Type (Radio Buttons) */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <label className="block font-medium mb-2 md:mb-0">Type</label>
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

        {/* Category (Dropdown) */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <label className="block font-medium  mb-2 md:mb-0">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="select select-bordered w-full  md:w-2/3 border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-900"
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

        {/* User Name */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <label className=" font-medium w-40 mb-2 md:mb-0">User Name:</label>
          <input
            type="text"
            readOnly
            defaultValue={user?.displayName}
            className="input input-bordered w-full md:w-2/3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-900  cursor-not-allowed"
          />
        </div>

        {/* User Email */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <label className=" font-medium w-40 mb-2 md:mb-0">User Email:</label>
          <input
            type="email"
            readOnly
            defaultValue={user?.email}
            className="input input-bordered w-full md:w-2/3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-900  cursor-not-allowed"
          />
        </div>

        {/* Date */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <label className=" font-medium w-40 mb-2 md:mb-0">Date:</label>
          <input
            type="date"
            name="date"
            required
            className="input input-bordered w-full md:w-2/3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-900"
          />
        </div>

        {/* Amount */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <label className=" font-medium w-40 mb-2 md:mb-0">Amount:</label>
          <input
            type="number"
            name="amount"
            required
            placeholder="Enter amount"
            className="input input-bordered w-full md:w-2/3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-900"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <label className=" font-medium w-40 mb-2 md:mb-0">Description:</label>
          <input
            type="text"
            name="description"
            placeholder="Short description"
            className="input input-bordered w-full md:w-2/3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-900"
          />
        </div>

        {/* Add Button */}
        <div className="text-end md:text-end">
          <button
            type="submit"
            className="btn px-8 text-white font-semibold tracking-wide bg-sky-900 "
          >
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
