import { ButtonType } from "@/types/Button.types";
import React from "react";
import { FaBars } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";

const Button = ({ text, icon }: ButtonType) => {
  return (
    <div
      className={`md:flex justify-center items-center gap-2 bg-main-color hover:bg-hover-main-color active:bg-active-main-color px-[14px] py-2.5 rounded-lg cursor-pointer duration-300 font-semibold ${
        icon == "savat" || icon == "ilova" ? "flex" : "hidden"
      }`}
    >
      {icon == "bar" && <FaBars />}
      {icon == "savat" && <MdOutlineShoppingCart />}
      <div className={`${icon == "bar" && "hidden lg:block"}`}>{text}</div>
    </div>
  );
};

export default Button;
