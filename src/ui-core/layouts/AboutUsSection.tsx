import AboutUsImage from "../components/atoms/AboutUs/AboutUsImage";
import AboutUsInformation from "../components/molecules/AboutUsInformation";

function AboutUsSection() {
  return (
    <div className="container mx-auto flex font-poppins px-12 mt-32 gap-12" id="aboutus">
      <AboutUsImage />
      <AboutUsInformation />
    </div>
  );
}

export default AboutUsSection;
