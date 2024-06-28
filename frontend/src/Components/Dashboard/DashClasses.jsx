import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BackendUrl } from "../../../Url";

const scrollReveal = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, staggerChildren: 0.5 },
  },
};

export default function Classes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BackendUrl}/kider/viewclass`);
        setData(response.data.view);
        console(response.data.view);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const res = await axios.delete(`${BackendUrl}/kider/deleteclass/${id}`);
    if (res.data.success) {
      alert("Class deleted successfully");
      window.location.reload();
    } else {
      alert("Error Occured! Cannot delete class");
    }
  };

  const handleUpdate = (id) => {
    console.log(`Update class with ID: ${id}`);
  };

  return (
    <>
      <div className="flex flex-wrap mt-10">
        {data.map((item) => (
          <motion.div
            key={item._id}
            className="flex flex-col items-center p-4 rounded-lg gap-4 w-[530px] md:w-1/2 lg:w-1/2 "
          >
            <div className="relative -mb-9">
              <img
                src={item.image[0].url}
                alt={item.title}
                className="w-60 h-60 rounded-full object-cover border-[16px] border-[#FFF4F2] mx-auto"
              />
            </div>
            <div className="bg-[#FFF4F2] p-8 flex flex-col items-center gap-4 rounded-lg">
              <div className="text-2xl font-bold text-gray-800 text-center title">
                {item.title}
              </div>
              <div className="flex items-center w-full">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      alt={item.teacher}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg font-bold capitalize text-orange-500">
                      {item.teacher}
                    </div>
                    <div className="text-gray-500">Teacher</div>
                  </div>
                </div>
                <div className="ml-auto text-xl px-4 py-2 bg-primary text-white rounded-full">
                  $ {item.price}
                </div>
              </div>
              <div className="flex justify-between w-full gap-2">
                <div className="text-center">
                  <div className="text-orange-500 font-bold border-t-4 border-orange-500 w-[115px]">
                    Age:
                  </div>
                  <div className="text-gray-700">
                    {item.ageFrom} - {item.ageTo} Years
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-green-500 font-bold border-t-4 border-green-500 w-[115px]">
                    Time:
                  </div>
                  <div className="text-gray-700">
                    {item.timeFrom} - {item.ageTo}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-500 font-bold border-t-4 border-yellow-500 w-[115px]">
                    Capacity:
                  </div>
                  <div className="text-gray-700">{item.capacity} Kids</div>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleUpdate(item._id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Update
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
