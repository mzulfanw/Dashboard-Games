import React, { useState } from 'react'
import {BsBell, BsCart,BsSearch,BsSuitSpade} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'

function Navbar() {

    const [show,setShow] = useState(true)

    const handleHamburger = () => {
      setShow(!show)
    }
    return (
        <>
            <div className='flex justify-around items-center py-10 text-white font-display bg-gray-900 ' >
                <header className=' text-2xl'><BsSuitSpade className='inline-block lg:mr-10 mr-3'/>Sumanto Games</header>
                 <ul className={`${show ? 'hidden lg:flex lg:flex-row flex-col justify-between lg:w-5/12 ' : 'block absolute top-28 space-y-3 bg-clip-padding p-10 backdrop-filter backdrop-blur-xl bg-opacity-60 w-full transition ease-in-out duration-75  '} ` }>
                 <li><div className='bg-gray-700 px-2 py-2 rounded-md w-64  '><BsSearch className='text-sky-500 cursor-pointer'/></div></li>
                 <li>
                     <div className=' absolute h-3 w-3 animate-ping lg:top-9 top rounded-full bg-sky-400 opacity-75'></div>
                     <div className='bg-gray-700 px-2 py-2 rounded-md'><BsBell className='text-sky-500 cursor-pointer' /></div>
                     </li>
                 <li ><div className='bg-gray-700 px-2 py-2 rounded-md'><BsCart className='text-sky-500 cursor-pointer'/></div></li>
                 <li><div className='bg-gray-700 px-5 py-2 rounded-md'>Muhammad Zulfan</div></li>
              </ul>
              <div className={`lg:hidden  ${show ?'block' : 'block '} transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300`}>
                 <button onClick={handleHamburger} ><GiHamburgerMenu/></button>
             </div> 
            </div>
        </>
    )
}

export default Navbar
