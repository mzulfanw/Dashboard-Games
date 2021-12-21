import React from 'react'

function CardsListItem(props) {
    console.log()
    return (
        
            <div className='bg-gradient-to-r from-gray-600 border-2  rounded-xl w-72 my-3 mx-3  ' >
                <div className=' py-10 text-white  px-5 '>
                    <img src={props.pc.thumbnail} alt={props.pc.title} className='block mx-auto ' />
                    <h2 className='text-center text-2xl mt-6'>{props.pc.title}</h2>
                    <p className='truncate '>{props.pc.short_description}</p>
                </div>
            </div>
        
    )
}

export default CardsListItem
