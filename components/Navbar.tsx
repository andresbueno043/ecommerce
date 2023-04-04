import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

type Props = {};

const Navbar = (props: Props): JSX.Element => {
  return (
    <div className="flex justify-between items-center h-full my-[6px] mx-[18px] relative">
      <p className="text-gray-500 text-[18px]">
        <Link href="/">JSM Headphones</Link>
      </p>

      <button
        type="button"
        className="text-gray-500 text-[25px] cursor-pointer relative transition duration-400 ease-in-out border-none bg-transparent mt-0"
      >
        <AiOutlineShopping />
        <span className="absolute top-0 right-0 text-[12px] font-bold text-white bg-red-600 w-[18px] h-[18px] rounded-full flex items-center justify-center">
          1
        </span>
      </button>

      {/* {showCart && <Cart />} */}
    </div>
  );
};

export default Navbar;
