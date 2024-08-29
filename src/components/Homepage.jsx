import React from 'react'
import Banner from './Banner'
import SliderBanner from './SliderBanner'


function Homepage() {
  return (
    <>
    <div className='p-2 mr-3'>
      <div className=''>
        <Banner/>
      </div>
      <div className='m-5 mt-7'>
        <SliderBanner/>
      </div>
    </div> 
  
    </>
  )
}

export default Homepage