"use client";
import { useEffect } from "react";
import Particles from "../components/Particle";
import Meeting from "../components/meetingAnimation";
// import Safari from "../components/Safari";

const Page = () => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-slate-800">
      {/* <Particles/> */}
      
      <p className="flex h-[100vh] justify-center items-center"> hello</p>
      <Meeting/>
    </div>
  );
};

export default Page;
