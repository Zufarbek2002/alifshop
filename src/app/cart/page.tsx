"use client";
import { DataType } from "@/types/data.types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

const Cart = () => {
  const [cartData, setCartData] = useState<DataType[]>([]);
  const [sum, setSum] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const data = JSON.parse(localStorage.getItem("cart") || "[]") as DataType[];
    setCartData(data);
    calculateSum(data);
  }, []);

  const calculateSum = (data: DataType[]) => {
    const newSum = data.reduce((acc, item) => acc + item.price, 0);
    setSum(newSum);
  };

  const handleDelete = (id: number) => {
    const newData = cartData.filter((item) => item.id !== id);
    setCartData(newData);
    localStorage.setItem("cart", JSON.stringify(newData));
    calculateSum(newData);
  };

   if (!isClient) {
     return null; // or a loading spinner
   }

  return (
    <>
      {cartData.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-5">
          <div className="col-span-2">
            <div className="flex items-end gap-2 border-b py-4">
              <div className="text-2xl md:text-3xl font-medium pr-2">Savat</div>
              <span className="text-gray-300 text-sm pb-0.5">
                {cartData.length} tovarlarni
              </span>
            </div>
            <div className="">
              {cartData?.map((data: DataType) => (
                <div className="flex gap-3 py-4 border-b" key={data.id}>
                  <div className="">
                    <Image
                      src={data.thumbnail}
                      alt={data.title}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-semibold">{data.title}</div>
                    <div className="text-gray-300 text-sm">
                      Narx: <span className="text-gray-500">{data.price}$</span>
                    </div>
                    <div className="text-gray-300 text-sm">
                      Brand: <span className="text-gray-500">{data.brand}</span>
                    </div>
                    <p className="text-gray-500 text-xs">
                      {
                        "Yetkazib berish muddati: Toshkent bo'ylab 1 kun ichida. Respublika bo'ylab 3 kungacha"
                      }
                    </p>
                    <div>
                      <button
                        onClick={() => handleDelete(data.id)}
                        className="text-xs text-gray-400 flex gap-1 items-center"
                      >
                        <FaRegTrashCan size="16px" />
                        {"O'chirish"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className=" bg-gray-100 rounded-lg px-4 py-5 md:mt-[70px]">
              <div className="md:border-b pb-4 flex flex-col gap-2">
                <div className="flex justify-between">
                  <h3 className="text-xl font-medium">Jami</h3>
                  <h3 className="text-xl font-medium">{sum.toFixed(2)}$</h3>
                </div>
                <div className="flex justify-between">
                  <p className="text-xs text-gray-500">Tovarlar soni</p>
                  <p className="text-xs text-gray-500 ">
                    {cartData.length} dona
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-xs text-gray-500">Yetkazib berish</p>
                  <p className="text-xs text-green-500">Bepul</p>
                </div>
              </div>
              <div className="hidden md:block py-4">
                <h4 className="text-xs text-green-500">
                  Bepul yetkazib berish
                </h4>
                <span className="text-[10px] text-gray-500">
                  {`Yetkazib berish: Toshkent bo'ylab 24 soat ichida, Respublika bo'ylab 3
          kungacha`}
                </span>
              </div>
              <div className="flex flex-col gap-2 fixed left-2 right-2 bottom-16 z-10 w-[97%] md:static">
                <button className="bg-main-color hover:bg-hover-main-color font-medium text-sm rounded-lg py-1.5 md:py-3 w-full">{`Muddatli to'lovga olish`}</button>
                <button className="font-medium text-sm rounded-lg py-1.5 md:py-3 w-full border-2 bg-white hover:bg-gray-50">
                  Karta orqali sotib olish
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center flex flex-col gap-2 items-center">
          <h1 className="font-medium text-xl">{"Savat hozircha bo'sh"}</h1>
          <p className="text-sm text-gray-500 w-full sm:w-1/2">
            {
              "Mahsulotlarni topish uchun katalogni ko'ring yoki qidiruvdan foydalaning"
            }
          </p>
          <Link
            href="/categories"
            className="bg-main-color hover:bg-hover-main-color font-medium text-sm rounded-lg py-1.5 md:py-3 w-full md:w-1/2"
          >{`Katalogga o'tish`}</Link>
          <Link
            href="/"
            className="font-medium text-sm rounded-lg py-1.5 md:py-3 w-full border-2 bg-white hover:bg-gray-50 md:w-1/2"
          >
            Asosiy ekranga
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
