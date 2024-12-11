import Image from "next/image"
import carImg from "/public/car.png";

function CarImage() {
  return (
    <Image className="absolute" src={carImg} alt="car-image" height={1000} />
  )
}

export default CarImage