import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-white px-6 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6 animate-pulseGlow">
          Our Services
        </h1>
        <p className="text-lg text-gray-300 mb-12">
          CodeBro is your one-stop digital powerhouse. We offer creative and technical solutions to bring your ideas to life.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Web Development */}
          <div className="bg-black bg-opacity-20 p-6 rounded shadow hover:scale-105 transition">
            <h3 className="text-xl font-bold text-accent mb-3">Web Development</h3>
            <p className="text-gray-400">
              Responsive and lightning-fast websites using React, Vite, Tailwind, and Firebase.
            </p>
          </div>

          {/* Mobile Apps */}
          <div className="bg-black bg-opacity-20 p-6 rounded shadow hover:scale-105 transition">
            <h3 className="text-xl font-bold text-accent mb-3">Mobile Apps</h3>
            <p className="text-gray-400">
              Cross-platform apps powered by React Native and Firebase. Android and iOS ready.
            </p>
          </div>

          {/* Branding & UI Design */}
          <div className="bg-black bg-opacity-20 p-6 rounded shadow hover:scale-105 transition">
            <h3 className="text-xl font-bold text-accent mb-3">UI/UX & Branding</h3>
            <p className="text-gray-400">
              Beautiful, branded interfaces that make your product stand out and engage users.
            </p>
          </div>

          {/* AI Integration */}
          <div className="bg-black bg-opacity-20 p-6 rounded shadow hover:scale-105 transition">
            <h3 className="text-xl font-bold text-accent mb-3">AI Integration</h3>
            <p className="text-gray-400">
              Smart tools, chatbots, and AI features using OpenAI and Firebase Functions.
            </p>
          </div>

          {/* Content & Marketing */}
          <div className="bg-black bg-opacity-20 p-6 rounded shadow hover:scale-105 transition">
            <h3 className="text-xl font-bold text-accent mb-3">Social Media & Content</h3>
            <p className="text-gray-400">
              Boost your brand with content creation, short viral videos, and campaign automation.
            </p>
          </div>

          {/* Tech Consultancy */}
          <div className="bg-black bg-opacity-20 p-6 rounded shadow hover:scale-105 transition">
            <h3 className="text-xl font-bold text-accent mb-3">Tech Consulting</h3>
            <p className="text-gray-400">
              Got an idea? We help you plan, build, scale, and market your dream tech project.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link to="/contact" className="bg-accent text-black font-semibold py-3 px-8 rounded hover:bg-white transition">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
