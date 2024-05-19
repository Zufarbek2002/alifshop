"use client"
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import Button from "@/components/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [search, setSearch] = useState('')

  return (
    <header className="container mx-auto px-10 py-4">
      <div className="flex justify-between gap-2 items-center">
        <div className="hidden md:block flex-shrink-0">
          <Link href="/">
            <Image src={logo} alt="Logo image" />
          </Link>
        </div>
        <div className="w-[200px]">
          <Button text="Tovarlar katalogi" icon="bar" />
        </div>
        <div className="flex justify-between border-2 items-center border-main-color rounded-md w-full lg:max-w-[300px] xl:max-w-[453px]">
          <input
            type="text"
            className="mx-3 my-2 mb-2.5 outline-none w-full"
            placeholder="Tovarlarni izlash"
            onChange={(e)=>setSearch(e.target.value)}
          />
          <Link
          href={`/search?q=${search}`}
            className="bg-main-color hover:bg-hover-main-color active:bg-active-main-color cursor-pointer py-2.5 px-[14px]"
          >
            <IoSearch size="24px" />
          </Link>
        </div>
        <Link
          href="/cart"
          className="hidden md:flex flex-col items-center hover:text-main-color"
        >
          <MdOutlineShoppingCart size="24px" className="" />
          <span className="text-black text-xs mt-2">Savat</span>
        </Link>
        <Link
          href="/favorites"
          className="hidden lg:flex flex-col items-center hover:text-main-color"
        >
          <FaRegHeart size="24px" className="" />
          <span className="text-black text-xs mt-2">Saralanganlar</span>
        </Link>
        <button className="hidden sm:block font-semibold border-2 border-main-color rounded-lg px-5 py-3 cursor-pointer hover:bg-hover-main-color duration-300">
          Kirish
        </button>
        <div className="hidden md:flex gap-2">
          <Link
            href="/ru"
            className="text-[#A5B1BB] active:text-black hover:text-[#6f767c]"
          >
            РУС
          </Link>
          <span className="text-[#A5B1BB]">/</span>
          <Link href="/uz">UZB</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
