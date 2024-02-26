import React from 'react';

export default function Contact() {
  return (
    <div name='contact' className="w-full min-h-screen bg-stone-100 flex justify-center items-center p-4">
      <form method="POST" action="https://getform.io/f/2ff23381-1f90-4dbd-8cb9-41e54011a372" className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold text-rose-700 mb-4">Contact Me</h2>
        <p className="text-gray-600 mb-6">Submit your contact details below to connect with me.</p>
        <div className="flex flex-col mb-6">
          <label className="mb-2 text-gray-700 font-semibold">Name:</label>
          <input name="name" className="bg-gray-100 py-2 px-4 rounded-lg focus:outline-none focus:bg-white" type="text" placeholder="Enter your name" required />
        </div>
        <div className="flex flex-col mb-6">
          <label className="mb-2 text-gray-700 font-semibold">Email:</label>
          <input name="email" className="bg-gray-100 py-2 px-4 rounded-lg focus:outline-none focus:bg-white" type="email" placeholder="Enter your email" required />
        </div>
        <div className="flex flex-col mb-6">
          <label className="mb-2 text-gray-700 font-semibold">Message:</label>
          <textarea className="bg-gray-100 py-2 px-4 rounded-lg focus:outline-none focus:bg-white h-32 resize-none" name="message" placeholder="Your message" required></textarea>
        </div>
        <button type="submit" className="bg-rose-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Send Message</button>
      </form>
    </div>
  );
}
