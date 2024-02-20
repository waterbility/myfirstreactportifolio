import React from 'react'
const Services = () => {
  return (
    <div id='services' className='section block '>
      
      <div className='block mt-[15vh] lg:mt-[-4vh]'>
        <h1 className='text-4xl text-center py-1'>What i do</h1>

      </div>
        <div className='w-[90vw] lg:w-[65vw] lg:h-[55vh] lg:mx-[13vw] lg:p-4 lg:mt-5 border-white border-solid lg:border-2'>
          <h2 className='text-2xl text-center capitalize py-3'>web development</h2>
          <p className='text-center text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, velit sapiente fugiat autem quos, </p>
          <hr />
          <h2 className='text-2xl text-center capitalize py-3'>graphic designer</h2>
          <p className='text-center text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, velit sapiente fugiat autem quos, </p>
           <hr />
          
            <h2 className='text-2xl text-center capitalize py-3'>video editing</h2>
          <p className='text-center text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, velit sapiente fugiat autem quos, </p>

        </div>  
         <button className='btn my-8 mx-20 p-2 lg:text-2xl lg:mt-8 lg:translate-x-[30vw]'>See my work</button>
    </div>
  )
}

export default Services
