import React, { useEffect } from "react";

const CartCards = ({ item, data, setData, setCost, setCartArray,setCartValue }) => {
  

  

  async function handleIncrement() {
    const val = await JSON.stringify(
      data.filter((i) => {
        if (i.name !== item.name) {
          return i;
        }
      })
    );
    await setData(() => JSON.parse(val));
    setData((e) => [...e, { ...item, total: item.total + item.cost }]);
    setCost((e) => (item.total < 0 ? e : e + item.cost));
  }
  

  

  async function handleDecrement() {
    const val = await JSON.stringify(
      data.filter((i) => {
        if (i.name !== item.name) {
          return i;
        }
      })
    );
    await setData(() => JSON.parse(val));
    if (!item.total == 0) {
      setData((e) => [
        ...e,
        {
          ...item,
          total: item.total >= item.cost ? item.total - item.cost : 0,
        },
      ]);
    } else {
      const val = await JSON.stringify(
        data.filter((i) => {
          if (!i.total == 0) {
            return i;
          }
        })
      );
      await setCartArray(() => JSON.parse(val));
    }
    await setCost((e) => (e >= 0 && item.total != 0 ? e - item.cost : e));
  }

  return (
    <>
      <div className="grid justify-center bg-lime-400 m-3 p-2 rounded-3xl hover:scale-105 transition-all duration-100 ease-in-out hover:shadow-2xl shadow-green-500">
        <div className="flex justify-center">
          <div className="w-20 m-3">
            <img src={item.image} alt={item.name} className="rounded-3xl" />
          </div>
        </div>
        <div className="flex justify-center mt-3 text-2xl font-black">
          <div className="">{item.name}</div>
        </div>
        <div className="flex justify-center mt-2 mb-1">
          <div className="flex m-2 justify-center font-semibold text-xl hover:scale-110 w-fit transition-all ease-in-out duration-400 ">
            <button
              onClick={handleDecrement}
              className="bg-red-500 px-2 p-1 text-red-50 rounded-s-lg hover:scale-x-125"
            >
              <div>-</div>
            </button>
            <div className="px-3 bg-gradient-to-r from-red-400  to-lime-300 py-2  text-neutral-950 font-semibold font-mono">
              {item.total}
            </div>
            <button
              onClick={(item) => handleIncrement(item)}
              className="bg-lime-500 p-1 px-2 text-lime-50 rounded-e-lg hover:scale-x-125 "
            >
              <div>+</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartCards;
