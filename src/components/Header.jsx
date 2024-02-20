import React from 'react'

const Header = () => {
  return (
    <div className='fixed px-5'>
      <div className=" h-[16vh] bottom-4 flex justify-around lg:py-8 py-6">
        <h3 className='z-50 text-white lg:text-3xl text-xl '>Developedby-bayo
        </h3>
        <button className='  fixed  p-3 rounded-full btn  lg:text-2xl left-[60vw] z-50'>Work with me</button>
      </div>
    </div>
  )
}

export default Header

