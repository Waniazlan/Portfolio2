import React from 'react';
import Project1 from '../assets/project.png'
import Project2 from '../assets/project2.jpg'


export default function Project() {
  return (
    <div name='project' className="w-full min-h-screen bg-stone-100 flex justify-center items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-rose-700 mb-5">My Projects</h1>
          <p className="text-xl text-black font-semibold mb-8">Check out some of my recent projects</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <ProjectCard
              image={Project1}
              title="FullStack Travel App"
              description="A full-stack travel application for planning trips and exploring destinations."
              liveURL="https://traveljauh.netlify.app"
              codeURL="https://github.com/Waniazlan/my-project"
            />
            <ProjectCard
              image={Project2}
              title="Ordering App"
              description="An ordering application for ordering food from a pizzeria with a cart functionality."
              liveURL="https://hotpizzaria.netlify.app"
              codeURL="https://github.com/Waniazlan/Pizza-cart"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const ProjectCard = ({ image, title, description, liveURL, codeURL }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover object-center" />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex justify-center">
          <a href={liveURL} target="_blank" rel="noopener noreferrer" className="mr-4">
            <button className="bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-red-600 transition duration-300"> Demo</button>
          </a>
          <a href={codeURL} target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-800 text-white font-semibold px-4 py-2 rounded hover:bg-gray-900 transition duration-300">View Code</button>
          </a>
        </div>
      </div>
    </div>
  );
};
