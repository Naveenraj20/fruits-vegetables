import React from 'react'
import Homegif from '../assets/Home-gif.gif'
import AnimatedGif from './AnimatedGif'
function Banner() {
  return (
    <>
        <div className='lg:flex  grid m-2 p-2 w-full '>
            <div className='Left lg:w-1/2  w-full flex  justify-center grid z-10 order-2 lg:order-1 p-2'>
              <div className='justify-center p-2 m-2'>
                <h1 className='text-3xl text-center font-semibold first-letter:px-1 first-letter:rounded-s-xl first-letter:bg-lime-400 '>Welcome to our <span className='text-lime-400 bg-black font-bold rounded-bl-2xl rounded-tr-2xl px-1 hover:bg-lime-400 hover:text-black'>FreshPoint</span> Online Website..-"Freshness You Can Taste, Quality You Can Trust!"</h1> <br />
                <h5 className='text-gray-600 font-mono text-xl mt-4 text-center '>"At our fruit and vegetable shop, freshness is our promise. Enjoy a wide array of seasonal produce, handpicked for quality and flavor. From juicy fruits to crisp veggies, we pride ourselves on offering the best local and organic options. Taste the difference of fresh, healthy produce with us!"</h5>
                


                <div className="flex justify-center mt-4 ">
                <label className="flex items-center  gap-2  bg-lime-500 pl-2 rounded-lg">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow p-2 border-2 rounded-lg" placeholder="Email" />
</label>
<button className='mx-3 border-4 px-4 rounded-2xl hover:scale-95 hover:bg-lime-600 bg-lime-400 transition-all ease-in-out duration-700 font-semibold' >Enter</button>
                </div>




              </div>
            </div>
            <div className='Right lg:w-1/2 p-2 lg:order-2 order-1 justify-center flex sm:w-full '>
                {/* <img className=' h-full flex justify-center' src={logo} alt="" /> */}
                <div>
                  <AnimatedGif src={Homegif} />
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner