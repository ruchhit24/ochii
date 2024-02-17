import React from "react";

const About = () => {
  return (
    <div data-scroll className="w-full py-36 pb-32 -mt-7 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl">
      <h1 className="text-5xl px-16 leading-none tracking-tight font-anton">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full border-t-2 border-[#6b764c] mt-20"></div>
      <div className="flex">
        <div className="w-1/2 py-10 px-10">
          <h1 className="text-7xl font-anton leading-none tracking-tight">Our Approach :</h1>

          <button className=" flex gap-4 items-center py-3 px-4 mt-8 bg-zinc-900 rounded-full text-white leading-none tracking-tight">
            READ MORE <div className="w-2 h-2 bg-white rounded-full"></div>
          </button>
        </div>
        <div className="w-[35vw] h-[55vh] bg-slate-600 mx-6 mt-10 rounded-xl bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover">
        </div>
      </div>
    </div>
  );
};

export default About;
