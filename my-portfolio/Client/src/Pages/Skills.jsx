import React from 'react';
import Github from '../assets/Github.png';
import html from '../assets/html.webp';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import Mongodb from '../assets/mongoo.png';
import nodejs from '../assets/nodejs.png';
import Tailwind from '../assets/tailwindcss.png';
import react from '../assets/react1.png';

export default function Skills(){
  return (
    <div name='skills' className='w-full min-h-screen bg-stone-100 text-rose-700 flex items-center'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-4xl font-bold text-blue-gray-700 mb-5'>Skills</h1>
          <p className='text-xl text-black font-semibold mb-8'>Here are some skills that I have learned</p>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-8'>
            {skills.map((skill, index) => (
              <div key={index} className='relative py-3 transform transition duration-300 hover:scale-105'>
                <img className='w-20 mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300' src={skill.image} alt={`${skill.name} Logo`} />
                <div className='absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300'>
                  <p className='text-black font-bold'>{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const skills = [
  { name: 'Github', image: Github },
  { name: 'HTML', image: html },
  { name: 'CSS', image: css },
  { name: 'JavaScript', image: javascript },
  { name: 'Tailwind CSS', image: Tailwind },
  { name: 'React', image: react },
  { name: 'MongoDB', image: Mongodb },
  { name: 'Node.js', image: nodejs },
];

