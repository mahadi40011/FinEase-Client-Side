import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const AddTransaction = () => {
  const { user, loading } = useAuth();
  const [category, setCategory] = useState("");

  if (loading) return <LoadingSpinner />;

  const { displayName, email } = user;

  const handleAddTransaction = (e) => {
    e.preventDefault();
    const type = e.target.type.value;
    const user_name = user?.displayName;
    const user_email = user?.email;
    const date = e.target.date.value;
    const amount = e.target.amount.value;
    const description = e.target.description.value;

    console.log({ type, user_name, user_email, category, date, amount, description });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10 border border-gray-100">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Add New Transaction
      </h2>

      <form onSubmit={handleAddTransaction} className="space-y-6">
        {/* Type */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <label className="text-gray-700 font-medium w-40">Type:</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                value="income"
                className="radio radio-primary"
              />
              <span>Income</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                value="expense"
                className="radio radio-secondary"
              />
              <span>Expense</span>
            </label>
          </div>
        </div>

        {/* User Name */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <label className="text-gray-700 font-medium w-40">User Name:</label>
          <input
            type="text"
            readOnly
            defaultValue={displayName}
            className="input input-bordered w-full md:w-2/3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-900 bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* User Email */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <label className="text-gray-700 font-medium w-40">User Email:</label>
          <input
            type="email"
            readOnly
            defaultValue={email}
            className="input input-bordered w-full md:w-2/3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-900 bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Category */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <label className="text-gray-700 font-medium w-40">Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-full md:w-2/3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-900"
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Shopping">Shopping</option>
            <option value="Salary">Salary</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {/* Date */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <label className="text-gray-700 font-medium w-40">Date:</label>
          <input
            type="date"
            name="date"
            className="input input-bordered w-full md:w-2/3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-900"
          />
        </div>

        {/* Amount */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <label className="text-gray-700 font-medium w-40">Amount:</label>
          <input
            type="number"
            name="amount"
            placeholder="Enter amount"
            className="input input-bordered w-full md:w-2/3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-900"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <label className="text-gray-700 font-medium w-40">Description:</label>
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
