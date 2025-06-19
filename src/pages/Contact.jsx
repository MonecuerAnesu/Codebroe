import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to Firestore or Email service
    alert("Message sent! 🚀 (functionality coming soon)");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background text-white px-6 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6">
          Contact Us
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Have a project, idea, or just want to say hello? We'd love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div>
            <label className="block mb-1 text-sm text-gray-300">Name</label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-black bg-opacity-30 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-black bg-opacity-30 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Message</label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-black bg-opacity-30 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Write your message here..."
              required
            />
          </div>

          <button
            type="submit"
            className="bg-accent text-black font-bold py-2 px-6 rounded hover:bg-white transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
