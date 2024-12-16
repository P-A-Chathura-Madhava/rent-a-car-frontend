"use client";
import Image from "next/image"
import blobImg from "/public/blob.svg";
import {motion} from "framer-motion";

function BlobImage() {
  return (
    <motion.div 
    className="absolute -z-20"
    initial={{opacity: 0, x: 100}}
    animate={{opacity: 1, x: 0}}
    transition={{duration: 1}}
    >
      <Image src={blobImg} alt="blob-image" height={800} />
    </motion.div>
  )
}

export default BlobImage