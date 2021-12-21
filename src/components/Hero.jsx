import axios from 'axios'
import React,{useEffect, useState} from 'react'
import Sidebar from './Sidebar'
import Cards from './Ui/Cards'
import CardsListItem from './Ui/CardsListItem'
function Hero() {
    const [games,setGames] = useState([])

    const [gamesPC,setGamesPC] = useState([])

    const [isLoading,setIsLoading] = useState(false)

    const getGames = async () => {
      try {
         let response = await axios({
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            params: {category: 'moba'},
            headers: {
              'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
              'x-rapidapi-key': 'e5fd97d755mshaa17a0004200f94p185f48jsn6507cbe9cf94'
            }
         })
         setGames(response.data)
      } catch (error) {
          console.log(error.message)
      }
    }

    const getGamesPC = async() => {
        try {
            let response = await axios({
                method: 'GET',
                url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
                params: {platform: 'pc'},
                headers: {
                  'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
                  'x-rapidapi-key': 'e5fd97d755mshaa17a0004200f94p185f48jsn6507cbe9cf94'
                }
            })   
            setGamesPC(response.data)      
            setIsLoading(false)   
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getGames();
        getGamesPC()
        setIsLoading(true)
    },[])
    
    return (
      <div className='flex lg:flex-row justify-between items-center'>
          <div className='basis-auto  '>
              <Sidebar />
          </div>
          <div className='basis-5/6 bg-gray-700 min-h-screen font-display w-screen'>
                <div className='text-white px-10 py-10'>
                    <h1 className='text-3xl'>Games Pc</h1>
                    <div className='overflow-x-scroll flex lg:max-w-6xl max-w-md mt-5 '>
                    {isLoading ? <div>Loading....</div> : gamesPC.slice(0,20).map((pc,index) => {
                        return <CardsListItem pc={pc} key={index}/>
                    })}
                </div>
           
            </div>
          </div>
      </div>
    )
}

export default Hero
