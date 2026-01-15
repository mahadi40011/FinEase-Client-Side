import { FaUsers } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { IoStar } from "react-icons/io5";
import Heading from "../../Shared/Heading/Heading";

const Statistics = () => {
  return (
    <section className="text-natural font-poppins container mx-auto px-4">
      <Heading
        title={"Our Growth"}
        subtitle={"Trusted by thousands of users worldwide."}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Active Users */}
        <div className="bg-app-200 shadow-sm  rounded-2xl p-7 text-center hover:scale-103 transition-transform duration-300">
          <div className="bg-blue-100  w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaUsers className="text-3xl text-blue-600 " />
          </div>
          <p className="text-sm font-medium uppercase tracking-wider">
            Active Users
          </p>
          <h3 className="text-4xl font-bold mt-2">50K+</h3>
        </div>

        {/* Total Transactions */}
        <div className="bg-app-200 shadow-sm  rounded-2xl p-7 text-center hover:scale-103 transition-transform duration-300">
          <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <GrTransaction className="text-3xl text-emerald-600" />
          </div>
          <p className="text-sm font-medium uppercase tracking-wider">
            Total Transactions
          </p>
          <h3 className="text-4xl font-bold mt-2">৳ 1.2M</h3>
        </div>

        {/* User Rating */}
        <div className="bg-app-200 shadow-sm  rounded-2xl p-7 text-center hover:scale-103 transition-transform duration-300">
          <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <IoStar className="text-3xl text-amber-600" />
          </div>
          <p className="text-sm font-medium uppercase tracking-wider">
            User Rating
          </p>
          <h3 className="text-4xl font-bold mt-2">4.9/5</h3>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
