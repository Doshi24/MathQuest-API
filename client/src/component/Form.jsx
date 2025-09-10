import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../config";

const Form = ({ setPlayerName }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${url}savename`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Name saved successfully!");
        setPlayerName(formData.name); 
        setFormData({ name: "" });
        navigate("/game"); 
      } else {
        alert("Error!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error occurred!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Enter Your Name</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          autoComplete="off"
          className="border px-3 py-2 rounded"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
