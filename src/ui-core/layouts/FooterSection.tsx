import Image from "next/image";
import whiteLogoImg from "/public/logo-white.png";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function FooterSection() {
  return (
    <div className="h-[350px] w-full bg-blue-900 flex font-poppins text-white flex-col">
      <div className="container mx-auto px-20 flex gap-10 pt-14">
        <div className="w-80">
          <div className="flex gap-2 items-center">
            <Image src={whiteLogoImg} alt="application-logo" width={100} />
            <h2 className="text-3xl font-bold">CTECH Cars</h2>
          </div>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facere, quae inventore fuga ex eveniet cum tempora culpa harum delectus amet sit possimus blanditiis eligendi aut dolorem officiis nulla ratione?</p>
        </div>
        <div className="pt-8">
            <h3 className="text-2xl font-bold mb-8">Our Links</h3>
            <ul className="text-sm flex flex-col gap-3 font-semibold">
                <li className="hover:text-blue-300 transition-all duration-300 cursor-pointer" key="home">Home</li>
                <li className="hover:text-blue-300 transition-all duration-300 cursor-pointer" key="about-us">About Us</li>
                <li className="hover:text-blue-300 transition-all duration-300 cursor-pointer" key="services">Services</li>
                <li className="hover:text-blue-300 transition-all duration-300 cursor-pointer" key="modules">Modules</li>
                <li className="hover:text-blue-300 transition-all duration-300 cursor-pointer" key="blog">Blog</li>
            </ul>
        </div>
        <div className="pt-8">
            <h3 className="text-2xl font-bold mb-8">Other Links</h3>
            <ul className="text-sm flex flex-col gap-3 font-semibold">
                <li className="hover:text-blue-300 transition-all duration-300 cursor-pointer" key="faq">FAQ</li>
                <li className="hover:text-blue-300 transition-all duration-300 cursor-pointer" key="contact">Contact Us</li>
                <li className="hover:text-blue-300 transition-all duration-300 cursor-pointer" key="support">Support</li>
                <li className="hover:text-blue-300 transition-all duration-300 cursor-pointer" key="privacy-policy">Privacy Policy</li>
                <li className="hover:text-blue-300 transition-all duration-300 cursor-pointer" key="termsandconditions">Terms &amp; Conditions</li>
            </ul>
        </div>
        <div className="pt-8">
            <h3 className="text-2xl font-bold mb-8">Call Now</h3>
            <div className="flex gap-2 items-center"><span className="rounded-full bg-red-700 p-2"><FaPhoneAlt /></span><p>+9477 123 45 46</p></div>
        </div>
        <div className="pt-8">
            <h3 className="text-2xl font-bold mb-8">Mail</h3>
            <div className="flex gap-2 items-center"><span className="rounded-full bg-red-700 p-2"><IoIosMail /></span><p>info@ctechcars.com</p></div>
        </div>
      </div>
        <div className="container mx-auto px-20 pt-4 text-blue-300"><p className="text-xs">Copyright &copy; 2024 CTECH Cars. All rights reserved.</p></div>
    </div>
  );
}

export default FooterSection;
