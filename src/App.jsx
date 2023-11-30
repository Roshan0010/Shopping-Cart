import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

const App = () => {
  return(
    <div className="">
    <div>
    <Navbar/>
    </div>
    <div>
    <Routes >
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    </div>
    
    </div>
  )
};

export default App;
