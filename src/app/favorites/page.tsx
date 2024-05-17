"use client"
import React from "react";
import { DataType } from "@/types/data.types";
import CartBox from "@/components/productCart";

const Favorites = () => {
  const data = JSON.parse(`${localStorage.getItem("like")}`) || []
  return <div className="flex flex-col gap-y-5">
    <div className="text-3xl font-semibold">Saralanganlar</div>
    <div className="flex items-center flex-wrap gap-10 sm:justify-start justify-center">
      {
        data.length>0 && data?.map((data: DataType)=>(
          <div className="" key={data.id}>
            <CartBox data={data} />
          </div>
        ))
      }
    </div>
  </div>;
};

export default Favorites;
