
import BlobImage from "../components/atoms/WelcomeSection/BlobImage";
import CarImage from "../components/atoms/WelcomeSection/CarImage";
import Information from "../components/atoms/WelcomeSection/Information";

function WelcomeSection() {
  return (
    <div className="container mx-auto flex mt-44 font-poppins" id="home">
      <Information />
        <div className="w-1/2 relative flex justify-center items-center">
            <BlobImage />
            <CarImage />
        </div>
    </div>
  )
}

export default WelcomeSection