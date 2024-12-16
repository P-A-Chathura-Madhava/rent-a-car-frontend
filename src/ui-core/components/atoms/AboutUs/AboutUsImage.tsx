"use client";
import Image from "next/image";
import suvImage from "/public/suv.png";
import {motion, useInView} from "framer-motion";
import { useRef } from "react";

function AboutUsImage() {
    const ref = useRef(null);
    const isInView = useInView(ref);

  return (
    <motion.div 
    className="w-1/2"
    ref={ref}
    initial={{opacity: 0, x: -600}}
    animate={isInView ? {opacity: 1, x: 0} : {opacity: 0, x: -600}}
    transition={{duration: 1}}
    >
    <Image src={suvImage} alt="suv-image" />
  </motion.div>
  )
}

export default AboutUsImage