import axios from "axios";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { BackendUrl } from "../../../Url";

const reveal = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};

export default function Appointment() {
  const [guardianEmail, setGuardianEmail] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("guardianEmail", guardianEmail);
    formData.append("guardianName", guardianName);
    formData.append("childName", childName);
    formData.append("childAge", childAge);
    formData.append("message", message);

    try {
      const res = await axios.post(`${BackendUrl}/kider/send-mail`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success === true) {
        alert("Mail sent successfully");
        setGuardianEmail("");
        setGuardianName("");
        setChildName("");
        setChildAge("");
        setMessage("");
      } else {
        alert("Error sending mail");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error sending mail");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.div
        variants={reveal}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-2 bg-[#FFF5F3] mx-8 rounded-md mb-20"
      >
        <div className="flex flex-col gap-4 p-12 justify-center">
          <div className="text-[2.5rem] title">Make Appointment</div>
          <div className="">
            <form action="" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 ">
                  <div className="w-full">
                    <input
                      type="email"
                      id="guardianEmail"
                      name="guardianEmail"
                      value={guardianEmail}
                      onChange={(e) => setGuardianEmail(e.target.value)}
                      className="w-full py-4 px-3 border rounded-md"
                      placeholder="Guardian Email"
                      required
                    />
                  </div>
                  <div className="w-full ">
                    <input
                      type="text"
                      id="guardianName"
                      name="guardianName"
                      value={guardianName}
                      onChange={(e) => setGuardianName(e.target.value)}
                      className="w-full py-4 px-3 border rounded-md"
                      placeholder="Guardian Name"
                      required
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-full">
                    <input
                      type="text"
                      id="childName"
                      name="childName"
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
                      className="w-full py-4 px-3 border rounded-md"
                      placeholder="Child Name"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="number"
                      id="childAge"
                      name="childAge"
                      value={childAge}
                      onChange={(e) => setChildAge(e.target.value)}
                      className="w-full py-4 px-3 border rounded-md"
                      placeholder="Child Age"
                      required
                    />
                  </div>
                </div>
                <div className="w-full">
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full py-4 px-3 border rounded-md"
                    placeholder="Message"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="mt-4">
                <div className="bg-primary text-white text-center text-2xl font-bold rounded-xl py-3 px-6">
                  {isLoading ? "Submitting..." : "Submit"}
                </div>
              </button>
            </form>
          </div>
        </div>
        <div className="h-[490px] w-full">
          <img
            src="./appointment.jpg"
            alt="Appointment"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
      </motion.div>
    </>
  );
}
