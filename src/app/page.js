import Carousel from "@/components/carousel";
import Navbar from "@/components/nav";
import Image from "next/image";
import MouseIcon from "../../icons/mouse";
import Dropdown from "@/components/dropdown";
import ItemCard from "@/components/ItemCard";
import CircelBottom from "../../icons/circleBottom";
import UpperWave from "@/components/wave/upper/UpperWave";
import LowerWave from "@/components/wave/lower/Lower";
import BottomWave from "@/components/wave/bottom/Wave";


export default function Home() {
  return (
    <main className="w-[1440px]">
      {/* Page 1 */}

      <div className="   relative  h-[900px]  ">
        <UpperWave />
        <Navbar />

        {/* contain the  hero section with crousel  */}
        <div className=" flex mt-[78px] px-[50px] ">
          <div className=" flex flex-col gap-y-10 mt-[50px] z-20 ">
            <p className=" font-sans  flex flex-col text-white w-[707px]">
              <span className="text-[40px] leading-[65px]">Welcome to</span>
              <span className="  font-bold text-[64px] leading-[65px] ">
                Pop Rock Crystal Shop!
              </span>
            </p>

            <p className=" leading-6 w-[400px] h-[72px]  text-[#31546D]">
              Here you will find unique phone accessories, crystals, jewelry and
              more. Free shipping inside the U.S. and our phone grips come with
              a limited warranty. Enjoy!
            </p>
            <div className="flex gap-x-10 items-center text-[#317189]">
              <button className="bg-gradient-to-b hover:shadow-md from-white from-0% to-[#F1FAFF] to-100%  uppercase leading-6 font-bold py-4 px-[45px] rounded-[18px]">
                Shop now
              </button>
              <span className="  leading-6">about us</span>
            </div>
          </div>

          <Carousel />
        </div>

        {/* scroll down */}
        <div className=" flex justify-center mt-[26px] gap-x-4 items-center">
          <MouseIcon />
          <span className="font-medium  text-[#317189]">scroll down</span>
        </div>
        <LowerWave />
      </div>

      {/* page 2 */}
      <div className=" py-[50px] px-[50px] flex flex-col ">
        <p className=" text-center font-bold text-[#31546D] leading-[50px] text-[46px]">
          All product
        </p>

        <div className="  py-[50px] flex gap-x-[100px] ">
          <div>
            <span className=" mr-2 font-bold text-[#9AB0C0] leading-7">
              Filter:
            </span>
            <Dropdown name="All Product" />
          </div>
          <div>
            <span className=" mr-2 font-bold text-[#9AB0C0] leading-7">
              Sort:
            </span>
            <Dropdown name="Best Selling" />
          </div>
        </div>

        <div className=" grid grid-cols-4  grid-rows-2 gap-4 w-[1340px] ">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <ItemCard key={item} buttonBorder={item === 1 && true} />
          ))}
        </div>
        <button
          className="
          
         text-[#75CCEB] border-[2px] tracking-wide border-[#75CCEB]  font-semibold text-sm py-3 px-9 rounded-[18px] hover:shadow-sky-300 mt-[54px]  flex max-w-[140px] justify-center text-center self-center"
        >
          View All
        </button>

{/* section 3 contian last part */}
        <div className="  flex p-0 m-0 bg-gradient-to-br from-[#74dbf7] to-[#7bbbff] h-[900px] w-[1440px] mt-6 z-10   ">


          <div className="   basis-7/12  z-20">
            <div className=" ml-[215px] mt-[163px] w-[542px] h-[123px]">
              <p className=" text-right uppercase text-[40px] leading-[65px] text-[#31546D]">
                Best price
              </p>
              <p className="  m-0 p-0 font-bold text-[64px] text-[#31546D] leading-[65px] ">
                Agate Phone Grip
              </p>
            </div>
            <div className=" ml-0 flex items-center justify-end gap-x-5">
              <p className="text-[#41A0B7] text-2xl line-through mt-5">
                44.50$
              </p>
              <p className=" mt-[30px] mb-[10px] text-[#E35B3E] font-bold text-[70px] leading-[89px]">
                19.50$
              </p>
            </div>
            <p className=" text-right w-[410px] text-[#31546D] h-[96px] ml-[354px]">
              These Pop Rock Crystal grip tops can be swapped with other tops
              depending on your mood, outfit, nails, phone case, holiday, etc.!
              Just gently squeeze the sides to remove and swap out with another
              color or design!
            </p>
            <button className="uppercase text-white bg-gradient-to-l from-[#75CCEB] to-[#6FB4FF] font-bold text-sm py-4 px-12 rounded-2xl hover:shadow-sky-300 hover:scale-105 duration-500  mt-5 ml-[579px]">
              buy now
            </button>
          </div>

          <div className=" basis-5/12 px-10 z-20   ">
            {/* <CircelBottom></CircelBottom> */}
            <div className="flex shadow-2xl items-center justify-center rounded-full bg-white/50 w-[570px] h-[570px] z-30">
              <div className="flex w-[364px] h-[364px] shadow-2xl shadow-black/30 rounded-full items-center justify-center z-40 ">
                <Image
                  src="/p1.png"
                  alt="image"
                  width={300}
                  height={300}
                  className=" z-50 self-center w-[248px] h-[248px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div> 
          <BottomWave />
        </div>

        {/* Section 3 end */}
      </div>
      <div className=" -mt-12 h-[269px] bg-[#0A294DCC]/80 "></div>
    </main>
  );
}
