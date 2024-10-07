"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import Button from "@/components/button";
import logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";

const Header = () => {
  const [search, setSearch] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const router = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-1/2 -translate-x-1/2 z-10 bg-white w-full ${
          isScrolled ? "shadow-2xl" : ""
        }`}
      >
        <header className="container mx-auto px-2 md:px-10">
          <div className="flex justify-between gap-2 items-center w-full py-3">
            <div className="hidden md:block flex-shrink-0 w-24">
              <Link href="/">
                <Image src={logo} alt="Logo image" />
              </Link>
            </div>
            <div className="hidden md:block w-[160px]">
              <Button text="Tovarlar katalogi" icon="bar" />
            </div>
            <div className="flex justify-between border-2 items-center md:border-main-color border-[#E3E8EA] rounded-md w-screen max-w-screen lg:max-w-[300px] xl:max-w-[453px]">
              <input
                type="text"
                className="mx-3 my-[4px] outline-none w-full text-[12px]"
                placeholder="Tovarlarni izlash"
                onChange={(e) => setSearch(e.target.value)}
              />
              <Link
                href={`/search?q=${search}`}
                className="bg:transparent md:bg-main-color md:hover:bg-hover-main-color md:active:bg-active-main-color py-[4px] cursor-pointer px-[12px]"
              >
                <IoSearch className="text-main-color md:text-black text-xl md:text-[24px]" />
              </Link>
            </div>
            <Link
              href="/cart"
              className="hidden md:flex flex-col items-center hover:text-main-color"
            >
              <MdOutlineShoppingCart size="20px" className="" />
              <span className="text-black text-xs">Savat</span>
            </Link>
            <Link
              href="/favorites"
              className="hidden lg:flex flex-col items-center hover:text-main-color"
            >
              <FaRegHeart size="20px" className="" />
              <span className="text-black text-xs">Saralanganlar</span>
            </Link>
            <button className="hidden md:block font-[500] border-2 border-main-color rounded-lg px-5 py-2.5 text-xs cursor-pointer hover:bg-hover-main-color duration-300">
              Kirish
            </button>
            <div className="hidden md:flex gap-2 text-sm">
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
      </div>

      <div className="block md:hidden fixed left-0 right-0 bottom-0 w-full bg-white z-10 border ">
        <div className="container mx-auto flex justify-between items-center py-2 px-5">
          <Link href="/" className="flex flex-col items-center">
            <FiHome
              size="20px"
              className={`${
                router == "/" ? "text-main-color" : "text-[#A7B3BD]"
              }`}
            />
            <span
              className={`${
                router == "/" ? "text-black" : 'text-[#A7B3BD]'
              } text-xs`}
            >
              Home
            </span>
          </Link>
          <Link href="/categories" className="flex flex-col items-center">
            <BiCategory
              size="20px"
              className={`${
                router == "/categories" ? "text-main-color" : "text-[#A7B3BD]"
              }`}
            />
            <span className={`${
                router == "/categories" ? "text-black" : 'text-[#A7B3BD]'
              } text-xs`}>Katalog</span>
          </Link>
          <Link href="/cart" className="flex flex-col items-center">
            <MdOutlineShoppingCart
              size="20px"
              className={`${
                router == "/cart" ? "text-main-color" : "text-[#A7B3BD]"
              }`}
            />
            <span className={`${
                router == "/cart" ? "text-black" : 'text-[#A7B3BD]'
              } text-xs`}>Savat</span>
          </Link>
          <Link href="/favorites" className="flex flex-col items-center">
            <FaRegHeart
              size="20px"
              className={`${
                router == "/favorites" ? "text-main-color" : "text-[#A7B3BD]"
              }`}
            />
            <span className={`${
                router == "/favorites" ? "text-black" : 'text-[#A7B3BD]'
              } text-xs`}>Saralanganlar</span>
          </Link>
          <Link href="/profil" className="flex flex-col items-center">
            <FaRegUser
              size="20px"
              className={`${
                router == "/profil" ? "text-main-color" : "text-[#A7B3BD]"
              }`}
            />
            <span className={`${
                router == "/profil" ? "text-black" : 'text-[#A7B3BD]'
              } text-xs`}>Profil</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
