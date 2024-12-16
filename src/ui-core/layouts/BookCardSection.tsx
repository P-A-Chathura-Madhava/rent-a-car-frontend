"use client";
import { useRef } from "react";
import BookCard from "../components/organisms/BookCard"
import {motion, useInView} from "framer-motion";

function BookCardSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, /* {once: true} */);

  return (
    <motion.div 
    className="container mx-auto flex mt-36 font-poppins justify-center"
    ref={ref}
    initial={{opacity: 0, y: 50}}
    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
    transition={{duration: 1}}
    >
        <BookCard />
    </motion.div>
  )
}

export default BookCardSection