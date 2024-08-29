import React, { useContext } from 'react'
import { cartArrayContext } from '../App'
import Cards from './Cards'
import List from '../List.json'

function Search() {
const {searchItem} = useContext(cartArrayContext)

const val = List.filter((e)=>{
    if((e.name).toLowerCase().includes(searchItem)){
        return e;
    }
})

  return (
    <>
        <div className='lg:m-3 m-1 text-center font-semibold' >{searchItem.length==0?"":`Results for - "${searchItem}"`}{val.length==List.length?"":`--/ ${val.length} result`}</div>
        <div className='grid grid-cols-3 m-1 p-2'>

        {val.map((e)=><Cards item={e} key={e.id}/>)}
        </div>
    </>
  )
}

export default Search