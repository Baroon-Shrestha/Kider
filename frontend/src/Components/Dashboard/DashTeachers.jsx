import React, { useEffect, useState } from "react";
import { BackendUrl } from "../../../Url";
import axios from "axios";

export default function DashTeachers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BackendUrl}/kider/view`);
        setData(res.data.view);
        console.log(res.data.view);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const deleteTeacher = async (id) => {
    const res = await axios.delete(`${BackendUrl}/kider/delete/${id}`);
    if (res.data.success) {
      alert("Teacher deleted succesfully");
      window.location.reload();
    } else {
      alert(`Error Occured! Cannot remove the teacher`);
    }
  };

  const updateTeacher = async (id) => {
    alert(`received teacher's ID : ${id}`);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {data.map((item) => (
          <div key={item._id} className="p-4 bg-white rounded-lg shadow-md">
            <div className="flex justify-center">
              <img
                src={item.prof[0].url}
                alt={`${item.firstName} ${item.lastName}`}
                className="w-44 h-44 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center mt-4">
              <div className="text-xl font-bold text-gray-800">
                {item.firstName}&nbsp;{item.lastName}
              </div>
              <div className="text-gray-600">{item.profession}</div>
            </div>
            <div className="flex  text-white justify-center gap-4 mt-4">
              <button
                className="bg-red-400 px-4 py-2 rounded-md"
                onClick={() => {
                  deleteTeacher(item._id);
                }}
              >
                Delete
              </button>
              <button
                className="bg-blue-400 px-4 py-2 rounded-md"
                onClick={() => {
                  updateTeacher(item._id);
                }}
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
