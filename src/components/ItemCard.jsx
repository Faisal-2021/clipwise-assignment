import Image from "next/image";

export default function ItemCard({ buttonBorder = false }) {
  const buttonCss = buttonBorder
    ? "uppercase text-white bg-gradient-to-l from-[#75CCEB] to-[#6FB4FF] font-bold text-sm py-4 px-14 rounded-2xl hover:shadow-sky-300 hover:scale-105 duration-500 mt-5"
    : "uppercase text-[#75CCEB] border-[3px] border-[#75CCEB]  font-bold text-sm py-4 px-14 rounded-2xl hover:shadow-sky-300 hover:scale-105 duration-500 mt-5";
  return (
    <div className=" flex flex-col w-[322px] h-[412px] items-center shadow-md rounded-3xl py-8 hover:shadow-xl">
      <Image
        src="/p1.png"
        alt="image"
        width={300}
        height={300}
        className=" w-[198px] h-[198px] object-cover rounded-2xl"
      />
      <span className=" text-xl">Crystal Agate Phone Grip</span>
      <span className="text-[#317189] font-bold text-lg text-center "> 18.99$</span>
      <button className={buttonCss}>buy now</button>
    </div>
  );
}
