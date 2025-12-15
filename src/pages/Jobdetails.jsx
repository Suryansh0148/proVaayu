import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Jobdetails() {
  const { id } = useParams();

  const [resume, setResume] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
    async function handleSubmit() {
    // Check if Name is entered
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }
    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }
    if (!resume) {
      alert("Please upload a resume");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("jobId", id);
    formData.append("resume", resume);

    await fetch("http://localhost:5000/apply", {
      method: "POST",
      body: formData,
    });

    alert("Application Submitted!");
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Job Details</h1>
      <p className="text-gray-700 mb-4">
        Full job description will go here…
      </p>

      {/* Name Input */}
      <input
        type="text"
        placeholder="Your Name"
        className="border p-2 w-full mb-4"
        value={name}//controlled input
        onChange={(e) => setName(e.target.value)}
      />

      {/* Email Input */}
      <input
        type="email"
        placeholder="Your Email"
        className="border p-2 w-full mb-4"
        value={email}//controlled input
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Resume Upload */}
      <label className="border border-gray-400 p-4 w-full flex justify-between items-center mb-4 cursor-pointer">
      <span>{resume ? resume.name: "No file choose"}</span>
      <span className="bg-gray-200 px-3 py-1 rounded">Choose File</span>
      <input
        type="file"
        accept=".pdf,.doc,.docx" //restrict to common resume formats
        className="hidden"
        onChange={(e) => 
            { if (e.target.files && e.target.files.length > 0){ 
                setResume(e.target.files[0])}}}
      /> </label>

      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-4 py-2 rounded-lg"
      >
        Submit Application
      </button>
    </div>
  );
}
