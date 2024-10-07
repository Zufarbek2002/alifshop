import React from "react";
import { ButtonType } from "@/types/Button.types";
import { FaBars } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";

const Button = ({ text, icon }: ButtonType) => {
  return (
    <div
      className={`md:flex justify-center items-center gap-2 bg-main-color hover:bg-hover-main-color active:bg-active-main-color px-[14px] py-2 rounded-md cursor-pointer duration-300 font-[500] ${
        icon == "savat" || icon == "ilova" || icon == "katalog"
          ? "flex"
          : "hidden"
      }`}
    >
      {icon == "bar" && <FaBars size="18px" />}
      {icon == "savat" && <MdOutlineShoppingCart size='18px'/>}
      {icon == "katalog" && <AiOutlineAppstore size="18px" />}
      <div className={`text-[12px] ${icon == "bar" && "hidden lg:block"}`}>{text}</div>
    </div>
  );
};

export default Button;
