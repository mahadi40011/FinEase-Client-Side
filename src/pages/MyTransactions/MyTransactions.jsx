import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";
import Swal from "sweetalert2";

const MyTransactions = () => {
  const { user, loading } = useAuth();
  const axiosInstance = useAxios();
  const [transactions, setTransactions] = useState([]);
  const [loadingTransactions, setLoadingTransactions] = useState(true);

  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("desc");

  const navigate = useNavigate();

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
    fetchTransactions(); // initial load
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

  const handleUpdate = (id) => {
    navigate(`/update/${id}`)
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance.delete(`/transaction/${id}`).then(() => {
          const remaining = transactions.filter((tx) => tx._id !== id);
          setTransactions(remaining);
          Swal.fire("Deleted!", "Transaction has been deleted.", "success");
        });
      }
    });
  };

  const handleViewDetails = (id) => {
    navigate(`/details/${id}`);
  };

  if (loading || loadingTransactions) return <LoadingSpinner />;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">All Transactions</h1>

      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl">({transactions.length}) Transactions found</h2>

        {/* Sort Dropdown + Order Toggle */}
        <div className="flex items-center gap-2">
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="select select-ghost w-28 sm:w-40 border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-sky-900"
          >
            <option value="">-- Sort By --</option>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
          {sortBy && (
            <button
              onClick={toggleOrder}
              className="px-2 py-1 bg-sky-900 text-white rounded hover:bg-sky-700 transition"
            >
              {order === "desc" ? "↓" : "↑"}
            </button>
          )}
        </div>
      </div>

      {transactions.length === 0 ? (
        <p className="text-center mt-10">No transactions found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transactions.map((tx) => (
            <div
              key={tx._id}
              className="shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-white font-semibold text-sm ${
                    tx.type === "Income" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {tx.type}
                </span>
                <span className="text-gray-500 font-medium text-sm">
                  📅 {tx.date ? new Date(tx.date).toLocaleDateString() : "N/A"}
                </span>
              </div>

              <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-medium">Category:</p>
                <p className="font-bold text-lg">{tx.category}</p>
              </div>

              <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-medium">Amount:</p>
                <p className="font-bold text-lg">
                  {tx.amount.toLocaleString()}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                <button
                  onClick={() => handleUpdate(tx._id)}
                  className="px-3 py-1 rounded text-white text-sm font-medium bg-sky-900 hover:bg-sky-700 transition duration-200"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(tx._id)}
                  className="px-3 py-1 rounded text-white text-sm font-medium bg-sky-900 hover:bg-sky-700 transition duration-200"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleViewDetails(tx._id)}
                  className="px-3 py-1 rounded text-white text-sm font-medium bg-sky-900 hover:bg-sky-700 transition duration-200"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyTransactions;
