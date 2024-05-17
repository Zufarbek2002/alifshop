import React from "react";
import Image from "next/image";
import { qr, gallery, market, phone, store } from "./images";
import Link from "next/link";
import Button from "@/components/button";

const Adverticing = () => {
  return (
    <div className="mt-16 bg-gray-50 ">
      <div className="container mx-auto px-10 flex flex-col sm:flex-row items-center justify-between py-10">
        <div className="w-[280px] relative flex-shrink-0">
          <div className="absolute -top-28 sm:-top-[198.5px] bottom-0">
            <Image src={phone} alt="phone" height={320} width={500} />
          </div>
        </div>
        <div className="flex flex-col gap-y-3 max-w-md sm:pt-2 pt-[220px]">
          <div className="text-2xl font-medium md:w-2/3">
            Ajoyib takliflar har doim yoningizda
          </div>
          <div className="text-md text-grey-600">
            alif shop ilovasi orqali buyurtma qiling, va qulay takliflar haqida
            hammadan tez biling
          </div>
          <div className="hidden lg:flex gap-2">
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
          <div className="block lg:hidden">
            <Button text="ilovani oching" icon="ilova" />
          </div>
        </div>
        <div className="hidden lg:flex flex-col gap-y-2 text-center items-center">
          <div className="">
            <Image src={qr} alt="qr-code" />
          </div>
          <div className="text-sm w-1/2">
            Yuklab olish uchun kamerangizni QR kodga qarating
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adverticing;
