import React, { useEffect } from "react";
import Link from "next/link";
import { urlFor } from "@/lib/client";

type Props = {
  product: Product;
};

const Product = ({
  product: { image, name, slug, price },
}: Props): JSX.Element => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card cursor-pointer transform transition-transform duration-500 ease-linear text-blue-900 hover:scale-110">
          <img
            src={urlFor(image && image[0]).url()}
            width={250}
            height={250}
            className="rounded-lg bg-gray-200 transform scale-100 transition-transform duration-500 ease-linear"
            alt=""
          />
          <p className="font-medium">{name}</p>
          <p className="product-price font-extrabold mt-0 text-black">
            ${price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
