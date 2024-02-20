import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='section lg:flex block '>
      <div className='px-7 mt-[20vh]'>
        <h3>Get in touch</h3>
        <h1 className='text-5xl lg:min-w-[40vh] lg:text-7xl'>let's work
        <br /> 
        together</h1>
      </div>
      <div className='block lg:w-[45vw] mx-10 lg:h-[65vh] backdrop-blur-3xl bg-black/40 justify-center ml-5 mt-7 py-3 w-[90vw] rounded-xl'>
        <input type="text" placeholder='Name' className='input lg:w-[40vw] lg:h-[15vh] w-[80vw] h-[10vh]'/>
        <input type="email" placeholder='email' className='input lg:w-[40vw] lg:h-[15vh] w-[80vw] h-[10vh]' />
        <input type="text" placeholder='Your Massage' className='input lg:w-[40vw] lg:h-[15vh] w-[80vw] h-[10vh]'/>
        <br />
        <button className='btn p-2.5 m-3 text-xl lg:m-6 lg:float-end'>send massage</button>
      </div>
    </div>
  )
}

export default Contact
