import axios from "axios";
import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelopeOpen, FaPhoneAlt } from "react-icons/fa";
import { BackendUrl } from "../../../Url";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [name, SetName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);

    try {
      const res = await axios.post(`${BackendUrl}/kider/contact`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success === true) {
        alert("Mail sent successfully");
        setEmail("");
        SetName("");
        setSubject("");
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
      <div className="px-8">
        <div className="flex items-center flex-col gap-4">
          <div className="title">Get In Touch</div>
          <div className="content text-secondary w-1/2 text-center mb-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            eum, nam iusto nihil saepe corrupti fugit perspiciatis odit ipsam
            id.
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between mb-20 px-20">
          <div className="flex items-center flex-col gap-4">
            <div className="w-[75px] text-3xl h-[75px] text-primary bg-[#FFF5F3] flex items-center justify-center rounded-full">
              <FaMapMarkerAlt />
            </div>
            <div>123 Street, New York, USA</div>
          </div>
          <div className="flex items-center flex-col gap-4">
            <div className="w-[75px] text-3xl h-[75px] text-primary bg-[#FFF5F3] flex items-center justify-center rounded-full">
              <FaEnvelopeOpen />
            </div>
            <div>info@example.com</div>
          </div>
          <div className="flex items-center flex-col gap-4">
            <div className="w-[75px] text-3xl h-[75px] text-primary bg-[#FFF5F3] flex items-center justify-center rounded-full">
              <FaPhoneAlt />
            </div>
            <div>+012 345 6789</div>
          </div>
        </div>
        <div className="grid grid-cols-2 bg-[#FFF5F3] mx-8 rounded-md mb-20">
          <div className="flex flex-col gap-4 p-12 justify-center">
            <div className="text-[2.5rem] title">Contact Us</div>
            <div className="">
              <form action="" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4 ">
                    <div className="w-full">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full py-4 px-3 border rounded-md"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="w-full ">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => SetName(e.target.value)}
                        className="w-full py-4 px-3 border rounded-md"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full py-4 px-3 border rounded-md"
                      placeholder="Subject"
                      required
                    />
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
        </div>
      </div>
    </>
  );
}
