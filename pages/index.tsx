import product from "@/sanity_ecommerce/schemas/product";
import React from "react";
import { Product, FooterBanner, HeroBanner } from "@/components";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="text-center text-[#324d67] my-[40px] mx-0">
        <h2 className="text-[40px] font-bold">Best selling products</h2>
        <p className="text-[16px] font-extralight">
          Speakers of many variations
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-[15px] mt-5 w-full">{["Product 1", "Product 2"].map((product) => product)}</div>
      <FooterBanner />
    </>
  );
};

export default Home;
