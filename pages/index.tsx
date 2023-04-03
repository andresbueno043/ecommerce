import product from "@/sanity_ecommerce/schemas/product";
import React from "react";
import { Product, FooterBanner, HeroBanner } from "@/components";
import { client } from "@/lib/client";
import { type } from "os";

type Props = {
  products: Product[],
  bannerData: BannerData;
}

const Home = ({ products, bannerData }: Props) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData}/>
      <div className="text-center text-[#324d67] my-[40px] mx-0">
        <h2 className="text-[40px] font-bold">Best selling products</h2>
        <p className="text-[16px] font-extralight">
          Speakers of many variations
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-[15px] mt-5 w-full">
        {products?.map((product) => (<Product key={product._id} product={product}/>))}
      </div>
      <FooterBanner footerBanner={bannerData} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query: string = '*[_type=="product"]';
  const products = await client.fetch(query);

  const bannerQuery: string = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerData,
    },
  };
};

export default Home;
