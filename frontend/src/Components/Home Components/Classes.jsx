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
        console.log(response.data.view);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <motion.div
        variants={scrollReveal}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="px-8 bg-slte-400 mb-20"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="text-center text-3xl title">School classes</div>
          <div className="text-center w-1/2 content text-secondary">
            Our school offers engaging and diverse classes, fostering a love for
            learning and helping each child reach their full potential.
          </div>
        </div>
        <div className="flex flex-wrap mt-10">
          {data.map((item) => (
            <motion.div
              key={item._id}
              className="flex flex-col items-center p-4 rounded-lg transition-all delay-[.25s] ease-in-out gap-4 w-[530px] md:w-1/3 hover:-translate-y-4 group"
            >
              <div className="relative -mb-9">
                <img
                  src={item.image[0].url}
                  alt={item.title}
                  className="w-60 h-60 rounded-full object-cover border-[16px] border-[#FFF4F2] mx-auto"
                />
              </div>
              <div className="bg-[#FFF4F2] p-8 flex  flex-col items-center gap-4 rounded-lg">
                <div className="text-2xl font-bold text-gray-800 text-center hover:text-primary  title">
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
                        {item.firstName}
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
                      {item.timeFrom} - {item.timeTo} AM
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-yellow-500 font-bold border-t-4 border-yellow-500 w-[115px]">
                      Capacity:
                    </div>
                    <div className="text-gray-700">{item.capacity} Kids</div>
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
