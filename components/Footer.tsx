import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

type Props = {};

const Footer = (props: Props): JSX.Element => {
  return (
    <div className="footer-container py-[30px] px-[10px] mt-[20px] text-[#324d67] font-bold flex flex-col items-center justify-center gap-[10px]">
      <p>2022 JSM Headphones All rights reserved</p>
      <p className="icons text-[30px] flex gap-[10px]">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
