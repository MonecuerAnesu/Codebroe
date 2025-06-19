import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-accent mb-6">About CodeBro</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          <strong>CodeBro</strong> is a visionary digital agency founded by <strong>Eshadai</strong>, 
          a passionate software engineer and creative developer. Our mission is to build powerful, 
          modern, and engaging web experiences that help brands and individuals stand out in the digital world.
        </p>
        <p className="mt-4 text-gray-400">
          From custom websites and full-stack apps to creative portfolios and viral content systems, 
          CodeBro delivers quality and style. We blend clean design, clever code, and futuristic technology 
          to help your brand shine.
        </p>
        <p className="mt-4 text-accent font-semibold">
          We're not just building websites — we’re building your digital legacy.
        </p>
      </div>
    </div>
  );
}
