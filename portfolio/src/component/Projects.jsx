import React from 'react'
import loginImage from "../assets/login.png";
import reactImage from "../assets/react.png";
import commerceImage from "../assets/commerce.jpg";

const ProjectsList = [
    {
      id:1,
      name:"Registration Form",
      technologies:"MERN Stack",
      image: loginImage,
    },
    {
        id:2,
        name:"React Project",
        technologies:"MERN Stack",
        image: reactImage,
      },
      {
        id:3,
        name:"E-commerce",
        technologies:"MERN Stack",
        image: commerceImage,
      }
]
const Projects = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
     <div className='container mx-auto px-8 md:px-16 lg:px-24'>
      <h2 className='text-4xl font-bold text-center mb-12'>My Projects </h2>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
         {ProjectsList.map(ProjectsList => (
          <div key={ProjectsList.id} className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
            <img src={ProjectsList.image} alt={ProjectsList.name} className='rounded-lg mb-4 w-full h-48 object-cover'/>
            <h3 className='text-2xl font-bold mb-2'>{ProjectsList.name}</h3>
            <p className='text-gray-400 mb-4'>{ProjectsList.technologies}</p>
          </div>
         ))}
      </div>
     </div>
    </div>
   )
  }

export default Projects