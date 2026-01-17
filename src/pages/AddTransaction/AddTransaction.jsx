import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import {
  PlusCircle,
  Wallet,
  Calendar,
  Tag,
  FileText,
  CreditCard,
  ShieldAlert,
  Repeat,
  Hash,
} from "lucide-react";

const AddTransaction = () => {
  const { user, loading } = useAuth();
  const axiosInstance = useAxios();
  const [category, setCategory] = useState("");
  const [type, setType] = useState("Income");

  if (loading) return <LoadingSpinner />;

  const incomeCategories = [
    "Salary",
    "Investments",
    "Gifts",
    "Business",
    "Freelance",
    "Other",
  ];
  const expenseCategories = [
    "Food",
    "Travel",
    "Shopping",
    "Utilities",
    "Health",
    "Rent",
    "Education",
    "Others",
  ];

  const handleAddTransaction = (e) => {
    e.preventDefault();
    const form = e.target;

    const newTransaction = {
      type,
      category,
      name: user?.displayName,
      email: user?.email,
      date: form.date.value,
      amount: parseFloat(form.amount.value),
      description: form.description.value,
      paymentMethod: form.method.value,
      priority: form.priority.value,
      tags: form.tags.value.split(",").map((tag) => tag.trim()),
      isRecurring: form.recurring.checked,
      timestamp: new Date(),
    };

    axiosInstance.post("/add-transaction", newTransaction).then(() => {
      Swal.fire({
        icon: "success",
        title: "Record Saved!",
        text: "Transaction has been added to your ledger.",
        showConfirmButton: false,
        timer: 2000,
        customClass: { popup: "rounded-[2rem]" },
      });
      form.reset();
      setCategory("");
    });
  };

  return (
    <div className="w-full mx-auto pt-4 md:pt-8">
      <div className="bg-app-200 rounded-3xl font-poppins text-natural overflow-hidden">
        {/* Header Section */}
        <div className="bg-sky-700 dark:bg-sky-900 p-10 text-white text-center relative">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold flex items-center justify-center gap-3">
              <PlusCircle size={32} /> New Transaction
            </h2>
            <p className="text-sky-100 mt-2 opacity-80">
              Detailed financial logging for better insights
            </p>
          </div>
        </div>

        <form onSubmit={handleAddTransaction} className="p-8 md:p-12 space-y-8">
          {/* 1. Transaction Type Toggle */}
          <div className="flex p-1 bg-app-100 rounded-2xl w-full max-w-md mx-auto">
            <button
              type="button"
              onClick={() => {
                setType("Income");
                setCategory("");
              }}
              className={`flex-1 py-3 rounded-xl transition-all font-bold flex items-center justify-center gap-2 ${
                type === "Income"
                  ? "bg-white dark:bg-gray-600 text-green-600 shadow-sm"
                  : "text-natural"
              }`}
            >
              <Wallet size={18} /> Income
            </button>
            <button
              type="button"
              onClick={() => {
                setType("Expense");
                setCategory("");
              }}
              className={`flex-1 py-3 rounded-xl transition-all font-bold flex items-center justify-center gap-2 ${
                type === "Expense"
                  ? "bg-white dark:bg-gray-600 text-red-500 shadow-sm"
                  : "text-natural"
              }`}
            >
              <Tag size={18} /> Expense
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Amount Field */}
            <div className="space-y-1">
              <label className="text-sm font-bold text-natural flex items-center gap-2 ml-1">
                Amount (৳) *
              </label>
              <input
                name="amount"
                type="number"
                required
                placeholder="0.00"
                className="w-full py-3 px-4 bg-app-input border border-gray-200 dark:border-gray-500 rounded-xl text-lg font-semibold focus:outline-none focus:ring-1 focus:ring-sky-700"
              />
            </div>

            {/* Category Dropdown */}
            <div className="space-y-1">
              <label className="text-sm font-bold text-natural flex items-center gap-2 ml-1">
                Category *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="w-full py-3 px-4 bg-app-input border border-gray-200 dark:border-gray-500 rounded-xl text-lg focus:outline-none focus:ring-1 focus:ring-sky-700"
              >
                <option value="" disabled>
                  Select category
                </option>
                {(type === "Income" ? incomeCategories : expenseCategories).map(
                  (cat, i) => (
                    <option key={i} value={cat}>
                      {cat}
                    </option>
                  )
                )}
              </select>
            </div>

            {/* Payment Method */}
            <div className="space-y-1">
              <label className="text-sm font-bold text-natural flex items-center gap-2 ml-1">
                <CreditCard size={14} /> Payment Method
              </label>
              <select
                name="method"
                className="w-full py-3 px-4 bg-app-input border border-gray-200 dark:border-gray-500 rounded-xl text-lg focus:outline-none focus:ring-1 focus:ring-sky-700"
              >
                <option value="Cash">Cash</option>
                <option value="bKash">bKash</option>
                <option value="Nagad">Nagad</option>
                <option value="Bank">Bank Account</option>
                <option value="Card">Credit Card</option>
              </select>
            </div>

            {/* Date Field */}
            <div className="space-y-1">
              <label className="text-sm font-bold text-natural flex items-center gap-2 ml-1">
                <Calendar size={14} /> Date
              </label>
              <input
                name="date"
                type="date"
                defaultValue={new Date().toISOString().split("T")[0]}
                className="w-full py-3 px-4 bg-app-input border border-gray-200 dark:border-gray-500 rounded-xl text-lg focus:outline-none focus:ring-1 focus:ring-sky-700"
              />
            </div>

            {/* Importance/Priority */}
            <div className="space-y-1">
              <label className="text-sm font-bold text-natural flex items-center gap-2 ml-1">
                <ShieldAlert size={14} /> Importance
              </label>
              <select
                name="priority"
                className="w-full py-3 px-4 bg-app-input border border-gray-200 dark:border-gray-500 rounded-xl text-lg focus:outline-none focus:ring-1 focus:ring-sky-700"
              >
                <option value="Essential">Essential (প্রয়োজনীয়)</option>
                <option value="Want">Want (শখ/বিলাসিতা)</option>
                <option value="Investment">Investment/Saving</option>
              </select>
            </div>

            {/* Tags Input */}
            <div className="space-y-1">
              <label className="text-sm font-bold text-natural flex items-center gap-2 ml-1">
                <Hash size={14} /> Tags (Comma separated)
              </label>
              <input
                name="tags"
                type="text"
                placeholder="office, lunch, eid"
                className="w-full py-3 px-4 bg-app-input border border-gray-200 dark:border-gray-500 rounded-xl text-lg focus:outline-none focus:ring-1 focus:ring-sky-700"
              />
            </div>
          </div>

          {/* Description  */}
          <div className="space-y-1">
            <label className="text-sm font-bold text-natural flex items-center gap-2 ml-1">
              <FileText size={14} /> Detailed Description
            </label>
            <textarea
              name="description"
              rows="5"
              placeholder="Add some notes about this transaction..."
              className="w-full py-3 px-4 bg-app-input border border-gray-200 dark:border-gray-500 rounded-xl text-lg focus:outline-none focus:ring-1 focus:ring-sky-700"
            ></textarea>
          </div>

          {/* Recurring Option */}
          <div className="flex items-center gap-3 ml-1">
            <input
              name="recurring"
              type="checkbox"
              className="checkbox text-white checked:bg-sky-700"
            />
            <div className="flex items-center gap-2">
              <Repeat size={18} className="text-sky-700 dark:text-sky-400" />
              <span className="text-sm font-semibold">
                Mark as Recurring (Repeat every month)
              </span>
            </div>
          </div>

          {/* User Info & Submit */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-200 dark:border-gray-500">
            <div className="text-xs text-gray-400 text-center md:text-left">
              Logging as: <b>{user?.displayName}</b> <br />
              Ref: <b>{user?.email}</b>
            </div>
            <button
              type="submit"
              className="btn bg-sky-700 hover:bg-sky-900 text-white border-none px-12 h-14 rounded-2xl text-lg font-bold w-full md:w-auto shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              Confirm & Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
