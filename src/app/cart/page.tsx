"use client"
import { DataType } from "@/types/data.types";
import Image from "next/image";
import React from "react";

const Cart = () => {
  const data = JSON.parse(`${localStorage.getItem("cart")}`) || [];

  return <div>
    <div className="flex gap-2">
      <div className="">Savat</div>
      <div className="">{data.length} tovarlarni</div>
    </div>
    <div className="">
      {
        data && data?.map((data: DataType)=>(
          <div className="flex gap-3 py-4 border-b" key={data.id}>
            <div className="">
              <Image src={data.thumbnail} alt={data.title} width={100} height={100}/>
            </div>
            <div className="">
              <div className="">{data.title}</div>
              <div className="">Narx: {data.price}$</div>
            </div>
          </div>
        ))
      }
    </div>
  </div>;
};

export default Cart;
