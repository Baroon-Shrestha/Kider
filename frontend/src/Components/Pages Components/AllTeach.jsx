import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import axios from "axios";
import { BackendUrl } from "../../../Url";

// const reveal = {
//   initial: { opacity: 0, y: 100 },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 1, staggerChildren: 0.5 },
//   },
// };

export default function AllTeach() {
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

  return (
    <>
      <motion.div
        // variants={reveal}
        // initial="initial"
        // whileInView="animate"
        // viewport={{ once: true }}
        className="mb-20"
      >
        <motion.div className="flex flex-col items-center justify-center mb-10">
          <div className="title">Teachers</div>
          <div className="w-1/2 text-center content text-secondary">
            Join our passionate team of educators dedicated to nurturing student
            growth through innovative teaching and personalized support.
          </div>
        </motion.div>
        <div className="flex flex-wrap justify-evenly items-center grid-cols-3 gap-10 px-8">
          {data.map((item) => (
            <motion.div
              // variants={reveal}
              key={item._id}
              className="relative w-[305px] h-[535px] group"
            >
              <img
                src={item.prof[0].url}
                alt="Teacher"
                className="rounded-full bg-red-400 w-full"
              />

              <div className="border-[12px] transition-all duration-500 ease-in-out group-hover:border-orange-600 border-[#FFF5F3] bg-white absolute -bottom-0 -right-16 rounded-full flex flex-col gap-2 items-center justify-center w-60 h-60">
                <div className="text-2xl sec-title">
                  {item.firstName}&nbsp;
                  {item.lastName}
                </div>
                <div className="content text-secondary">{item.profession}</div>
                <div className="flex gap-2 items-center text-2xl">
                  <div className="text-primary bg-">
                    <FaFacebook />
                  </div>
                  <div className="text-primary">
                    <FaInstagram />
                  </div>
                  <div className="text-primary">
                    <FaTwitter />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
