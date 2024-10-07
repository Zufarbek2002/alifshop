"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import useSmartphoneStore from "@/store/data/categories/smartphone/smartphoneStore";
import { DataType } from "@/types/data.types";
import CartBox from "@/components/productCart";
import Link from "next/link";

const Smartphones = () => {
  const { loading, data, error, fetchData } = useSmartphoneStore();
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      <div className="flex items-center justify-between md:justify-start gap-4">
        <div className="font-semibold text-2xl">Smartphones</div>
        <Link href="/categories/smartphones" className="hidden md:block text-[#2A8BE7] text-sm font-semibold">
          {"Hammasini ko'rish >"}
        </Link>
        <Link href="/categories/smartphones" className="block md:hidden text-[#2A8BE7] text-sm font-semibold">
          {"Hammasi >"}
        </Link>
      </div>
      {loading && <h1>Loading...</h1>}
      <div className="flex gap-8 overflow-x-scroll no-scrollbar lg:overflow-auto py-4">
        {data?.slice(0,5).map((data: DataType) => (
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
