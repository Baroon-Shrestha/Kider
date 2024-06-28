import React, { useState } from "react";
import SideNav from "../SideNav";
import axios from "axios";
import { BackendUrl } from "../../../Url";
import { Navigate, useNavigate } from "react-router-dom";

export default function ReviewForm() {
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("description", description);
      formData.append("createdBy", createdBy);

      const response = await axios.post(
        `${BackendUrl}/kider/send-review`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        setIsLoading(false);
        alert("review added successfully!");
        setDescription("");
        setCreatedBy("");
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

  return (
    <div>
      <div className="max-w-4xl mx-auto p-4 my-10">
        <h2 className="text-2xl font-bold mb-8 title text-primary">
          Add New Review
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <label className="text-lg font-medium">Enter your name</label>
              <input
                type="text"
                id="createdBy"
                name="createdBy"
                value={createdBy}
                onChange={(e) => setCreatedBy(e.target.value)}
                placeholder="Enter your name"
                required
                className="border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <label className="text-lg font-medium">Enter your review</label>
            <textarea
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter the description"
              required
              className="border h-40 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-md mt-4"
          >
            {isLoading ? "Submitting" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
