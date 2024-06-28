import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BackendUrl } from "../../../Url";
import { MdDelete } from "react-icons/md";

const reveal = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function DashReviews() {
  const [newdata, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BackendUrl}/kider/view-review`);
        console.log(response.data.view);
        setData(response.data.view);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    alert(`recevied ${id}`);
    const res = await axios.delete(`${BackendUrl}/kider/delete-review/${id}`);
    if (res.data.success) {
      alert("Review deleted successfully");
      window.location.reload();
    } else {
      alert("error occured! canonot delete the review");
    }
  };

  return (
    <motion.div
      variants={reveal}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-8 mb-14 text-black">
        {newdata.map((item) => (
          <div
            key={item._id}
            className="bg-[#FFF5F3] p-12 rounded-lg shadow-gray-400 shadow-2xl"
          >
            <div className="text-[1.5rem] content text-secondary">
              {item.description}
            </div>
            <div className="flex justify-end items-center gap-4">
              <div className="text-2xl text-black">
                <div className="sec-title">{item.createdBy}</div>
                <div className="content text-secondary">guardian</div>
              </div>
            </div>
            <div className="bg-gay-200 flex items-center justify-end">
              <button
                onClick={() => {
                  handleDelete(item._id);
                }}
              >
                <div className="text-3xl text-red-600 border p-2 rounded-full bg-red-300">
                  <MdDelete />
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
