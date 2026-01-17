import React from "react";
import Footer from "../components/Shared/Footer/Footer";
import { Outlet } from "react-router";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import DashboardNavbar from "../components/Shared/Navbar/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen">
      <DashboardNavbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 md:ml-64 mt-17 sm:mt-20 min-h-screen bg-app-100">
          <div className="flex flex-col min-h-screen">
            <div className="flex-1 pt-5 px-5">
              <div className="max-w-7xl mx-auto">
                <Outlet />
              </div>
            </div>

            <footer>
              <Footer />
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
