import React from 'react'
// import Hero from '../Hero/Hero';
import Cards from './Cards.jsx';

const Projects = () => {
  return (
    <div className='text-center flex flex-col bg-neutral-100'>
       <h2 className='text-4xl mb-10 mt-4 my-2'>Latest work</h2>
      <Cards/>
    </div>
  )
}

export default Projects;