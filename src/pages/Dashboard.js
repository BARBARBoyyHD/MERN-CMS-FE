import React from "react";
import ShowAllContent from "../component/content/showAllContent";
import NavbarAdmin from "../component/navbar/NavbarAdmin";

const Dashboard = () => {
  return (
    <div className="bg-gray-200">
      <header>
        <NavbarAdmin />
      </header>
      <div className="mt-[70px]">
        <ShowAllContent />
      </div>
    </div>
  );
};

export default Dashboard;
