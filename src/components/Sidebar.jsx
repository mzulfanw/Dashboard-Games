import React, {useState} from 'react'
import {BsPlay,BsTrophy,BsDisplay,BsBasket,BsDoorOpen} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
function Sidebar() {

    const [sidebar,setSidebar] = useState(false)
    return (
        <>
        <div className='lg:px-10 px-10  lg:w-[17rem] h-screen pt-20  bg-gray-900 font-display lg:block hidden '>
               <ul className='flex flex-col text-white'>
                   <li className=' '>
                       <BsPlay className='inline-block text-sky-600 lg:text-lg'/><span className='px-5 '>Home</span>
                    </li>
                   <li className=' mt-10'>
                       <BsTrophy className='inline-block text-sky-600 lg:text-lg'/><span className='px-5  '>Compete</span>
                   </li>
                   <li className=' mt-10'>
                       <BsDisplay className='inline-block text-sky-600 lg:text-lg'/><span className='px-5'>Watch</span>
                   </li>
                   <li className='  mt-10'>
                       <BsBasket className='inline-block text-sky-600 lg:text-lg'/><span className='px-5'>Order</span>
                   </li>
                   <li className='mt-52 '>
                    <BsDoorOpen className='inline-block text-sky-600 lg:text-lg'/><span className='px-5'>LogOut</span>
                   </li>
               </ul>     
        </div>
        <div className='block lg:hidden absolute top-32 ml-5 cursor-pointer text-white' onClick={() => {
            setSidebar(!sidebar)
            
        }}>
        <GiHamburgerMenu/>
        </div>
        </>
    )
}

export default Sidebar
