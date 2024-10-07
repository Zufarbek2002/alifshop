"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import CartBox from "@/components/productCart";
import { DataType } from "@/types/data.types";
import useDataStore from "@/store/data/dataStore";
import Link from "next/link";

const Fragrances = () => {
  const { loading, data, error, fetchData } = useDataStore();
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="">
      <div className="flex items-center justify-between md:justify-start gap-4">
        <div className="font-semibold text-2xl">Fragrances</div>
        <Link href="/categories/fragrances" className="hidden md:block text-[#2A8BE7] text-sm text-[17px] font-semibold">
          {"Hammasini ko'rish >"}
        </Link>
        <Link href="/categories/fragrances" className="block md:hidden text-[#2A8BE7] text-sm font-semibold">
          {"Hammasi >"}
        </Link>
      </div>
      {loading && <h1>Loading...</h1>}
      <div className="flex gap-8 overflow-x-scroll no-scrollbar overflow-hidden lg:overflow-auto py-4">
        {data?.map((data: DataType) => {
          if (data.category == "fragrances") {
            return (
              <div key={data.id}>
                <CartBox data={data} />
              </div>
            );
          }
        })}
      </div>
      {error && <h1>{error}</h1>}
    </div>
  );
};

export default Fragrances;
