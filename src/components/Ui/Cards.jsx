import React from 'react'

function Cards(props) {   
    return (
        <div className='bg-gradient-to-r from-gray-600 border-2  rounded-xl w-72 my-3 mx-3  ' >
        <div className='py-10 text-white  px-5 '>
            <img src={props.game.thumbnail} alt={props.game.title} className='block mx-auto ' />
            <h2 className='text-center text-2xl mt-6'>{props.game.title}</h2>
            <p className='truncate '>{props.game.short_description}</p>
        </div>
    </div>
    )
}

export default Cards
