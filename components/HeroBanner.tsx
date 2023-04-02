import React from "react";
import Link from "next/link";

type Props = {};

const HeroBanner = (props: Props): JSX.Element => {
  return (
    <div className="py-[100px] px-[40px] bg-[#dcdcdc] rounded-[15px] relative h-[500px] leading-[0.9] w-full sm:h-[560px] sm:leading-[13px]">
      <div>
        <p className="text-[20px]">SMALL TEXT</p>
        <h3 className="text-[4rem] mt-1 sm:text-[40px]">MID TEXT</h3>
        <img src="" alt="headphones" className="absolute top-0 right-[20%] w-[450px] h-[450px]" />

        <div>
          <Link href="/product/ID">
            <button type="button" className="rounded-[15px] py-[10px] px-[16px] bg-[#f02d34] text-white border-none mt-10 text-lg font-medium cursor-pointer z-[10000] sm:mt-[90px] sm:z-[10000]">BUTTON</button>
          </Link>
          <div className="absolute right-[10%] bottom-[5%] w-[300px] leading-[1.3] flex flex-col text-[#324d67] sm:bottom-[60px]">
            <h5 className="mb-3 font-bold text-[16px] self-end">
              Description
            </h5>
            <p className="text-[#5f5f5f] font-thin text-end">DESCRIPTION</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
