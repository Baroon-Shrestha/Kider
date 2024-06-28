import React from "react";
import SideNav from "../../Components/SideNav";
import DashTeachers from "../../Components/Dashboard/DashTeachers";
import { Link } from "react-router-dom";

export default function DashTeacher() {
  return (
    <>
      <SideNav />

      <div className="ml-[18%] m-14">
        <div className="flex p-4 items-center justify-between">
          <div className="title">Teachers</div>
          <Link to="/teach-form">
            <div className="text-xl bg-primary font-bold text-white px-8 py-4 rounded-lg">
              Add Teachers
            </div>
          </Link>
        </div>
        <DashTeachers />
      </div>
    </>
  );
}
