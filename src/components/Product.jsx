// import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import {add,remove} from "../redux/Slices/CartSlice"


const Product = ({post}) => {
  const {cart}=useSelector((state)=>state);
   const dispatch=useDispatch();
  const addToCart=()=>{
    dispatch(add(post));
    toast.success("Item added to cart");
  }
  const removeFromCart=()=>{
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  }
  

  return (<div className="w-[250px] shadow-[0px_20px_20px_10px_#00000024] my-8 h-[400px] m-2  flex flex-col items-center justify-between border rounded-lg px-3 py-2
  bg-white
  ">
    <div>
      <p className="font-semibold text-slate-600 pt-2">{post.title.slice(0,14)+"..."}</p>
    </div>
    <div className=" w-[150px]">
 <p className="text-xs text-slate-400 ">{post.description.split(" ").slice(0,10).join(" ")+"..."} </p>
      
    </div>
    <div className="w-[150px]   ">
      <img src={post.image}alt="hello"/>
    </div>
    <div className="flex justify-between">
    <div className="">
     <p className="text-green-600 font-semibold">${post.price}</p> 
    </div>
    <div className="ml-12">

      <button  className="text-xs ">
        {
          cart.some((p) =>p.id===post.id)?<button onClick={removeFromCart} className="relative px-2 py-1   uppercase  bg-white font-semibold text-slate-700 rounded-2xl border border-slate-700
          hover:text-white  transition-all ease-in hover:bg-slate-700
           ">Remove Item</button> : 
          <button onClick={addToCart} className="relative px-2 py-1   uppercase  bg-white font-semibold text-slate-700 rounded-2xl border border-slate-700
          hover:text-white  transition-all ease-in hover:bg-slate-700
           ">Add To Cart</button>
        }
      </button>
    </div>
    </div>
    
  </div>)
};

export default Product;
