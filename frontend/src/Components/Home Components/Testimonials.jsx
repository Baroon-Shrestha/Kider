import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BackendUrl } from "../../../Url";
import { Link } from "react-router-dom";

const reveal = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function Testimonials() {
  const [newdata, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BackendUrl}/kider/view-review`);
        console.log(response.data.view);
        setData(response.data.view.slice(0, 3));
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
    >
      <div className="flex items-center flex-col">
        <div className="capitalize title">our clients say!</div>
        <div className="text-secondary content w-1/2 text-center">
          Discover what parents and students have to say about their
          transformative experiences at our school.
        </div>
      </div>
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
      <div className="flex items-center justify-center mb-10 gap-6 -mt-4">
        <Link to="/review-form">
          <div className="bg-primary px-6 py-3 sec-title text-white rounded-lg shadow-black shadow-2xl">
            Send your review
          </div>
        </Link>
        <Link to="/allreview">
          <div className="bg-primary px-6 py-3 sec-title text-white rounded-lg shadow-black shadow-2xl">
            view reviews
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
