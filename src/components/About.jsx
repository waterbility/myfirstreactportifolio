import React from 'react'
import fabric from '../asset/fabric.jpg'


const about = () => {
  return (
    <div id='about' className='section block lg:flex justify-evenly lg:mt-[7vh] mt-[-15vh]'>
      <div className="img-about img">
        <img src={fabric} className='mt-[-5vh]'/>
      </div>
      <div className="text-about ">
        <h1 className='text-4xl mt-[-16vh] text-center lg:mr-[15vw]'>About me</h1>
        <p className='max-w-[90vw] lg:w-[30vw] lg:mr-[15vw] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias soluta itaque, expedita ad distinctio dolorem minima optio sint at inventore, exercitationem enim necessitatibus debitis. Ex voluptatem minus dolorem incidunt illum.</p>
      </div>
    </div>
  )
}

export default about
