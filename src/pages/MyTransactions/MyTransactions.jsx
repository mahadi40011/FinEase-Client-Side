import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Swal from "sweetalert2";

const MyTransactions = () => {
  const { user, loading } = useAuth();
  const axiosInstance = useAxios();
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.get(`/my-transactions?email=${user?.email}`).then((data) => {
      const allTransaction = data.data;
      setTransactions(allTransaction);
    });
  }, [axiosInstance, user]);

  if (loading) return <LoadingSpinner />;

  const handleUpdate = (id) => console.log("Update:", id);
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
        axiosInstance.delete(`/transaction/${id}`).then((res) => {
          console.log(res.data);
          const remaining = transactions.filter((tx) => tx._id !== id);
          setTransactions(remaining);
        });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  const handleViewDetails = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        All Transactions
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {transactions.map((tx) => (
          <div
            key={tx._id}
            className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition duration-300"
          >
            {/* Type & Date */}
            <div className="flex justify-between items-center mb-4">
              <span
                className={`px-3 py-1 rounded-full text-white font-semibold text-sm ${
                  tx.type === "Income" ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {tx.type}
              </span>
              <span className="text-gray-500 font-medium text-sm">
                📅 {tx.date}
              </span>
            </div>

            {/* Category */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-medium">Category: </p>
              <p className="text-gray-900 font-bold text-lg ">{tx.category}</p>
            </div>

            {/* Amount */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-medium">Amount: </p>
              <p className="text-gray-900 font-bold text-lg ">
                {tx.amount.toLocaleString()}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap  gap-2 mt-2">
              <button
                onClick={() => handleUpdate(tx._id)}
                className="px-3 py-1 rounded text-white text-sm font-medium bg-sky-900 hover:bg-sky-700 transition duration-200 cursor-pointer"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(tx._id)}
                className="px-3 py-1 rounded text-white text-sm font-medium bg-sky-900 hover:bg-sky-700 transition duration-200 cursor-pointer"
              >
                Delete
              </button>
              <button
                onClick={() => handleViewDetails(tx._id)}
                className="px-3 py-1 rounded text-white text-sm font-medium bg-sky-900 hover:bg-sky-700 transition duration-200 cursor-pointer"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTransactions;
