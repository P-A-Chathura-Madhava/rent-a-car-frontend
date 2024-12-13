"use client";
import BookingStepCard from "../components/organisms/BookingStepCard"
import { FaMapLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import {motion, useInView} from "framer-motion";
import { useRef } from "react";

function BookingStepsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div 
    className="container mx-auto flex font-poppins flex-col items-center mt-20" id="steps"
    ref={ref}
    initial={{opacity: 0, y: 50}}
    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
    transition={{duration: 1}}
    >
        <h2 className="text-3xl font-bold mb-10">Our Working Steps</h2>
        <div className="flex gap-20">
            <BookingStepCard {...{icon: <FaMapLocationDot />, title: "Choose Location", description: "Find the Nearest Yourcar Point and Book your Car"}} />
            <BookingStepCard {...{icon: <FaCalendarAlt />, title: "Pick-Up Date", description: "Pick up the date that you want to rent the Car"}} />
            <BookingStepCard {...{icon: <FaCarSide />, title: "Book Your Car", description: "Book your Car with ease in one click"}} />
        </div>
    </motion.div>
  )
}

export default BookingStepsSection