import { useState ,useEffect} from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const {cart}=useSelector((state)=>state);
  const [totalAmount,setTotalAmount] =useState(0);

useEffect(()=>{
   setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));  
},[cart])

  return (<div className="bg-[rgb(252,252,252)] h-[92vh] w-[100vw]">
{
  cart.length>0 ?(
   <div className="flex fle-col  ">
                            <div className="w-[500px]  ml-[250px] flex flex-col my-5  ">{
                              
                              
                              cart.map((item, index) => (
                            index === cart.length - 1 ? (
                              <div>
                                <CartItem key={item.id} item={item} index={index} />
                                
                              </div>
                            ) : (
                              <div><CartItem key={item.id} item={item} index={index} />
                              <div className="w-[100%] bg-slate-300 h-[1px]"></div>
                              </div>
                            )
                          ))
                              
                              }
                              
                            </div>

   <div className="w-[300px] m-2 flex flex-col justify-between">
   <div className=" m-4">
                          <div>
                            <div className="text-green-700 font-semibold uppercase text-md ">Your Cart</div>
                            <div className="ml-1 uppercase text-4xl text-green-700 font-semibold mb-3">Summary</div>
                            <p className="ml-1 font-semibold opacity-60">
                              <span>Total Items: {cart.length}</span>
                            </p>
                          </div>
   </div>
                          <div className="">
                          <div className="flex"> 
                          <span className="font-semibold opacity-60 mr-1">Total Amount:</span>
                          <p className="font-semibold"> ${totalAmount}</p>
                          </div>
                            <button className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-[100%]">Proceed to checkout </button>
                          </div>
   
   </div>
   
   </div>
  ):
  (
    <div className="flex ̦w-[100vw] h-[75vh] justify-center items-center translate ">
    <div className=" flex flex-col h-[80px] justify-between"> 
  <h1>
   Your cart is Empty!
  </h1>
  <NavLink to="/">
    <button className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-8 rounded">Shop Now</button>
  </NavLink>
</div>
    </div>

  )
}

  </div>)
};


export default Cart;