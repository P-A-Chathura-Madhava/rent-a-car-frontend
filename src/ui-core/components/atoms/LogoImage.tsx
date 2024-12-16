"use client";
import Image from "next/image";
import logoImg from "/public/logo.png";
import whiteLogoImage from "/public/logo-white.png";
import {motion} from "framer-motion";

function LogoImage({...props}) {
  return <motion.div 
  className="flex justify-center items-center gap-2"
  initial={{opacity: 0, x: -200}}
  animate={{opacity: 1, x: 0}}
  transition={{duration: 0.5}}
  >
    {
      props?.header ? 
      <Image src={whiteLogoImage} alt="application-logo" width={100}/> :
      <Image src={logoImg} alt="application-logo" width={100}/>
    }
    <h2 className="text-3xl font-bold">CTECH Cars</h2>
    </motion.div>;
}

export default LogoImage;
