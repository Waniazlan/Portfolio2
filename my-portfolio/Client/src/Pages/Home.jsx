import React from 'react';
import {Link} from 'react-scroll'

export default function Home() {
  return (
    <div name='home' className="w-full h-screen bg-stone-100 text-center flex justify-center items-center">
      <div className="max-w-xl mx-auto">
        <p className="text-lg text-gray-500">Hi, my name is</p>
        <h1 className="text-4xl font-bold text-rose-700 mb-4">Nur Hazwani</h1>
        <p className="text-lg text-gray-500 mb-6">A self-taught full-stack developer seeking to launch a career in web development. Familiar with development and deployment process for web-based technologies</p>
        <div>
          <Link to='project' className="bg-rose-700 text-white py-3 px-6 rounded-lg font-semibold inline-flex items-center hover:bg-gray-800 transition duration-300">
            My Work
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
