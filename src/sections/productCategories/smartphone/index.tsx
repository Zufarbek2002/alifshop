"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import useSmartphoneStore from "@/store/data/categories/smartphone/smartphoneStore";
import { DataType } from "@/types/data.types";
import CartBox from "@/components/productCart";

const Smartphones = () => {
  const { loading, data, error, fetchData } = useSmartphoneStore();
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      <div className="flex items-center gap-4">
        <div className="font-semibold text-3xl">Smartphones</div>
        <div className="text-[#2A8BE7] text-[17px] font-semibold">
          {"Hammasini ko'rish >"}
        </div>
      </div>
      {loading && <h1>Loading...</h1>}
      <div className="flex gap-8 overflow-x-scroll  lg:overflow-auto py-4">
        {data?.map((data: DataType) => (
          <div key={data.id}>
            <CartBox data={data} />
          </div>
        ))}
      </div>
      {error && <h1>{error}</h1>}
    </div>
  );
};

export default Smartphones;
