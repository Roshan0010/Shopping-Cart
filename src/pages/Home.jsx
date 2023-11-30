import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import data from "../data"

const Home = () => {

  const [loading,setLoading] = useState(false); 
  const [posts,setPost]=useState([]);
  async function fetchProductData(){
    setLoading(true);
    try{
    //  const res=await fetch(API_URL);
     
     setPost(data);
    //  console.log(data);
    }
    catch(err){
      console.log("error fetching product data"+err.message);
      setPost([]);
    }
    setLoading(false);
  }
  useEffect(()=>{
   fetchProductData();
  },[])
  // console.log(loading);
  return (
    <div className="w-[vw] flex justify-center bg-slate-100">
    {
      loading?<Spinner/> :
       posts.length>0?(
        <div className="w-[75%] flex flex-wrap items-center ">
         {
          posts.map((post)=>(
          <Product key={post.id} post={post}/>

         ))}
        </div>
      ):
      (
        <div>
         <p>Page Not Found</p>
        </div>
      )
    }

    </div>
  )
};

export default Home;
