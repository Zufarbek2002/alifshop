"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import CartBox from "@/components/productCart";
import useSearchData from "@/store/searchData/searchData";
import { DataType } from "@/types/data.types";

const ClientSideSearchParams = dynamic(
  () =>
    import("@/components/serchComp/index").then(
      (mod) => mod.ClientSideSearchParams
    ),
  { ssr: false }
);

const Search = () => {
  const { data, fetchData } = useSearchData();
  const searchParams = useSearchParams();
  const search = searchParams.get("q") || "";

  useEffect(() => {
    if (search) {
      fetchData(search);
    }
  }, [search, fetchData]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          Qidiruv natijalari: <span className="font-bold">{search}</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2">
          {data.length} ta mahsulot topildi
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product: DataType) => (
          <CartBox key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Search;
