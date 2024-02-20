import React from 'react'

import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsClipboardData, BsBriefcase, BsChatSquare} from 'react-icons/bs'
import { Link } from 'react-scroll'


const Nav = () => {
  return (
    <div>
    <nav className=' fixed bottom-2  overflow-hidden z-50 lg:right-0 lg:fixed lg:h-full '>
    <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full   mx-auto
    px-5 flex justify-between text-2xl text-white/70 lg:block lg:h-full lg:pt-48">
     <Link to='home'
     smooth={true}
     spy={true}
     offset={-200}
     className='cursor-pointer w-[60px] h-[60px] flex items-end justify-center lg:block'>
     <BiHomeAlt />

     </Link>
     <Link to='about'
      smooth={true}
     spy={true}
     className='cursor-pointer w-[60px] h-[60px] flex items-end justify-center lg:block'>
     <BiUser />
     </Link>
     <Link to='services'
      smooth={true}
     spy={true}
     className='cursor-pointer w-[60px] h-[60px] flex items-end justify-center lg:block'>
     <BsClipboardData />
     </Link>
     <Link to='contact'
      smooth={true}
     spy={true}
     className='cursor-pointer w-[60px] h-[60px] flex items-end justify-center lg:block' >
     <BsChatSquare/>
     </Link>
    

    </div>
    </nav>
    </div>
  )
}

export default Nav
