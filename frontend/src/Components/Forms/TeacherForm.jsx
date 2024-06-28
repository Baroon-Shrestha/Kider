import React, { useState } from "react";
import SideNav from "../SideNav";
import axios from "axios";
import { BackendUrl } from "../../../Url";
import { Navigate, useNavigate } from "react-router-dom";

export default function TeacherForm() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profession, setProfession] = useState("");
  const [prof, setProf] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("profession", profession);
      formData.append("prof", prof);

      const response = await axios.post(`${BackendUrl}/kider/add`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        setIsLoading(false);
        alert("Teacher added successfully!");
        setFirstName("");
        setLastName("");
        setProfession("");
        setProf(null);
        navigate(-1);
      } else {
        alert("Error Occured! Failed to add teacher.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error adding teacher:", error);
      alert(
        "An error occurred while adding the teacher. Please try again later."
      );
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProf(file);
  };

  return (
    <div>
      <SideNav />
      <div className="max-w-4xl mx-auto p-4 mt-32">
        <h2 className="text-2xl font-bold mb-8 title text-primary">
          Add New Teacher
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-lg font-medium">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter First Name"
              required
              className="border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter Last Name"
              required
              className="border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium">Profession</label>
            <input
              type="text"
              id="profession"
              name="profession"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              placeholder="Enter your profession"
              required
              className="border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium">Upload Image</label>
            <input
              type="file"
              id="imageFile"
              name="image"
              onChange={handleImageChange}
              accept=".png, .jpg, .jpeg, .webp"
              className="border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
          >
            {isLoading ? "Submitting" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
