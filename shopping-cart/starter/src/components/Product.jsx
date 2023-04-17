import { useDispatch, useSelector } from "react-redux";
import {toast} from "react-hot-toast"
import { remove,add } from "../redux/Slices/CartSlice";


const Product = ({post}) => {

  const dispatch = useDispatch();
  const {cart} = useSelector((state)=>state);

  const addToCart=()=>{
    dispatch(add(post));
    toast.success("Item Added to Cart");
  }

  const removeFromCart=()=>{
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }


  
  

  return (
    
    <div className=" group hover:scale-110 transition duration-300 ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 ml-5  rounded-xl">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div >
        <p className="w-40 text-gray-400 font-normmal text-[10px] text-left">
          {post.description.split(" ").slice(0,10).join(" ")+"....."}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full"/>
      </div>
      
      <div className="flex justify-between gap-12">
      <div>
        <p className="text-green-600 font-semibold items-center w-full mt-5">${post.price}</p>
      </div>
            
      {
        cart.some((p)=>p.id == post.id)?
        ( <buttom onClick={removeFromCart}
        className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] pt-3 p-1 px-4 uppercase cursor-pointer  hover:bg-gray-700 hover:text-white transition-all duration-300">
        Remove Item</buttom>) :

        ( <buttom onClick={addToCart}
        className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] pt-3 p-1 px-4 uppercase cursor-pointer hover:bg-gray-700 hover:text-white transition-all duration-300">
        Add Item</buttom>)

      }
      </div>



    </div>
  );
};

export default Product;
