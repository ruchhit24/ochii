import React, { useEffect, useState } from "react";

const Eyes = () => {
    const [angle,setAngle] = useState(0);
    useEffect(()=>{
       window.addEventListener("mousemove",(e)=>{
        let mousex = e.clientX;
        let mousey = e.clientY;
        let deltaX = mousex - window.innerWidth/2;
        let deltaY = mousey - window.innerHeight/2;
        let angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
        setAngle(angle-180);

       })
    },[])
  return (
    <div   className="w-full h-screen -mt-20">
      <div data-scroll data-scroll-speed="-.07"  className='w-full h-full mt-12 rounded-tl-3xl rounded-tr-3xl bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]  bg-center bg-cover relative'>
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-5">
          <div className="w-[18vw] h-[40vh] bg-zinc-100 rounded-full flex items-center justify-center ">
            <div className="w-[13vw] h-[28vh] bg-black rounded-full flex items-center justify-center">
              <div style={{transform:`rotate(${angle}deg)`}} className="w-full">
                <div className="w-[2vw] h-[4vh] bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[18vw] h-[40vh] bg-zinc-100 rounded-full flex items-center justify-center ">
            <div className="w-[13vw] h-[28vh] bg-black rounded-full flex items-center justify-center">
              <div style={{transform:`rotate(${angle}deg)`}} className="w-full">
                <div className="w-[2vw] h-[4vh] bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
