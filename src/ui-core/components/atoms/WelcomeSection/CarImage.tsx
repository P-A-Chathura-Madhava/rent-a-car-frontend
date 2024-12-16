"use client";
import Image from "next/image"
import carImg from "/public/car.png";
import {motion} from "framer-motion";

function CarImage() {
  return (
    <motion.div 
    className="absolute"
    initial={{opacity: 0, x: 600}}
    animate={{opacity: 1, x: 0}}
    transition={{duration: 1}}
    >
      <Image src={carImg} alt="car-image" height={1000} />
    </motion.div>
  )
}

export default CarImage