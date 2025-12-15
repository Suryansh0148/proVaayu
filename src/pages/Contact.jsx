import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const apiBase = import.meta.env.VITE_API_URL || "https://provaayu.onrender.com";

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }
    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }
    if (!message.trim()) {
      alert("Please enter your message");
      return;
    }

    const formData = {
      name,
      email,
      company,
      message,
    };

    await fetch('${apiBase}/contact', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert("Message Sent!");
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900">
      

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-28 text-center text-white animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s Build Something Powerful Together
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto">
            Reach out to us for cloud solutions, managed IT services,
            Avaloq expertise, and custom technology solutions tailored to
            your business needs.
          </p>
        </div>

        {/* Gradient Blur */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl"></div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <div className="flex items-center justify-center px-6 pb-20">
        <div className="bg-white/95 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-xl animate-slideUp">

          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Connect With Us
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Company Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Enter your company name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                className="w-full border border-gray-300 rounded-xl p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Write your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-linear-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition transform hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
