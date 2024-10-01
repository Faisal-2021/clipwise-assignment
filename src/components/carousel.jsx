"use client";

import { useRef, useState } from "react";
// import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image";
import LeftIcon from "../../icons/Left";
import RightIcon from "../../icons/Right";

const products = [
  { id: 1, name: "CRYSTAL AGATE PHONE ", price: "18.99", image: "/p1.png" },
  { id: 2, name: "CRYSTAL AGATE PHONE ", price: "18.99", image: "/p1.png" },
  { id: 3, name: "CRYSTAL AGATE PHONE GRIP", price: "18.99", image: "/p1.png" },
  { id: 4, name: "CRYSTAL AGATE PHONE GRIP", price: "18.99", image: "/p1.png" },
  { id: 5, name: "CRYSTAL AGATE PHONE GRIP", price: "18.99", image: "/p1.png" },
  { id: 6, name: "CRYSTAL AGATE PHONE GRIP", price: "18.99", image: "/p1.png" },
  { id: 7, name: "CRYSTAL AGATE PHONE GRIP", price: "18.99", image: "/p1.png" },

  // Add more products here
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
      setCurrentIndex(Math.round(scrollTo / clientWidth));
    }
  };

  return (
    <div className=" z-20 relative flex flex-col justify-center ml-[64px] ">
      <p className=" absolute font-medium leading-6 py-2 px-5 rounded-r-lg text-white top-[76px] bg-[#8A93E5] ">
        New lot
      </p>
      <div className="  bg-white py-[50px] px-[104px] w-[569px] h-[554px] rounded-[50px] shadow-md ">
        <div
          ref={carouselRef}
          className="flex snap-x snap-mandatory overflow-x-auto no-scrollbar "
        >
          {products.map((product, index) => (
            <div key={product.id} className="flex-shrink-0 w-full snap-center ">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className=" w-[362px] h-[362px] object-cover rounded-2xl"
              />

              <div className=" flex uppercase mt-[68px] leading-6 text-xl">
                <h3 className="">{product.name}</h3>
                <p className=" font-bold text-[#317189]"> - {product.price}$</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" flex flex-row justify-center mt-[35px] w-[254px] h-[24px] self-center relative items-center ">
        <button
          onClick={() => scroll("left")}
          className="hover:shadow-md hover:bg-[#7d86db]  bg-[#8A93E5] text-white absolute left-0 rounded p-1 "
        >
          <LeftIcon className=" text-purple-500 w-6 h-6 " />
        </button>
        <div className=" flex  gap-x-[10px] py-1   ">
          {products.map((_, index) => (
            <div
              key={index}
              className={`w-[14px] h-[14px] rounded-full ${
                index === currentIndex ? "bg-[#8A93E5]" : "bg-[#D7DBFF]"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => scroll("right")}
          className=" hover:shadow-md hover:bg-[#7d86db]  bg-[#8A93E5] text-white absolute right-0 rounded p-1"
        >
          <RightIcon className="w-6 h-6 " />
        </button>
      </div>
    </div>
  );
}
