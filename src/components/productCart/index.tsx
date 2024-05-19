import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../button";
import { DataType } from "@/types/data.types";
import { PiHeartStraightDuotone } from "react-icons/pi";
import { FaHeart } from "react-icons/fa6";

const CartBox = ({ data }: { data: DataType }) => {
  const [cartBtn, setCartBtn] = useState(false)
  const [likeBtn, setLikeBtn] = useState(false)
  const handleButton =(data:DataType)=>{
    const cart = JSON.parse(`${localStorage.getItem("cart")}`) || [];
    const newCart = cart && [...cart, data];
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCartBtn(true)
  }
  const handleLike =(data:DataType)=>{
    const cart = JSON.parse(`${localStorage.getItem("like")}`) || [];
    const newCart = cart && [...cart, data];
    localStorage.setItem("like", JSON.stringify(newCart));
    setLikeBtn(true)
  }
  return (
    <div className="w-full min-w-[100px] max-w-[200px] flex flex-col gap-y-2">
      <div className="relative">
        <Link href={`/product-details/${data.id}`} className="flex flex-col gap-y-1">
          <div className="relative w-full h-[152px] bg-[#F4F6F7] rounded-lg overflow-hidden">
            <Image
              src={data.thumbnail}
              alt={data.title}
              width={161}
              height={152}
              style={{ width: "auto", height: "152px", objectFit: "cover" }}
            />
            <div className="absolute bg-[#FF4444] text-white rounded-xl font-semibold bottom-1.5 px-2.5 py-0.5">
              -{data.discountPercentage.toFixed(0)}%
            </div>
          </div>
          <div className="line-clamp-2 text-xs font-gray-900 mt-1">{data.description}</div>
          <div className="line-through text-[#A5B1BB]">{data.price}$</div>
          <div className="text-[#FF4444] text-base">
            {(
              data.price -
              (data.price * data.discountPercentage) / 100
            ).toFixed(2)}
            $
          </div>
        </Link>
        <div
          className="absolute top-2 right-2 bg-white rounded-xl p-1"
          onClick={() => handleLike(data)}
        >
          {likeBtn ? (
            <FaHeart color="red" size="24px" />
          ) : (
            <PiHeartStraightDuotone size="24px" cursor="pointer" />
          )}
        </div>
      </div>
      <div className="w-[120px]">
        {cartBtn ? (
          <div className="flex border-2 border-gray-300 rounded-md justify-between items-center p-2">
            <button>-</button>
            <div className="">1</div>
            <button>+</button>
          </div>
        ) : (
          <button onClick={() => handleButton(data)}>
            <Button text="Savatga" icon="savat" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CartBox;
