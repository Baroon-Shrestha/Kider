import React, { useEffect, useState } from "react";
import SideNav from "../../Components/SideNav";
import axios from "axios";
import { BackendUrl } from "../../../Url";

export default function Dashboard() {
  const [totalTeachers, setTotalTeachers] = useState(0);
  const [totalClasses, setTotalClasses] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [teacherResponse, classResponse] = await Promise.all([
          axios.get(`${BackendUrl}/kider/view`),
          axios.get(`${BackendUrl}/kider/viewclass`),
        ]);

        const teachers = teacherResponse.data.view;
        const classes = classResponse.data.view;

        setTotalTeachers(teachers.length);
        setTotalClasses(classes.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <SideNav />
      <div className="ml-[18%] m-14">
        <div className="text-4xl font-bold text-center mb-8">Dashboard</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
            <div className="text-2xl font-semibold">Total Teachers</div>
            <div className="text-4xl font-bold">{totalTeachers}</div>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md text-center">
            <div className="text-2xl font-semibold">Total Classes</div>
            <div className="text-4xl font-bold">{totalClasses}</div>
          </div>
        </div>
      </div>
    </>
  );
}
