import React from 'react'
import List from '../List.json'
import Cards from './Cards'
import { Link } from 'react-router-dom'
function Fruits() {
  const data = List.filter((e)=>{
    if(e.type === "fruit"){
      return e;
    }
  })
  return (
    <>
      <h1 className='font-bold lg:text-4xl md:text-3xl text-2xl justify-center flex m-2 md:m-5 '><p className='first-letter:text-lime-500 bg-black text-yellow-50 px-2 rounded-lg '>Fruits..</p></h1>
      <p className='md:text-xl m-4 lg:text-2xl text-xl md:ml-10 indent-28 text-gray-600 font-mono '>Fruits are important sources of vitamins and carbohydrates like fiber and sugar. They are low in calories and naturally sweet. Fruits and their juices are good sources of water, too. Different fruits contain different vitamins, so it is important to eat a variety of fruits.</p>
      <div className='text-center flex justify-center'>
      <div className=' mt-5 hover:scale-95 hover:text-white text-xl font-semibold  w-20 rounded-lg px-3 hover:bg-lime-600 bg-lime-400 transition-all ease-in-out duration-700'>
                        <button className='text-center ' > <Link to="/">Home</Link> </button>
                    </div>
                    </div>
      <div className='flex flex-wrap justify-center m-auto p-3'>
          {data.map((e)=> <Cards item={e} key={e.id}/>)}
      </div>
    </>
  )
}

export default Fruits