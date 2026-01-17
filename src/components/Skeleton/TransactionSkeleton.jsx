import React from "react";

const TransactionSkeleton = ({ length }) => {
  let numberOfCard = Array.from({ length: length }, (_, index) => index + 1);

  return (
    <div className="grid grid-cols-1 gap-4 w-full">
      {numberOfCard.map((n) => (
        <div
          key={n}
          className="bg-white dark:bg-gray-800 p-5 lg:px-8 lg:py-4 rounded-2xl border border-black/5 lg:grid lg:grid-cols-4 lg:items-center flex flex-col gap-4 animate-pulse"
        >
          {/* Skeleton Type & Date */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-2xl"></div>
            <div className="space-y-2">
              <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>

          {/* Skeleton Category */}
          <div className="flex justify-center">
            <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          </div>

          {/* Skeleton Amount */}
          <div className="flex justify-center">
            <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
          </div>

          {/* Skeleton Actions */}
          <div className="flex justify-center gap-3">
            <div className="w-9 h-9 bg-gray-100 dark:bg-gray-700 rounded-xl"></div>
            <div className="w-9 h-9 bg-gray-100 dark:bg-gray-700 rounded-xl"></div>
            <div className="w-9 h-9 bg-gray-100 dark:bg-gray-700 rounded-xl"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionSkeleton;
