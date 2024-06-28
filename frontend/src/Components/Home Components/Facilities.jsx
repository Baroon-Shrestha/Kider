import { motion } from "framer-motion";
import React from "react";
import { FaBus, FaFutbol, FaHome, FaChalkboardTeacher } from "react-icons/fa";

const scrollReveal = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, staggerChildren: 0.4 },
  },
};

const facilityData = [
  {
    id: 1,
    logo: <FaBus />,
    title: "School Bus",
    description:
      "Our reliable school bus service ensures your child's safe and timely arrival to and from school every day.",
  },
  {
    id: 2,
    logo: <FaFutbol />,
    title: "Playground",
    description:
      "Our well-equipped playground offers a fun and secure environment for children to engage in physical activities and develop social skills.",
  },
  {
    id: 3,
    logo: <FaHome />,
    title: "Healthy Canteen",
    description:
      "Our healthy canteen provides nutritious and delicious meal options to support your child's growth and well-being.",
  },
  {
    id: 4,
    logo: <FaChalkboardTeacher />,
    title: "Positive Learning",
    description:
      "Our positive learning environment fosters curiosity and encourages students to reach their full potential.",
  },
];

export default function Facilities() {
  return (
    <div className="my-20">
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={scrollReveal}
        viewport={{ once: true }}
        className="flex flex-col gap-8"
      >
        <div className="flex flex-col justify-between items-center">
          <motion.div className="text-4xl title">School Facilities</motion.div>
          <motion.div className="w-1/2 text-center content text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error hic
            sed nostrum natus eum ipsum amet ea animi, commodi quaerat?
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8 gap-4">
          {facilityData.map((facility) => (
            <motion.div
              key={facility.id}
              className="flex flex-col items-center group"
              variants={scrollReveal}
            >
              <div className="p-6 text-3xl text-primary rounded-full bg-[#FFEFEC] transition-all duration-500 ease-in-out group-hover:bg-orange-400 group-hover:text-white">
                {facility.logo}
              </div>
              <div className="flex flex-col items-center justify-center bg-[#FFEFEC] p-4 rounded-full py-12 px-8 transition-all duration-500 ease-in-out group-hover:bg-orange-400 group-hover:text-white">
                <div className="font-bold sec-title text-primary group-hover:text-white">
                  {facility.title}
                </div>
                <div className="text-center content text-secondary group-hover:text-white transition-all duration-500 ease-in-out">
                  {facility.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
