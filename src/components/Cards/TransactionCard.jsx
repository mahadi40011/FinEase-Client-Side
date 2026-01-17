import React from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  Calendar,
  Edit3,
  Eye,
  Trash2,
} from "lucide-react";

const TransactionCard = ({ transactions, setTransactions }) => {
  const navigate = useNavigate();
  const axiosInstance = useAxios();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0c4a6e",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete",
      customClass: { popup: "rounded-3xl" },
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance.delete(`/transaction/${id}`).then(() => {
          setTransactions(transactions.filter((tx) => tx._id !== id));
          Swal.fire("Deleted!", "Record has been removed.", "success");
        });
      }
    });
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      {transactions.map((tx) => (
        <div
          key={tx._id}
          className="group bg-white dark:bg-gray-800 p-5 lg:px-8 lg:py-4 rounded-2xl border border-black/5 hover:border-sky-500/30 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 grid grid-cols-2 gap-y-5 lg:grid-cols-4 lg:items-center "
        >
          {/* Type & Date */}
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <div
              className={`p-3 rounded-2xl hidden sm:block ${
                tx.type === "Income"
                  ? "bg-emerald-100 text-emerald-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {tx.type === "Income" ? (
                <ArrowUpCircle size={24} />
              ) : (
                <ArrowDownCircle size={24} />
              )}
            </div>
            <div>
              <p className="font-bold text-gray-900 dark:text-white">
                {tx.type}
              </p>
              <p className="text-xs text-gray-400 flex items-center gap-1">
                <Calendar size={12} /> {new Date(tx.date).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Category */}
          <span className="px-3 py-1 w-fit h-fit mt-3 lg:mt-0 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs font-bold uppercase tracking-widest mx-auto">
            {tx.category}
          </span>

          {/* Amount */}
          <div
            className={`text-center font-black text-lg ${
              tx.type === "Income" ? "text-emerald-600" : "text-red-600"
            }`}
          >
            {tx.type === "Income" ? "+" : "-"} {tx.amount.toLocaleString()} TK
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-2">
            <button
              onClick={() =>
                navigate(`/dashboard/my-transactions/details/${tx._id}`)
              }
              className="p-2 hover:bg-sky-50 text-sky-600 rounded-xl transition"
              title="View"
            >
              <Eye size={20} />
            </button>
            <button
              onClick={() => navigate(`/update/${tx._id}`)}
              className="p-2 hover:bg-amber-50 text-amber-600 rounded-xl transition"
              title="Edit"
            >
              <Edit3 size={20} />
            </button>
            <button
              onClick={() => handleDelete(tx._id)}
              className="p-2 hover:bg-red-50 text-red-600 rounded-xl transition"
              title="Delete"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionCard;
