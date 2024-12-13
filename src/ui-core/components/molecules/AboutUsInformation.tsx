"use client";
import { useInView } from "framer-motion";
import { useRef } from "react"
import {motion} from "framer-motion";

function AboutUsInformation() {
    const ref = useRef(null);
    const isInView = useInView(ref);

  return (
    <motion.div 
    className="w-1/2"
    ref={ref}
    initial={{opacity: 0}}
    animate={isInView ? {opacity: 1} : {opacity: 0}}
    transition={{duration: 1}}
    >
    <h2 className="text-4xl font-bold mb-4">
      Fell The Best Experience With Our Rental Deals
    </h2>
    <p className="text-slate-600 text-justify">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
      officiis dolore consectetur eum cumque incidunt exercitationem
      suscipit neque dicta, odit perspiciatis, voluptatum deserunt quod
      consequuntur est commodi aspernatur cum? Eligendi? Ab nam fugit,
      saepe, est voluptatum reprehenderit aut ratione officia doloribus
      doloremque molestiae quo ex fuga exercitationem in ducimus obcaecati
      et corporis. Dignissimos magnam quod labore aliquam impedit laboriosam
      pariatur?
    </p>
  </motion.div>
  )
}

export default AboutUsInformation