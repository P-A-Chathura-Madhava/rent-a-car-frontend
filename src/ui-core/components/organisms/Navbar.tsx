"use client";
import { useEffect, useState } from "react"
import LogoImage from "../atoms/LogoImage"
import NavbarItems from "../molecules/NavbarItems"

function Navbar() {
  const [header, setHeader] = useState(false);
  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    }else {
      setHeader(false);
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll", scrollHeader);
    return()=>{
      window.addEventListener("scroll", scrollHeader);
    }
  }, [])
  return (
    <div className={`h-[60px] w-full flex items-center justify-between px-20 font-poppins fixed top-0 z-40 transition-all duration-300 ${header ? "bg-slate-400 bg-opacity-80 text-white" : "bg-slate-100"}`}>
        <LogoImage />
        <NavbarItems />
    </div>
  )
}

export default Navbar