import { useContext } from "react"
import { cartArrayContext } from "../App"


export default function Cards({item}) {

    const {cartArray,setCartArray} = useContext(cartArrayContext)

    function handleClick(){      
          const val = {id: item.id, name: item.name, cost: item.cost, image: item.image}          
          setCartArray([...cartArray, val]);         

    }

    return (
        <>
          <div className='hover:bg-lime-600 grid justify-center p-2 m-4 rounded-xl hover:scale-110 transition-all duration-400 ease-in-out shadow-xl bg-lime-500'>
            <div>
              <img src={item.image} alt="" className='w-40 h-40 rounded-2xl'  />
            </div>
            <div className='text-center font-bold font-mono text-2xl m-2' >{item.name}</div>
            <div className='flex justify-between' >

              <p className='bg-slate-200 h-8 rounded-xl p-1' >{item.cost}/-</p>
              
              <div><button onClick={handleClick}><img className="h-10 bg-slate-200 rounded-lg hover:scale-125 duration-200" src="https://img.icons8.com/?size=100&id=LhRbsuC35iCh&format=png&color=000000" alt="cart" /></button></div>
            </div>
          </div>
        </>
    )
}
