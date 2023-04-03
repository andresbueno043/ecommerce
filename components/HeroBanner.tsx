import React from "react";
import Link from "next/link";
import { urlFor } from "@/lib/client";

type Props = {
  heroBanner: BannerData,
};

const HeroBanner = ({ heroBanner }: Props): JSX.Element => {
  return (
    <div className="py-[100px] px-[40px] bg-[#dcdcdc] rounded-[15px] relative h-[500px] leading-[0.9] w-full sm:h-[560px] sm:leading-[13px]">
      <div>
        <p className="text-[20px]">{heroBanner[0]?.smallText}</p>
        <h3 className="text-[4rem] mt-1 sm:text-[40px] py-4">{heroBanner[0]?.midText}</h3>
        <h1 className="text-white font-bold md:text-[10em] ml-[-20px] uppercase pt-12 sm:text-[50px]">{heroBanner[0]?.largeText1}</h1>
        <img src={urlFor(heroBanner[0]?.image).url()} alt="headphones" className="absolute top-0 right-[20%] w-[450px] h-[450px]" />

        <div>
          <Link href={`/product/${heroBanner[0]?.product}`}>
            <button type="button" className="rounded-[15px] py-[10px] px-[16px] bg-[#f02d34] text-white border-none mt-10 text-lg font-medium cursor-pointer z-[10000] sm:mt-[90px] sm:z-[10000]">{heroBanner[0]?.buttonText}</button>
          </Link>
          <div className="absolute right-[10%] bottom-[5%] w-[300px] leading-[1.3] flex flex-col text-[#324d67] sm:bottom-[60px]">
            <h5 className="mb-3 font-bold text-[16px] self-end">
              Description
            </h5>
            <p className="text-[#5f5f5f] font-thin text-end">{heroBanner[0].desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
