"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import carImg01 from "/public/car-img-01.png";
import carImg02 from "/public/car-img-02.png";
import carImg03 from "/public/car-img-03.png";
import carImg04 from "/public/car-img-04.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BiSolidTachometer } from "react-icons/bi";
import { FaEllipsisH } from "react-icons/fa";
import { FaFillDrip } from "react-icons/fa";

const cars: any = [
  {
    image: carImg01,
    name: "Ford Mustang Coupe",
    dPrice: 20000,
    mPrice: 200000,
    milage: 10,
    transmission: "Auto",
    fuel: "Petrol",
  },
  {
    image: carImg02,
    name: "Ferari 458",
    dPrice: 18000,
    mPrice: 180000,
    milage: 20,
    transmission: "Auto",
    fuel: "Petrol",
  },
  {
    image: carImg03,
    name: "Lamborghini Avantador",
    dPrice: 40000,
    mPrice: 400000,
    milage: 6,
    transmission: "Auto",
    fuel: "Petrol",
  },
  {
    image: carImg04,
    name: "Dodge Hellcat",
    dPrice: 40000,
    mPrice: 400000,
    milage: 8,
    transmission: "Auto",
    fuel: "Petrol",
  },
];

function FeaturedCars() {
  return (
    <div className="container mx-auto flex font-poppins mt-20 items-center flex-col" id="cars">
      <h2 className="text-3xl font-bold">Explore Our Top Deals</h2>
      <div className="w-1/2">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 p-6 flex">
            {cars.map((item: any, index: number) => {
              return (
                <CarouselItem className="basis-1/3 rounded-md shadow-3xl py-2 mr-6">
                  <div className="p-3 w-[200px]">
                    <div className="flex flex-col items-center">
                      <div className="h-[130px]">
                        <Image
                          src={item.image}
                          alt="car-image-01"
                          className="w-full"
                        />
                      </div>
                      <h5 className="text-xs font-bold text-center mb-4">
                        {item.name}
                      </h5>
                    </div>
                    <div className="flex text-xs pl-2 gap-5 mb-2">
                      <p className="text-red-700 font-semibold">
                        Rs. {item.dPrice}
                        <br />
                        /Day
                      </p>
                      <p className="font-semibold text-gray-700">
                        Rs. {item.mPrice}
                        <br />
                        /Month
                      </p>
                    </div>
                    <div className="flex justify-between px-2 text-xs mb-5">
                      <div className="flex gap-1 text-gray-700 items-center">
                        <BiSolidTachometer />
                        <p>{item.milage}k</p>
                      </div>
                      <div className="flex gap-1 text-gray-700 items-center">
                        <FaEllipsisH />
                        <p>{item.transmission}</p>
                      </div>
                      <div className="flex gap-1 text-gray-700 items-center">
                        <FaFillDrip />
                        <p>{item.fuel}</p>
                      </div>
                    </div>
                    <Button className="bg-blue-600 border border-transparent hover:border-blue-600 hover:bg-white hover:text-blue-600 w-full">
                      Book Now
                    </Button>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default FeaturedCars;
