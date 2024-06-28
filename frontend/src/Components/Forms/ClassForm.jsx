import React, { useEffect, useState } from "react";
import axios from "axios";
import { BackendUrl } from "../../../Url";
import SideNav from "../SideNav";
import { useNavigate } from "react-router-dom";

export const ClassForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [teachers, setTeachers] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    teacher: "", // Change to string for storing teacherId
    price: "",
    ageFrom: "",
    ageTo: "",
    timeFrom: "",
    timeTo: "",
    capacity: "",
  });

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const res = await axios.get(`${BackendUrl}/kider/view`);
        setTeachers(res.data.view);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTeachers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsloading(true);
      const formDataUpload = new FormData();
      formDataUpload.append("title", formData.title);
      formDataUpload.append("teacher", formData.teacher);
      formDataUpload.append("price", formData.price);
      formDataUpload.append("ageFrom", formData.ageFrom);
      formDataUpload.append("ageTo", formData.ageTo);
      formDataUpload.append("timeFrom", formData.timeFrom);
      formDataUpload.append("timeTo", formData.timeTo);
      formDataUpload.append("capacity", formData.capacity);
      formDataUpload.append("image", imageFile);

      const response = await axios.post(
        `${BackendUrl}/kider/addclass`,
        formDataUpload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        setIsloading(false);
        alert("Class added successfully!");
        setFormData({
          title: "",
          teacher: "",
          price: "",
          ageFrom: "",
          ageTo: "",
          timeFrom: "",
          timeTo: "",
          capacity: "",
        });
        setImageFile(null);
        navigate(-1);
      } else {
        alert("Failed to add class. Please try again.");
        setIsloading(false);
      }
    } catch (error) {
      console.error("Error adding class:", error);
      alert(
        "An error occurred while adding the class. Please try again later."
      );
    }
  };

  return (
    <div>
      <SideNav />
      <div className="max-w-4xl mx-auto p-4 mt-14">
        <h2 className="text-2xl font-bold mb-8 title text-primary">
          Add New Class
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-lg font-medium">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title"
              required
              className="border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium">Teacher</label>
            <select
              id="teacher"
              name="teacher"
              value={formData.teacher}
              onChange={handleChange}
              required
              className="border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select teacher</option>
              {teachers.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.firstName} {item.lastName}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col">
              <label className="text-lg font-medium">Age From</label>
              <input
                type="number"
                id="ageFrom"
                name="ageFrom"
                value={formData.ageFrom}
                onChange={handleChange}
                placeholder="Enter minimum age"
                required
                className="border rounded-md w-[300px] px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-medium">Age To</label>
              <input
                type="number"
                id="ageTo"
                name="ageTo"
                value={formData.ageTo}
                onChange={handleChange}
                placeholder="Enter maximum age"
                required
                className="border rounded-md w-[300px] px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col">
              <label className="text-lg font-medium">Time From</label>
              <input
                type="number"
                id="timeFrom"
                name="timeFrom"
                value={formData.timeFrom}
                onChange={handleChange}
                placeholder="Enter start time"
                required
                className="border rounded-md w-[300px] px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-medium">Time To</label>
              <input
                type="number"
                id="timeTo"
                name="timeTo"
                value={formData.timeTo}
                onChange={handleChange}
                placeholder="Enter end time"
                required
                className="border rounded-md w-[300px] px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col">
              <label className="text-lg font-medium">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price"
                required
                className="border  rounded-md w-[300px] px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-medium">Capacity</label>
              <input
                type="number"
                id="capacity"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
                placeholder="Enter capacity"
                required
                className="border rounded-md px-3 w-[300px] py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
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
            className="bg-primary  text-white px-4 py-2 rounded-md mt-4"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClassForm;
