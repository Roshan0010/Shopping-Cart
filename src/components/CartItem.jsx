import {MdOutlineDeleteOutline} from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {remove} from "../redux/Slices/CartSlice"
const CartItem = ({item,index}) => {
  const dispatch =useDispatch();
  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.success("Item removed successfully");
  }
  return (<div className="w-[500px] h-[250px] flex m-2 p-2 ">
      
    <img src={item.image} alt="hello" className=" w-[150px] h-[150px] mt-10"/>
    <div className="flex flex-col h-[100%] justify-evenly px-5">
      <h1 className="text-lg font-semibold text-slate-700">{item.title.slice(0,36)+"..."}</h1>
      <p className="text-slate-600 text-xs"> {item.description.split(" ").slice(0,15).join(" ")+"..."}</p>
      <div className="flex justify-between ">
        <p className="text-green-600 font-semibold">${item.price}</p>
        <button className="w-[30px] h-[30px] flex justify-center items-center text-white rounded-full bg-red-500 hover:bg-red-700" onClick={removeFromCart}>
          <MdOutlineDeleteOutline/>
        </button>
        
      </div>
     
    </div>
    
    
  </div>
  )
};

export default CartItem;
