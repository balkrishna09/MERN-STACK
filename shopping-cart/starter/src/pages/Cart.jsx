import { useEffect, useState } from "react";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {

  const {cart} = useSelector((state)=>state);

  const[totalAmount,setTotalAmount]= useState(0);
  
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=> acc + curr.price , 0));
  },[cart])
  
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
      {cart.length > 0 ? (
        <div className="flex mx-auto gap-2">
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="flex flex-col p-5 gap-5 my-14  h-[100%]">
            <div className="">
              <p className="font-semibold text-xl text-green-800 ">Your Cart</p>
              <p className="font-semibold text-5xl text-green-700 ">Summary</p>
              <p>
                <span className="text-gray-700 font-semibold text-xl">Toatal Items: {cart.length}</span>
              </p>
            </div>

            <div className="flex flex-col">
              <p className="text-xl font-bold">Total Amount:<span className="text-gray-700 font-semibold">{totalAmount}</span></p>
              <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">Checkout Now</button>
            </div>
          </div>
        </div>

      ) : (
        <div className="flex justify-center items-center w-screen h-screen flex-col">
          <h1 className="font-semibold text-slate-800">Your Cart is Empty!</h1>
          <Link to={"/"}>
            <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
