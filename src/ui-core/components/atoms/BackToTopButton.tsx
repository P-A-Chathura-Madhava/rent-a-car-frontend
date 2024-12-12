"use client";
import { Button } from "@/components/ui/button"
import { IoIosArrowUp } from "react-icons/io";
import WebButton from "./WebButton";
import { useEffect, useState } from "react";

function BackToTopButton(/* {...props} */) {
    // const [scrollPosition, setSrollPosition] = useState(0);
    // const [showGoTop, setshowGoTop] = useState("hidden");

    // const handleVisibleButton = () => {
    //     const position = window.pageYOffset;
    //     setSrollPosition(position);
    
    //     if (scrollPosition > 50) {
    //       return setshowGoTop("");
    //     } else if (scrollPosition < 50) {
    //       return setshowGoTop("hidden");
    //     }
    //   };

    //   useEffect(() => {
    //     window.addEventListener("scroll", handleVisibleButton);
    //   }, []);

    const [backToTopButton, setBackToTopButton] = useState(false);

    const scrollButton = () => {
        if (window.scrollY >= 20) {
          setBackToTopButton(true);
        }else {
          setBackToTopButton(false);
        }
      }

      useEffect(()=>{
        window.addEventListener("scroll", scrollButton);
        return()=>{
          window.addEventListener("scroll", scrollButton);
        }
      }, [])

  return (
    <div className={`fixed bottom-8 right-8 ${backToTopButton ? "block" : "hidden"}`}>
        <a href="#home"><WebButton {...{type: "out-lined", title: <IoIosArrowUp />}} /></a>
    </div>
  )
}

export default BackToTopButton