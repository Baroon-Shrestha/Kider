import React from "react";
import SideNav from "../../Components/SideNav";
import DashClasses from "../../Components/Dashboard/DashClasses";
import { Link } from "react-router-dom";
import DashReviews from "../../Components/Dashboard/DashReviews";

export default function DashboardReview() {
  return (
    <>
      <SideNav />

      <div className="ml-[18%] m-14">
        <div className="flex p-4 items-center justify-center">
          <div className="title ">Reviews</div>
        </div>
        <DashReviews />
      </div>
    </>
  );
}
