import axios from 'axios'
import React,{useEffect, useState} from 'react'
import Sidebar from './Sidebar'
import CardsListItem from './Ui/CardsListItem'
function Hero() {
   

    const [gamesPC,setGamesPC] = useState([])

    const [isLoading,setIsLoading] = useState(false)

    const [platform,setPlatform] = useState("pc")
    

 

    
    const handlePlatform = (event) => {
        setPlatform(event.target.value)
       
    }

    useEffect(() => {
        const getGamesPC = async() => {
            try {
                let response = await axios({
                    method: 'GET',
                    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
                    params: {platform: platform},
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
        getGamesPC()
        setIsLoading(true)
    },[platform])
    
    return (
      <div className='flex lg:flex-row justify-between items-center'>
          <div className='basis-auto   '>
              <Sidebar />
          </div>
          <div className='basis-5/6 bg-gray-700 min-h-screen font-display w-screen'>
                <div className='text-white px-10 py-10'>
                    <div className="flex lg:flex-row flex-col lg:justify-around items-center">
                        <div className='basis-9/12'>
                        <h1 className='text-3xl'>Games Pc</h1>
                    </div>
                    <div className='basis-auto lg:mt-0 mt-10'>
                    <div className="relative inline-block w-full text-gray-700">
                        <select className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input" onChange={handlePlatform}>
                            <option value="pc">PC</option>
                            <option value="browser">Browser</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                        </div>
                        </div>
                    </div>
                    </div>
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
