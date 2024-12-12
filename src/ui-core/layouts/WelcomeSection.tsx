import Title from "../components/atoms/WelcomeSection/Title";
import Description from "../components/atoms/WelcomeSection/Description";
import BlobImage from "../components/atoms/WelcomeSection/BlobImage";
import CarImage from "../components/atoms/WelcomeSection/CarImage";
import WebButton from "../components/atoms/WebButton";

function WelcomeSection() {
  return (
    <div className="container mx-auto flex mt-44 font-poppins" id="home">
        <div className="w-1/2 flex flex-col gap-4 justify-center items-center pl-20 pr-14">
            <Title />
            <div>
            <Description />
            </div>
            <div className="w-full">
                <WebButton {...{type: "filled", title: "Book Your Ride"}} />
                <WebButton {...{type: "out-lined", title: "Rent Your Car"}} />
            </div>
        </div>
        <div className="w-1/2 relative flex justify-center items-center">
            <BlobImage />
            <CarImage />
        </div>
    </div>
  )
}

export default WelcomeSection