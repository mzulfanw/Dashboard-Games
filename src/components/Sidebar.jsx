import React, {useState} from 'react'
import {BsPlay,BsTrophy,BsDisplay,BsBasket,BsDoorOpen} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
function Sidebar() {

    const [sidebar,setSidebar] = useState(true)

    const handleSidebar = () => {
        setSidebar(!sidebar)
    }
    return (
        <>
        <div className={ `${sidebar ? 'lg:px-10 px-10  lg:w-[17rem] h-screen pt-20  bg-gray-900 font-display lg:visible invisible absolute left-0 top-20 ' : 'absolute transition-all duration-100 ease-in-out px-10 left-0 visible w-[17rem] bg-gray-900 font-display top-28 h-screen z-50'}`}>
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
        <div className={`${sidebar ? 'block lg:hidden absolute top-32 ml-5 cursor-pointer text-white' : 'block lg:hidden absolute top-32 ml-72 cursor-pointer text-white'}`} onClick={handleSidebar}>
        <GiHamburgerMenu />
        </div>
        </>
    )
}

export default Sidebar
