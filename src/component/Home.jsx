
import React, { useEffect } from "react";
import watch1 from '../assets/img/1watch.jpeg';
import watch2 from '../assets/img/2watch.jpeg';
import watch3 from '../assets/img/7watch.jpeg';
import watch4 from '../assets/img/4watch.jpeg';

import Navbar from "./Navbar";
import ScrollReveal from "scrollreveal";
import About from "./About";
import Feature from "./feature";
import WatchReviewApp from "./review";

const Home=()=>{
 
  return (
    <>
    <Navbar/>
    <div className=" flex flex-col   lg:flex-row  h-[400px] w-[100%] bg-gradient-to-r from-violet-500 to-fuchsia-500 ">

<div className="flex text-white flex-col mt-[80px] pl-[50px] w-[50%]">
  <p className="font-semibold text-[40px] text">CUSTOM WATCHES</p>
  <p className="font-semibold text-[40px] text">FOR ANY</p>
  <p className="font-semibold text-[40px] text">OCCASION</p>
  <div className="flex gap-5 pt-[50px]">
    <button className="text-center text-orange-300 px-4 py-2 border-2 border-orange-300 button ">DESINE & ORDER</button>
    <button className="text-center text-orange-300 px-4 py-2 border-2 border-orange-300 button">REQUEST VIRTUAL</button>
  </div>
</div>
<div className="lg:pr-6 mt-[80px] lg:ml-[100px] shadow-md lg:pl-[10px]  ">
  <img src={watch1} alt="" className="img w-[300px] lg:pr-2 pr-10 h-[300px] rounded-full"/>
</div>  
</div>
<WatchReviewApp/>


    </>
  )
}
export default Home;