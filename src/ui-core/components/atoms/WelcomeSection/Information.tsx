"use client";
import Title from "./Title";
import Description from "./Description";
import WebButton from "../WebButton";
import {motion} from "framer-motion";

function Information() {
  return (
    <motion.div 
    className="w-1/2 flex flex-col gap-4 justify-center items-center pl-20 pr-14"
    initial={{opacity: 0, x: -600}}
    animate={{opacity: 1, x: 0}}
    transition={{duration: 1}}
    >
    <Title />
    <div>
    <Description />
    </div>
    <div className="w-full">
        <WebButton {...{type: "filled", title: "Book Your Ride"}} />
        <WebButton {...{type: "out-lined", title: "Rent Your Car"}} />
    </div>
</motion.div>
  )
}

export default Information