import React from "react";
import Link from "next/link";
import { urlFor } from "@/lib/client";

type Props = {
  footerBanner: BannerData;
};

const FooterBanner = ({ footerBanner }: Props): JSX.Element => {
  return (
    <div className="footer-banner-container px-4 py-10 bg-red-600 rounded-lg relative h-[400px] leading-none text-white w-full mt-24 sm:h-[560px] sm:mt-[80px]">
      <div className="banner-desc flex justify-between">
        <div className="left">
          <p className="m-4 sm:m-4
">{footerBanner[0]?.discount}</p>
          <h3
            className="sm:font-weight-900 sm:text-5xl sm:ml-5
            font-extrabold text-6xl lg:text-7xl ml-6 lg:ml-0
"
          >
            {footerBanner[0]?.largeText1}
          </h3>
          <h3
            className="font-extrabold text-6xl lg:text-7xl ml-6 lg:ml-0
"
          >
            {footerBanner[0]?.largeText2}
          </h3>
          <p className="m-4 sm:m-4
">{footerBanner[0]?.saleTime}</p>
        </div>
        <div className="right leading-[1.4]">
          <p className="text-base sm:text-2xl">{footerBanner[0]?.smallText}</p>
          <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl">{footerBanner[0]?.midText}</h3>
          <p className="text-base">{footerBanner[0]?.desc}</p>
          <Link href={`/product/${footerBanner[0]?.product}`}>
            <button type="button" className="rounded-lg px-4 py-2 bg-white text-red-500 border-none mt-4 text-base font-medium cursor-pointer">{footerBanner[0]?.buttonText}</button>
          </Link>
        </div>

        <img
          src={urlFor(footerBanner[0]?.image).url()}
          className="footer-banner-image sm:w-77 sm:left-30 sm:top-6 sm:h-56 absolute top-[-25%] left-[25%]"
        />
      </div>
    </div>
  );
};

export default FooterBanner;
