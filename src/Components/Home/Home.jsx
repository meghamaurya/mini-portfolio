import React from 'react'
import Aboutme from '../Aboutme/Aboutme'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import {BsGithub} from 'react-icons/bs';
import {GrLinkedin} from 'react-icons/gr';
import {FaTwitter} from 'react-icons/fa';
const Home = () => {
  return (
    <section id='home'>
      <div className='flex flex-col items-center justify-center h-80 text-center
      bg-gradient-to-bl
      from-green-400 to-red-400 via-purple-300 animate-gradient-x text-white'>
          <h1 className=' text-5xl h-16'>Megha Maurya</h1>
          <span className='text-xl'>A Frontend Developer</span>
          <div className='flex text-4xl -mb-20 my-4'>
            <a href='https://github.com/meghamaurya' target='_blank' rel="noopener noreferrer"><BsGithub className='m-2 hover:text-neutral-600'/></a>
            <a href='https://www.linkedin.com/in/megha-maurya-21369324b/' target='_blank' rel="noopener noreferrer"><GrLinkedin className='m-2 hover:text-neutral-600'/></a>
            <a href='https://twitter.com/MeghaMaurya58' target='_blank' rel="noopener noreferrer"><FaTwitter className='m-2 hover:text-neutral-600'/></a>
          </div>
      </div>
      <Aboutme />
      <Projects />
      <Skills />
      <Contact/>
    </section>
  )
}

export default Home
