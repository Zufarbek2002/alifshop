import Image from "next/image";
import Link from "next/link";
import React from "react";
import facebook from "@/assets/socialMedia/facebook.png";
import instagram from "@/assets/socialMedia/instagram.png";
import ok from "@/assets/socialMedia/ok.png";
import telegram from "@/assets/socialMedia/telegram.png";
import tiktok from "@/assets/socialMedia/tiktok.png";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container mx-auto px-10">
        <div className="grid sm:grid-cols-2 py-10 gap-y-7 lg:grid-cols-4">
          <div className="">
            <div className="text-[#5D6D7D]">Hujjatlar</div>
            <ul className="text-white mt-4 flex flex-col gap-4">
              <li>
                <Link href="/">Sotish uchun umumiy shartlar</Link>
              </li>
              <li>
                <Link href="/">Ofertalar arxivi</Link>
              </li>
              <li>
                <Link href="/">Nizom</Link>
              </li>
              <li>
                <Link href="/">Guvohnoma</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <div className="text-[#5D6D7D]">Servis</div>
            <ul className="text-white mt-4 flex flex-col gap-4">
              <li>
                <Link href="/">Namoz vaqti</Link>
              </li>
              <li>
                <Link href="/">{"Muddatli to'lov islomda"}</Link>
              </li>
              <li>
                <Link href="/">alif shopda soting!</Link>
              </li>
              <li>
                <Link href="/">Qaytarish</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <div className="text-[#5D6D7D]">Tovarlar katalogi</div>
            <ul className="text-white mt-4 flex flex-col gap-4">
              <li>
                <Link href="/">Smartfonlar va telefonlar</Link>
              </li>
              <li>
                <Link href="/">Gadjetlar</Link>
              </li>
              <li>
                <Link href="/">Smartfonlar uchun aksessuarlar</Link>
              </li>
              <li>
                <Link href="/">Tegishli tovarlar</Link>
              </li>
              <li>
                <Link href="/">Soat va aksessuarlar</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <div className="text-[#5D6D7D]">
              Biz ijtimoiy axborot vositalarida
            </div>
            <ul className="flex gap-4 mt-4">
              <li>
                <Link href="/">
                  <Image src={instagram} alt="Instagram" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Image src={facebook} alt="Facebook" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Image src={telegram} alt="Telegram" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Image src={ok} alt="Ok" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Image src={tiktok} alt="Tik-tok" />
                </Link>
              </li>
            </ul>
            <div className="text-[#5D6D7D] mt-10">Axborot xizmati</div>
            <div className="text-white flex flex-col gap-2 mt-4">
              <Link href="/">{"@alifshop_uz >"}</Link>
              <Link href="/" className="text-white">
                {"+998 99 999 99 99 >"}
              </Link>
            </div>
          </div>
        </div>
        <div className="py-10 border-t-[1px] border-[#3D434D] text-[#5D6D7D]">
          2024 &copy; alifshop.uz
        </div>
      </div>
    </footer>
  );
};

export default Footer;
