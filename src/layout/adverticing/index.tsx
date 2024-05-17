import React from "react";
import Image from "next/image";
import { qr, gallery, market, phone, store } from "./images";
import Link from "next/link";

const Adverticing = () => {
  return (
    <div className="flex items-center bg-gray-50">
      <div className="w-80 relative">
        <div className="absolute bottom-0">
            <Image src={phone} alt="phone"/>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 max-w-md">
        <div className="text-2xl font-medium md:w-2/3">Ajoyib takliflar har doim yoningizda</div>
        <div className="text-md text-grey-600">
          alif shop ilovasi orqali buyurtma qiling, va qulay takliflar haqida
          hammadan tez biling
        </div>
        <div className="hidding lg:flex gap-2">
          <Link href="/">
            <Image src={market} alt="play-market" />
          </Link>
          <Link href="/">
            <Image src={store} alt="app-store" />
          </Link>
          <Link href="/">
            <Image src={gallery} alt="app-gallery" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 text-center items-center">
        <div className="">
          <Image src={qr} alt="qr-code" />
        </div>
        <div className="text-sm w-1/2">
          Yuklab olish uchun kamerangizni QR kodga qarating
        </div>
      </div>
    </div>
  );
};

export default Adverticing;
