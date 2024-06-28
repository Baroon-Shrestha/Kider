import React from "react";
import SideNav from "../../Components/SideNav";
import DashClasses from "../../Components/Dashboard/DashClasses";
import { Link } from "react-router-dom";

export default function DashClass() {
  return (
    <>
      <SideNav />

      <div className="ml-[18%] m-14">
        <div className="flex p-4 items-center justify-between">
          <div className="title">Classess</div>
          <Link to="/form">
            <div className="text-xl bg-primary font-bold text-white px-8 py-4 rounded-lg">
              Add Classes
            </div>
          </Link>
        </div>
        <DashClasses />
      </div>
    </>
  );
}
