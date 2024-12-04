import Image from "next/image";
import logoImg from "/public/logo.png";

function LogoImage() {
  return <div className="flex justify-center items-center gap-2">
    <Image src={logoImg} alt="application-logo" width={100}/>
    <h2 className="text-3xl font-bold">CTECH Cars</h2>
    </div>;
}

export default LogoImage;
