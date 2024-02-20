import React from 'react'
import first from '../asset/first.jpg'
import {FaFacebook, FaGithub}  from 'react-icons/fa'
import {FaEnvelope, FaReact}  from 'react-icons/fa'
import {FaCss3, FaHtml5}  from 'react-icons/fa'
import {FaJs}  from 'react-icons/fa'
import { motion } from 'framer-motion'

const Main = () => {
  return (
     <section id='home' className='section'>
      <div className="  lg:flex lg:item-center lg:mt-[25vh]">
        <div className="block text-center lg:mt-[20vh] mt-[15vh] lg:ml-9">
          <h1 className='text-3xl'> Omogbehinwa Abayomi</h1>
          <h2 className='text-2xl'>I am a web developer</h2>
          <p className='max-w-full text-center pb-2 lg:max-w-[40vw]'>I am a self-taught web developer from lagos, nigeria. I have been coding for over two years now and i am ready to take on project.</p>
          <button className='btn p-2 lg:text-2xl'>connect with me</button>

          <div className='flex justify-center text-2xl gap-3 p-2'>
          <a href='#'>
            <FaFacebook />
            </a>
          <a href='#'>
            <FaGithub />
            </a>
          <a href='#'>
            <FaEnvelope />
            </a>
            </div>
        </div>
          <div className="image">
            <img src={first} className='rounded-full scale-50 mt-[-10vh] lg:rounded-t-sm'/>
          </div>
      </div>
     </section>
  )
}

export default Main
