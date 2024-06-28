import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BackendUrl } from "../../../Url";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
Link;
const reveal = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function AllReview() {
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

  return (
    <motion.div
      variants={reveal}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="my-10"
    >
      <div className="flex items-center flex-col">
        <div className="capitalize title">our clients say!</div>
        <div className="text-secondary content w-full text-center">
          Discover what parents and students have to say about their
          transformative experiences at our school.
        </div>
      </div>
      <Link to="/review-form">
        <div className="bg-primary px-6 py-3 sec-title text-white rounded-xl w-1/6">
          Send your review
        </div>
      </Link>
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
          </div>
        ))}
      </div>
    </motion.div>
  );
}
