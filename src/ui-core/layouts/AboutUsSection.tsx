import Image from "next/image";
import suvImage from "/public/suv.png";

function AboutUsSection() {
  return (
    <div className="container mx-auto flex font-poppins px-12 mt-32 gap-12" id="aboutus">
      <div className="w-1/2">
        <Image src={suvImage} alt="suv-image" />
      </div>
      <div className="w-1/2">
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
      </div>
    </div>
  );
}

export default AboutUsSection;
