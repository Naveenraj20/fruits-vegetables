import React, { useContext, useEffect, useState } from "react";
import { cartArrayContext } from "../App";
import CartCards from "./CartCards";
import Total from "./Total";


const Cart =  ({setCartValue}) => {
  const { cartArray, setCartArray} = useContext(cartArrayContext);
  const [data, setData] = useState([]);
  const ids = cartArray.map(({ id }) => id);
  const filtered = cartArray.filter(
    ({ id }, index) => !ids.includes(id, index + 1)
  );
  const [cost, setCost] = useState(null);

  
  useEffect(() => fun, []);

  function fun() {
    for (let i = 0; i < filtered.length; i++) {
      const val = {
        id: filtered[i].id,
        name: filtered[i].name,
        cost: filtered[i].cost,
        image: filtered[i].image,
        total: filtered[i].cost
      };
      setData((e) => [...e, val]);
      setCost((e) => e + filtered[i].cost);
    }
  }
  
  


  

  return (
    <>
        <div className='flex justify-center '>
          <div className='w-4/5 justify-center '>
            
          <div className="grid lg:grid-cols-3 md:grid-cols-2">
            {data.map((e) => (
              <CartCards item={e} data={data} setData={setData} setCost={setCost} setCartArray={setCartArray} setCartValue={setCartValue} key={e.id} />
            ))}

          </div>
          </div>
        </div>
      <div className="">

        <div className="grid justify-center bg-lime-200 p-2 mt-2">
          <div className="lg:text-2xl lg:font-semibold justify-center grid ">
          ______________________TOTAL______________________
          </div>
          <div className="lg:text-xl font-mono">
            {data.map((e) => (
              <Total item={e} key={e.id} />
            ))}
            <div className="grid justify-between">
            <div className="flex" >
              ---------------------------<span className="lg:block hidden" >--------</span>------------
            </div>
            <div className="flex justify-between">

              <div>Total Cost</div>
              <div>{cost}</div>
            </div>
            <div className="flex justify-center shadow-sm m-1 shadow-gray-800">
              <button className="bg-red-600 w-fit p-2 hover:scale-95 duration-400 font-semibold font-serif text-red-50 rounded-lg " >Buy Now</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
