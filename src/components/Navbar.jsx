import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {cart}=useSelector((state)=>state);
  const logo ="data:image/jpeg;base64,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";
  return (
    <div className="w-full  flex justify-center  bg-[#080E33] text-white">
      <div className="w-8/12 flex  justify-between">
      <NavLink to="/">
        <div><img src={logo} sizes={40}  alt="err" width={80} height={10}/></div>
      </NavLink>
      <div className="flex">
      <NavLink to="/">
      <div className=" m-8"><p className="font-2xl hover:text-green-500">Home</p></div>
      </NavLink>
      
      <NavLink to="/cart" >
        <div className="py-7">
        <BsCart3  size={25} className="hover:text-green-500 relative"/>
        {/* relative to parrent */}
        {
          cart.length>0? <span className=" absolute top-[21px] right-[240px] bg-green-600 w-[15px] rounded-full text-center text-xs " >{cart.length}</span>
          :<div></div>
        }
        
        </div>
      </NavLink>
      
      </div>
    </div>
    </div>
    
  );
};

export default Navbar;