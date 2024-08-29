import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar({sidebarToggle}) {

  

  return (
    <>
    <div className='m-0'>
        <ul className={`${sidebarToggle ? "lg:flex block" : "lg:flex hidden" } lg:mt-0 mt-6  w-28 text-gray-200`}>
          <div className='lg:flex lg:space-x-2'>
            <li className='hover:bg-lime-600 bg-lime-400 transition-all ease-in-out duration-400 font-semibold hover:text-white hover:scale-110 text-black lg:w-auto h-8 p-1 justify-center flex lg:rounded-md' ><button><Link to="/">Home</Link></button></li>
            <li className='hover:bg-lime-600 bg-lime-400 transition-all ease-in-out duration-400 font-semibold hover:text-white hover:scale-110 text-black lg:w-auto h-8 p-1 justify-center flex lg:rounded-md' ><button> <Link to="/Fruits">Fruits</Link> </button></li>
            <li className='hover:bg-lime-600 bg-lime-400 transition-all ease-in-out duration-400 font-semibold hover:text-white hover:scale-110 text-black lg:w-auto h-8 p-1 justify-center flex lg:rounded-md' ><button> <Link to="/Vegetables">Vegetables</Link> </button></li>            
            <li className='hover:bg-lime-600 bg-lime-400 transition-all ease-in-out duration-400 font-semibold hover:text-white hover:scale-110 text-black lg:w-auto h-8 p-1 justify-center flex lg:rounded-md' ><button> <Link to="/Contact">Contact</Link> </button></li>            
            
            
          </div>
        </ul>
    </div>
    </>
  )
}

export default Sidebar