import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";
import { Filter, ChevronDown, ChevronUp, FolderOpen, Plus } from "lucide-react";
import TransactionSkeleton from "../../components/Skeleton/TransactionSkeleton";
import TransactionCard from "../../components/Cards/TransactionCard";

const MyTransactions = () => {
  const { user, loading } = useAuth();
  const axiosInstance = useAxios();
  const [transactions, setTransactions] = useState([]);
  const [loadingTransactions, setLoadingTransactions] = useState(true);
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("desc");

  const fetchTransactions = (sortField = "", sortOrder = "desc") => {
    if (!user?.email) return;
    setLoadingTransactions(true);
    let url = `/my-transactions?email=${user.email}`;
    if (sortField) url += `&sortBy=${sortField}&order=${sortOrder}`;

    axiosInstance
      .get(url)
      .then((res) => setTransactions(res.data))
      .finally(() => setLoadingTransactions(false));
  };

  useEffect(() => {
    fetchTransactions();
  }, [user]);

  const handleSortChange = (e) => {
    const field = e.target.value;
    setSortBy(field);
    fetchTransactions(field, order);
  };

  const toggleOrder = () => {
    const newOrder = order === "desc" ? "asc" : "desc";
    setOrder(newOrder);
    if (sortBy) fetchTransactions(sortBy, newOrder);
  };

  if (loading) return <LoadingSpinner />;

  // calculation
  const totalIncome = transactions
    .filter((t) => t.type === "Income")
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = transactions
    .filter((t) => t.type === "Expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="w-full mx-auto pt-4 md:pt-8 text-natural font-poppins">
      {/* 1. Header & Quick Stats */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold ">Financial Ledger</h1>
          <p className="text-gray-500 mt-1">
            Review and manage your transaction history
          </p>
        </div>

        <div className="flex gap-4 w-full md:w-auto">
          <div className="flex-1 md:flex-none bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-900">
            <p className=" text-xs sm:text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase sm:tracking-wider font-inter">
              Total Income
            </p>
            <p className="text-lg sm:text-xl font-black text-emerald-700 dark:text-emerald-300">
              ৳{totalIncome.toLocaleString()}
            </p>
          </div>
          <div className="flex-1 md:flex-none bg-red-50 dark:bg-red-900/20 p-4 rounded-2xl border border-red-100 dark:border-red-800">
            <p className="text-xs sm:text-xs text-red-600 dark:text-red-400 font-bold uppercase sm:tracking-wider font-inter">
              Total Expense
            </p>
            <p className="text-lg sm:text-xl font-black text-red-700 dark:text-red-300">
              ৳{totalExpense.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* 2. Controls */}
      <div className="bg-app-200 sticky top-17 sm:top-20 z-10 p-4 rounded-xl shadow-xs flex flex-wrap justify-between items-center gap-4 mb-8">
        <div className="flex items-center gap-2 text-natural">
          <Filter size={18} />
          <span className="font-semibold">
            {transactions.length} Transactions
          </span>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-64">
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="w-full py-2 px-4 bg-app-input border border-gray-200 dark:border-gray-500 rounded-xl text-lg focus:outline-none focus:ring-1 focus:ring-sky-700"
          >
            <option value="">Sort By</option>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
          {sortBy && (
            <button
              onClick={toggleOrder}
              className="p-2 bg-sky-900 text-white rounded-xl hover:bg-sky-800 transition shadow-md"
            >
              {order === "desc" ? (
                <ChevronDown size={18} />
              ) : (
                <ChevronUp size={18} />
              )}
            </button>
          )}
        </div>
      </div>

      {/* 3. Transactions Table/Cards */}
      {transactions.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 px-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700  transition-all">
          <div className="bg-app-100 p-6 rounded-full shadow-sm mb-6 border border-gray-100 dark:border-gray-700 ">
            <FolderOpen size={48} className="text-natural" />
          </div>

          <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-2">
            No Transactions Yet
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-center max-w-xs mb-8 italic">
            It looks like you haven't added any financial records. Start
            tracking your money today!
          </p>

          <Link
            to="/dashboard/add-transaction"
            className="btn bg-sky-700 hover:bg-sky-900 text-white border-none px-8 rounded-2xl flex items-center gap-2 transition-all transform hover:scale-105"
          >
            <Plus size={18} />
            Add First Transaction
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-2">
          {/* Desktop Table Header (Hidden on Mobile) */}
          <div className="hidden lg:grid grid-cols-4 px-8 py-4 bg-white dark:bg-gray-700 rounded-2xl text-sm font-bold text-natural">
            <span>Type & Date</span>
            <span className="text-center">Category</span>
            <span className="text-center">Amount</span>
            <span className="text-center">Actions</span>
          </div>

          {/* Transaction Items */}
          {loadingTransactions ? (
            <TransactionSkeleton length={transactions.length} />
          ) : (
            <TransactionCard
              transactions={transactions}
              setTransactions={setTransactions}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default MyTransactions;
